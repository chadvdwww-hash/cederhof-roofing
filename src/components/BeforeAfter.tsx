import { useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export default function BeforeAfter({ before, after, beforeAlt, afterAlt }: Props) {
  const [pos, setPos] = useState(50);
  const [reduced, setReduced] = useState(false);
  const wrap = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  function setFromClientX(clientX: number) {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }

  if (reduced) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        <figure>
          <img
            src={before}
            alt={beforeAlt}
            loading="lazy"
            className="w-full rounded-lg object-cover"
          />
          <figcaption className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground/60">
            Before
          </figcaption>
        </figure>
        <figure>
          <img
            src={after}
            alt={afterAlt}
            loading="lazy"
            className="w-full rounded-lg object-cover"
          />
          <figcaption className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground/60">
            After
          </figcaption>
        </figure>
      </div>
    );
  }

  return (
    <div
      ref={wrap}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-lg cursor-col-resize touch-none"
      role="img"
      aria-label={`Before and after: ${afterAlt}`}
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onMouseMove={(e) => {
        if (!dragging.current) return;
        setFromClientX(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromClientX(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        if (!dragging.current) return;
        setFromClientX(e.touches[0].clientX);
      }}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / Math.max(pos, 1)) * 100}%` }}
        />
      </div>
      <div
        className="absolute inset-y-0 w-0.5 bg-accent/90 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-accent text-on-primary shadow-xl">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M9 6L3 12L9 18M15 6L21 12L15 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-primary-dark/60 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-on-dark backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-primary-dark/60 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-on-dark backdrop-blur">
        After
      </span>
    </div>
  );
}
