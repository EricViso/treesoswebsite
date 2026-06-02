import { brand } from "@/lib/brand";
import * as c from "@/lib/content";
import { Container, Kicker, Hl, Button, SectionHeading, Sub } from "./primitives";
import { Hero } from "./Hero";
import { Wordmark } from "./Wordmark";

/**
 * ONE-PAGER TEMPLATE — the full Treelance marketing page, composed from the
 * reusable primitives + the Hero template, driven by lib/content.ts.
 */
export function OnePager() {
  return (
    <main className="font-sans">
      <TopNav />

      <Hero
        eyebrow={brand.audience}
        title={
          <>
            The problem is not hiring.
            <br />
            It is <Hl>deployment.</Hl>
          </>
        }
        lead="Your candidate database is the most valuable asset you own — and it dies a little every day. Treelance connects to the database you already have, keeps it live through a fleet of AI agents on WhatsApp and Telegram, and turns every open role into a shortlist of people who are available, certified, mobile and interested. You stop re-sourcing what you already paid for. Your recruiters place faster."
        primary={{ label: "Bring us one open role →", href: brand.links.book, external: true }}
        secondary={{ label: "See the live dashboard", href: "#demo" }}
      />

      {/* PROBLEM */}
      <section className="bg-canvas py-[72px]">
        <Container>
          <Kicker>{c.problem.kicker}</Kicker>
          <SectionHeading>{c.problem.title}</SectionHeading>
          <div className="mb-7 grid gap-3.5">
            {c.problem.items.map((t, i) => (
              <div key={i} className="flex items-start gap-3.5 rounded-xl border border-line bg-white px-5 py-[18px]">
                <span className="mt-px flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#fbeaea] text-[13px] font-bold text-[#b23b3b]">
                  ✕
                </span>
                <p className="text-[15px] text-[#3a4453]">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-[clamp(19px,2.6vw,24px)] font-extrabold leading-[1.3] tracking-[-0.02em] text-navy">
            {c.problem.punch.split("Your recruiters")[0]}
            <Hl>Your recruiters{c.problem.punch.split("Your recruiters")[1]}</Hl>
          </p>
        </Container>
      </section>

      {/* HOW */}
      <section id="how" className="py-[72px]">
        <Container>
          <Kicker>how it works</Kicker>
          <SectionHeading>Three moves. One living database.</SectionHeading>
          <Sub>
            Treelance doesn&apos;t replace your stack. It connects to the ATS and database you already run, then layers on the agents that make every open role fill with people who are reachable, verified and ready.
          </Sub>
          <div>
            {c.phases.map((p, i) => (
              <div
                key={p.n}
                className={`grid grid-cols-[64px_1fr] gap-[22px] py-[30px] max-[560px]:grid-cols-1 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <div className="font-mono text-[30px] font-semibold leading-none tracking-[-0.03em] text-navy opacity-30">
                  {p.n}
                </div>
                <div>
                  <h3 className="mb-2 text-[20px] font-extrabold tracking-[-0.01em] text-navy">{p.title}</h3>
                  <p className="max-w-[64ch] text-[15.5px] text-[#3a4453]">{p.body}</p>
                  <span className="mt-3 inline-block rounded-full bg-moss-soft px-3 py-[5px] font-mono text-[11.5px] font-medium text-moss-dark">
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DEMO */}
      <section id="demo" className="bg-navy py-[72px] text-white">
        <Container width="wide">
          <Kicker>see it live</Kicker>
          <h2 className="mb-4 max-w-[24ch] text-[clamp(24px,3.6vw,34px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
            This is your dashboard on one real role.
          </h2>
          <p className="mb-0 max-w-reading text-[17px] text-white/[0.72]">
            An interactive view of Treelance running an LNG commissioning role: candidates moving from <em>matched by taxonomy</em> → <em>agent engaging on WhatsApp</em> → <em>qualified</em> → <em>awaiting your OK</em> → <em>interview booked</em>. Click any candidate to open their profile and the actual pre-screening transcript.
          </p>
          <div className="mx-auto mt-7 max-w-[1080px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b1a30] shadow-[0_30px_70px_rgba(0,0,0,.4)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#15233a] px-3.5 py-[11px]">
              <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
              <span className="ml-2.5 max-w-[420px] flex-1 rounded-md bg-white/[0.07] px-3.5 py-[5px] font-mono text-xs text-white/60">
                app.{brand.domain}/dashboard
              </span>
              <span className="ml-auto flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-moss-soft">
                <span className="h-[7px] w-[7px] animate-pulsering rounded-full bg-moss" /> live mock-up
              </span>
            </div>
            <iframe
              src="/dashboard.html"
              title="Treelance live dashboard demo"
              loading="lazy"
              className="block h-[640px] w-full border-0 bg-canvas max-[640px]:h-[520px]"
            />
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button href="/dashboard.html" external>
              Open the full dashboard ↗
            </Button>
          </div>
        </Container>
      </section>

      {/* PAYOFF */}
      <section className="bg-canvas py-[72px]">
        <Container>
          <Kicker>{c.payoff.kicker}</Kicker>
          <SectionHeading>{c.payoff.title}</SectionHeading>
          <div className="mb-8 grid grid-cols-2 gap-3.5 max-[560px]:grid-cols-1">
            {c.payoff.cards.map((card) => (
              <div key={card.h} className="rounded-xl border border-line bg-white px-[22px] py-5">
                <div className="mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-moss text-[15px] font-extrabold text-[#0e2a0c]">
                  ✓
                </div>
                <h4 className="mb-1 text-[15.5px] font-bold text-navy">{card.h}</h4>
                <p className="text-[13.5px] leading-[1.55] text-[#3a4453]">{card.p}</p>
              </div>
            ))}
          </div>
          <p className="border-l-[3px] border-moss py-1.5 pl-[18px] text-[clamp(18px,2.6vw,22px)] font-extrabold tracking-[-0.02em] text-navy">
            {c.payoff.line}
          </p>
        </Container>
      </section>

      {/* HUMAN IN THE LOOP */}
      <section className="py-[72px]">
        <Container>
          <Kicker>{c.loop.kicker}</Kicker>
          <SectionHeading>{c.loop.title}</SectionHeading>
          <Sub>{c.loop.sub}</Sub>
          <div className="flex flex-wrap items-stretch">
            {c.loop.nodes.map((node, i) => (
              <div key={i} className="contents">
                <div className="min-w-[150px] flex-1 rounded-xl border border-line bg-white p-[18px] text-center">
                  <span
                    className={`mb-2.5 inline-block rounded-full px-2.5 py-[3px] font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] ${
                      node.who === "ai" ? "bg-moss-soft text-moss-dark" : "bg-[#e7eefb] text-navy"
                    }`}
                  >
                    {node.label}
                  </span>
                  <p className="text-[13px] leading-[1.45] text-[#3a4453]">{node.p}</p>
                </div>
                {i < c.loop.nodes.length - 1 && (
                  <div className="flex items-center px-1.5 text-[22px] text-[#c2cbd6] max-[680px]:w-full max-[680px]:justify-center max-[680px]:rotate-90 max-[680px]:py-1">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[34ch] text-[clamp(17px,2.4vw,21px)] font-bold tracking-[-0.01em] text-navy">
            No autonomous matching. No black box. <Hl>A human approves every step that touches a person.</Hl>
          </p>
        </Container>
      </section>

      {/* TRUST */}
      <section className="bg-canvas py-[72px]">
        <Container>
          <Kicker>{c.trust.kicker}</Kicker>
          <SectionHeading>{c.trust.title}</SectionHeading>
          <Sub>{c.trust.sub}</Sub>
          <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
            {c.trust.cards.map((card) => (
              <div key={card.h} className="rounded-xl border border-line bg-white p-[22px]">
                <div className="mb-3 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-moss-soft text-[17px]">
                  {card.ic}
                </div>
                <h4 className="mb-1.5 text-[16px] font-bold text-navy">{card.h}</h4>
                <p className="text-[14px] text-muted">{card.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PILOT */}
      <section id="pilot" className="py-[72px]">
        <Container>
          <Kicker>{c.pilot.kicker}</Kicker>
          <SectionHeading>{c.pilot.title}</SectionHeading>
          <Sub>{c.pilot.sub}</Sub>
          <div className="mb-[30px] grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
            <PilotCard label="What we deliver" items={c.pilot.deliver} />
            <PilotCard label="What we need from you" items={c.pilot.need} />
          </div>
          <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line max-[600px]:grid-cols-2">
            {c.pilot.kpis.map((k) => (
              <div key={k.l} className="bg-white px-4 py-[22px] text-center">
                <div className="text-[clamp(22px,3.4vw,30px)] font-black leading-none tracking-[-0.03em] text-navy">
                  {k.n}
                </div>
                <div className="mt-[7px] text-xs leading-[1.4] text-muted">{k.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-3.5 text-[12.5px] italic text-muted">{c.pilot.foot}</p>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-canvas py-[72px]">
        <Container>
          <Kicker>{c.faq.kicker}</Kicker>
          <SectionHeading>{c.faq.title}</SectionHeading>
          <div className="grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
            {c.faq.items.map((f) => (
              <div key={f.q} className="rounded-xl border border-line bg-white p-5">
                <div className="mb-[7px] text-[14.5px] font-bold text-navy">
                  <span className="font-mono font-semibold text-moss">Q. </span>
                  {f.q}
                </div>
                <div className="text-[13.5px] leading-[1.55] text-[#3a4453]">{f.a}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy bg-[linear-gradient(160deg,#1B3862_0%,#0F2440_100%)] py-[76px] text-center text-white">
        <Container>
          <Kicker>let&apos;s begin</Kicker>
          <h2 className="mx-auto mb-3.5 max-w-[22ch] text-[clamp(24px,3.6vw,34px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
            Bring us one open role. We&apos;ll show you the matching live.
          </h2>
          <p className="mx-auto mb-7 max-w-[52ch] text-[17px] text-white/[0.72]">
            Forty-five minutes to map it together — then we run your own role end to end, in the room. You decide on what you see, not on what we claim.
          </p>
          <Button href={brand.links.book} external>
            Bring us one open role →
          </Button>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

function PilotCard({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-line bg-white p-[22px]">
      <div className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-moss">
        {label}
      </div>
      <ul className="list-none">
        {items.map((it) => (
          <li key={it} className="relative py-1.5 pl-[22px] text-[14.5px] text-[#3a4453] before:absolute before:left-0 before:font-bold before:text-moss before:content-['→']">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TopNav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-navy-deep/85 backdrop-blur-md">
      <Container className="flex h-[60px] items-center gap-3.5">
        <Wordmark endorsed={false} />
        <span className="flex-1" />
        <a href="#how" className="mx-1 hidden text-[13.5px] font-medium text-white/[0.72] hover:text-white sm:inline">How it works</a>
        <a href="#demo" className="mx-1 hidden text-[13.5px] font-medium text-white/[0.72] hover:text-white sm:inline">Live demo</a>
        <a href="#pilot" className="mx-1 hidden text-[13.5px] font-medium text-white/[0.72] hover:text-white sm:inline">Pilot</a>
        <a href="#faq" className="mx-1 hidden text-[13.5px] font-medium text-white/[0.72] hover:text-white sm:inline">FAQ</a>
        <a href={brand.links.book} className="rounded-lg bg-moss px-4 py-2.5 text-[13px] font-semibold text-[#0e2a0c] no-underline">
          Bring us one role
        </a>
      </Container>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep py-[34px] text-center text-[13px] text-white/55">
      <Container>
        <div className="text-[17px] font-black tracking-[-0.01em] text-white">{brand.name}</div>
        <div className="my-1.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.15em] text-moss">
          {brand.presentedBy} · {brand.tagline}
        </div>
        <div className="mb-4 mt-4">
          <a href={`mailto:${brand.links.email}`} className="mx-2 font-medium text-moss-soft no-underline hover:underline">{brand.links.email}</a> ·
          <a href={brand.links.whatsapp} className="mx-2 font-medium text-moss-soft no-underline hover:underline">WhatsApp</a> ·
          <a href={brand.links.linkedin} className="mx-2 font-medium text-moss-soft no-underline hover:underline">LinkedIn</a> ·
          <a href={brand.links.book} className="mx-2 font-medium text-moss-soft no-underline hover:underline">Book a call</a>
        </div>
        <div className="leading-[1.7] text-white/40">
          {brand.legal.entity} · {brand.legal.address}
        </div>
      </Container>
    </footer>
  );
}
