/**
 * Marketing copy for the Treelance one-pager (energy-ESN audience).
 * Kept separate from layout so copy can be edited without touching components.
 */

export const problem = {
  kicker: "the real cost",
  title: "You don't have a sourcing problem. Your database is full — it's just dead.",
  items: [
    "The database you spent years and a fortune building is stale the day after you build it — people move, certs expire, availability changes.",
    "Every open role restarts the same manual hunt across a pool you already own: who's free, who's certified, who's even still in the sector.",
    "Manual certification checks alone eat 25–50 hours a month — cross-referencing SM2, BOSIET and BNSP by hand — time your recruiters should spend closing placements.",
  ],
  punch: "Treelance makes the database you already own work for you. Your recruiters go back to placing.",
};

export const phases = [
  {
    n: "01",
    title: "We build your matching language",
    body: "Before anything matches, Treelance maps how your desk evaluates talent — roles, skills, seniority, deal-breakers, field constraints, and the certification ontology that actually matters in energy: SM2, BOSIET, BNSP, OPITO, GWO. Your taxonomy, not a generic template. Your dashboard runs on it from day one, and it sharpens every time a recruiter accepts or rejects a profile.",
    tag: "delivered in 2 weeks · the first thing we hand you",
  },
  {
    n: "02",
    title: "We keep your candidates live",
    body: "Connect your database once — from your ATS (Boond Manager, Bullhorn and others) or a CV export. From there Treelance agents keep your candidates current — availability, certifications, mobility, notice period — through the channels they already use: WhatsApp and Telegram. No more pool that's stale the moment you need it.",
    tag: "connects to your ATS · kept current by AI agents",
  },
  {
    n: "03",
    title: "You post a role. Qualified people appear.",
    body: "The day you open a role, a Treelance agent re-engages the right candidates from your pool by email and opens a conversation: is this for you, are you available, here's what we need to put you forward. Confirmed, interested people land on your dashboard. One click invites them, they book their own slot, your hiring manager confirms.",
    tag: "from open role to booked interview · you approve every step",
  },
];

export const payoff = {
  kicker: "what lands on your dashboard",
  title: "Not CVs to screen. People who already said yes.",
  cards: [
    { h: "Confirmed interest", p: "They said yes to this specific role — no cold guessing." },
    { h: "Verified availability", p: "Free now, notice period known, start date realistic." },
    { h: "Certification-aware", p: "SM2, BOSIET, BNSP, OPITO, GWO — verified automatically. No manual checks, no expiry surprises at mobilisation." },
    { h: "Mobility & constraints checked", p: "Location, willingness to travel, contract type — already screened." },
  ],
  line: "You open the dashboard and talk to people who already said yes.",
};

export const loop = {
  kicker: "who decides",
  title: "The agents coordinate. Your recruiters decide.",
  sub: "Treelance never makes a hiring decision. The agent fleet does the work no recruiter should waste hours on — reaching out, chasing documents, checking availability and certifications. Every decision that matters stays with your team.",
  nodes: [
    { who: "ai", label: "AI agent", p: "Re-engages, screens interest, verifies availability & certs" },
    { who: "human", label: "Your recruiter", p: "Reviews the qualified shortlist, validates who to invite" },
    { who: "ai", label: "AI agent", p: "Sends invite, candidate self-books a slot" },
    { who: "human", label: "Hiring manager", p: "Confirms the interview, runs it, decides the hire" },
  ] as const,
  note: "No autonomous matching. No black box. A human approves every step that touches a person.",
};

export const trust = {
  kicker: "your database stays yours",
  title: "We make your pool live. We never pool it with anyone else's.",
  sub: "Consent isn't a compliance checkbox here. It's the architecture — and it's the reason this works. Workers engage because they chose to, and your competitive asset stays yours.",
  cards: [
    { ic: "🗂️", h: "Your candidates, your pool", p: "Your roles match against your own database — never mixed with or exposed to another agency's candidates." },
    { ic: "🔐", h: "Double opt-in", p: "Every candidate consents before a Treelance agent ever contacts them. No blasting, ever." },
    { ic: "🛡️", h: "PDPA & GDPR aligned", p: "Built on consent and transparency from the first message — not retrofitted onto it." },
    { ic: "🤝", h: "You own the relationship", p: "Treelance is the infrastructure underneath. The candidate, and the placement, are yours." },
  ],
};

