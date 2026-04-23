import { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

type Props = {
  nav: NavItem[];
  services: NavItem[];
  areas: NavItem[];
};

export default function MobileNav({ nav, services, areas }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="lg:hidden grid h-11 w-11 place-items-center rounded-md border border-border text-foreground hover:bg-muted cursor-pointer touch-manipulation"
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-primary-dark/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-[100dvh] w-[92vw] max-w-sm overflow-y-auto bg-background shadow-xl transition-transform duration-300 ease-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="font-heading text-lg font-bold">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 py-6">
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-3 font-heading text-xl font-bold text-foreground no-underline hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <div className="mb-2 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground/50">
              Services
            </div>
            <ul className="flex flex-col">
              {services.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="block py-2 text-sm text-foreground/80 no-underline hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-2 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground/50">
              Service areas
            </div>
            <ul className="flex flex-col">
              {areas.map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    className="block py-2 text-sm text-foreground/80 no-underline hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/contact/"
            className="mt-2 inline-flex justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-on-primary no-underline hover:bg-accent-hover"
            onClick={() => setOpen(false)}
          >
            Get a free quote
          </a>
        </nav>
      </aside>
    </>
  );
}
