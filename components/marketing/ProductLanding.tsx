import type { ReactNode } from "react";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/cn";
import * as c from "@/lib/content";
import { Container, Button, Hl } from "./primitives";
import { HeroDark } from "./HeroDark";
import { TopNavDark } from "./TopNavDark";

/* ---------- dark section helpers ---------- */

function Section({
  id,
  dataSection,
  alt,
  children,
}: {
  id?: string;
  dataSection?: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-section={dataSection}
      className={cn(
        "border-t border-white/[0.06] py-[72px] text-fg",
        alt ? "bg-base-rail" : "bg-base",
      )}
    >
      <Container width="wide">{children}</Container>
    </section>
  );
}

function Kick({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
      // {children}
    </div>
  );
}

function Head({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-3 max-w-[26ch] text-[clamp(24px,3.6vw,34px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
      {children}
    </h2>
  );
}

function Sub({ children }: { children: ReactNode }) {
  return <p className="mt-4 max-w-reading text-[16.5px] leading-[1.6] text-fg-muted">{children}</p>;
}

const card = "rounded-xl border border-white/[0.08] bg-base-raised shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_2px_10px_rgba(0,0,0,0.45)]";

/**
 * PRODUCT LANDING (Treelance / treelance.ai) — full dark page.
 */
export function ProductLanding() {
  return (
    <main className="bg-base">
      <TopNavDark variant="product" />

      <HeroDark
        showTopBar={false}
        eyebrow={brand.tagline}
        title={
          <>
            AI workforce orchestration for the <Hl>energy sector.</Hl>
          </>
        }
        lead="Treelance connects to the candidate database your agency already owns, keeps it live through AI agents on WhatsApp and Telegram, and turns every open role into a shortlist of people who are available, certified and interested — matched on verifiable certifications, not black-box profiling. Built for energy staffing, in Malaysia."
        primary={{ label: "Bring us one open role →", href: brand.links.book, external: true, track: "booking:hero" }}
        secondary={{ label: "See the live dashboard", href: "#demo", track: "cta:see-demo" }}
        compliance={["PDPA aligned", "AIGE principles", "Consent-first", "Audit trail"]}
      />

      {/* PROBLEM */}
      <Section dataSection="problem" alt>
        <Kick>{c.problem.kicker}</Kick>
        <Head>{c.problem.title}</Head>
        <div className="mb-7 mt-8 grid gap-3.5">
          {c.problem.items.map((t, i) => (
            <div key={i} className={cn("flex items-start gap-3.5 px-5 py-[18px]", card)}>
              <span className="mt-px flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/15 text-[13px] font-bold text-red-400">
                ✕
              </span>
              <p className="text-[15px] text-fg-muted">{t}</p>
            </div>
          ))}
        </div>
        <p className="text-[clamp(19px,2.6vw,24px)] font-extrabold leading-[1.3] tracking-tightest text-fg">
          {c.problem.punch.split("Your recruiters")[0]}
          <Hl>Your recruiters{c.problem.punch.split("Your recruiters")[1]}</Hl>
        </p>
      </Section>

      {/* HOW */}
      <Section id="how" dataSection="how">
        <Kick>how it works</Kick>
        <Head>Three moves. One living database.</Head>
        <Sub>
          Treelance doesn&apos;t replace your stack. It connects to the ATS and
          database you already run, then layers on the agents that make every open
          role fill with people who are reachable, verified and ready.
        </Sub>
        <div className="mt-6">
          {c.phases.map((p, i) => (
            <div
              key={p.n}
              className={cn(
                "grid grid-cols-[64px_1fr] gap-[22px] py-[30px] max-[560px]:grid-cols-1",
                i > 0 && "border-t border-white/[0.06]",
              )}
            >
              <div className="font-mono text-[30px] font-semibold leading-none tracking-tightest text-fg-faint">
                {p.n}
              </div>
              <div>
                <h3 className="mb-2 text-[20px] font-extrabold tracking-[-0.01em] text-fg">{p.title}</h3>
                <p className="max-w-[64ch] text-[15.5px] text-fg-muted">{p.body}</p>
                <span className="mt-3 inline-block rounded-full border border-moss/30 bg-moss/[0.08] px-3 py-[5px] font-mono text-[11.5px] font-medium text-moss">
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* DEMO */}
      <Section id="demo" dataSection="demo" alt>
        <Kick>see it live</Kick>
        <Head>This is your dashboard on one real role.</Head>
        <Sub>
          An interactive view of Treelance running an LNG commissioning role:
          candidates moving from matched → agent engaging on WhatsApp → qualified →
          awaiting your OK → interview booked. Click any candidate to open their
          profile and the actual pre-screening transcript.
        </Sub>
        <div className={cn("mx-auto mt-8 max-w-[1080px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b1a30]")}>
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#15233a] px-3.5 py-[11px]">
            <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
            <span className="ml-2.5 max-w-[420px] flex-1 rounded-md bg-white/[0.07] px-3.5 py-[5px] font-mono text-xs text-white/60">
              dash.treelance.ai
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
        <div className="mt-7 flex justify-center">
          <Button href="/dashboard.html" external track="demo:open-full">
            Open the full dashboard ↗
          </Button>
        </div>
      </Section>

      {/* PAYOFF */}
      <Section dataSection="payoff">
        <Kick>{c.payoff.kicker}</Kick>
        <Head>{c.payoff.title}</Head>
        <div className="mb-8 mt-8 grid grid-cols-2 gap-3.5 max-[560px]:grid-cols-1">
          {c.payoff.cards.map((p) => (
            <div key={p.h} className={cn("px-[22px] py-5", card)}>
              <div className="mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-moss text-[15px] font-extrabold text-[#0e2a0c]">
                ✓
              </div>
              <h4 className="mb-1 text-[15.5px] font-bold text-fg">{p.h}</h4>
              <p className="text-[13.5px] leading-[1.55] text-fg-muted">{p.p}</p>
            </div>
          ))}
        </div>
        <p className="border-l-[3px] border-moss py-1.5 pl-[18px] text-[clamp(18px,2.6vw,22px)] font-extrabold tracking-tightest text-fg">
          {c.payoff.line}
        </p>
      </Section>

      {/* HUMAN IN THE LOOP */}
      <Section dataSection="loop" alt>
        <Kick>{c.loop.kicker}</Kick>
        <Head>{c.loop.title}</Head>
        <Sub>{c.loop.sub}</Sub>
        <div className="mt-8 flex flex-wrap items-stretch">
          {c.loop.nodes.map((node, i) => (
            <div key={i} className="contents">
              <div className={cn("min-w-[150px] flex-1 p-[18px] text-center", card)}>
                <span
                  className={cn(
                    "mb-2.5 inline-block rounded-full px-2.5 py-[3px] font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em]",
                    node.who === "ai" ? "bg-moss/15 text-moss" : "border border-white/15 text-fg-muted",
                  )}
                >
                  {node.label}
                </span>
                <p className="text-[13px] leading-[1.45] text-fg-muted">{node.p}</p>
              </div>
              {i < c.loop.nodes.length - 1 && (
                <div className="flex items-center px-1.5 text-[22px] text-white/25 max-[680px]:w-full max-[680px]:justify-center max-[680px]:rotate-90 max-[680px]:py-1">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[34ch] text-[clamp(17px,2.4vw,21px)] font-bold tracking-[-0.01em] text-fg">
          No autonomous matching. No black box. <Hl>A human approves every step that touches a person.</Hl>
        </p>
      </Section>

      {/* TRUST */}
      <Section dataSection="trust">
        <Kick>{c.trust.kicker}</Kick>
        <Head>{c.trust.title}</Head>
        <Sub>{c.trust.sub}</Sub>
        <div className="mt-8 grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
          {c.trust.cards.map((t) => (
            <div key={t.h} className={cn("p-[22px]", card)}>
              <div className="mb-3 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-moss/15 text-[17px]">
                {t.ic}
              </div>
              <h4 className="mb-1.5 text-[16px] font-bold text-fg">{t.h}</h4>
              <p className="text-[14px] text-fg-muted">{t.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PILOT */}
      <Section id="pilot" dataSection="pilot" alt>
        <Kick>{c.pilot.kicker}</Kick>
        <Head>{c.pilot.title}</Head>
        <Sub>{c.pilot.sub}</Sub>
        <div className="mb-[30px] mt-8 grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
          <PilotCard label="What we deliver" items={c.pilot.deliver} />
          <PilotCard label="What we need from you" items={c.pilot.need} />
        </div>
        <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] max-[600px]:grid-cols-2">
          {c.pilot.kpis.map((k) => (
            <div key={k.l} className="bg-base-raised px-4 py-[22px] text-center">
              <div className="text-[clamp(22px,3.4vw,30px)] font-black leading-none tracking-tightest text-fg">
                {k.n}
              </div>
              <div className="mt-[7px] text-xs leading-[1.4] text-fg-muted">{k.l}</div>
            </div>
          ))}
        </div>
        <p className="mt-3.5 text-[12.5px] italic text-fg-faint">{c.pilot.foot}</p>
      </Section>

      {/* FAQ */}
      <Section id="faq" dataSection="faq">
        <Kick>{c.faq.kicker}</Kick>
        <Head>{c.faq.title}</Head>
        <div className="mt-8 grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
          {c.faq.items.map((f) => (
            <div key={f.q} className={cn("p-5", card)}>
              <div className="mb-[7px] text-[14.5px] font-bold text-fg">
                <span className="font-mono font-semibold text-moss">Q. </span>
                {f.q}
              </div>
              <div className="text-[13.5px] leading-[1.55] text-fg-muted">{f.a}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section
        data-section="final-cta"
        className="relative overflow-hidden border-t border-white/[0.06] bg-base py-[80px] text-center text-fg"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.16)_0%,transparent_60%)] blur-2xl"
        />
        <Container>
          <Kick>let&apos;s begin</Kick>
          <h2 className="relative mx-auto mt-3 max-w-[22ch] text-[clamp(24px,3.6vw,34px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            Bring us one open role. We&apos;ll show you the matching live.
          </h2>
          <p className="relative mx-auto mt-4 max-w-[50ch] text-[16.5px] text-fg-muted">
            Forty-five minutes to map it together — then we run your own role end to
            end, in the room. You decide on what you see, not on what we claim.
          </p>
          <div className="relative mt-7 flex justify-center">
            <Button href={brand.links.book} external track="booking:final">
              Bring us one open role →
            </Button>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-base-rail py-9 text-center text-[13px] text-fg-faint">
        <Container width="wide">
          <div className="text-[17px] font-black tracking-[-0.01em] text-fg">{brand.name}</div>
          <div className="my-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-moss">
            {brand.presentedBy} · {brand.tagline}
          </div>
          <div className="mt-3">
            <a href={`mailto:${brand.links.email}`} data-analytics="outbound:email" className="mx-2 text-fg-muted no-underline hover:text-fg">{brand.links.email}</a> ·
            <a href={brand.links.whatsapp} data-analytics="outbound:whatsapp" className="mx-2 text-fg-muted no-underline hover:text-fg">WhatsApp</a> ·
            <a href={brand.links.telegram} data-analytics="outbound:telegram" className="mx-2 text-fg-muted no-underline hover:text-fg">Telegram</a> ·
            <a href={brand.sites.company} className="mx-2 text-fg-muted no-underline hover:text-fg">Trees OS</a>
          </div>
          <div className="mt-4 leading-[1.7] text-fg-faint/70">
            {brand.legal.entity} · {brand.legal.address}
          </div>
        </Container>
      </footer>
    </main>
  );
}

function PilotCard({ label, items }: { label: string; items: string[] }) {
  return (
    <div className={cn("p-[22px]", card)}>
      <div className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-moss">
        {label}
      </div>
      <ul className="list-none">
        {items.map((it) => (
          <li key={it} className="relative py-1.5 pl-[22px] text-[14.5px] text-fg-muted before:absolute before:left-0 before:font-bold before:text-moss before:content-['→']">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
