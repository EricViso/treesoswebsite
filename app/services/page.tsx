import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container, Button } from "@/components/marketing/primitives";
import { RootDivider } from "@/components/marketing/RootDivider";
import { ForestNode } from "@/components/marketing/ForestNode";

export const metadata: Metadata = {
  title: `Services — ${brand.company}`,
  description:
    "Trees OS builds custom AI agents on owned infrastructure. Real 1-to-1 consulting, full-stack delivery, and ongoing maintenance — not one-click deploys.",
};

const services = [
  {
    tag: "architecture",
    title: "Custom Agent Architecture",
    subtitle: "Stack, not a script",
    body: [
      "We design and deploy a full agent system on your infrastructure — VPS, database, LLM endpoint, email, messaging integrations, and a 1Password-managed credential layer. Your agent is a first-class member of your organisation, not a rented chatbot.",
      "Every deployment is self-hosted on your infrastructure or ours. API keys, conversation history, and business context never leave your control. The agent has persistent memory, procedural skill creation, and a governor layer that decides what it can do alone vs. what escalates to you.",
    ],
    includes: [
      "Self-hosted VPS (Hetzner / OVH / your stack)",
      "Persistent database (SurrealDB / Postgres)",
      "LLM endpoint (OpenRouter / Anthropic / Ollama local)",
      "Multi-platform messaging (Telegram, WhatsApp, Signal, email)",
      "1Password-managed credential layer",
      "Governor & approval loops",
      "Monitoring & uptime alerts",
    ],
    price: "Project-based, from RM 20k",
  },
  {
    tag: "treelance",
    title: "Treelance",
    subtitle: "Energy workforce orchestration — live today",
    body: [
      "Our flagship transformation. Treelance connects to the candidate database your energy staffing agency already owns, keeps it live through AI agents on WhatsApp & Telegram, and turns every open role into a shortlist of available, certification-verified people in real time.",
      "Built on the same architecture we'd build for any client. SM2, BOSIET, BNSP, OPITO, GWO — all verified live. Running on our infrastructure, maintained and improved weekly.",
    ],
    includes: [
      "AI agent fleet: matching, outreach, dashboard",
      "WhatsApp & Telegram candidate interaction",
      "Real-time certification verification",
      "Live dashboard (dash.treelance.ai)",
      "Weekly improvements & monitoring",
    ],
    price: "Monthly retainer + per-placement",
    href: "https://treelance.ai",
  },
  {
    tag: "consulting",
    title: "AI Transformation Consulting",
    subtitle: "Diagnose, design, build",
    body: [
      "Not a workshop that collects dust. We spend real time inside your operations, identify the coordination bottlenecks that an agent system can eliminate, and design a custom architecture that fits your regulatory, security, and cultural constraints.",
      "The deliverable is a working system, not a slide deck. We build the agent, deploy it on your infrastructure, and hand over a running system with a maintenance cadence.",
    ],
    includes: [
      "Operations audit & bottleneck mapping",
      "Custom agent architecture design",
      "Full implementation & deployment",
      "Governor rules & escalation design",
      "Team training & documentation",
      "Ongoing maintenance & improvement cycle",
    ],
    price: "Engagement-based, from RM 15k",
  },
  {
    tag: "maintain",
    title: "Infra & Maintenance",
    subtitle: "We stay so you don't have to",
    body: [
      "We don't ship and leave. Every system we build runs on a maintenance cadence: weekly improvements, uptime monitoring, model updates, security patches, and performance tuning. The agent keeps getting better because we keep working on it.",
      "Includes infrastructure-as-code so the entire stack is reproducible, auditable, and can be handed over to your team at any point.",
    ],
    includes: [
      "Weekly agent improvements & skill updates",
      "Uptime monitoring & alerting (24/7)",
      "LLM model version management",
      "Security patches & credential rotation",
      "Infrastructure-as-code (Terraform / Docker)",
      "Quarterly architecture reviews",
    ],
    price: "From RM 3k/mo",
  },
];

