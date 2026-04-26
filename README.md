# Cederhof Roofing

> **⚠️ THIS IS A DEMO WEBSITE.**
>
> Cederhof Roofing is a **fictional business**. Every detail on this site is
> invented, including the company name, the team (Johan, Lerato, Dumisani),
> the testimonials, the phone number `011 234 5678`, the WhatsApp number
> `082 654 3210`, the email `hello@cederhofroofing.co.za`, the pricing ranges,
> and every case study. Do not try to contact or book this company. It does
> not exist.
>
> The site is a portfolio / case-study build produced by
> [KILO Agency](https://kiloagency.org) to demonstrate the quality bar we ship
> for real South African trades clients. It is hosted on Vercel's free tier
> and is not a live commercial site.

**Live demo:** https://cederhof-roofing-demo.vercel.app

---

## What this is

A full production-grade Astro 5 + Tailwind v4 marketing site for a
hypothetical premium residential roofing contractor in Johannesburg North. It
was built inside the KILO website chamber workflow (competitor research, SEO
audit, wireframing, design system, Gemini scaffold, Codex iteration, Phase 3
QA) using fake but plausible inputs.

The site is intentionally benchmarked against
[aluvalue-website.vercel.app](https://aluvalue-website.vercel.app) as a craft
quality reference, not copied.

## Pages

- Home with a pinned GSAP scroll scene for the 5-step process
- Services hub + 5 material-specific service pages
  (slate, clay tile, concrete tile, re-roofing, waterproofing)
- Portfolio with filterable lightbox gallery (15 Pexels projects)
- Areas hub + 8 suburb pages
  (Dainfern, Sandton, Bryanston, Hyde Park, Fourways, Rivonia, Hurlingham, Parkhurst)
- About, Contact, dynamic `robots.txt`, sitemap

19 pages total, every page with unique meta description, full JSON-LD schema
stack (LocalBusiness + Service + FAQPage + BreadcrumbList), Open Graph +
Twitter Card tags.

## Stack

| Layer | Tool |
|---|---|
| Framework | Astro 5 (static + Vercel adapter for middleware + API routes) |
| Styling | Tailwind CSS v4 via `@theme` tokens in `src/styles/globals.css` |
| Interactive | React islands (`client:visible` hydration only) |
| Animation | GSAP ScrollTrigger for the pinned scene, native CSS `animation-timeline` for reveals |
| Forms | Formspree-style `/api/contact` endpoint (demo logs only, no real delivery target wired up) |
| Images | Astro `<Image>` auto-WebP, 15 stock photos from Pexels |
| Maps | Google Maps public iframe embed (no API key) |
| Fonts | Archivo 900 for headings, Geist for body, both via Google Fonts |
| Hosting | Vercel free tier |

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Production build

```bash
npm run build
npm run preview
```

Vercel adapter output lands in `.vercel/output`.

## Notable files

- [`src/styles/globals.css`](src/styles/globals.css) locks every design token
- [`src/data/business.ts`](src/data/business.ts) is the single source of truth for NAP, hours, services, registrations
- [`src/components/ProcessScrollScene.tsx`](src/components/ProcessScrollScene.tsx) is the GSAP pinned 5-step scrolljack
- [`discovery-brief.md`](discovery-brief.md), [`wireframe.md`](wireframe.md),
  [`seo-audit.html`](seo-audit.html) are the chamber's build artifacts
  (competitive research, section plan, Grade-C audit of the real-world
  benchmark `hmcworks.co.za`)

## Credits

- Stock photography via [Pexels](https://pexels.com) (see `src/assets/images/stock/manifest.json`)
- Google Fonts: Archivo, Geist
- [KILO Agency](https://kiloagency.org)

## License

Code: feel free to learn from it. Don't spin the fictional "Cederhof Roofing"
brand up as a real business.
