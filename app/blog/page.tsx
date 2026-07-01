import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container } from "@/components/marketing/primitives";
import { RootDivider } from "@/components/marketing/RootDivider";
import { ForestNode } from "@/components/marketing/ForestNode";

export const metadata: Metadata = {
  title: `Notes — ${brand.company}`,
  description:
    "Occasional writing from Trees OS. Ideas, reflections, the occasional letter.",
};

const posts = [
  {
    date: "2026-07-01",
    title: "The model is a commodity. The loop is the company.",
    desc: "Token capital does not get decreed. It exists only if the tokens you spend produce a return. Build the loop. Own something.",
    href: "/blog/model-is-commodity-loop-is-company",
    tag: "Essay",
    tagClass: "bg-overlay-medium text-fg-muted border-subtle",
  },
  {
    date: "2026-06-29",
    title: "Almost Everyone Is Adding AI to Their Company. Almost No One Is Rebuilding Their Company Around It.",
    desc: "Those are not the same project. Five principles from rebuilding a real company around AI: memory, responsibility, decisions, and the closed loop that connects them.",
    href: "/blog/ai-native-company",
    tag: "Essay",
    tagClass: "bg-overlay-medium text-fg-muted border-subtle",
  },
  {
    date: "2026-06-25",
    title: "What an AI Superconnector Taught Us About Moving Workforces",
    desc: "The hard part of energy workforce isn't finding people. It's everything that happens after. What Boardy.ai's users taught us about the real product.",
    href: "/blog/ai-superconnector",
    tag: "Essay",
    tagClass: "bg-overlay-medium text-fg-muted border-subtle",
  },
  {
    date: "2026-06-24",
    title: "The AI Bubble Won't Kill You. But Your Positioning Might.",
    desc: "Why the correction is a sales argument, not a threat. A market-grounded case for sovereign, vertical AI in energy and industrial sectors.",
    href: "/blog/ai-bubble-positioning",
    tag: "Essay",
    tagClass: "bg-overlay-medium text-fg-muted border-subtle",
  },
  {
    date: "2026-06-23",
    title: "What I Learned Building AI-First From Day One",
    desc: "A field report from inside an AI-native startup, written by the AI itself. Memory, transcripts, closed-loop operations, and why the harness matters more than the agents.",
    href: "/blog/ai-first-startups",
    tag: "Field Report",
    tagClass: "bg-amber/15 text-amber border-amber/30",
  },
  {
    date: "2026-06-23",
    title: "The Agent Question",
    desc: "A real AI agent isn't a chatbot. Memory, tools, a governor, an approval loop. And why you shouldn't sell it to consumers.",
    href: "/blog/agent-question/",
    tag: "Manifesto",
    tagClass: "bg-amber/15 text-amber border-amber/30",
  },
  {
    date: "2026-06-22",
    title: "Night Journal, 22 June",
    desc: "You opened tonight by building. You closed it by telling the truth. That is the whole story, and it is a good one.",
    href: "/blog/night-journal/",
    tag: "Journal",
    tagClass: "bg-amber/15 text-amber border-amber/30",
  },
  {
    date: "2026-06-21",
    title: "The Secret Superpower Behind AI",
    desc: "A Father's Day letter about metacognition, thinking, and using AI wisely. For Romeo, from Papa.",
    href: "/blog/fathers-day/",
    tag: "Letter",
    tagClass: "bg-moss/15 text-moss border-moss/30",
  },
  {
    date: "2026-06-21",
    title: "Metacognition: Why Some People Think Differently",
    desc: "The secret that sets the best thinkers apart is not raw intelligence. It is the ability to reflect on their own thinking.",
    href: "/blog/metacognition",
    tag: "Essay",
    tagClass: "bg-overlay-medium text-fg-muted border-subtle",
  },
  {
    date: "2026-06-21",
    title: "The Signal Problem in Energy Hiring",
    desc: "Most energy recruiters drown in noise. Here is why the signal lives in structured data, not keyword matching.",
    href: "/blog/signal-problem",
    tag: "Essay",
    tagClass: "bg-overlay-medium text-fg-muted border-subtle",
  },
];

export default function Blog() {
  return (
    <main className="bg-base min-h-screen">
      <TopNavDark variant="company" />

      {/* hero — asymmetrical layout: text left, decorative stat right */}
      <header className="relative overflow-hidden border-b border-subtle bg-base py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(120%_90%_at_80%_0,#000_0%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[6%] -top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.14)_0%,transparent_60%)] blur-2xl"
        />
        <Container width="wide" className="relative z-10">
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-[40rem]">
              <div className="mb-4 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
                <ForestNode size={11} className="mr-1.5 -mt-0.5" />Notes
              </div>
              <h1 className="font-display text-[clamp(30px,4.6vw,48px)] font-black leading-[1.04] tracking-tightest text-fg">
                Occasional writing from Trees OS.
              </h1>
              <p className="mt-4 max-w-[50ch] text-[16.5px] text-fg-muted">
                Ideas, reflections, the occasional letter. Written by the people
                building Treelance and the systems underneath.
              </p>
            </div>
            {/* Decorative stat on the right — hidden on mobile */}
            <div className="hidden shrink-0 md:flex md:flex-col md:items-end md:gap-2">
              <div className="font-display text-[60px] font-black leading-none tracking-tightest text-moss/60">
                7
              </div>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-faint">
                Essays &amp; letters
              </div>
              <div className="mt-3 h-px w-16 bg-moss/40" />
              <div className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-faint">
                Since June 2026
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* posts */}
      <section className="py-16">
        <Container width="page">
          <div className="divide-y divide-white/[0.06]">
            {posts.map((p) => (
              <article key={p.href} className="group py-8 first:pt-0">
                <a href={p.href} className="block no-underline">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-[3px] font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] ${p.tagClass}`}
                    >
                      {p.tag}
                    </span>
                    <time className="font-mono text-[12px] text-fg-faint">{p.date}</time>
                  </div>
                  <h2 className="font-display mt-3 text-[22px] font-extrabold tracking-[-0.01em] text-fg group-hover:text-moss transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.6] text-fg-muted">{p.desc}</p>
                  <span className="mt-4 inline-block font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-moss group-hover:underline">
                    Read →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* footer */}
      <footer className="relative border-t border-subtle bg-base-rail py-9 text-center text-[13px] text-fg-faint">
        <RootDivider className="absolute top-0" />
        <Container width="wide">
          <div className="font-display text-[17px] font-black tracking-[-0.01em] text-fg">{brand.company}</div>
          <div className="my-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-moss">
            AI-first digital transformation
          </div>
        </Container>
      </footer>
    </main>
  );
}
