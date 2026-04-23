# Wireframe: Cederhof Roofing

> **Generated:** 23 April 2026
> **Based on:** discovery-brief.md
> **Benchmark:** https://aluvalue-website.vercel.app/ (craft quality floor)

---

## Sitemap

| Page | Purpose | Primary Keyword | Priority |
|------|---------|----------------|----------|
| Home (/) | Conversion hub, premium positioning | roofing contractor Johannesburg | P1 |
| /services/ | Service hub overview | roofing services Johannesburg | P1 |
| /services/slate-roofing/ | Material-specific service page | slate roof installation Johannesburg | P1 |
| /services/clay-tile-roofing/ | Material-specific service page | clay tile roofing Johannesburg | P1 |
| /services/concrete-tile-roofing/ | Material-specific service page | concrete tile roofing | P1 |
| /services/re-roofing/ | Full re-roof process page | residential re-roofing Johannesburg | P1 |
| /services/waterproofing/ | Waterproofing + flashing page | roof waterproofing Johannesburg | P1 |
| /portfolio/ | Project gallery with captions | roofing portfolio Johannesburg | P1 |
| /about/ | Trust, heritage, team, credentials | Master Builders roofing contractor | P1 |
| /contact/ | Conversion endpoint + map | roofing contractor contact | P1 |
| /areas/ | Service area hub | roofing service areas Johannesburg | P1 |
| /areas/dainfern/ | Suburb landing page | roofing Dainfern | P1 |
| /areas/sandton/ | Suburb landing page | roofing Sandton | P1 |
| /areas/bryanston/ | Suburb landing page | roofing Bryanston | P1 |
| /areas/hyde-park/ | Suburb landing page | roofing Hyde Park | P1 |
| /areas/fourways/ | Suburb landing page | roofing Fourways | P2 |
| /areas/rivonia/ | Suburb landing page | roofing Rivonia | P2 |
| /areas/hurlingham/ | Suburb landing page | roofing Hurlingham | P2 |
| /areas/parkhurst/ | Suburb landing page | roofing Parkhurst | P2 |

**Total pages:** 19
**Multi-page required:** Yes. Single-page sites are not acceptable for client delivery.

---

## HIGH-Impact Opportunities (from Discovery Brief)

Every HIGH row in Section 3 of the brief maps to a specific section on the homepage (or a global technical requirement). No skipping. See below.

| Opportunity (from brief) | Homepage Section | Visual Treatment | Why It Differentiates |
|-------------------------|------------------|------------------|----------------------|
| Full JSON-LD schema (LocalBusiness + Service + Review + FAQPage + BreadcrumbList) | Global SEOHead — technical, not a visible section | N/A (global) | Zero competitors have the full stack. Rich SERP results on every page. |
| Branded 1200×630 Open Graph images per page | Global SEOHead — technical, not a visible section | N/A (global) | WhatsApp share quality beats every competitor from day one. |
| AluValue-tier visual polish (golden-hour hero, restrained premium) | Section 1 — Hero | `full-bleed` | No competitor looks premium. Instant positioning advantage. |
| Deep service pages by material (slate vs clay vs concrete tile) | Section 3 — Services intro + Section 4 — Featured material deep-dive | `card-grid` + `asymmetric-split` | Competitors lump everything into one page. Dedicated material pages rank on long-tail. |
| Pricing transparency / "what to expect" from a quote | Section 5 — What to Expect | `custom-layout` | Zero competitors address the "will price creep?" objection. |
| WhatsApp-first CTA with pre-filled message | Section 11 — WhatsApp CTA band + global sticky mobile button | `dark-contrast` | Only 40% of top-5 competitors use WhatsApp. SA primary sharing channel. |
| Named testimonials with suburb + material + photo | Section 8 — Testimonials carousel | `tinted-bg` | Only Peché does named testimonials. None include material or suburb context. |

---

## Visual Treatment Vocabulary

Assigned per section. Anti-Slop Rule #16: no more than 2 consecutive sections share a treatment; at least 3 distinct treatments from the counted set (full-bleed, dark-contrast, asymmetric-split, tinted-bg, custom-layout). `card-grid` does NOT count toward the minimum.

- `full-bleed` - edge-to-edge image, text overlay, no side padding. Hero, portfolio.
- `dark-contrast` - dark background amid light sections. Why Cederhof, WhatsApp CTA, Footer.
- `asymmetric-split` - 50/50 or 60/40 with image one side, content other. Featured material deep-dive.
- `card-grid` - traditional card grid. Services intro, FAQ accordion. Sparingly.
- `tinted-bg` - soft off-white or brand-tinted bg. Trust bar, testimonials.
- `custom-layout` - breaks the pattern. What to Expect (numbered diagonal), Service Areas map+grid.

