# Decision Record — Treelance / Trees OS website

Why each significant choice was made, and **where** it lives in the codebase.
Append-only: when a decision changes, mark the old one *Superseded* rather than
deleting it — the arc is useful context.

Sources referenced below: **founder** (Eric, in chat), **AskUserQuestion** (explicit
in-session picks), **meeting** (`data/Meet-Daily-Review…md`), **strategy doc**
(`data/Energy_Recruitment_AI_Treelance.md`), **content brief** (the June 2026
website brief), **design review** (the external "Vercel/Linear" AI review).

---

## Index

| # | Decision | Status |
|---|----------|--------|
| D1 | Stack: Next.js + Tailwind + TypeScript on Vercel | Active |
| D2 | Brand architecture: Trees OS (company) / Treelance (product) / Trees Engineering hidden | Active |
| D3 | Audience: energy staffing agencies / ESNs (who pay) | Active |
| D4 | Product hero: broad category line | Active |
| D5 | Primary CTA: pilot + live demo (not waitlist/signup) | Active |
| D6 | Visual direction: dark from day one | Active |
| D7 | Two domains, one app (host-routed) | Active |
| D8 | Trees OS model: simultaneous principles, not a phase pipeline | Active |
| D9 | Miki Mafia: teased, unnamed | Active |
| D10 | Analytics: PostHog (EU) + Vercel, consent-first, dormant until keyed | Active |
| D11 | Analyst agent: scheduled GitHub Action, human-gated PRs | Active |
| D12 | Certification moat: SM2 / BOSIET / BNSP / OPITO / GWO | Active |
| D13 | Real contacts (skai@treesos.io etc.) | Active |
| D14 | Scope kept to Malaysia + energy | Active |
| D15 | Keep light templates as a design-system reference | Active |
| D16 | Compliance: Malaysian-specific, inline, no page | Active |

Superseded: S1 (first light navy site), S2 ("Energy HR & talent teams" audience),
S3 (4-phase roadmap pipeline).

---

## Active decisions

### D1 — Stack: Next.js (App Router) + Tailwind + TypeScript, deploy on Vercel
- **Why:** founder asked for Vercel + Tailwind + Next.js; tokenised so brand/colour/copy live in one place; static-export-friendly for a marketing site.
- **Where:** `package.json`, `next.config.mjs`, `tailwind.config.ts`, `app/`. `next` pinned `^14.2.35` to clear a security advisory.
- **Source:** founder.

### D2 — Brand architecture
- **Decision:** **Trees OS** = the company; **Treelance** = the first product (energy ESNs); **Trees Engineering** = first client, **never referenced publicly**.
- **Why:** founder correction. Resolves the Treelance-vs-Trees-OS confusion seen in the meeting and `dash.treelance.ai`.
- **Where:** `lib/brand.ts` (single source of truth); `components/marketing/Wordmark.tsx` (`product` / `company` variants); all copy in `lib/content.ts`.
- **Source:** founder.

### D3 — Audience: energy staffing agencies / ESNs
- **Decision:** speak to the agencies that *pay*, not energy operators and not candidates.
- **Why:** meeting was explicit — "focus on who pays"; recruiters use the dashboard, the bot is a candidate-facing extra. Selling to "competitors" (Vulcain, Manpower-type ESNs).
- **Where:** `lib/content.ts` (problem/payoff/etc.), `components/marketing/ProductLanding.tsx`. `brand.audience`.
- **Source:** meeting + AskUserQuestion.

### D4 — Product hero: broad category line
- **Decision:** lead the product page with **"AI workforce orchestration for the energy sector."**
- **Why:** chosen over the ESN wedge ("the problem is not hiring, it is deployment") and a compliance-first line.
- **Where:** `components/marketing/ProductLanding.tsx` hero.
- **Source:** AskUserQuestion.
- **Note / open:** the *"problem is not hiring, it is deployment"* anchor (favoured by the content brief) is **not** on the live dark hero — it currently survives only in the light `OnePager` template. See Open Questions.

