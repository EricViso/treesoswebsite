import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container, Button } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: "The AI Bubble Won't Kill You. But Your Positioning Might. · Trees OS",
  description:
    "A market-grounded case for sovereign, vertical AI in energy and industrial sectors. Why the correction is a sales argument, not a threat.",
};

function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={"mb-4 text-[16px] leading-[1.65] text-fg-muted last:mb-0" + (className ? " " + className : "")}>
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-14 text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] text-fg first:mt-0">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-8 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-fg">
      {children}
    </h3>
  );
}

function HR() {
  return <hr className="my-10 border-white/[0.08]" />;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">{children}</ul>;
}

function LI({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export default function AiBubblePositioningArticle() {
  return (
    <main className="bg-base">
      <TopNavDark variant="company" />

      <article>
        <header className="relative overflow-hidden bg-base py-20 max-[700px]:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(120%_90%_at_75%_0,#000_0%,transparent_72%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[10%] -top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.18)_0%,transparent_60%)] blur-2xl"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(88,180,81,.45),transparent)]"
          />
          <Container width="wide" className="relative z-10">
            <div className="mb-5 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
              <a href="/blog" className="text-fg-faint no-underline hover:text-fg">← Blog</a>
            </div>
            <div className="max-w-[45rem]">
              <time className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-faint">
                2026-06-24
              </time>
              <h1 className="mt-3 text-[clamp(30px,5vw,48px)] font-black leading-[1.02] tracking-tightest text-fg">
                The AI Bubble Won&apos;t Kill You. But Your Positioning Might.
              </h1>
              <p className="mt-4 max-w-[56ch] text-[18px] leading-[1.6] text-fg-muted">
                A market-grounded case for sovereign, vertical AI in energy and industrial sectors. Why the correction is a sales argument, not a threat.
              </p>
              <div className="mt-5 font-mono text-[13px] font-medium text-fg-faint">
                Quentin Cloarec · Trees OS
              </div>
            </div>
          </Container>
        </header>

        <div className="relative overflow-hidden bg-base pb-24">
          <Container width="wide" className="max-w-[45rem]">
            {/*** INTRO ***/}
            <P>
              The correction is coming. Datacenter debt Morgan Stanley estimates could exceed $1 trillion by 2028. A market pricing in ~114 GW of power capacity while only ~15 GW is actually under construction. Circular dealmaking between hyperscalers and model labs. It has the shape of a bubble.
            </P>
            <P>
              Not everyone lives in that layer. Companies that are bootstrapped, services-led, and running on owned infrastructure aren&apos;t in the blast radius. For them, a correction is not a threat — it&apos;s a sales argument. When the players subsidizing pricing with VC compute dollars get squeezed, the ones who can deploy on client infrastructure, charge for outcomes, and survive without external capital become the obvious choice.
            </P>

            <HR />

            {/*** SECTION 1: AGENT MARKET SIGNAL ***/}
            <H2>The Signal in the Agent Market</H2>

            <P>
              Vertical agents are growing at ~62.7% annually — the fastest segment. Generic platforms are under pressure from specialists. Over 40% of agentic projects are expected to be cancelled by 2027. The number one blocker, cited by 46% of teams, is integration with existing systems, not model quality. Only ~21% of companies have mature governance for their agents. Pricing is moving from per-seat to per-outcome: resolved tickets, completed claims, placed candidates.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              The translation: winners will be narrow, governed, and plugged into the client&apos;s existing stack. Generalist platforms can&apos;t deliver the integration depth and governance that industrial clients require. Specialists who own the vertical context will win.
            </P>

            <HR />

            {/*** SECTION 2: SOVEREIGN THESIS ***/}
            <H2>The Sovereign Thesis Is No Longer a Thesis</H2>

            <P>
              Two years ago, on-premise AI was niche. That has flipped.
            </P>
            <UL>
              <LI>~55% of enterprise AI inference is now on-premise or at the edge, up from 12% in 2023.</LI>
              <LI>Over 70% of enterprises plan to scale on-premise or edge deployments by 2028.</LI>
              <LI>Gartner projects that by 2030, more than 75% of European and Middle Eastern enterprises will geopatriate workloads to reduce geopolitical data risk.</LI>
              <LI>The June 2026 Ban made the argument concrete for every CISO: put your data in a foreign model and you hand over governance.</LI>
            </UL>
            <P>
              For energy and industrial sectors — where operational data, proprietary engineering knowledge, and regulatory exposure are the core assets — this shift is structural.
            </P>
            <P>
              The caveat: on-premise removes data-transfer risk but is necessary, not sufficient. Break-even versus cloud APIs arrives at roughly 500M to 1B tokens per month. Below that volume, local hosting is more expensive and slower to stand up. The case for sovereign AI is strongest when data volume, sensitivity, and governance requirements justify the infrastructure. For energy companies moving multi-year engineering pipelines and deal flows through AI, that threshold is met comfortably.
            </P>

            <HR />

            {/*** SECTION 3: CROWDED MARKET ***/}
            <H2>Where the Market Is Crowded</H2>

            <P>
              CV formatting, parsing, and matching — the most common AI entry point in staffing — is the single most commoditised feature in the market. Every staffing platform already does it. Recruit CRM, Bullhorn, Manatal, Recruiterflow, X0PA — all run a parse-score-rank loop tuned for staffing agencies. At the top end, Eightfold is a $2.1B talent-intelligence platform hit with a class action in January 2026 for scoring candidates from external data without consent.
            </P>
            <P>
              Two things follow.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              First, CV matching is a feature, not a company. Any LLM wrapper can replicate it by Tuesday.
            </P>
            <P>
              Second, the Eightfold suit reveals something deeper: explainability and data provenance are now legal exposure, not product polish. The next wave of regulation will demand that every candidate score be auditable, every data source attributable, every decision contestable. That&apos;s not compliance — it&apos;s an architectural requirement most platforms are not built for.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              Companies treating this as a feature add-on will retrofit for years. Companies starting with auditability as a design constraint will own the next cycle.
            </P>

            <HR />

            {/*** SECTION 4: WHITE SPACE ***/}
            <H2>The Intersection That Is Your White Space</H2>

            <P>
              Nobody occupies the intersection of three things:
            </P>
            <UL>
              <LI><span className="font-semibold text-fg">Vertical depth in energy and industrial sectors</span> — understanding the workflows, regulations, and engineering realities.</LI>
              <LI><span className="font-semibold text-fg">Client-owned sovereign data infrastructure</span> — running on the client&apos;s infrastructure, data that never leaves their control.</LI>
              <LI><span className="font-semibold text-fg">Built-in governance and auditability</span> — every decision traceable, every score explainable, every pipeline open to inspection.</LI>
            </UL>
            <P>
              Each exists individually in the market. No single player leads with all three. That intersection is your defensible position.
            </P>

            <HR />

            {/*** SECTION 5: HOW WE WORK ***/}
            <H2>How We Work</H2>

            <P>
              We don&apos;t sell a platform. We work on three principles:
            </P>

            <H3>Run on your infrastructure</H3>
            <P>
              Your data never leaves your control. We deploy on your stack, not ours. This is a design constraint that governs every architectural decision.
            </P>

            <H3>Price on outcomes, not seats or tokens</H3>
            <P>
              You pay for what works — placed candidates, processed pipelines, resolved bottlenecks. This aligns incentives and keeps focus on what moves your business.
            </P>

            <H3>Every decision is auditable</H3>
            <P>
              From model outputs to scoring logic to data provenance, everything is inspectable. If a regulator walks in or a candidate challenges a decision, you have the receipts. Not because compliance demanded it — because accountability was built in from day one.
            </P>

            <P>
              We work with energy and industrial companies that need AI that isn&apos;t leaky, isn&apos;t opaque, and doesn&apos;t require handing over valuable data to a third party.
            </P>

            <HR />

            {/*** SECTION 6: THE PART NOBODY ASKED FOR ***/}
            <H2>The Part Nobody Asked For</H2>

            <P>
              None of this matters if the foundational commitments aren&apos;t made.
            </P>
            <P>
              Research is useful. Surveys are useful. Market positioning exercises are useful. But they are not substitutes for the hard thing that needs to happen next — whether that&apos;s signing the agreement that&apos;s been drafted, shipping the system that&apos;s been defined, or having the conversation that&apos;s been pending.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              Bubble analysis doesn&apos;t close a deal. Sovereign positioning doesn&apos;t deploy a system. The market signal is clear. The thesis is validated. The white space is real.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              The only thing left is execution.
            </P>
            <P>
              If your AI partner pushes you toward a deck instead of <em>done</em> — push back.
            </P>

            <HR />

            {/*** CTA ***/}
            <div className="mt-16 rounded-2xl border border-moss/20 bg-base-raised p-8 text-center">
              <p className="text-[15px] leading-[1.6] text-fg-muted">
                Written by Quentin Cloarec, co-founder of Trees OS.
                <br />
                We deliver sovereign AI for energy and industrial companies. Outcomes you can audit, on infrastructure you control.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <Button href={brand.sites.product} variant="ghost" track="cta:article-ai-bubble-positioning">
                  See Treelance ↗
                </Button>
                <Button href={brand.links.book} external track="booking:article-ai-bubble-positioning">
                  Work with us
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-white/[0.06] bg-base-rail py-9 text-center text-[13px] text-fg-faint">
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
            <div className="text-[17px] font-black tracking-[-0.01em] text-fg">{brand.company}</div>
          </div>
          <div className="my-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-moss">
            AI-first digital transformation
          </div>
          <div className="mt-3">
            <a href={`mailto:${brand.links.email}`} className="mx-2 text-fg-muted no-underline hover:text-fg">{brand.links.email}</a> ·
            <a href={brand.links.linkedin} className="mx-2 text-fg-muted no-underline hover:text-fg">LinkedIn</a> ·
            <a href="/" className="mx-2 text-fg-muted no-underline hover:text-fg">Treelance</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