---

## Section Order Per Page

### HOME

HIGH-impact items from the brief are folded in first, then standard sections round it out.

| # | Section | Visual Treatment | Component Pattern | Scroll Tier | Content Source |
|---|---------|------------------|------------------|-------------|----------------|
| 1 | Hero | `full-bleed` | Full-bleed image (golden-hour residential roof) + overlay + H1 + sub + CTA pair (Quote + WhatsApp) | Tier 1 (`@starting-style` + CSS `scroll()` subtle parallax) | Brief H1: "Premium Residential Roofing in Johannesburg North"; subhead: "Slate, clay tile, and full re-roofs for heritage and estate homes since 2009." |
| 2 | Trust bar | `tinted-bg` | Horizontal band: "Est. 2009", "MBSA Member", "10-Year Workmanship Guarantee", "Free Quote in 48 Hours" | None (static) | Brief trust signals |
| 3 | Services intro + 5 cards | `card-grid` | Intro H2 + 5 cards with inline icons (Lucide) NOT icon-tile stacks, each linking to /services/{material}/ | Tier 1 CSS `view()` stagger reveal (30ms per card) | Brief service list: Slate, Clay Tile, Concrete Tile, Re-Roofing, Waterproofing |
| 4 | Featured material: Slate Roofing | `asymmetric-split` | 50/50 split, large slate roof photo on left (sticky scroll), heading + 2 paragraphs + "Read more →" link on right | Tier 1 CSS `view()` fade-in | Brief /services/slate-roofing/ intro (140-180 words) |
| 5 | What to Expect (process + pricing) | `custom-layout` | 5 numbered steps in diagonal offset layout: Assessment → Quote → Schedule → Execute → Sign-off. Copy addresses "will price creep / will they mess my property" | Tier 1 CSS `view()` stagger | Brief content gap "Pricing transparency / what to expect" |
| 6 | Portfolio carousel (12 projects) | `full-bleed` | Edge-to-edge CSS scroll-snap horizontal carousel with project tiles. Each tile: photo + property type + suburb + material | Tier 1 CSS scroll-snap (zero JS) | Brief content parity "Project gallery" |
| 7 | Why Cederhof (stats + 3 differentiators) | `dark-contrast` | Charcoal bg with copper accent. 3 stats with counter animation ("17 years", "234 roofs restored", "10 year guarantee"). Below: 3 differentiator cards (craft finish / clean site / MBSA member). | Tier 2 React island (Counter.tsx with `client:visible`) | Brief differentiators + stats |
| 8 | Named testimonials carousel | `tinted-bg` | CSS scroll-snap horizontal testimonial cards. Each card: star rating, quote, client name + suburb + material ("Sarah N. — Slate roof, Hyde Park"), optional portrait. 5 testimonials minimum. | Tier 1 CSS scroll-snap (zero JS) | Brief content gap "Named testimonials with suburb + material" |
| 9 | Service areas (map + grid) | `custom-layout` | Embedded stylised SA/Gauteng SVG map on left with 8 suburb dots highlighted; right side lists suburbs in 2-column grid each linking to /areas/{suburb}/. Not a generic card grid. | Tier 1 CSS `view()` fade | Brief service areas |
| 10 | FAQ | `card-grid` | 6-8 question accordion using native `<details>` + FAQPage JSON-LD in head. Questions from brief: "How much does a re-roof cost?", "Do you work in my suburb?", "How long does it take?", "Are you MBSA registered?", "Do you guarantee the work?" | None (HTML `<details>`, FAQPage schema) | Brief content gaps + parity |
| 11 | WhatsApp CTA band | `dark-contrast` | Full-width charcoal band with copper WhatsApp button + phone `tel:` link + "Free quote in 48 hours" commitment. H2 "Tell us what you need." | None (static) | Brief primary CTA |
| 12 | Footer | `dark-contrast` | NAP (exact standardized format from brief), business hours, service pages, area pages, social, KILO branding | None | Brief NAP + hours |

