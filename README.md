# Trees OS — Website

Marketing site for **Trees OS**, the AI workforce-orchestration platform for the
energy sector. It connects to a staffing agency's existing candidate database,
keeps it live through AI agents on WhatsApp/Telegram, and surfaces qualified,
consenting people for every open role.

> The problem is not hiring. It is deployment.

## Audience

The site speaks to **energy staffing agencies / ESNs** — the people who pay for
the service — not to candidates. The pitch: *make the candidate database you
already own work for you.*

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Single-page marketing site (hero, problem, how it works, live demo, pilot, FAQ, CTA). Self-contained — inline CSS, no build step. |
| `dashboard.html` | Interactive dashboard demo (vanilla HTML/JS). Embedded in `index.html` via iframe and linked as a standalone full-screen demo. |
| `assets/favicon.svg` | Brand mark (navy tile + green tree). |
| `vercel.json` | Clean-URL config for Vercel. |
| `data/` | Source material (proposal, presentation, strategy docs) — not deployed. |

## Brand

- Navy `#1B3862` / deep navy `#0f2440`
- Green `#58B451`
- Type: Inter (UI) + IBM Plex Mono (labels)

## Run locally

It's static — open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Static deploy (e.g. Vercel). No framework, no build command — output directory
is the repo root.