export const pilot = {
  kicker: "pilot scope",
  title: "One role. Four weeks. Numbers you hold us to.",
  sub: "No platform migration, no long procurement. We run a bounded pilot on one open role and measure it against targets we agree up front.",
  deliver: [
    "Your matching taxonomy, built and validated with your team",
    "Your dashboard, live, on one chosen open role",
    "Agent re-engagement + WhatsApp pre-screening on your candidates",
    "A booked interview pipeline you control end to end",
  ],
  need: [
    "One open role you're struggling to fill",
    "The CVs you've already received for it",
    "One mapping session (45 min, recorded)",
    "A recruiter + hiring manager to validate the shortlist",
  ],
  kpis: [
    { n: "<24h", l: "From posting to first qualified shortlist" },
    { n: "−70%", l: "Recruiter hours spent screening & chasing" },
    { n: "100%", l: "Shortlisted candidates consent-verified & available" },
    { n: "0", l: "Cert surprises at mobilisation" },
  ],
  foot: "Pilot targets, agreed with you before we start — not historical averages. We measure against them in the open.",
};

export const faq = {
  kicker: "what your team will ask",
  title: "The questions ops, legal and your recruiters always raise.",
  items: [
    { q: "Who owns the candidate data?", a: "You do. Treelance is the infrastructure underneath; your candidates are your pool, you own the relationship and the placement. We never sell, share or pool your database with another agency." },
    { q: "Does our database get mixed with other agencies'?", a: "No. Your roles match only against your own candidates, plus anyone who joined Treelance directly and opted in. One agency's pool is never exposed to another." },
    { q: "Do we have to replace our ATS?", a: "No. Treelance connects to the ATS and database you already run (Boond Manager, Bullhorn and others) and layers on top. No rip-and-replace, no migration project." },
    { q: "Is candidate consent covered?", a: "Double opt-in before any agent makes contact, PDPA & GDPR aligned by design. Every candidate can update or delete their data at any time." },
    { q: "Can the AI make a wrong hire?", a: "It can't make a hire at all. The agents pre-filter and surface; a human approves every invitation and every decision. No autonomous matching." },
    { q: "Will our recruiters resist it?", a: "It removes the part they hate — chasing availability and certs — and hands back the part they're paid for: judgement, negotiation and relationships. It's a tool for them, not a replacement." },
  ],
};

/** Company manifesto (Trees OS) — "use AI to be more human". */
export const manifesto = {
  eyebrow: "manifesto",
  title: "Use AI to be more human.",
  lead: "Most companies bolt AI onto a broken process and call it transformation. We think that's backwards. The point of automating the rote work isn't to remove people — it's to give them back the work only people can do: judgement, relationships, care.",
  body: [
    "Trees OS is an AI-first company in the literal sense. We don't have an AI strategy; AI is the operating system. Our delivery, our research, our internal ops — and the website you're reading — run on agents, with humans placed exactly where judgement belongs.",
    "We started with energy staffing because it's the perfect test: a high-stakes, relationship-heavy business drowning in coordination. Treelance takes the coordination off recruiters' desks so they can do the human part — putting the right person in the right role, in real time.",
    "Then we stay. We don't hand over a tool and leave; we run the systems we build and improve them every week. Transformation isn't a project with an end date. It's a relationship.",
    "If it works here, it works elsewhere. The same playbook applies anywhere a traditional business is ready to be reinvented — and, in time, we'll back the people doing exactly that.",
  ],
  pullQuote: "We don't sell AI. We rebuild businesses to run on it — and we run on it first.",
  signoff: { name: "Trees OS", role: "AI-first digital transformation" },
};

/** Long-form narrative used by the Speech template. Condensed from the strategy thesis. */
export const speech = {
  eyebrow: "the thesis",
  title: "Recruitment isn't a text problem. It's a deployment problem.",
  lead: "The energy sector doesn't struggle to find people in the abstract. It struggles to deploy the right person — verified, available, certified — before the window closes. Every existing tool optimises for the wrong thing.",
  body: [
    "Agencies sit on databases worth millions: thousands of engineers placed, screened, and known. But that asset decays the moment it's built. People rotate off projects, certifications lapse, mobility changes. A database is a photograph of a workforce that has already moved on.",
    "The first wave of \"AI recruitment\" made this worse, not better. It treated matching as a text-similarity problem — parsing CVs, embedding job descriptions, ranking by keyword overlap. But a senior commissioning engineer who thrived on a deepwater FPSO and one who barely survived a brownfield gas plant read identically on paper. Text similarity is not contextual fit.",
    "The real question was never \"how similar is this CV to this role?\" It is \"what is the probability this person succeeds in this role, on this project, under these conditions — and are they even available right now?\" That is a prediction problem, and it runs on living data, not static documents.",
    "So we built the opposite of a job board. Treelance is a coordination layer: it makes your database legible to AI, keeps every candidate current through the channels they already use, and runs closed loops that learn from every placement — successful or not. The agents do the coordination no human should waste hours on. The judgement stays human.",
  ],
  pullQuote: "The problem is not hiring. It is deployment.",
  signoff: { name: "Trees OS", role: "Building Treelance for the energy sector" },
};
