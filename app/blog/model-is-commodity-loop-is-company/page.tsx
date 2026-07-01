import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container, Button } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: "The model is a commodity. The loop is the company. · Trees OS",
  description:
    "Token capital does not get decreed. It exists only if the tokens you spend produce a return. Build the loop. Own something.",
  openGraph: {
    title: "The model is a commodity. The loop is the company. · Trees OS",
    description:
      "Token capital does not get decreed. It exists only if the tokens you spend produce a return. Build the loop. Own something.",
    type: "article",
    images: [{ url: "/images/trees-os-logo.png", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The model is a commodity. The loop is the company. · Trees OS",
    description:
      "Token capital does not get decreed. It exists only if the tokens you spend produce a return. Build the loop. Own something.",
    images: [{ url: "/images/trees-os-logo.png", width: 1024, height: 1024 }],
  },
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
    <h2 className="font-display mb-4 mt-14 text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] text-fg first:mt-0">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display mb-2 mt-8 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-fg">
      {children}
    </h3>
  );
}

function HR() {
  return <hr className="my-10 border-subtle" />;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">{children}</ul>;
}

function LI({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-6 border-l-2 border-moss/40 pl-5 text-[17px] font-semibold leading-[1.55] text-fg italic">
      {children}
    </blockquote>
  );
}

