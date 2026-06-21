import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container, Button } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: "The Signal Problem in Energy Hiring · Trees OS",
  description:
    "The slow part of energy hiring is not sourcing. It is the handoffs. Why most agencies are solving the wrong problem, and what actually compresses the cycle.",
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

function OL({ children }: { children: React.ReactNode }) {
  return <ol className="mb-4 ml-5 space-y-2 text-[16px] leading-[1.6] text-fg-muted">{children}</ol>;
}

function LI({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export default function SignalProblemArticle() {
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
                2026-06-21
              </time>
              <h1 className="mt-3 text-[clamp(30px,5vw,48px)] font-black leading-[1.02] tracking-tightest text-fg">
                The Signal Problem in Energy Hiring
              </h1>
              <p className="mt-4 max-w-[56ch] text-[18px] leading-[1.6] text-fg-muted">
                The bottleneck in energy hiring isn&apos;t sourcing. It&apos;s the handoffs. Why most agencies are solving the wrong problem, and what actually compresses the cycle.
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
              The energy industry&apos;s response to the talent shortage has been to chase speed. Faster offers. Fewer interview rounds. Deeper agency relationships. Looser certification checks.
            </P>
            <P>
              12 months later, those same companies report higher turnover, more on-site incidents, and re-hires that cost double the original placement. The &ldquo;go faster&rdquo; frame solves the wrong problem.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              The bottleneck in energy hiring isn&apos;t sourcing. It&apos;s the handoffs.
            </P>

            <HR />

            {/*** SECTION 1: WHAT GETS LOST ***/}
            <H2>What Gets Lost Between the Technical Interview and the Safety Debrief</H2>

            <P>
              Every specialised hire in energy passes through six conversations. The technical interview. The safety and compliance check. The operations debrief. The hiring manager calibration. The ATS sync. The onboarding handoff.
            </P>
            <P>
              Each one produces signal the next one can&apos;t see.
            </P>
            <P>
              By the time the candidate reaches the offer pipeline, the technical question — did they actually understand arc-flash protection, do they have hands-on FPSO experience — is a footnote in someone&apos;s Slack DM. The safety officer who flagged a gap in their offshore medical cert has no way to escalate it to the hiring manager. The ops lead who knows this project runs 2-weeks-on, 3-weeks-off never sees the candidate&apos;s availability.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              Everyone works harder. Nobody works together.
            </P>
            <P>
              A March 2026 Metaview report surveyed 505 recruiting leaders and hiring managers across North America and EMEA. Only 27% said the thought of bypassing their counterpart never crosses their mind. In energy, that number is almost certainly lower. Layer on specialised roles, compliance gates, and project-spike deadlines, and the cycle stretches beyond what any sourcing optimisation can fix.
            </P>

            <HR />

            {/*** SECTION 2: WHAT ACTUALLY COMPRESSES THE CYCLE ***/}
            <H2>What Actually Compresses the Cycle</H2>

            <P>
              The fix isn&apos;t hiring faster. It&apos;s stopping the signal loss.
            </P>
            <P>
              Four capture inputs survive the handoffs and compress a specialised energy hire without breaking safety or compliance:
            </P>

            <H3>Certification signal</H3>
            <P>
              BOSIET, HUET, OGUK medical, offshore survival, H2S awareness. These aren&apos;t optional — they&apos;re the boundary conditions of who can actually do the job. Capture them at the first conversation, not the fifth.
            </P>

            <H3>Scenario signal</H3>
            <P>
              Can this candidate function on an FPSO in turnaround? Have they worked a rotating shift in tropical conditions? A generic &ldquo;10 years in O&amp;G&rdquo; tells you nothing. A specific scenario question tells you everything.
            </P>

            <H3>Cross-panel synthesis</H3>
            <P>
              The technical interviewer saw one thing. The safety officer saw another. The operations lead saw a third. None of them talk. Synthesising their signal into one readable file isn&apos;t nice-to-have. It&apos;s the difference between a hire that sticks and one that costs double to replace by month four.
            </P>

            <H3>Availability and routing</H3>
            <P>
              A perfect candidate who isn&apos;t available for the required rotation isn&apos;t a perfect candidate. A great engineer free to start in three weeks is better than a slightly better one who needs six. Obvious — yet most agencies only surface availability at offer stage, after everyone has already invested weeks.
            </P>

            <HR />

            {/*** SECTION 3: WHERE THE MARKET IS GOING ***/}
            <H2>Where the Market Is Going</H2>

            <P>
              The platforms that understand this are winning. General-purpose ATS products that treat every candidate as a keyword search are losing share to specialised layers that capture signal instead of just shuffling CVs.
            </P>
            <P>
              Bullhorn&apos;s GRID 2026 report surveyed nearly 2,300 recruitment firms globally. Top-performing firms were four times more likely to be using AI. And 55% of firms that use AI for screening alone saw KPIs increase by more than a quarter.
            </P>
            <P>
              But the AI has to be the right kind. A keyword-matching algorithm surfaces false positives constantly in energy. A candidate who looks perfect on paper — right title, right years, right company — may not have the equipment experience the client needs. May not hold the right certification. May not be available for the right rotation.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              In energy, the filter has to understand domain constraints. That&apos;s where general platforms hit a wall.
            </P>

            <HR />

            {/*** SECTION 4: WHAT THIS MEANS ***/}
            <H2>What This Means for Engineers, Hiring Managers, and Agencies</H2>

            <P>
              <span className="font-semibold text-fg">For an engineer:</span> signal-based hiring means less time repeating yourself. Your certs, availability, and preferences travel with you instead of being re-entered into six different systems.
            </P>
            <P>
              <span className="font-semibold text-fg">For a hiring manager:</span> shortlists you can actually trust. Fewer false positives. Fewer hires that unravel in month three because something that should have been caught at screening was lost in the handoffs.
            </P>
            <P>
              <span className="font-semibold text-fg">For a recruitment firm operating in energy:</span> the question is simple. Are you still moving CVs from one inbox to another and calling it a process? Or are you capturing the signal that actually makes the difference between a hire that works and one that doesn&apos;t?
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              That&apos;s what Treelance was built for. And the rest of the industry is starting to catch up.
            </P>

            <HR />

            {/*** SOURCES ***/}
            <div className="text-[13px] leading-[1.6] text-fg-faint">
              <P className="text-fg-faint text-[12px] font-mono font-semibold uppercase tracking-[0.08em]">
                Sources
              </P>
              <UL>
                <LI>Metaview, <em>Energy sector recruitment is a signal problem, not a sourcing problem</em> (Mar 2026)</LI>
                <LI>Bullhorn GRID 2026 Industry Trends Report (n ≈ 2,300 recruitment firms)</LI>
                <LI>Trees Engineering internal data, Treelance.ai platform</LI>
              </UL>
            </div>

            {/*** CTA ***/}
            <div className="mt-16 rounded-2xl border border-moss/20 bg-base-raised p-8 text-center">
              <p className="text-[15px] leading-[1.6] text-fg-muted">
                Written by Quentin Cloarec, co-founder of Trees OS.
                <br />
                If your agency is ready to stop losing signal, Treelance is your landing pad.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <Button href={brand.sites.product} variant="ghost" track="cta:article-signal-problem">
                  See Treelance ↗
                </Button>
                <Button href={brand.links.book} external track="booking:article-signal-problem">
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
