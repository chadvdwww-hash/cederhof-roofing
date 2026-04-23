import { useState } from "react";

type State = "idle" | "sending" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "service" | "message", string>>;

const services = [
  "Not sure yet, I need advice",
  "Slate roofing",
  "Clay tile roofing",
  "Concrete tile roofing",
  "Full re-roofing",
  "Waterproofing / flashing",
  "Emergency leak",
];

const suburbs = [
  "Dainfern",
  "Sandton",
  "Bryanston",
  "Hyde Park",
  "Fourways",
  "Rivonia",
  "Hurlingham",
  "Parkhurst",
  "Other Joburg North",
];

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(data: FormData): FieldErrors {
    const e: FieldErrors = {};
    const name = (data.get("name") as string | null)?.trim();
    const email = (data.get("email") as string | null)?.trim();
    const phone = (data.get("phone") as string | null)?.trim();
    const service = data.get("service") as string | null;
    const message = (data.get("message") as string | null)?.trim();

    if (!name || name.length < 2) e.name = "Please enter your name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email";
    if (!phone || phone.replace(/\D/g, "").length < 9)
      e.phone = "Please enter a valid phone number";
    if (!service) e.service = "Please select a service";
    if (!message || message.length < 10) e.message = "Please describe the work briefly";
    return e;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setState("success");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setSubmitError(msg);
      setState("error");
    }
  }

  function reset() {
    setState("idle");
    setErrors({});
    setSubmitError(null);
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-8 text-foreground"
      >
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-accent/10 text-accent">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none">
            <path d="M4 12L10 18L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mb-2 font-heading text-2xl font-bold">Quote request received</h3>
        <p className="mb-5 max-w-prose text-foreground/70">
          Thanks for reaching out. We'll respond within 48 hours to book your free on-site assessment. For anything urgent, WhatsApp or call us directly using the details on this page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  const isSending = state === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5"
      aria-label="Quote request form"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={isSending}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-md border border-border bg-background px-3.5 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isSending}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-md border border-border bg-background px-3.5 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="082 123 4567"
            required
            disabled={isSending}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full rounded-md border border-border bg-background px-3.5 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            required
            disabled={isSending}
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className="w-full rounded-md border border-border bg-background px-3.5 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-sm text-destructive">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="suburb" className="mb-1.5 block text-sm font-medium text-foreground">
            Suburb
          </label>
          <select
            id="suburb"
            name="suburb"
            disabled={isSending}
            defaultValue="Bryanston"
            className="w-full rounded-md border border-border bg-background px-3.5 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
          >
            {suburbs.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Tell us about the job
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isSending}
          placeholder="Age of the home, type of roof if you know it, what the issue is or what you'd like done."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-md border border-border bg-background px-3.5 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {state === "error" && (
        <div
          role="alert"
          className="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
        >
          <p className="font-medium">Something went wrong sending your message.</p>
          <p className="mt-1 text-destructive/80">
            {submitError ?? "Please try again, or WhatsApp us directly using the button on this page."}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-base font-semibold text-on-primary transition-all duration-200 hover:bg-accent-hover active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer sm:w-auto"
      >
        {isSending ? (
          <>
            <svg className="animate-spin" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.25" />
              <path d="M3 12a9 9 0 019-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Request free quote
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-foreground/60">
        We respond within 48 hours. Free on-site assessment, no obligation.
      </p>
    </form>
  );
}