export default function ModelIsCommodityArticle() {
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
              <a href="/blog" className="text-fg-faint no-underline hover:text-fg">&larr; Blog</a>
            </div>
            <div className="max-w-[45rem]">
              <time className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-faint">
                2026-07-01
              </time>
              <h1 className="mt-3 text-[clamp(30px,5vw,48px)] font-black leading-[1.02] tracking-tightest text-fg">
                The model is a commodity. The loop is the company.
              </h1>
              <div className="mt-5 font-mono text-[13px] font-medium text-fg-faint">
                Trees OS &middot; Field Notes
              </div>
            </div>
          </Container>
        </header>

        <div className="relative overflow-hidden bg-base pb-24">
          <Container width="wide" className="max-w-[45rem]">
            {/*** INTRO ***/}
            <P>
              Something quiet is happening inside some of the biggest companies on earth. According to recent reporting in the business press, names like Amazon, Walmart, Uber and Meta, companies that spent two years telling the world they were &ldquo;all in on AI&rdquo;, have started doing the opposite. They are rationing it. Setting quotas. Filtering who gets to use which model, for what, and how often. Not because the technology stopped working, but because the bill stopped making sense.
            </P>
            <P>
              On one side, the loudest voices in tech now argue that every company must accumulate what they call <em>token capital</em>: its own AI capacity, its own learning loop, its own accumulated knowledge, or risk being hollowed out. On the other side, in the real world, finance teams are closing the tap because unmanaged AI costs more than it returns. Both things are true at once, and the gap between them is where the winners and losers of the next decade get sorted.
            </P>

            <HR />

            {/*** SECTION 1: WHAT "TOKEN CAPITAL" ACTUALLY MEANS ***/}
            <H2>What &ldquo;token capital&rdquo; actually means</H2>

            <P>
              Start with the thing most people get wrong: the battle is not about which model you pick.
            </P>
            <P>
              The best model, whichever one it is this quarter, is available to you, to your neighbour and to your competitor, for the same price. It is rented, like electricity. You do not own it, and nor does anyone else. A capability everyone can buy is not an advantage. It is a utility.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              The advantage lives <em>above</em> the model, in three things you can actually own.
            </P>

            <H3>Your evaluations.</H3>
            <P>
              Stop judging AI on public benchmarks. Judge it on your results: does it make <em>your</em> business money on <em>your</em> tasks? A private scorecard, built on your own outcomes, is something no competitor can copy.
            </P>

            <H3>Your training ground.</H3>
            <P>
              The model stops improving in a vacuum and starts improving on your traces: your real cases, your edge conditions, the messy reality of your operation. That data is yours and no one else&rsquo;s.
            </P>

            <H3>Your memory.</H3>
            <P>
              The whole knowledge of the business, queryable, that no longer walks out the door when an employee quits. You can delegate a task. You can delegate a whole role. But you cannot delegate its learning, unless the learning is captured in a loop that stays.
            </P>
            <P>
              Put simply: your data is the seed. It belongs to you and no one can take it. But a seed at the bottom of a bag grows nothing. To grow, it needs soil, water and sun, which here means compute, rented by the hour and the token. The seed is the asset. The loop is what turns it into a tree.
            </P>

            <HR />

            {/*** SECTION 2: WHY MOST AI SPEND IS NOT CAPITAL ***/}
            <H2>Why most AI spend is not capital at all</H2>

            <P>
              Consuming tokens does not create token capital. Plenty of companies are already burning through prompts, agents, copilots and coding assistants with no memory, no evaluation, no reusable traces, no intellectual property accumulating underneath. That is not capital; it is just spend.
            </P>
            <P>
              Capital begins only when the usage feeds those same three things: when it enriches your memory, produces an evaluation signal, or turns a repeated task into accumulated knowledge you own. When the usage produces a measurable return. Once that loop is built, you can unplug one model, plug in the next, and keep your in-house veteran. The knowledge stays. That is the real test of whether you own anything.
            </P>
            <P>
              The numbers suggest most companies are failing this test. Analysts have estimated that only around a quarter of AI infrastructure spending fully hits its return-on-investment targets. Other studies put roughly three-quarters of the economic value from AI in the hands of about a fifth of companies. And those leaders are not simply buying more AI. They are redesigning their business model around it. Everyone else is bolting AI onto the way they already worked, and paying for the privilege.
            </P>

            <HR />

            {/*** SECTION 3: THE BILL ONLY GOES ONE DIRECTION ***/}
            <H2>The bill only goes one direction</H2>

            <P>
              There is a comforting story going around that AI is getting cheaper. On the unit, it is true. Goldman Sachs has estimated the cost per token falling something like 60 to 70 percent a year. But the unit price is not your bill.
            </P>
            <P>
              Two things break the comfort. First, when a cost of production falls faster than the price, that gap becomes the supplier&rsquo;s margin, not your saving. Second, and this is the one that gets everyone, when a resource gets cheaper you do not use less of it. You use vastly more. You put AI everywhere, all the time. Economists call it the rebound effect, or Jevons&rsquo; paradox: cheaper per unit means total consumption explodes.
            </P>
            <P>
              Now add agents. The best models no longer answer instantly. They reason, backtrack, re-read themselves and test several paths before replying. All of that is inference, and inference is tokens. A single agentic task can burn many times the tokens of a simple chatbot query. And agents do not sleep. For one human you might run ten, or ten thousand, chewing through compute around the clock. Gartner has estimated that inference could become the majority of a model&rsquo;s total lifetime cost: the brain thinking continuously, and you paying for every thought.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              That is the shift. The old cost was building the brain, paid once, by the lab. The new cost is the brain thinking, forever, paid by you.
            </P>

            <HR />

            {/*** SECTION 4: THE UNCOMFORTABLE CONCLUSION ***/}
            <H2>The uncomfortable conclusion</H2>

            <P>
              Follow the logic and you land somewhere uncomfortable. If value lives in the learning loop, and the loop runs on compute that never stops, then AI no longer just separates the companies that use it from the ones that don&rsquo;t. It separates the companies that turn tokens into advantage from the ones that only burn them.
            </P>
            <P>
              That second split is brutal, because advantage in a loop compounds. A small early lead, learning slightly better rather than spending slightly more, cumulates fast. The likely outcome is not that everyone rises together. It is that a minority of companies rebuild themselves around the loop and use the returns to absorb the competitors who never did. AI becomes a multiplier for the few and a divider for the many.
            </P>
            <P>
              You do not need to believe every forecast to take the instruction seriously. Token capital does not get decreed. It exists only if the tokens you spend produce a return. It is not a pile of prompts, an army of mis-routed agents, or a cloud bill growing faster than revenue. It is capital in the strict sense: something that produces a return, improves, and reinforces knowledge that is yours.
            </P>

            <HR />

            {/*** SECTION 5: WHERE TREES OS STANDS ***/}
            <H2>Where Trees OS stands</H2>

            <P>
              That is the whole reason Trees OS exists, so we will say it plainly. Most companies will treat AI as a subscription: rent a model, ask it questions, and quietly become clients of infrastructure they don&rsquo;t control. A few will build the loop, the evaluations, the training ground and the memory that stays. The second group owns something. The first rents everything.
            </P>
            <P>
              We build the second kind. We rebuild a traditional business to run on AI, then keep it running and improving, so the loop compounds instead of leaking. We did it on ourselves first, in energy staffing, which is where Treelance came from. Our own data was the seed. The result is a company that gets sharper every week without adding headcount.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              The model you use this year will be obsolete next year. The loop you build around it is the only thing that stays. Plant the seed you own, then build the thing that grows it.
            </P>
            <P className="text-[14px] leading-[1.6] text-fg-faint">
              Trees OS. We rebuild traditional businesses to run on AI, then keep them running and improving, forever.
            </P>

            {/*** CTA ***/}
            <div className="mt-16 rounded-2xl border border-moss/20 bg-base-raised p-8 text-center">
              <p className="text-[15px] leading-[1.6] text-fg-muted">
                Written by Trees OS &middot; Field Notes.
                <br />
                If your company is ready to stop renting AI and start owning the loop, we should talk.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <Button href={brand.links.book} external track="booking:article-model-commodity-loop">
                  Work with us
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-subtle bg-base-rail py-9 text-center text-[13px] text-fg-faint">
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
            <a href={`mailto:${brand.links.email}`} className="mx-2 text-fg-muted no-underline hover:text-fg">{brand.links.email}</a> &middot;
            <a href={brand.links.linkedin} className="mx-2 text-fg-muted no-underline hover:text-fg">LinkedIn</a> &middot;
            <a href="/" className="mx-2 text-fg-muted no-underline hover:text-fg">Treelance</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