const whyUs = [
  {
    title: "We live on the stack we sell",
    body: "Every part of Trees OS runs on the same agent architecture we build for clients. Delivery, research, ops, even this website. We don't recommend what we haven't lived.",
  },
  {
    title: "Self-hosted, not rented",
    body: "Your agent lives on your infrastructure — your VPS, your database, your LLM endpoint. No shared tenancy, no data leaving your boundary, no surprise pricing changes.",
  },
  {
    title: "Full stack, not a wrapper",
    body: "LLM, database, messaging, credentials, monitoring — we engineer the whole system. Not a chatbot with a pricing page. An agent that can actually send emails, update records, and schedule meetings.",
  },
  {
    title: "Real people, real continuity",
    body: "You work directly with the engineers building the system. The same people who built Treelance build your agent. And we stay on the other end of the chat after deployment.",
  },
];

export default function Services() {
  return (
    <main className="bg-base min-h-screen">
      <TopNavDark variant="company" />

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-subtle bg-base py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(90%_90%_at_50%_0,#000_0%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[6%] -top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.14)_0%,transparent_60%)] blur-2xl"
        />
        <Container width="wide">
          <div className="mb-4 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            <ForestNode size={11} className="mr-1.5 -mt-0.5" />
            Services
          </div>
          <h1 className="font-display max-w-[18ch] text-[clamp(30px,4.6vw,48px)] font-black leading-[1.04] tracking-tightest text-fg">
            We build AI agents. Real ones, on your infrastructure.
          </h1>
          <p className="mt-4 max-w-[56ch] text-[16.5px] text-fg-muted">
            Not one-click deploys. Not a wrapper around an API. A full agent system — persistent memory,
            owned infrastructure, custom tooling, real governance — built for your specific operation.
            We design it, deploy it, maintain it, and stay on the other end of the message.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href={brand.links.book} external track="booking:services-hero">
              Book a consultation →
            </Button>
            <Button href="/company" variant="ghost">
              How we work ↗
            </Button>
          </div>
        </Container>
      </header>

      {/* Service cards */}
      <section className="py-20">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((s, i) => (
              <div
                key={s.tag}
                className="relative flex flex-col rounded-2xl border border-subtle bg-base-raised p-8 shadow-[0_0_0_1px_rgba(var(--color-card-shadow-r), var(--color-card-shadow-g), var(--color-card-shadow-b), 0.04),0_2px_10px_rgba(0,0,0,0.45)]"
              >
                {/* tag */}
                <div className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-moss">
                  // {s.tag}
                </div>

                <h2 className="font-display text-[22px] font-extrabold tracking-[-0.01em] text-fg">
                  {s.title}
                </h2>
                <div className="mt-1 text-[14px] font-medium text-fg-muted">{s.subtitle}</div>

                <div className="mt-4 space-y-3 text-[14px] leading-[1.65] text-fg-muted">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {/* Includes */}
                <div className="mt-6">
                  <div className="mb-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fg-faint">
                    What&apos;s included
                  </div>
                  <ul className="space-y-1.5">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13.5px] text-fg-muted"
                      >
                        <span className="mt-0.5 shrink-0 font-mono text-[11px] text-moss">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + CTA */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-subtle pt-5">
                  <span className="font-mono text-[12px] font-semibold text-moss">
                    {s.price}
                  </span>
                  <a
                    href={s.href ?? brand.links.book}
                    {...(s.href || true ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    data-analytics={`services:${s.tag}`}
                    className="rounded-lg bg-moss px-4 py-2 text-[13px] font-semibold text-[#0e2a0c] no-underline hover:brightness-105"
                  >
                    {s.tag === "treelance" ? "See Treelance ↗" : "Talk to us →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our edge */}
      <section className="relative overflow-hidden bg-base-rail py-20">
        <RootDivider className="absolute top-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.12)_0%,transparent_62%)] blur-2xl"
        />
        <Container width="wide" className="relative">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // why us
          </div>
          <h2 className="font-display mt-3 max-w-[20ch] text-[clamp(24px,3.6vw,38px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            We sell the system, not the instance.
          </h2>
          <p className="mt-4 max-w-[56ch] text-[16px] leading-[1.6] text-fg-muted">
            Most companies selling &ldquo;AI agents&rdquo; are selling a one-click deploy of open-source
            software on a shared VPS. That&rsquo;s not a service. That&rsquo;s a self-checkout lane.
          </p>
          <p className="mt-2 max-w-[56ch] text-[16px] leading-[1.6] text-fg-muted">
            We build a custom architecture for your specific operation, deploy it on your
            infrastructure, and stay on the other end of the chat. The agent works because the
            system underneath it works — and we build the whole thing.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title}>
                <div className="mb-2 h-[3px] w-8 rounded-full bg-moss" />
                <h3 className="text-[17px] font-bold tracking-[-0.01em] text-fg">{w.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-fg-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20">
        <Container width="wide">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // how it works
          </div>
          <h2 className="font-display mt-3 max-w-[20ch] text-[clamp(24px,3.6vw,38px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            From conversation to running system.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Diagnose",
                body: "We spend time inside your operation — calls, documents, access patterns — and identify the coordination bottlenecks that an agent system can eliminate.",
              },
              {
                step: "02",
                title: "Design",
                body: "We design a custom architecture: agent topology, database schema, LLM routing, governor rules, integration surfaces. You approve the plan before we write a line of code.",
              },
              {
                step: "03",
                title: "Deploy",
                body: "We provision your infrastructure, deploy the agent stack, connect your tools, and test every surface. The agent is live on your VPS, on your domain, under your control.",
              },
              {
                step: "04",
                title: "Maintain",
                body: "We stay. Weekly improvements, model updates, security, monitoring. The agent gets better every week because we keep working on it. You focus on the decisions only you can make.",
              },
            ].map((phase) => (
              <div key={phase.step}>
                <div className="font-mono text-[13px] font-bold text-moss">{phase.step}</div>
                <h3 className="font-display mt-2 text-[18px] font-extrabold tracking-[-0.01em] text-fg">
                  {phase.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-fg-muted">{phase.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-base py-20 text-center">
        <RootDivider className="absolute top-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.16)_0%,transparent_60%)] blur-2xl"
        />
        <Container>
          <h2 className="font-display relative mx-auto max-w-[22ch] text-[clamp(24px,3.6vw,36px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            Ready to stop routing and start building?
          </h2>
          <p className="relative mx-auto mt-4 max-w-[50ch] text-[16.5px] text-fg-muted">
            Everyone sells agents. We sell the architecture that makes them actually work.
            Book a call and let&apos;s find the bottleneck in your operation.
          </p>
          <div className="relative mt-7 flex justify-center gap-3">
            <Button href={brand.links.book} external track="booking:services-final">
              Book a consultation →
            </Button>
            <Button href="/blog" variant="ghost">
              Read our blog ↗
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-subtle bg-base-rail py-9 text-center text-[13px] text-fg-faint">
        <RootDivider className="absolute top-0" />
        <Container width="wide">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/images/trees-os-logo.png"
              alt=""
              width="24"
              height="24"
              className="shrink-0 object-contain"
              aria-hidden
            />
            <div className="font-display text-[17px] font-black tracking-[-0.01em] text-fg">{brand.company}</div>
          </div>
          <div className="my-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-moss">
            AI-first digital transformation
          </div>
          <div className="mt-3">
            <a
              href={`mailto:${brand.links.email}`}
              className="mx-2 text-fg-muted no-underline hover:text-fg"
              data-analytics="outbound:email"
            >
              {brand.links.email}
            </a>
            ·
            <a
              href={brand.links.linkedin}
              className="mx-2 text-fg-muted no-underline hover:text-fg"
            >
              LinkedIn
            </a>
            ·
            <a
              href={brand.sites.product}
              className="mx-2 text-fg-muted no-underline hover:text-fg"
            >
              Treelance
            </a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