**Treatment adjacency audit:** 
- Row 1 full-bleed → Row 2 tinted-bg (diff ✓)
- Row 2 tinted-bg → Row 3 card-grid (diff ✓)
- Row 3 card-grid → Row 4 asymmetric-split (diff ✓)
- Row 4 asymmetric-split → Row 5 custom-layout (diff ✓)
- Row 5 custom-layout → Row 6 full-bleed (diff ✓)
- Row 6 full-bleed → Row 7 dark-contrast (diff ✓)
- Row 7 dark-contrast → Row 8 tinted-bg (diff ✓)
- Row 8 tinted-bg → Row 9 custom-layout (diff ✓)
- Row 9 custom-layout → Row 10 card-grid (diff ✓)
- Row 10 card-grid → Row 11 dark-contrast (diff ✓)
- Row 11 dark-contrast → Row 12 dark-contrast (SAME — 2 consecutive, allowed; CTA + Footer conventionally unified)

**Distinct treatments appearing (counted set):** full-bleed (2), dark-contrast (3), asymmetric-split (1), tinted-bg (2), custom-layout (2) — all 5 counted treatments present. Minimum 3 required. ✓

### SERVICE DETAIL (template for each /services/* page)

| # | Section | Visual Treatment | Component Pattern | Scroll Tier |
|---|---------|------------------|------------------|-------------|
| 1 | Hero | `full-bleed` | Material-specific hero photo, H1 "{Material} Roofing in Johannesburg", sub, CTA pair | Tier 1 `@starting-style` |
| 2 | Material intro | `asymmetric-split` | Problem-first copy + what's included. Image of the material detail work. | Tier 1 `view()` fade |
| 3 | Process / How it works | `custom-layout` | 4-step numbered walk-through diagonal layout | Tier 1 `view()` stagger |
| 4 | Before/After pair | `full-bleed` | Either side-by-side image pair OR Tier 2 drag slider (for re-roofing and concrete tile pages where transformation is dramatic) | Tier 2 BeforeAfter.tsx `client:visible` (re-roofing + concrete tile only) |
| 5 | Pricing indication | `tinted-bg` | "What a {material} roof costs in Joburg North" — honest range + what drives price. Addresses "will price creep" objection. | None |
| 6 | Service-specific FAQ | `card-grid` | 4-6 questions with `<details>` + FAQPage schema | None |
| 7 | Related services | `tinted-bg` | 2-3 cards linking to other /services/ + link back to /services/ hub | None |
| 8 | CTA | `dark-contrast` | Quote form 4-state + phone + WhatsApp | Tier 2 ContactForm.tsx `client:visible` |

### AREA / LOCATION PAGE (template for each /areas/* page)

| # | Section | Visual Treatment | Component Pattern | Scroll Tier |
|---|---------|------------------|------------------|-------------|
| 1 | Hero | `full-bleed` | Suburb-specific photo (home exterior in that suburb), H1 "Roofing Contractor in {Suburb}", sub, CTA pair | Tier 1 `@starting-style` |
| 2 | Area intro (suburb-specific) | `asymmetric-split` | Real local architectural context notes (e.g. Dainfern = walled estate lifestyle, Parkhurst = 1930s heritage bungalows). NOT templated. | Tier 1 `view()` fade |
| 3 | Services available in this area | `card-grid` | 5 service cards linking to /services/{material}/ | Tier 1 `view()` stagger |
| 4 | Local proof (this suburb) | `tinted-bg` | 2 named testimonials from that suburb + 4 project photos geotagged to that suburb | None |
| 5 | Map + nearby areas | `custom-layout` | Suburb-centered Google Maps embed + links to 3-4 neighbouring /areas/ pages | None |
| 6 | CTA | `dark-contrast` | Quote form + phone + WhatsApp | Tier 2 ContactForm.tsx `client:visible` |

### ABOUT

| # | Section | Visual Treatment | Component Pattern | Scroll Tier |
|---|---------|------------------|------------------|-------------|
| 1 | Hero (lightweight) | `tinted-bg` | H1 "About Cederhof Roofing — MBSA Member Since 2009" + short paragraph | Tier 1 `@starting-style` |
| 2 | Origin story | `asymmetric-split` | Long-form heritage narrative on left, founder portrait photo on right | Tier 1 `view()` fade |
| 3 | Team | `card-grid` | 3-5 team member cards (portrait + name + role + years) | Tier 1 `view()` stagger |
| 4 | Credentials | `dark-contrast` | MBSA + CIPC + PIRB logos, 10-year guarantee explainer | Tier 1 `view()` fade |
| 5 | Values / Our approach | `custom-layout` | 3 values with leading numbers (NOT icon-tile stacks), offset asymmetric layout | Tier 1 `view()` stagger |
| 6 | CTA | `dark-contrast` | WhatsApp + form | None |

### CONTACT