### D5 — Primary CTA: pilot + live demo
- **Decision:** main CTA is **"Bring us one open role →"** (booking) with **"See the live dashboard"** secondary.
- **Why:** Treelance already runs real pilots and has a live dashboard — the strongest proof. A "Get early access / free trial / sign up" CTA would signal pre-launch and waste that proof.
- **Where:** `ProductLanding`, `TopNavDark`, final CTA; `brand.links.book`.
- **Source:** AskUserQuestion (rejecting the content brief's waitlist/free-trial CTAs).

### D6 — Visual direction: dark from day one
- **Decision:** dark, technical, minimal ("Linear-ish"); green as a *sparing* signal accent; navy as elevated surface.
- **Why:** founder asked for dark mode from day one; fits an AI-infra product and differentiates from pastel HR-tech.
- **Where:** `tailwind.config.ts` (`base`/`fg` dark scale), `HeroDark`, `ProductLanding`, `app/company`, `TopNavDark`.
- **Source:** founder.
- **Tension noted:** the content brief specifies a **light** 70/25/5 palette and the design review's top pick was **Vercel white**. Both rejected in favour of the founder's explicit dark call. (The "trust, not flash" spirit is still honoured — green stays minimal, no neon.)

### D7 — Two domains, one app (host-routed)
- **Decision:** `treelance.ai` → `/` (product); `treesos.io` → `/company`. One Next.js app.
- **Why:** product and company are distinct stories but share components; one repo is simplest.
- **Where:** `middleware.ts` (rewrites `treesos.io/` → `/company`); `app/page.tsx`, `app/company/page.tsx`. Both domains added on Vercel.
- **Source:** founder (two domains) + implementation choice.

### D8 — Trees OS model: simultaneous principles, not a phase pipeline
- **Decision:** the company is an **AI-first digital-transformation company** — **dogfood / transform / maintain**, done *all at once*, with a **"use AI to be more human"** manifesto. Treelance is "exhibit A," not "phase 1 of 4."
- **Why:** founder rejected the sequential 4-phase pipeline ("the steps are the same, we are doing them all"). The real model is: transform a traditional business to AI-first and **maintain it forever** (recurring revenue).
- **Where:** `app/company/page.tsx` (model + exhibit A + proof), `lib/content.ts` `manifesto`, dark `SpeechBlock`.
- **Source:** founder. **Supersedes S3.**

### D9 — Miki Mafia: teased, unnamed
- **Decision:** reference the investment-arm ambition as an unnamed "horizon," no "Miki Mafia" on the public site.
- **Why:** founder says it's aspirational ("if everything works out") and the brief lists it as "on hold."
- **Where:** `app/company/page.tsx` "// the horizon" section.
- **Source:** AskUserQuestion.

### D10 — Analytics: PostHog (EU) + Vercel, consent-first, dormant until keyed
- **Decision:** PostHog EU (events, replay, queryable for an agent) + Vercel Analytics/Speed Insights. Opted-out/cookieless until consent. No-ops unless `NEXT_PUBLIC_POSTHOG_KEY` is set.
- **Why:** low-traffic B2B → qualitative + funnel signal over A/B significance; PostHog is the most agent-readable (HogQL + MCP); consent-first matches the PDPA/GDPR brand promise.
- **Where:** `components/analytics/*`, `lib/analytics.ts` (event taxonomy + `data-analytics` / `data-section` convention), `app/layout.tsx`, `.env.example`.
- **Source:** AskUserQuestion.

### D11 — Analyst agent: scheduled GitHub Action, human-gated PRs
- **Decision:** a weekly Claude run reads PostHog (via MCP) + the repo and opens a **PR** proposing one improvement; a human merges. Repo files are its memory.
- **Why:** mirrors the strategy doc's Blomfield self-improving loop and the Foundation Protocol human-in-the-loop checkpoint; a brand site must never self-deploy.
- **Where:** `.github/workflows/analytics-review.yml`, `analytics/AGENT.md` (runbook), `analytics/CHANGELOG.md` (memory/attribution), `.mcp.json`.
- **Source:** AskUserQuestion.

### D12 — Certification moat: SM2 / BOSIET / BNSP / OPITO / GWO
- **Decision:** name the real, SEA-specific certifications as the differentiator ("certification-aware" matching, automated verification).
- **Why:** the content brief surfaced the actual moat (PETRONAS SM2, Indonesia BNSP) — far sharper than generic "certs current."
- **Where:** `lib/content.ts` (phase 1, payoff card, problem), `app/layout.tsx` keywords.
- **Source:** content brief.

### D13 — Real contacts
- **Decision:** `skai@treesos.io`, WhatsApp `wa.me/60122421849`, Telegram `t.me/treelance_ai_bot`, dashboard `dash.treelance.ai`, booking `calendar.app.google/2T1gmEbQ3K1CgJfp8`.
- **Why:** the brief provided real, on-brand contacts — finally a `@treesos.io` email instead of the Trees Engineering address.
- **Where:** `lib/brand.ts`; footers; demo address bar.
- **Source:** content brief. **Open:** booking-link conflict (see Open Questions).

### D14 — Scope: Malaysia + energy
- **Decision:** present Treelance as Malaysia + energy; don't over-claim SEA/France cross-border operations.
- **Why:** founder said Treelance is currently Malaysia-only, energy-only. (Cert names span MY/ID, but we don't claim cross-border operations.)
- **Where:** `ProductLanding` hero lead.
- **Source:** founder (overrides the brief's SEA/France framing).

### D15 — Keep light templates as a design-system reference
- **Decision:** retain the original light `Hero` / `SpeechBlock` / `OnePager` templates under `/templates` even though the live site is dark.
- **Why:** they document the component system (the "marketing design file" deliverable) and remain reusable.
- **Where:** `app/templates/*`, `docs/MARKETING_DESIGN.md`.
- **Source:** implementation choice.

### D16 — Compliance: Malaysian-specific, woven inline, no dedicated page
- **Decision:** drop **GDPR** from public copy; name Malaysia's real instruments — **PDPA** (Personal Data Protection Act 2010 + the **2024 amendments**: mandatory DPO, 72-hour breach notification, data-subject rights) and **AIGE** (MOSTI's National Guidelines on AI Governance & Ethics, 7 voluntary principles). Light touch, woven into existing copy — **no compliance page, no compliance section**.
- **Why:** founder wants Malaysian-first regulatory literacy that signals "we know the law" without over-emphasis. An external brief proposed a full AI-compliance *page* repositioning Trees OS as a "compliance partner / regtech advisory" spanning BNM (banking) and SC (capital markets) — **rejected**: it contradicts D8 (Trees OS = AI-first *transformation*, not compliance consulting) and D14 (Malaysia + energy only), and claiming cross-sector advisory isn't credible. Self-awarded compliance "badges" were rejected on the same grounds as the fabricated traction stats. Every regulatory fact was web-verified before publishing (a garbled regulator name would destroy the credibility the mention exists to build).
- **Where:** `components/marketing/ComplianceBand.tsx` (default items), `components/marketing/ProductLanding.tsx` (hero `compliance` prop), `lib/content.ts` (`trust` card #3 + `faq` consent item), `app/layout.tsx` (meta keywords).
- **Source:** founder + AskUserQuestion (rejecting the external compliance-expert brief's page/positioning).

---

## Rejected ideas (and why)

From the **content brief**:
- **Light 70/25/5 palette** → conflicts with D6 (dark).
- **9-page IA + "For Employers" / "For Talent" pages** → conflicts with D3 (agencies who pay).
- **Published pricing (RM 299 / 599 / 999)** → pricing is *undecided* per the meeting; don't publish invented numbers.
- **Traction stats (50+, 30,000+, 3×, 98%) and testimonials** → unverified / fabricated; omit until real (also violates the "concrete, no hype" voice).
- **Client logo bar (PETRONAS, TotalEnergies, NOV…)** → these are *Trees Engineering's* clients (D2: never referenced) and implying them as Treelance customers would be misleading.
- **"Free trial / sign up / log in" CTAs** → conflicts with D5.

From the **design review**:
- **Vercel white as the lead look / Geist font** → conflicts with D6; Geist is churn over Inter+Plex.
- **Standalone HTML mockups** → we're on Next.js (D1) on purpose.
- **Waitlist CTA** → conflicts with D5.
- *Taken from it:* shadow-border polish; validation that dark ("Linear path") was right. (The 4-phase pipeline it inspired was built then removed — see S3.)

From the **AI-compliance brief** (see D16):
- **A dedicated AI-compliance page** repositioning Trees OS as a "compliance partner / regtech advisory" → conflicts with D8 (transformation co., not compliance consulting).
- **Sector pillars (BNM RMiT banking, SC GTRM capital markets)** → conflicts with D14 (Malaysia + energy only); not credible for an energy-staffing AI startup.
- **Self-awarded trust badges ("PDPA Amendment 2024 Ready", "AI Governance Bill Prepared", "AIGE Compliant")** → unearned claims, same category as the rejected traction stats.
- **"Register with NAIO / stay current" checklist + RM1m-fine fear hooks + "Compliance Readiness Quiz"** → asserts processes/urgency off-brand to the "concrete, no hype" voice and conflicts with D5 (pilot/demo CTA).
- **Blue/teal palette** → conflicts with D6 (dark).
- *Taken from it:* the move off generic GDPR to Malaysia-specific terms (PDPA + 2024 amendments, AIGE) — verified, then woven inline. See D16.

---

## Superseded

- **S1 — First site was a single light navy/green HTML page.** Superseded by D1 (Next.js) + D6 (dark).
- **S2 — Audience "Energy HR & talent teams" (operators).** Superseded by D3 (agencies/ESNs).
- **S3 — 4-phase roadmap pipeline (Treelance → Agency OS → Network → Coordination).** Built, then removed; superseded by D8. Component `PhasePipeline` deleted.

---

## Open questions (need a founder call)

1. **Booking link** — brief uses `/2T1gmEbQ3K1CgJfp8`; earlier collateral used Quentin's `/HLfcvtmSVVJjtb7n7`. Which is canonical? (`lib/brand.ts`)
2. **Hero phrase** — keep the broad category line (D4), or restore *"The problem is not hiring. It is deployment."* (the brief's anchor) as the dark hero or a sub-hero?
3. **Real logo** — `treelance_logo_transparent.png` couldn't be fetched here (network allowlist). Add to `public/brand/` and wire into `Wordmark`/favicon.
4. **Preview** — no browser in this environment, so everything is build-verified, not eye-verified. A Vercel preview deploy is the way to validate the real pixels.
