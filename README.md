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

## Analytics & the analyst agent

Instrumentation is **dormant until you set `NEXT_PUBLIC_POSTHOG_KEY`** — the site
runs identically without it.

- **PostHog (EU)** — events, autocapture, session replay. Consent-first: opted
  out / cookieless until the visitor accepts (`ConsentBanner`).
- **Vercel Analytics + Speed Insights** — traffic + Core Web Vitals.
- **Event taxonomy** in `lib/analytics.ts`. Declarative: add
  `data-analytics="<kind>:<label>"` (`cta` / `booking` / `demo` / `outbound`) to
  any element; `data-section="<name>"` on sections. Tracked client-side by
  `components/analytics/PostHogAnalytics.tsx` (pageviews, scroll depth, section
  views, clicks). North-star event: `booking_started`.

### Self-improving loop
A scheduled GitHub Action (`.github/workflows/analytics-review.yml`) runs Claude
weekly: it reads PostHog (via the `.mcp.json` MCP server) + the repo, then opens a
PR proposing one copy improvement. **A human merges — the agent never deploys.**
The runbook is `analytics/AGENT.md`; its memory/attribution ledger is
`analytics/CHANGELOG.md`; per-cycle reports land in `analytics/reports/`.

Secrets to add (repo settings): `ANTHROPIC_API_KEY`, `POSTHOG_MCP_TOKEN`.
See `.env.example`.

## Re-brand in one place

Change `name` / `presentedBy` / links in `lib/brand.ts`, and colour/type in
`tailwind.config.ts`. Every template reads from these.
