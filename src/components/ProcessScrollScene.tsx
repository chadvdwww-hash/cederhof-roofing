import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = { n: string; title: string; body: string };

type Props = {
  steps: Step[];
  images: { src: string; alt: string }[];
};

export default function ProcessScrollScene({ steps, images }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const watermarkRef = useRef<HTMLSpanElement | null>(null);
  const smallNumberRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLParagraphElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    setReady(true);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (!ready || reduced) return;
    const el = rootRef.current;
    const pin = pinRef.current;
    if (!el || !pin) return;

    const ctx = gsap.context(() => {
      const total = steps.length;

      gsap.set(imageRefs.current, { opacity: 0 });
      if (imageRefs.current[0]) gsap.set(imageRefs.current[0], { opacity: 1 });

      let activeStep = 0;
      const setActive = (index: number) => {
        const clamped = Math.max(0, Math.min(total - 1, index));
        if (clamped === activeStep) return;
        activeStep = clamped;

        const displayNumber = String(clamped + 1).padStart(2, "0");
        if (watermarkRef.current) {
          gsap.fromTo(
            watermarkRef.current,
            { scale: 0.92, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out", overwrite: true }
          );
          watermarkRef.current.textContent = displayNumber;
        }
        if (smallNumberRef.current) {
          smallNumberRef.current.textContent = displayNumber;
        }
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", overwrite: true }
          );
          titleRef.current.textContent = steps[clamped].title;
        }
        if (bodyRef.current) {
          gsap.fromTo(
            bodyRef.current,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65, ease: "power2.out", delay: 0.05, overwrite: true }
          );
          bodyRef.current.textContent = steps[clamped].body;
        }
        if (labelRef.current) {
          labelRef.current.textContent = `Step ${clamped + 1} of ${total}`;
        }

        dotRefs.current.forEach((dot, i) => {
          if (!dot) return;
          dot.className =
            "h-2 w-8 rounded-full transition-colors duration-300 " +
            (i <= clamped ? "bg-accent" : "bg-on-dark/15");
        });
      };

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${(total - 1) * 100}%`,
          pin: pin,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          snap: {
            snapTo: (value) => Math.round(value * (total - 1)) / (total - 1),
            duration: { min: 0.25, max: 0.6 },
            delay: 0.05,
            ease: "power2.inOut",
          },
          onUpdate: (self) => {
            const raw = self.progress * (total - 1);
            const index = Math.round(raw);
            setActive(index);
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      for (let i = 0; i < total - 1; i++) {
        masterTl.to(imageRefs.current[i], { opacity: 0, ease: "none" }, i);
        masterTl.to(imageRefs.current[i + 1], { opacity: 1, ease: "none" }, i);
      }
    }, rootRef);

    return () => ctx.revert();
  }, [ready, reduced, steps, images]);

  // Reduced motion fallback, static vertical cards
  if (ready && reduced) {
    return (
      <section className="bg-primary-dark text-on-dark">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-14 max-w-2xl">
            <span className="mb-3 inline-block font-heading text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
              Our process
            </span>
            <h2 className="text-on-dark">From first call to sign-off.</h2>
          </div>
          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="rounded-xl border border-on-dark/10 bg-on-dark/5 p-6 backdrop-blur"
              >
                <div className="mb-4 font-heading text-5xl font-black uppercase tracking-[-0.03em] text-accent">
                  {s.n}
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold uppercase text-on-dark">
                  {s.title}
                </h3>
                <p className="text-sm text-on-dark/70">{s.body}</p>
                <img
                  src={images[i]?.src}
                  alt={images[i]?.alt ?? ""}
                  loading="lazy"
                  decoding="async"
                  className="mt-5 aspect-[4/3] w-full rounded-md object-cover"
                />
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={rootRef}
      className="relative bg-primary-dark text-on-dark"
      aria-label="Our process, scroll to advance"
    >
      <div
        ref={pinRef}
        className="relative flex h-[100dvh] min-h-[640px] flex-col overflow-hidden"
      >
        {/* Image stack */}
        <div className="absolute inset-0">
          {images.map((image, i) => (
            <img
              key={i}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Dark overlay blend */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/70 to-primary-dark/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/25 to-primary-dark/35"
          aria-hidden="true"
        />

        {/* Decorative giant number watermark, absolute so it never squeezes text */}
        <span
          ref={watermarkRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-[-0.02em] bottom-[-0.02em] select-none font-heading text-[clamp(7rem,30vw,18rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-accent sm:bottom-[-0.08em] sm:text-[clamp(11rem,38vw,30rem)] lg:left-[-0.04em] lg:bottom-[-0.12em] lg:text-[clamp(18rem,46vw,52rem)]"
          style={{
            opacity: 0.18,
            mixBlendMode: "screen",
          }}
        >
          01
        </span>

        {/* Progress bar */}
        <div className="absolute left-0 right-0 top-0 z-20 h-[3px] bg-on-dark/10">
          <div
            ref={progressRef}
            className="h-full origin-left bg-accent"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Top band: eyebrow + step dots */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 pt-10 lg:px-10 lg:pt-14">
          <span className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Our process
          </span>
          <div className="flex items-center gap-2" role="presentation">
            {steps.map((s, i) => (
              <span
                key={s.n}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                className={
                  "h-2 w-8 rounded-full transition-colors duration-300 " +
                  (i === 0 ? "bg-accent" : "bg-on-dark/15")
                }
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Content area, right-aligned card with generous width so paragraphs wrap properly */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 items-center px-5 sm:px-6 lg:px-10">
          <div className="ml-auto w-full max-w-[620px]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span
                ref={smallNumberRef}
                className="font-heading text-[0.95rem] font-bold uppercase tracking-[0.28em] text-accent"
                aria-hidden="true"
              >
                01
              </span>
              <span
                ref={labelRef}
                className="font-heading text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-on-dark/55"
              >
                Step 1 of {steps.length}
              </span>
            </div>
            <h2
              ref={titleRef}
              className="mt-5 font-heading font-black uppercase tracking-[-0.02em] text-on-dark"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: 1.05 }}
            >
              {steps[0].title}
            </h2>
            <p
              ref={bodyRef}
              className="mt-6 text-base leading-[1.7] text-on-dark/85 sm:text-lg md:text-xl"
              style={{ maxWidth: "58ch" }}
            >
              {steps[0].body}
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-end justify-between gap-6 px-6 pb-10 lg:px-10 lg:pb-14">
          <span className="hidden font-heading text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-on-dark/45 sm:inline">
            Keep scrolling to see every step
          </span>
          <div className="ml-auto flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-on-dark/55">
            <span>Scroll</span>
            <span className="h-px w-8 bg-on-dark/30" />
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path
                d="M12 5V19M6 13L12 19L18 13"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}