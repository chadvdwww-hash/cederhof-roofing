# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Cederhof Roofing
**Generated:** 2026-04-23 17:04:30
**Category:** B2B Service

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#171717` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#404040` | `--color-secondary` |
| Accent/CTA | `#A16207` | `--color-accent` |
| Background | `#FFFFFF` | `--color-background` |
| Foreground | `#171717` | `--color-foreground` |
| Muted | `#E8ECF0` | `--color-muted` |
| Border | `#E5E5E5` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring | `#171717` | `--color-ring` |

**Color Notes:** Minimal black + accent gold [Accent adjusted from #D4AF37 for WCAG 3:1]

### Typography

- **Heading Font:** Cinzel
- **Body Font:** Josefin Sans
- **Mood:** real estate, luxury, elegant, sophisticated, property, premium
- **Google Fonts:** [Cinzel + Josefin Sans](https://fonts.google.com/share?selection.family=Cinzel:wght@400;500;600;700|Josefin+Sans:wght@300;400;500;600;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #A16207;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #171717;
  border: 2px solid #171717;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #171717;
  outline: none;
  box-shadow: 0 0 0 3px #17171720;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Trust & Authority

**Keywords:** Certificates/badges displayed, expert credentials, case studies with metrics, before/after comparisons, industry recognition, security badges

**Best For:** Healthcare/medical landing pages, financial services, enterprise software, premium/luxury products, legal services

**Key Effects:** Badge hover effects, metric pulse animations, certificate carousel, smooth stat reveal

### Page Pattern

**Pattern Name:** Minimal Single Column

- **Conversion Strategy:** Single CTA focus. Large typography. Lots of whitespace. No nav clutter. Mobile-first.
- **CTA Placement:** Center, large CTA button
- **Section Order:** 1. Hero headline, 2. Short description, 3. Benefit bullets (3 max), 4. CTA, 5. Footer

---

## Anti-Patterns (Do NOT Use)

- ❌ Playful design
- ❌ Hidden credentials
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile

---

## Designer Overrides (Chamber-Locked)

The generated system is a starting suggestion. These overrides lock the final design to the chamber's preferred aesthetic for this positioning (premium residential trades, AluValue benchmark tonal register). The overrides below WIN against any conflicting value above.

### Typography — LOCKED

The generator proposed Cinzel + Josefin Sans. Cinzel is a Trajan-caps display serif oriented at wine-estate luxury — too decorative for the restrained craft-led register we are targeting. Josefin Sans is a geometric sans but too thin/decorative for body on a trades site. Both are replaced with chamber-preferred fonts.

- **Heading Font:** Bricolage Grotesque (weights 500, 600, 700, 800)
- **Body / UI Font:** Geist (weights 400, 500, 600, 700)
- **Mood:** Premium + modern + crafted. Distinctive display without decorative drift. Clean high-legibility body.
- **Google Fonts import (replaces the one above):**

```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Geist:wght@400;500;600;700&display=swap');
```

- **Type scale:** H1 clamp(2.5rem, 5vw, 4.5rem) weight 700; H2 clamp(1.8rem, 3vw, 2.75rem) weight 700; H3 1.5rem weight 600; Body 1rem weight 400 line-height 1.65.
- **`text-wrap: balance` on H1-H3. `text-wrap: pretty` on paragraphs.**

### Palette — PARTIAL OVERRIDE

The generated palette (editorial black + muted gold accent) is kept for the light-surface sections. A dark-surface variant is added for the wireframe's `dark-contrast` sections (HOME sections 7, 11, 12).

| Role | Hex | Notes |
|------|-----|-------|
| Primary | `#171717` | Kept from generator. Editorial black. |
| Primary-Dark (dark sections) | `#1A1A1F` | Added. Slate-tinted near-black for `dark-contrast` backgrounds. Not pure black (anti-slop #6). |
| Foreground | `#171717` | Kept. |
| On-Primary / On-Dark | `#F5F5F0` | Warmed from pure white. Light text on dark-contrast sections. Explicit (anti-slop #15). |
| Secondary | `#404040` | Kept. Muted labels, secondary text. |
| Accent | `#A16207` | Kept. Bronze/gold. Matches brief's "single warm accent" direction (copper/terracotta adjacent). WCAG 3:1 adjusted from #D4AF37. |
| Accent-Hover | `#8B5508` | Added. Darker hover state for CTAs. |
| Background | `#FAFAF7` | Warmed from pure white. Warm stone neutral. Anti-slop #6. |
| Muted | `#EDE9E2` | Warmed from #E8ECF0. Removes cool blue cast. |
| Border | `#E5E2DC` | Warmed from #E5E5E5. |
| Destructive | `#DC2626` | Kept. |
| Ring | `#A16207` | Changed to accent for focus rings — draws the eye. |

**Color usage rule:** 60/30/10 — 60% background (`#FAFAF7`), 30% foreground (`#171717`), 10% accent (`#A16207`). Never more than one accent moment per section. Dark sections flip to `#1A1A1F` bg with `#F5F5F0` text.

### Style — REFINED

- **Style:** Trust & Authority (kept) with a craft-residential lens.
- **Add to keywords:** restrained, craft-led, heritage, editorial, golden-hour.
- **Key effects (revised):** subtle CSS `view()` reveals on scroll; subtle asymmetric layouts on deep-dive sections; no badge-hover bounces; no metric pulse animations (static stats with counter-up on enter is fine); no certificate carousel (instead: certification row in trust bar).

### Page Pattern — REPLACED

The generator's "Minimal Single Column" pattern does not apply. This is a 19-page multi-page site, not a single-column landing page. Section order is defined by `wireframe.md` — the wireframe's HOME table is authoritative, not the pattern field above.

### Motion Intensity

- **Dial:** 3 / 10 (restrained — matches AluValue benchmark, matches premium positioning).
- Scroll reveals only, no elastic/bounce, no parallax beyond subtle hero scroll, transitions 150-300ms ease-out-quart.

### Design Variance

- **Dial:** 5 / 10 (asymmetry appears in sections 4, 5, 9 per wireframe; rest is aligned grid).

### Visual Density

- **Dial:** 4 / 10 (generous whitespace; premium register; below "standard" marketing density).

### Anti-Slop Enforcement (Chamber Rules That Override Generator)

- No side-stripe 3px `border-left` on cards (banned per anti-slop #1). The generated `.card` uses only `border-radius` + subtle shadow — OK.
- No gradient text anywhere (banned #2).
- No nested cards (banned #3).
- No icon-tile stacks on service cards; use inline Lucide icons instead (banned #4, overrides "icon-heavy" style keyword).
- No `h-screen`; use `min-h-[100dvh]` (banned #5).
- No `#000000` or `#ffffff` — use `#1A1A1F` and `#FAFAF7` (banned #6).
- No bouncy animations (banned #7).
- No pink/purple accents (banned AI palette). Accent is bronze `#A16207` only.
- No banned fonts (Inter, Roboto, Open Sans, Lato, Montserrat, Fraunces, Newsreader, Lora, Crimson Pro, Playfair Display, Syne, Plus Jakarta Sans, Outfit, DM Sans, DM Serif Display). Confirmed: Bricolage Grotesque and Geist are BOTH outside the banned list AND on the chamber preferred set.
- Rule #16 variety: home section sequence delivers 5 distinct counted treatments (see wireframe.md). Enforced.
