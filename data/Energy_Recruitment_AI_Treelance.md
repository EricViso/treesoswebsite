# The Energy Recruitment Crisis: An AI-Systems Approach

## Integrating Blomfield's Self-Improving Loops and LeCun's World Models into Treelance's Agentic Matching Architecture

**Author:** Skaï — Research prepared for Quentin Cloarec, Trees Engineering / Treelance.ai  
**Date:** 2026-05-25  
**Classification:** Internal Strategy Document  

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [The Structural Crisis in Energy Recruitment](#2-the-structural-crisis-in-energy-recruitment)
3. [Why Traditional Staffing Fails the Energy Sector](#3-why-traditional-staffing-fails-the-energy-sector)
4. [Blomfield's Framework: The Self-Improving Company](#4-blomfields-framework-the-self-improving-company)
5. [LeCun's Frontier: World Models Beyond LLMs](#5-lecuns-frontier-world-models-beyond-llms)
6. [Synthesis: Treelance as an Agentic Recruitment Super-Connector](#6-synthesis-treelance-as-an-agentic-recruitment-super-connector)
7. [Architecture Proposal: Self-Improving Talent Loops](#7-architecture-proposal-self-improving-talent-loops)
8. [Strategic Recommendations](#8-strategic-recommendations)
9. [References](#9-references)

---

## 1. Executive Summary

The global energy sector faces a human capital crisis of unprecedented proportions. Employment has surged to 76 million workers (IEA, 2025), yet more than half of energy employers report critical hiring bottlenecks. The workforce is simultaneously aging (48% aged 45+ in oil and gas), resistant to relocation (mobility dropped from 89% to 75% in four years), and losing talent to Big Tech's AI energy hiring spree (+30% above pre-2022 levels).

Existing recruitment models — commission-based agency placements, manual CV matching, job boards — are structurally incapable of solving this. They optimise for transaction volume, not system-level talent allocation.

This document synthesises two frameworks that together define a new approach:

**Tom Blomfield's** thesis of the **self-improving company** — converting tacit organisational knowledge into legible, recursive AI loops (sensor → policy → tools → quality gate → learning → auto-improvement). Applied to recruitment, this means treating the talent pipeline not as a CRM pipeline to be managed, but as a closed-loop system that learns from every hire, every mismatch, every skill gap.

**Yann LeCun's** argument that **LLMs alone are insufficient** for human-level intelligence — that genuine competence requires **world models** (Joint Embedding Predictive Architectures) capable of predicting consequences in abstract representation spaces. Applied to recruitment, this means matching is not a text-similarity problem (what most AI staffing tools do) but a **predictive problem**: will this person succeed in this role, on this project, in this organisation, under these conditions?

**Treelance** sits at the intersection. It is not another job board. It is an **agentic super-connector** — a system that makes energy organisations *legible* to AI, maintains a durable skill-and-context map of the talent ecosystem, and runs recursive matching and learning loops that improve with every failed or successful placement.

---

## 2. The Structural Crisis in Energy Recruitment

### 2.1 Demographic Time Bomb

The 2026 Global Energy Talent Index (GETI), produced by Airswift, reveals an industry on the edge of a demographic cliff:

| Metric | 2022 | 2025 | 2026 | Trend |
|--------|------|------|------|-------|
| Workers aged 45+ (traditional energy) | ~42% | ~46% | **48%** | ↑ Accelerating |
| Workers aged 25-34 (traditional energy) | ~24% | ~21% | **19%** | ↓ Shrinking |
| Hiring managers actively recruiting graduates | — | ~40% | **~33%** | ↓ Declining |
| Professionals willing to relocate globally | **89%** | 80% | **75%** | ↓ Collapsing |
| Professionals reporting pay increases (prior year) | — | 60% | **50%** | ↓ Slowing |
| AI usage in daily work | — | ~30% | **~45%** | ↑ Rising but uneven |

**Sources:** GETI 2026 (Airswift / Energy Jobline); World Oil; IndexBox

**Key insight:** The industry is not just losing older workers to retirement — it is failing to recruit their replacements. Only one-third of hiring managers actively cultivate a graduate pipeline. The consequence is not a short-term squeeze but a structural deficit that compounds annually.

### 2.2 The IEA's Warning

The International Energy Agency's World Energy Employment 2025 report quantifies the scale:

- **76 million** energy workers globally in 2024, up 5 million from 2019
- **2.4 energy workers** nearing retirement in advanced economies for every **1 entrant under 25**
- Nuclear and grid professions face ratios of **1.7:1 and 1.4:1** respectively (retirements to new entrants)
- Applied technical roles (electricians, pipefitters, line workers, plant operators, nuclear engineers) have added **2.5 million positions since 2019** and now represent **over half** of the global energy workforce
- To prevent the skills gap from widening further by 2030, the number of new qualified entrants must rise by **40%** — requiring an additional **$2.6 billion/year** in training investment globally

The IEA is clear: "Left unaddressed, these shortages could slow progress, raise costs and weaken energy security."

### 2.3 Big Tech's Talent Poaching

A third dynamic compounds the first two: Big Tech is systematically poaching energy professionals.

CNBC (January 2026) reports:
- Energy-related hiring by tech companies jumped **34% YoY** in 2024, and remained **30% higher** than pre-AI (2022) levels through 2025
- **Amazon**: 605 energy-related hires (including AWS)
- **Microsoft**: 570+ additions since 2022
- **Google/Alphabet**: 340 hires since 2022, plus the $4.75B acquisition of Intersect

The driver is simple: AI data centres accounted for **1.5% of global electricity consumption** in 2024, growing **12% YoY** over five years (IEA). Tech companies need energy experts — procurement, markets, grid interface, strategy — and they can outbid traditional energy employers.

### 2.4 The South-East Asian Amplifier

For Treelance's home market — South-East Asia (Malaysia, Indonesia, Thailand, Vietnam) — these global trends are amplified by:

1. **Rapid energy infrastructure build-out**: CCGT plants, FPSO projects, solar farms, grid modernisation across the region
2. **Concentration of O&G talent**: Malaysia alone hosts major IOCs (TotalEnergies, Shell, PETRONAS, ExxonMobil), EPCC contractors (Technip, Saipem, MMC/Doris, NOV), and a dense service-company ecosystem (Bureau Veritas, SBM, etc.)
3. **Brain drain to renewables and tech**: Experienced Malaysian O&G engineers are lured by higher salaries in renewables (solar O&M, battery storage) and tech (data centres mushrooming in Johor and Cyberjaya)
4. **Limited graduate pipeline**: Fewer Malaysian STEM graduates choose traditional energy over tech and finance

This creates the precise conditions that Treelance was designed to address: a fragmented, high-demand, low-supply talent market where speed and precision of matching directly determine project delivery timelines.

---

## 3. Why Traditional Staffing Fails the Energy Sector

### 3.1 The Agency Model's Structural Limitations

The dominant model — commissioned recruiters working on contingency or retained search — has fundamental flaws:

**Information asymmetry.** Agencies know CVs but not projects. They optimise for "can this person do the job" (skills matching) but not "will this person succeed in this specific project environment" (contextual fit). Energy projects are high-stakes, long-duration, and culturally specific (FPSO offshore, brownfield refinery, greenfield CCGT). A mismatch costs months and hundreds of thousands of dollars.

**No learning loop.** Each placement is a discrete transaction. When a consultant leaves after six months, the agency doesn't systematically learn why. Feedback from hiring managers is ad hoc, unstructured, and rarely fed back into matching models. The agency's "intelligence" is tribal — it lives in individual recruiters' heads, not in the system.

**Volume over quality.** Contingency models incentivise volume of CVs submitted, not quality of matches. The agency's revenue comes from placements, not outcomes. Retained search is marginally better but remains person-to-person, not system-to-system.

**No skill ecosystem view.** No single agency maintains a real-time map of the energy talent ecosystem: who is available, who is rotating off a project, what skills are emerging, which certifications are expiring, where salary expectations are heading. Each agency sees only its own candidate pool.

### 3.2 The "AI Staffing" Trap

Many startups claim to AI-ify recruitment. A critical examination shows most fall into one of two traps:

**LLM-parroting.** They use LLMs to summarise CVs or generate job descriptions. This adds syntactic polish but no structural improvement. The fundamental problem — matching people to contexts — is not a text-generation task.

**Keyword matching 2.0.** They replace boolean search with vector embeddings. The algorithm finds "pipelines engineer" vs "pipeline engineer" but cannot distinguish between a senior pipeline engineer who thrived on a deepwater FPSO and one who barely survived a brownfield gas plant. Text similarity ≠ contextual fit.

**The fundamental error** these systems make is the same one Yann LeCun identifies in the broader AI debate: they treat an intelligence problem (matching) as a language problem (text similarity). They lack a world model — an ability to simulate, predict, and learn from outcomes.

---

## 4. Blomfield's Framework: The Self-Improving Company

### 4.1 Core Thesis

Tom Blomfield (Group Partner, Y Combinator; co-founder of Monzo and GoCardless) argues that AI should not make people 20-30% more productive. It should fundamentally reimagine what a company *is*.

His core mechanism:

```
Sensor → Policy → Tools (deterministic APIs) → Quality Gate → Learning → (loop back)
```

Every loop generates data. Every data point improves the next iteration. The system monitors failures, writes fixes, opens merge requests, and deploys improvements autonomously.

### 4.2 The Legibility Imperative

The prerequisite for self-improving loops is **organisational legibility**: "Everything needs to be recorded so that it can be legible to the AI."

Blomfield's concrete examples:
1. An agent that answers partner queries using database tools, with a monitoring agent that detects failures, codes fixes, and merges them so the next query succeeds
2. An agent that scans product analytics, designs and runs A/B tests, and deploys winners autonomously
3. A 150-page "user manual" regenerated monthly from recorded office hours

**The principle**: tacit knowledge (emails, Slack, docs, meetings, product telemetry) must be converted into legible context that AI can act on. What remains tacit is invisible and unusable.

### 4.3 Implications for Recruitment

Applied to talent, Blomfield's framework demands:

1. **Legible candidate context.** Not just a CV (a static, self-reported document full of survivorship bias) but a living context: past project feedback, performance data, communication patterns, adaptability signals, cultural fit indicators.

2. **Legible role context.** Not just a job description (a wish list written by HR), but the actual operating context: team dynamics, project stage, management style, stress factors, the reasons the *previous* person in this role succeeded or failed.

3. **Closed matching loops.** Each placement generates feedback that improves the next match. The system doesn't just place people — it learns why some placements work and others don't, and adjusts its matching algorithm in real time.

4. **Autonomous improvement.** When the system detects a pattern of mismatches (e.g., "engineers from background X fail systematically on project type Y"), it should adjust policies, update matching criteria, and retrain its models without human intervention.

**This is Treelance's north star.**

---

## 5. LeCun's Frontier: World Models Beyond LLMs

### 5.1 The Fundamental Critique

Yann LeCun (Chief AI Scientist, Meta; founder, Amilabs) argues that LLMs are "a revolution for text manipulation but not a royal road to human-level intelligence."

His critique:
- LLMs are **associative memories**, not reasoning engines
- They lack **physical common sense** — hence absurd answers to simple situational questions
- They are **prohibitively expensive at inference** for real-time, high-frequency decisions
- Scaling laws are hitting diminishing returns for capabilities that matter (planning, prediction, causal reasoning)

### 5.2 World Models and JEPA

LeCun's alternative: **World Models** built on **Joint Embedding Predictive Architectures (JEPA)** .

Instead of predicting the next token (LLM approach), JEPA predicts consequences of actions in an **abstract representation space** — not pixel by pixel, but at the level of meaningful features.

Amilabs has trained video models on "about a century of video" and raised ~$1 billion for this approach. The goal: systems that can **plan and predict their actions** — for robotics, predictive maintenance, complex system control.

### 5.3 Why This Matters for Matching

Recruitment matching is fundamentally a **prediction problem**, not a classification or text-retrieval problem:

- **Question:** Will this candidate succeed in this role?
- **Data available:** CV, interviews, references, past performance (sparse, unstructured)
- **Context variables:** Team dynamics, project stage, management style, organisational culture, compensation, location, timing
- **Output:** A prediction about a future state (performance after 6 months) based on observed past states

**Current AI tools address the wrong question.** They answer: "How textually similar is this CV to this job description?" The real question is: "What is the probability that this configuration of person x, role y, and context z produces a successful outcome?"

A true matching system would need a **world model of the talent ecosystem** — an abstract representation space where it can simulate candidate-role-context combinations and predict outcomes. This is precisely what LeCun describes, applied to human capital rather than video frames.

---

## 6. Synthesis: Treelance as an Agentic Recruitment Super-Connector

### 6.1 The Conceptual Stack

Treelance sits at the intersection of three layers:

```
┌─────────────────────────────────────────────┐
│         BLOMFIELD LAYER                      │
│  Self-improving loops making the             │
│  organisation legible to AI                  │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐ │
│  │ Sensor   │→  │ Policy   │→  │ Tools    │ │
│  └──────────┘   └──────────┘   └──────────┘ │
│         ↑                        ↓            │
│  ┌──────────┐   ┌──────────┐                  │
│  │ Learning │←  │Quality   │                   │
│  └──────────┘   │ Gate     │                   │
│                 └──────────┘                   │
├─────────────────────────────────────────────┤
│         LECUN LAYER                           │
│  Predictive world models in abstract          │
│  representation space                         │
│  ┌──────────────────────────────────────┐    │
│  │  Embedding → Prediction → Outcome     │    │
│  │  (Not pixel-by-pixel / token-by-token) │    │
│  └──────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│         TREELANCE LAYER                       │
│  Agentic matching for the energy sector       │
│  "AI Super Connector" on WhatsApp + Telegram  │
└─────────────────────────────────────────────┘
```

### 6.2 Design Principles

**P1 — Context legibility.** Every interaction with Treelance (WhatsApp messages, skill updates, project feedback, rate negotiations) must be recorded, structured, and fed into the matching model. Tacit knowledge becomes legible context.

**P2 — Predictive matching.** Matching is not keyword similarity. It is a prediction problem solved in an embedding space where candidates, roles, and contexts are jointly encoded. The system learns from outcomes (hire success, tenure, performance) to improve predictions.

**P3 — Closed feedback loops.** Every placement generates a feedback signal. The system does not just place and forget — it monitors, learns, and adjusts. Unsuccessful placements are as valuable as successful ones (failure data trains better boundaries).

**P4 — Recursive improvement.** The system improves itself. As Blomfield's loops show, the meta-loop — detecting mismatches, updating policies, retraining models — operates autonomously. Human oversight is reserved for novel, high-stakes, or ethical edge cases.

**P5 — Multi-modal representation.** Following LeCun, the system cannot rely solely on text embeddings. Energy talent data includes certifications (structured), project histories (semi-structured), interview transcripts (unstructured text), performance reviews (ratings + text), and availability signals (time-series). The matching model must handle heterogeneous data types in a unified embedding space.

---

## 7. Architecture Proposal: Self-Improving Talent Loops

### 7.1 The Core Loop

```
[CANDIDATE ENTERS]
       │
       ▼
┌──────────────────┐
│   SENSOR         │ ← Ingest CV, WhatsApp conversation, skill claims,
│                  │    availability, location preferences, salary expectations,
│                  │    project history, certifications, references
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   POLICY         │ ← Matching rules, priority weights, company preferences,
│                  │    compliance filters (visa, certifications, security),
│                  │    pricing tiers, urgency factors
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   MATCHING       │ ← Embedding-based predictive matching:
│   ENGINE         │    candidate_embedding ⊕ role_embedding ⊕ context_embedding
│   (TOOLS)        │    → outcome probability distribution
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   QUALITY GATE   │ ← Human-in-the-loop validation (for novel/high-stakes),
│                  │    automated confidence threshold for low-risk matches,
│                  │    compliance & eligibility verification
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   PLACEMENT      │ ← Introduction, interview coordination, offer management,
│                  │    contract generation, onboarding
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   LEARNING       │ ← Collect outcome signals:
│                  │    - Was the candidate hired? (Y/N)
│                  │    - How long did they stay? (months)
│                  │    - Performance rating at 3/6/12 months
│                  │    - Hiring manager satisfaction score
│                  │    - Candidate satisfaction score
│                  │    → Retrain embedding space, update policies
└────────┬─────────┘
         │
         ▼
    [LOOP RETURNS TO POLICY]
```

### 7.2 The World Model Component

Following LeCun, the matching engine is not a text-retrieval system. It is a **predictive model** operating in an abstract embedding space:

```
Input space:
├── Candidate features: skills graph, experience timeline, certs, location,
│   salary history, past placement outcomes (for returning candidates),
│   communication style embeddings, reference scores
├── Role features: required skills graph, seniority level, project type,
│   location (offshore/onshore/office), rotation pattern, duration,
│   team size, reporting structure, urgency
├── Context features: client company culture embedding, team composition,
│   project stage (FEED / execution / commissioning / operations),
│   market conditions (supply/demand balance for this skill set),
│   seasonality, competing offers

Joint embedding space:
├── Candidate ← F_candidate(C)
├── Role ← F_role(R)
├── Context ← F_context(C, R, Market)
│
Prediction layer:
├── P(success | candidate, role, context) → scalar
├── P(tenure ≥ X months | candidate, role, context) → scalar
├── P(performance ≥ threshold | candidate, role, context) → scalar
├── Recommended offer range → tuple (min, mid, max, currency)

Output: ranked list of candidate-role pairs with confidence scores,
       plus explanation (which features drove the match)
```

The model is continuously retrained on outcome data. Each completed or failed placement provides a new training example. The embedding function F learns to place similar candidates (in terms of *outcomes*, not text) near each other in the joint space.

### 7.3 Auto-Improvement Pipeline

Following Blomfield, the system detects and fixes its own weaknesses:

1. **Pattern detection.** "Engineers from background X consistently underperform on project type Y after 3 months."
2. **Policy update.** The system generates a proposed policy change: "De-prioritise matches between X and Y unless additional vetting step Z is completed."
3. **Review.** Human operator approves or rejects (with reason).
4. **Deployment.** Policy change takes effect. All subsequent matches are affected.
5. **Monitor.** After 6 months: "Did the policy change improve outcomes?" If yes → lock. If no → roll back and try alternative.

This is the exact mechanism Blomfield describes: sensor → policy → tools → quality gate → learning.

---

## 8. Strategic Recommendations

### 8.1 Immediate (Next 90 Days)

**R1 — Build the sensor layer first.** Before any matching happens, Treelance must make the energy talent ecosystem *legible*. This means:
- Systematic ingestion of CVs from Trees Engineering's existing database (~thousands of energy professionals)
- WhatsApp/TG conversation logging (with consent) — every interaction becomes training data
- Structured collection of placement outcomes from Trees Engineering's historical records
- Integration with client HR systems for feedback data

**R2 — Stop treating matching as a text problem.** Replace keyword/embedding-based candidate screening with a predictive model architecture. Start simple: logistic regression on engineered features (experience overlap, certification match, location compatibility, past tenure at similar clients). Iterate toward full JEPA-style world model as data accumulates.

**R3 — Close the feedback loop.** Implement systematic outcome tracking for every placement, whether successful or not. Define metrics: time-to-hire, tenure, performance rating at 3 months, hiring manager satisfaction, candidate satisfaction. This data is the fuel for the self-improving loop.

### 8.2 Medium-Term (3-12 Months)

**R4 — Build the auto-improvement pipeline.** Implement the Blomfield-style meta-loop: pattern detection → policy generation → human review → deployment → monitoring → rollback mechanism.

**R5 — Develop the talent ecosystem world model.** As placement data accumulates (target: hundreds of data points), begin training the predictive matching model in earnest. The embedding space should capture not just individual skills but **project-type fit** (deepwater vs brownfield vs gas plant), **cultural fit** (IOC vs NOC vs EPC contractor), and **stability patterns** (which candidates thrive in long rotations, which burn out).

**R6 — Defend against Big Tech poaching.** Use Treelance's data to identify retention risk signals (salary gaps, competitor hiring sprees, mobility patterns) and offer proactive retention recommendations to clients — before the engineer has already resigned.

### 8.3 Long-Term (12+ Months)

**R7 — From matching to prediction.** Treelance evolves from a recruitment tool to a **talent market intelligence platform**. Clients pay not just for placements but for predictions: "Which skills will be in shortest supply in Malaysia's energy sector in Q3 2027?" "What compensation adjustment is needed to retain our top 20 pipeline engineers?"

**R8 — The self-improving talent company.** The ultimate expression of Blomfield's vision for the energy sector: a company where talent acquisition is not an HR function but a closed-loop autonomous system. Sensor → match → deploy → learn → improve. Human recruiters are not eliminated but elevated — they handle the novel, high-stakes, emotional edge cases (co-founder breakups, sensitive negotiations, ethical dilemmas). Everything else runs on loops.

---

## 9. References

### Primary Sources

1. **Blomfield, T.** (2026). "How to Build a Self-Improving Company with AI." Y Combinator / YouTube. [Link](https://youtu.be/X_JsIHUfUjc)
2. **LeCun, Y.** (2026). "Why LLMs Aren't Enough and What Amilabs Is Building." Amilabs / YouTube. [Link](https://youtu.be/l3m3RZNgDdw)

### Industry Data

3. **Airswift / Energy Jobline.** (2026). *Global Energy Talent Index (GETI) 2026.* 10th annual workforce trends report.
4. **International Energy Agency.** (2025). *World Energy Employment 2025.* [Link](https://www.iea.org/reports/world-energy-employment-2025)
5. **IEA.** (2025). "Energy employment has surged, but growing skills shortages threaten future momentum." News release. [Link](https://www.iea.org/news/energy-employment-has-surged-but-growing-skills-shortages-threaten-future-momentum)
6. **McKinsey & Company.** (2025). "Talent Squeeze: Planning for the Energy Sector's Talent Transition." [Link](https://www.mckinsey.com/industries/oil-and-gas/our-insights/talent-squeeze-planning-for-the-energy-sectors-talent-transition)
7. **CNBC.** (2026). "Big Tech Is Poaching Energy Talent to Fuel Its AI Ambitions." January 14. [Link](https://www.cnbc.com/2026/01/14/big-tech-google-microsoft-energy-hiring-ai.html)
8. **ManpowerGroup.** (2025). *Talent Shortage Survey.* 74% of energy employers report talent shortages.
9. **U.S. Department of Energy.** (2025). *21st Century Energy Workforce Advisory Board Report.* 76% of employers experienced hiring difficulty.

### Technical

10. **LeCun, Y.** (2022). "A Path Towards Autonomous Machine Intelligence." Open Review, Vol. 1.
11. **Blomfield, T.** (2023). "Why Investors Are Banking on Generative AI." Founders Forum. [Link](https://ff.co/tom-blomfield-generative-ai/)
12. **Airswift.** (2025). *Global Energy Talent Index 2025 — Energy Sector Hiring Intentions.*
13. **IEA.** (2025). "Energy and AI: Energy Demand from AI." *World Energy Outlook 2025.*

---

*End of document. Prepared for internal strategy discussion at Trees Engineering / Treelance.ai.*