| # | Section | Visual Treatment | Component Pattern | Scroll Tier |
|---|---------|------------------|------------------|-------------|
| 1 | Hero | `tinted-bg` | H1 "Get a Free Roof Assessment" + "48 hours" commitment | None |
| 2 | Form + details split | `asymmetric-split` | 4-state contact form (idle / sending / success / error) on left; NAP + hours + WhatsApp + phone on right | Tier 2 ContactForm.tsx `client:visible` |
| 3 | Map embed | `custom-layout` | Google Maps centered on Bryanston HQ + "Get Directions" button + 8 area pins | None |
| 4 | FAQ (contact-specific) | `card-grid` | "How soon can you come out?", "What does a free quote include?", "Do you charge for the assessment?" | None |

### PORTFOLIO

| # | Section | Visual Treatment | Component Pattern | Scroll Tier |
|---|---------|------------------|------------------|-------------|
| 1 | Hero | `full-bleed` | Hero image collage of recent projects | Tier 1 `@starting-style` |
| 2 | Filter bar | `tinted-bg` | Filter chips: All / Slate / Clay Tile / Concrete Tile / Re-Roof / Waterproofing | Tier 2 Gallery.tsx `client:visible` |
| 3 | Project grid | `custom-layout` | 12-16 projects in asymmetric masonry grid (NOT uniform cards). Each: photo + property type + suburb + material + date. Click opens lightbox. | Tier 2 Gallery.tsx `client:visible` |
| 4 | CTA | `dark-contrast` | Quote form + phone + WhatsApp | None |

---

## Component Decisions

| Component | Implementation | Hydration | Notes |
|-----------|---------------|-----------|-------|
| Contact form | React island (ContactForm.tsx) | `client:visible` | 4 states: idle, sending, success, error. Formspree endpoint (placeholder for demo). |
| Mobile nav | React island (MobileNav.tsx) | `client:visible` | Hamburger + slide-out panel with WhatsApp button |
| Before/After slider | React island (BeforeAfter.tsx) | `client:visible` | Used on /services/re-roofing/ and /services/concrete-tile-roofing/ only |
| Gallery lightbox | React island (Gallery.tsx) | `client:visible` | /portfolio/ only. Filter chips + masonry grid + lightbox |
| Stats counter | React island (Counter.tsx) | `client:visible` | Home section 7 "Why Cederhof" |
| FAQ accordion | Astro + native `<details>` | None | No JS. FAQPage JSON-LD in head |
| Testimonial carousel | Astro + CSS scroll-snap | None | No JS. Home section 8 |
| Portfolio carousel (home) | Astro + CSS scroll-snap | None | No JS. Home section 6 |
| Sticky WhatsApp mobile button | Astro + Tailwind fixed position | None | Mobile-only; hidden on desktop (desktop has button in header) |
| Service area map (home) | Inline SVG | None | Stylised SA map, no JS |
| All other sections | Pure Astro (.astro) | None | Static HTML + Tailwind |

---

## Scroll Tier Summary

- **Tier 1 (CSS-only, zero JS)**: Hero `@starting-style`, hero subtle parallax via `animation-timeline: scroll()`, section reveals via `animation-timeline: view()`, testimonial + portfolio scroll-snap carousels, FAQ `<details>` accordion.
- **Tier 2 (React islands)**: ContactForm, MobileNav, BeforeAfter (2 service pages only), Gallery (portfolio page only), Counter (home section 7).
- **Tier 3 (cinematic)**: NONE. AluValue benchmark is restrained — forcing a Tier 3 would break the tonal register. Skip.

All Tier 1 patterns MUST include `@supports not (animation-timeline: view())` fallback showing content statically. All Tier 2 patterns MUST respect `prefers-reduced-motion`.

---

## Notes

- Every page has its own SEOHead with unique title, description, and full schema stack from the brief
- All service pages and area pages exist as individual routes, not sections on the homepage
- HOME section order above is the real build order — HIGH-impact opportunities from the brief are folded in (sections 1, 3-4, 5, 6, 8, 11) alongside standard sections
- Anti-Slop Rule #16 verified above: no more than 2 consecutive sections share a treatment; all 5 counted treatments appear; `card-grid` sections (3, 10) do not count toward the minimum of 3
- Anti-Slop Rule #4: Services intro (section 3) uses inline icons, NOT icon-tile stacks
- Anti-Slop Rule #15: every `dark-contrast` section (sections 7, 11, 12) uses explicit light text color on element or parent
- Anti-Slop Rule #5: NO `h-screen`. Hero uses `min-h-[100dvh]`
- WhatsApp pre-filled message: `Hi Cederhof, I'd like a free roof assessment for my home in [suburb].`
