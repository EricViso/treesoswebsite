# Treelance — Marketing Design File

The single reference for how Treelance (and the Trees OS company brand) shows up
in marketing. Tokens here are **live** — they map directly to
`tailwind.config.ts` and `lib/brand.ts`, so this document and the code can't
drift apart.

---

## 1. Brand architecture

| Layer | Name | Role |
|-------|------|------|
| Company | **Trees OS** | The parent brand. Endorses the product ("by Trees OS"). |
| Product | **Treelance** | The first product — for **energy-sector ESNs / staffing agencies**. This is the name marketing speaks as. |
| First client | *Trees Engineering* | **Never referenced in public material.** Used internally to prove the model. |

**Lockup:** `Treelance` set in black weight, optionally followed by a muted mono
`by Trees OS`. Implemented in `components/marketing/Wordmark.tsx`.

> To re-point the entire template system at the **company** brand instead of the
> product, change `name` / `presentedBy` in `lib/brand.ts`. Every template reads
> from there — no component edits needed.

---

## 2. Positioning & audience

- **Audience:** energy staffing agencies & ESNs — *the people who pay*, not candidates.
- **Core promise:** *Make the candidate database your agency already owns work for you.*
- **One-line:** **The problem is not hiring. It is deployment.**
- **What it is:** a coordination layer that connects to an agency's existing
  database/ATS, keeps candidates live via WhatsApp/Telegram agents, and surfaces
  qualified, consenting people for every open role. Humans decide; agents coordinate.

### Messaging pillars
1. **Your dead database, alive.** The asset they already own, kept current automatically.
2. **People who already said yes.** Not CVs to screen — consent-verified, available, certified.
3. **Humans decide.** No autonomous matching, no black box; a human approves every step.
4. **Your pool stays yours.** Never mixed with or exposed to another agency.
5. **Sits on your stack.** Connects to the ATS they run; no rip-and-replace.

---

## 3. Voice & tone

- **Declarative and confident**, never hypey. Short sentences. Strong verbs.
- **Contrast structure**: name the broken status quo, then the reframe
  ("You don't have a sourcing problem. Your database is full — it's just dead.").
- **Energy-literate**: BOSIET, GWO, CSWIP, NEBOSH, mobilisation, FPSO, LNG, brownfield.
- **Concrete over abstract**: "booked interview", "−70% recruiter hours", not "synergy".
- **Do:** "Your recruiters go back to placing." **Don't:** "leverage AI-driven synergies".

---

## 4. Colour tokens

Mirrors `tailwind.config.ts`. Use Tailwind classes (`bg-navy`, `text-moss`, …).

| Token | Hex | Tailwind | Use |
|-------|-----|----------|-----|
| Navy | `#1B3862` | `navy` | Primary brand, headings on light, dark sections |
| Navy deep | `#0F2440` | `navy-deep` | Gradient base, footer, nav |
| Navy rail | `#142E54` | `navy-rail` | Sidebars / rails |
| Moss (green) | `#58B451` | `moss` | Accent, CTAs, highlights, "yes" states |
| Moss dark | `#2F6E2A` | `moss-dark` | Green text on light, pill labels |
| Moss soft | `#EAF6E9` | `moss-soft` | Tinted chip backgrounds |
| Ink | `#141413` | `ink` | Body text on white |
| Muted | `#5D6B7E` | `muted` | Secondary text |
| Line | `#E3E6EA` | `line` | Borders, dividers |
| Canvas | `#F3F2F3` | `canvas` | Alternating section background |

**Rules**
- One accent only — moss. Never introduce a second brand colour.
- CTAs are always moss on `#0e2a0c` ink-green text (high contrast, on-brand).
- Dark sections use the navy gradient + faint grid texture; alternate
  light sections between white and `canvas`.

---

## 5. Typography

| Role | Family | Notes |
|------|--------|-------|
| UI / body / headings | **Inter** (`font-sans`) | 400/500/600/800/900. Headings 800–900, tight tracking. |
| Labels / eyebrows / code | **IBM Plex Mono** (`font-mono`) | 500/600, uppercase, wide tracking. Used for `// kickers` and tags. |

- Headlines: `font-black`, `tracking-tightest` (−0.03em), `clamp()` sizing.
- Reading measure: `max-w-reading` (64ch) for long-form.
- Eyebrows are mono, uppercase, prefixed with `//` (the `Kicker` component does this).

Fonts are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS
variables `--font-inter` / `--font-mono`.

---

## 6. Components & templates

All under `components/marketing/`. Pages that preview them under `app/templates/`.

### Primitives — `primitives.tsx`
`Container` · `Kicker` · `Hl` (inline highlight) · `Button` (primary/ghost) ·
`SectionHeading` · `Sub`.

### `Wordmark.tsx`
Brand lockup. Props: `endorsed` (show "by Trees OS"), `tone` (light/dark).

### Templates

| Template | Component | Preview route | Use for |
|----------|-----------|---------------|---------|
| **Hero** | `Hero` | `/templates/hero` | Above-the-fold. Props: `eyebrow`, `title` (JSX, use `<Hl>`), `lead`, `primary`, `secondary`, `align`, `showWordmark`. |
| **Paragraph / Speech** | `SpeechBlock` | `/templates/speech` | Long-form narrative / manifesto. Props: `eyebrow`, `title`, `lead` (drop-cap), `body[]`, `pullQuote`, `signoff`. |
| **One-pager** | `OnePager` | `/templates/one-pager` | Full marketing page composed from primitives + Hero, driven by `lib/content.ts`. |

The gallery at `/` links all three.

### Section rhythm (one-pager)
`Hero → Problem → How (3 moves) → Live demo → Payoff → Human-in-loop → Trust →
Pilot → FAQ → Final CTA → Footer`, alternating white / `canvas`, with the demo
and final CTA on navy.

---

## 7. Content source

Marketing copy lives in `lib/content.ts` (problem, phases, payoff, loop, trust,
pilot, faq, speech) so copy edits never touch layout. Brand names inside copy
say "Treelance"; swap globally there if the lead brand changes.

---

## 8. Assets

- `public/favicon.svg` — navy tile + green tree mark.
- `public/dashboard.html` — interactive pipeline demo (vanilla JS), embedded in
  the one-pager via iframe and linked full-screen.
- A proper logo SVG (wordmark + mark lockup) and OG share image are **to-do**.

---

## 9. To-do / open decisions

- [ ] Confirm lead brand for marketing: **Treelance** (current) vs Trees OS — one line in `lib/brand.ts`.
- [ ] Replace contact email with a `@treesos.io` mailbox once live (currently the known-good address in `lib/brand.ts`).
- [ ] Real logo lockup SVG + Open Graph share image (1200×630).
- [ ] Tune the dashboard mock address bar (`app.treesos.io/dashboard`) to the real app URL.
