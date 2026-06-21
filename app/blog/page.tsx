import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container, Button } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: `Blog · ${brand.company}`,
  description: "Thoughts on metacognition, systems thinking, AI, and building companies that run on their own intelligence.",
};

const articles = [
  {
    slug: "signal-problem",
    title: "The Signal Problem in Energy Hiring",
    date: "2026-06-21",
    excerpt:
      "The slow part of energy hiring is not sourcing. It is the handoffs. Why most agencies are solving the wrong problem, and what actually compresses the cycle.",
    author: "Quentin Cloarec · Trees OS",
  },
  {
    slug: "metacognition",
    title: "Metacognition: Why Some People Think Differently",
    date: "2026-06-21",
    excerpt:
      "Most people overestimate how similar other people's thinking is to their own. A rough model of cognitive architecture and what it means for leadership.",
    author: "Quentin Cloarec",
  },
];

export default function BlogIndex() {
  return (
    <main className="bg-base">
      <TopNavDark variant="company" />

      <header className="relative overflow-hidden bg-base py-20 max-[700px]:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(120%_90%_at_75%_0,#000_0%,transparent_72%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[10%] top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.15)_0%,transparent_60%)] blur-2xl"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(88,180,81,.45),transparent)]"
        />
        <Container width="wide" className="relative z-10">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // writing
          </div>
          <h1 className="mt-3 text-[clamp(32px,5vw,52px)] font-black leading-[1.0] tracking-tightest text-fg">
            Blog
          </h1>
          <p className="mt-4 max-w-[50ch] text-[16px] leading-[1.6] text-fg-muted">
            Raw thoughts from the Trees OS team — on building, thinking, and running companies on AI.
          </p>
        </Container>
      </header>

      <section className="relative overflow-hidden bg-base py-10 pb-24 text-fg">
        <Container width="wide">
          <div className="divide-y divide-white/[0.07]">
            {articles.map((a) => (
              <article key={a.slug} className="group py-8 first:pt-0">
                <a
                  href={`/blog/${a.slug}`}
                  className="block no-underline transition-colors hover:brightness-110"
                >
                  <time className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-faint">
                    {a.date}
                  </time>
                  <h2 className="mt-2 text-[22px] font-extrabold leading-[1.15] tracking-[-0.01em] text-fg group-hover:text-moss">
                    {a.title}
                  </h2>
                  <p className="mt-2 max-w-[64ch] text-[15px] leading-[1.6] text-fg-muted">
                    {a.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-2 font-mono text-[13px] text-moss">
                    Read → <span className="text-fg-faint text-[12px]">· {a.author}</span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {articles.length === 0 && (
            <p className="py-24 text-center text-[15px] text-fg-faint">
              Nothing here yet. Check back soon.
            </p>
          )}
        </Container>
      </section>

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
