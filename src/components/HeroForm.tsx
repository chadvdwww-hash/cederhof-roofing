import { useState } from "react";

type State = "idle" | "sending" | "success" | "error";

const options = [
  "Full re-roofing",
  "Slate roofing",
  "Clay tile roofing",
  "Concrete tile roofing",
  "Waterproofing / flashing",
  "Not sure, I need advice",
];

export default function HeroForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string | null)?.trim() ?? "";
    const phone = (data.get("phone") as string | null)?.trim() ?? "";
    const service = (data.get("service") as string | null) ?? "";

    if (name.length < 2) {
      setError("Please enter your name");
      return;
    }
    if (phone.replace(/\D/g, "").length < 9) {
      setError("Please enter a valid phone number");
      return;
    }
    if (!service) {
      setError("Please pick a service");
      return;
    }

    // email placeholder for backend; hero form skips it
    data.set("email", "hero-form@cederhofroofing.co.za");
    data.set("message", `Hero quick-quote: ${service}. Phone: ${phone}.`);

    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setState("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent/40 bg-on-dark/95 p-6 text-foreground shadow-2xl"
      >
        <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-accent text-on-primary">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none">
            <path d="M4 12L10 18L20 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-black">Got it. We'll call within 48 hours.</h3>
        <p className="mt-2 text-sm text-foreground/70">
          Keep an eye on WhatsApp too. For anything urgent, message us directly at 082 654 3210.
        </p>
      </div>
    );
  }

  const sending = state === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-on-dark/15 bg-primary-dark/85 p-6 text-on-dark shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md md:p-7"
      aria-label="Quick quote request"
    >
      <p className="mb-1 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
        Quick quote
      </p>
      <h2
        className="mb-5 font-heading text-2xl font-black leading-[1.05] tracking-[-0.01em] text-on-dark"
      >
        Free on-site assessment in 48 hours.
      </h2>

      <div className="grid gap-3">
        <label className="sr-only" htmlFor="hero-name">Your name</label>
        <input
          id="hero-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          disabled={sending}
          className="w-full rounded-md border border-on-dark/20 bg-on-dark/5 px-4 py-3 text-on-dark placeholder:text-on-dark/50 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/40 disabled:opacity-60"
        />

        <label className="sr-only" htmlFor="hero-phone">Phone number</label>
        <input
          id="hero-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Phone, e.g. 082 123 4567"
          required
          disabled={sending}
          className="w-full rounded-md border border-on-dark/20 bg-on-dark/5 px-4 py-3 text-on-dark placeholder:text-on-dark/50 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/40 disabled:opacity-60"
        />

        <label className="sr-only" htmlFor="hero-service">Service needed</label>
        <select
          id="hero-service"
          name="service"
          required
          disabled={sending}
          defaultValue=""
          className="w-full rounded-md border border-on-dark/20 bg-on-dark/5 px-4 py-3 text-on-dark outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/40 disabled:opacity-60"
        >
          <option value="" disabled className="text-primary-dark">
            What do you need?
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-primary-dark">
              {o}
            </option>
          ))}
        </select>

        {error && (
          <p role="alert" className="text-sm text-[color:#f87171]">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-4 font-heading text-base font-bold uppercase tracking-[0.08em] text-on-primary transition-all duration-200 hover:bg-accent-hover active:scale-[0.98] disabled:opacity-70 cursor-pointer"
        >
          {sending ? (
            <>
              <svg className="animate-spin" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.25" />
                <path d="M3 12a9 9 0 019-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
              Sending
            </>
          ) : (
            <>
              Get my free quote
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </>
          )}
        </button>

        <p className="text-[0.7rem] text-on-dark/50">
          We respond inside 48 hours. No obligation, no pushy sales.
        </p>
      </div>
    </form>
  );
}
