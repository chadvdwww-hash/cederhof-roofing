import { useEffect, useMemo, useState } from "react";

type ProjectItem = {
  id: string;
  src: string;
  alt: string;
  propertyType: string;
  suburb: string;
  material: string;
  service: string;
  date: string;
};

const filters = [
  { key: "all", label: "All" },
  { key: "Slate", label: "Slate" },
  { key: "Clay", label: "Clay tile" },
  { key: "Concrete", label: "Concrete tile" },
  { key: "Torch-on", label: "Waterproofing" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

type Props = { projects: ProjectItem[] };

export default function Gallery({ projects }: Props) {
  const [active, setActive] = useState<FilterKey>("all");
  const [lightbox, setLightbox] = useState<ProjectItem | null>(null);

  const visible = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.material.includes(active));
  }, [projects, active]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by material"
        className="mb-10 flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={active === f.key}
            onClick={() => setActive(f.key)}
            type="button"
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
              active === f.key
                ? "bg-primary text-on-primary"
                : "border border-border bg-background text-foreground/70 hover:border-accent/50 hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setLightbox(p)}
            className={`group relative overflow-hidden rounded-lg border border-border bg-muted text-left transition-all duration-200 hover:border-accent/50 hover:shadow-[0_18px_32px_-22px_rgba(23,23,23,0.35)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background ${i % 5 === 0 ? "sm:col-span-2" : ""}`}
            aria-label={`Open ${p.propertyType} project in ${p.suburb}`}
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="font-heading font-semibold text-foreground">
                {p.propertyType} · {p.suburb}
              </p>
              <p className="mt-1 text-sm text-foreground/70">
                {p.service}, {p.material}
              </p>
              <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground/40">
                {p.date}
              </p>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/92 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.propertyType} project`}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close project view"
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur cursor-pointer hover:bg-white/15"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="aspect-[16/10] w-full rounded-lg object-cover"
            />
            <div className="mt-5 rounded-lg bg-background p-6 text-foreground">
              <p className="font-heading text-xl font-bold">
                {lightbox.propertyType} · {lightbox.suburb}
              </p>
              <p className="mt-2 text-foreground/75">
                {lightbox.service} with {lightbox.material}
              </p>
              <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground/50">
                Completed {lightbox.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
