import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container, Button } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: "Almost Everyone Is Adding AI to Their Company. Almost No One Is Rebuilding Their Company Around It. · Trees OS",
  description:
    "Five principles from rebuilding a fifteen-year-old company around AI from the foundation: memory, decision, execution, and the closed loop that connects them.",
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

function OL({ children }: { children: React.ReactNode }) {
  return <ol className="mb-4 ml-5 space-y-2 text-[16px] leading-[1.6] text-fg-muted">{children}</ol>;
}

function LI({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-6 border-l-2 border-moss/40 pl-5 text-[17px] font-semibold leading-[1.6] text-fg italic">
      {children}
    </blockquote>
  );
}

export default function AINativeCompanyArticle() {
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
                2026-06-29
              </time>
              <h1 className="mt-3 text-[clamp(30px,5vw,44px)] font-black leading-[1.02] tracking-tightest text-fg">
                Almost Everyone Is Adding AI to Their Company.<br />Almost No One Is Rebuilding Their Company Around It.
              </h1>
              <p className="mt-4 max-w-[56ch] text-[18px] leading-[1.6] text-fg-muted">
                Those are not the same project. Five principles from doing the second one, on my own company.
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
              There are two ways to bring AI into a business, and from the outside they look alike.
            </P>
            <P>
              The first is to add it. You buy copilots, wire up a chatbot, let people paste work into ChatGPT, and keep the company exactly as it was: an organisation designed for humans, with some AI bolted to the side. Most &ldquo;AI transformation&rdquo; is this. It produces real, modest gains and changes nothing structural.
            </P>
            <P>
              The second is to rebuild the company around AI from the foundation, asking what the organisation would look like if it had been designed, from day one, on the assumption that memory is effectively infinite, coordination is nearly free, and execution can scale without hiring. That is a different and much harder project, and almost nobody is doing it, because it means redrawing the company rather than equipping it.
            </P>
            <P>
              I am doing the second one, on a fifteen-year-old manpower business in the energy sector. Not a greenfield startup, but a real company with real clients, real staff, and fifteen years of habits. Here are the five principles I would now refuse to build without.
            </P>

            <HR />

            {/*** PRINCIPLE 1 ***/}
            <H2>1. Memory before intelligence</H2>

            <P>
              Intelligence without context is just confident guessing. Before you ask AI to reason about your business, the business has to remember itself: every client conversation, every decision and the reason behind it, every process as it actually runs rather than as the manual claims. Capture everything. Structure it. Make it retrievable.
            </P>
            <P>
              This is the unglamorous foundation everyone skips, because they want the magic first. But a company that forgets solves the same problem twice, forever. Memory is not a feature you add later. It is the substrate everything else runs on.
            </P>

            <HR />

            {/*** PRINCIPLE 2 ***/}
            <H2>2. Intelligence before automation</H2>

            <P>
              Once the memory exists, the instinct is to automate. Resist it for exactly one step. Automation makes a process faster and permanent, which means automating a bad process scales the chaos and welds it in place.
            </P>
            <P>
              The order that works is: understand the process, simplify it, redesign it around how AI and humans should actually divide the work, and only then automate what remains. Most processes shrink substantially under honest examination. Automate the survivor, not the original.
            </P>

            <HR />

            {/*** PRINCIPLE 3 ***/}
            <H2>3. Humans own responsibility. AI owns execution.</H2>

            <P>
              This is the contract at the centre of the whole thing, and it is easy to get subtly wrong. AI is extraordinary at execution. It remembers, coordinates, and runs the repetitive work no human should spend a career on. Let it own that.
            </P>
            <P>
              But notice what does not transfer. When an AI executes a task, the responsibility for that task stays human. Someone still signs at the bottom of the page. The machine can do the work and still not own the consequences. Accountability is not a workload you can delegate. The moment a company forgets that, it has built something it cannot stand behind.
            </P>
            <P>
              <strong className="text-fg">Intelligence is becoming a commodity. Accountability never will.</strong> Humans decide, carry the risk, and hold the trust. AI does everything underneath.
            </P>

            <HR />

            {/*** PRINCIPLE 4 ***/}
            <H2>4. Organise around decisions, not departments</H2>

            <P>
              Here is the principle that sounds abstract and turns out to be the most practical of all.
            </P>
            <P>
              Why do companies have departments? Largely because communication used to be expensive. You grouped the people who needed to talk constantly into the same box to lower the cost of coordinating them. The org chart is, in large part, a map of where communication was costly in 1960.
            </P>
            <P>
              AI collapses that cost. When coordination is cheap and memory is shared, the reason to draw hard walls between &ldquo;sales&rdquo; and &ldquo;operations&rdquo; and &ldquo;finance&rdquo; weakens. Work can flow along the path of a decision instead of stopping at every departmental border. The org chart starts to look less like a hierarchy of boxes and more like a decision tree: what has to be decided, who decides it, and what feeds that decision.
            </P>
            <P>
              I&apos;ll be honest about the limit. Departments never existed <em>only</em> to lower communication cost. They also concentrate expertise and give people somewhere to belong. Those reasons don&apos;t vanish. So the claim is precise: the coordination rationale for the department is collapsing; the expertise rationale is not. An AI-native company keeps the second and stops letting the first dictate its shape.
            </P>

            <HR />

            {/*** PRINCIPLE 5 ***/}
            <H2>5. The closed-loop company</H2>

            <P>
              The four principles above describe a system, and a system is defined by whether it closes.
            </P>
            <P>
              Reality produces signals. Memory captures them. Understanding turns them into a decision. Execution acts. Feedback measures what actually happened, and feeds it back into memory, so the next decision starts from better ground than the last. Reality, to memory, to understanding, to decision, to execution, to feedback, to better memory.
            </P>
            <P>
              Speed is the obvious gain. The real one is compounding. Every cycle leaves the company slightly sharper than the one before, because the loop is closed and nothing is dropped. A traditional company runs the same loop with a leak at every stage: memory lost, feedback never captured, the same lesson re-learned by each new hire. The whole game is closing the leaks.
            </P>

            <HR />

            {/*** SHAPE UNDERNEATH ***/}
            <H2>The shape underneath</H2>

            <P>
              Strip the five down and the same architecture appears every time: a layer that remembers, a layer that decides, and a layer that executes, wrapped in a loop that feeds what happened back into what it knows. Memory, decision, execution, closed.
            </P>
            <P>
              That is what we are building Trees OS to be, on ourselves first. Not AI added to a company. A company whose shape <em>is</em> AI, with humans kept where humans belong: at the decisions, holding the responsibility, doing the part that was always theirs.
            </P>
            <P>
              The tools to do this are, for the first time, cheap and good enough. What is scarce is the willingness to rebuild rather than bolt on. That willingness is the actual competitive advantage. The principles are free.
            </P>

            <HR />

            {/*** AUTHOR NOTE ***/}
            <div className="mt-8 rounded-2xl border border-moss/20 bg-base-raised p-6 text-center">
              <p className="text-[13px] leading-[1.6] text-fg-faint italic">
                Quentin Cloarec is the founder of Trees OS, which rebuilds traditional businesses to run on AI, starting with its own.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <Button href={brand.sites.product} variant="ghost" track="cta:article-ai-native">
                  See Treelance ↗
                </Button>
                <Button href={brand.links.book} external track="booking:article-ai-native">
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
            <a href={`mailto:${brand.links.email}`} className="mx-2 text-fg-muted no-underline hover:text-fg">{brand.links.email}</a> ·
            <a href={brand.links.linkedin} className="mx-2 text-fg-muted no-underline hover:text-fg">LinkedIn</a> ·
            <a href="/" className="mx-2 text-fg-muted no-underline hover:text-fg">Treelance</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
