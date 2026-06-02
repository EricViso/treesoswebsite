# Treelance — Marketing site & template system

Next.js + Tailwind marketing kit for **Treelance**, the first product from
**Trees OS** — workforce orchestration for **energy-sector staffing agencies / ESNs**.

> The problem is not hiring. It is deployment.

*Trees OS* is the company; *Treelance* is the product the marketing speaks as.
The first client (Trees Engineering) is never referenced publicly.

## What's here

| Path | Purpose |
|------|---------|
| `app/page.tsx` | Template gallery (the design-system landing). |
| `app/templates/one-pager` | Full Treelance one-pager (`OnePager`). |
| `app/templates/hero` | `Hero` template — three variants. |
| `app/templates/speech` | `SpeechBlock` — long-form narrative template. |
| `components/marketing/*` | Reusable components: `Hero`, `SpeechBlock`, `OnePager`, `Wordmark`, primitives. |
| `lib/brand.ts` | Brand names, links, colour tokens — **single source of truth**. |
| `lib/content.ts` | Marketing copy (kept out of layout). |
| `tailwind.config.ts` | Design tokens (colour + type). |
| `docs/MARKETING_DESIGN.md` | The marketing design file (brand, voice, tokens, components). |
| `public/dashboard.html` | Interactive dashboard demo, embedded in the one-pager. |
| `data/` | Source material — not deployed. |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

Routes: `/` (gallery) · `/templates/one-pager` · `/templates/hero` ·
`/templates/speech` · `/dashboard.html`.

## Build & deploy

```bash
npm run build && npm run start
```

Deploys to Vercel as a standard Next.js app (no extra config). Domain: `treesos.io`.

## Re-brand in one place

Change `name` / `presentedBy` / links in `lib/brand.ts`, and colour/type in
`tailwind.config.ts`. Every template reads from these.
