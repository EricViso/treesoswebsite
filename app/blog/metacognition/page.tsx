import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container, Button } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: "Metacognition: Why Some People Think Differently · Trees OS",
  description:
    "Most people overestimate how similar other people's thinking is to their own. A rough model of cognitive architecture and what it means for leadership.",
};

const tier = [
  {
    label: "Reactive Thinkers",
    pct: "40–50%",
    desc: "Feelings and immediate experience",
    inner: [
      "I like this. I don't like this.",
      "This scares me. This feels good.",
    ],
    note: "Very little observation of their own mental processes. They feel emotions more than they analyze them. This is not a put-down. It's normal. Most humans are wired this way. But if you're building a company or designing complex systems, you need to know this.",
  },
  {
    label: "Problem Solvers",
    pct: "30–40%",
    desc: "External problems and execution",
    inner: [
      "How do I solve this problem?",
      "What's the fastest path? Who do I need?",
    ],
    note: "They don't usually ask: 'Why am I approaching this problem this way? Is this even the right problem?' Most managers, engineers, consultants live here. They get frustrated by Group 1. They're misunderstood by Groups 3 and 4.",
  },
  {
    label: "Natural Metacognitive Thinkers",
    pct: "10–20%",
    desc: "How they think",
    inner: [
      "Why do I believe this? What assumptions are baked in?",
      "What mental model am I using? What pattern am I not seeing?",
    ],
    note: "They see systems behind events. A sales call isn't just a conversation — it's a negotiation dynamic governed by status, incentives, framing. This group includes entrepreneurs, researchers, philosophers, investors, strategists.",
  },
  {
    label: "Hyper-Reflective Systems Thinkers",
    pct: "1–5%",
    desc: "The systems behind thinking",
    inner: null,
    note: "Their mind runs on multiple layers simultaneously. Layer 1: What is happening? Layer 2: Why? Layer 3: Why am I interpreting it this way? Layer 4: What system creates this behavior? Layer 5: What creates that system? This recursive, fractal thinking is both superpower and liability. They assume everyone else thinks this way. Most people don't.",
  },
];

function ArticleSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-6 first:pt-0">
      {title && (
        <h2 className="mb-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] text-fg">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={"mb-4 text-[16px] leading-[1.65] text-fg-muted last:mb-0" + (className ? " " + className : "")}>{children}</p>;
}

export default function MetacognitionArticle() {
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
                Metacognition: Why Some People Think Differently
              </h1>
              <p className="mt-4 max-w-[56ch] text-[18px] leading-[1.6] text-fg-muted">
                Most people overestimate how similar other people&apos;s thinking is to their own.
              </p>
              <div className="mt-5 font-mono text-[13px] font-medium text-fg-faint">
                Quentin Cloarec
              </div>
            </div>
          </Container>
        </header>

        <div className="relative overflow-hidden bg-base pb-24">
          <Container width="wide" className="max-w-[45rem]">
            {/*** INTRO ***/}
            <P>
              This is not an ego thing. It&apos;s a wiring thing.
            </P>
            <P>
              When you hear a strategy, your brain might automatically fill in assumptions, risks, second-order effects, long-term implications. The person next to you might just hear the instruction. Both of you are smart. Both of you are competent. But your default mental operating systems are running different code.
            </P>
            <P>
              Understanding this gap — and what to do about it — is the point of this article.
            </P>

            <hr className="my-10 border-subtle" />

            {/*** WHAT IS METACOGNITION ***/}
            <ArticleSection title="What Is Metacognition?">
              <P>
                Metacognition is thinking about how you think. It sounds obvious. It&apos;s not evenly distributed.
              </P>
              <P className="font-semibold text-fg">Examples:</P>
              <ul className="mb-4 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">
                <li>• Why do I believe this?</li>
                <li>• What assumptions am I making?</li>
                <li>• Is this reality, or my ego speaking?</li>
                <li>• Why does this decision feel obvious?</li>
                <li>• How might my brain be lying to me right now?</li>
              </ul>
              <P>
                Some people need conscious effort to ask these questions. Others do it automatically, like breathing.
              </P>
              <P>
                If you&apos;re in the second category, you probably don&apos;t realize how rare it is. That&apos;s the trap. You assume everyone is running the same background processes. They&apos;re not.
              </P>
            </ArticleSection>

            <hr className="my-10 border-subtle" />

            {/*** ROUGH MODEL ***/}
            <ArticleSection title="A Rough Model">
              <P>
                These percentages are approximations. Not hard science. Useful as a map.
              </P>
            </ArticleSection>

            {/*** TIERS ***/}
            {tier.map((t, i) => (
              <ArticleSection key={t.label}>
                <h2 className="mb-0.5 text-[20px] font-extrabold tracking-[-0.01em] text-fg">
                  {i + 1}. {t.label}
                  <span className="ml-2 font-mono text-[13px] font-normal text-fg-faint">
                    {t.pct}
                  </span>
                </h2>
                <div className="mb-3 font-mono text-[12px] uppercase tracking-[0.08em] text-moss">
                  {t.desc}
                </div>
                {t.inner && (
                  <ul className="mb-4 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">
                    {t.inner.map((l) => (
                      <li key={l}>• {l}</li>
                    ))}
                  </ul>
                )}
                <P>{t.note}</P>

                {i === 3 && (
                  <>
                    <P className="font-semibold text-fg">The superpower:</P>
                    <P>
                      They see what others can&apos;t. They anticipate second- and third-order effects before others register the first. They spot structural arbitrage where others see noise.
                    </P>
                    <P className="font-semibold text-fg">The liability:</P>
                    <P>
                      They assume everyone else thinks this way. Most people don&apos;t. And when you explain the whole system to someone who was ready for just the instruction, everyone walks away frustrated. You think they&apos;re slow. They think you&apos;re overcomplicating.
                    </P>
                  </>
                )}
              </ArticleSection>
            ))}

            <hr className="my-10 border-subtle" />

            {/*** FOUNDER TRAP ***/}
            <ArticleSection title="The Founder Trap">
              <P>
                Many CEOs operate on a hidden assumption: <em className="not-italic text-fg">&ldquo;If I explain it clearly, people will understand.&rdquo;</em>
              </P>
              <P>
                The problem is not intelligence. It&apos;s cognitive architecture.
              </P>
              <P>
                When you, a metacognitive systems thinker, communicate a strategy, your brain injects the assumptions supporting it, the dependencies constraining it, the risks threatening it, the second-order effects, the long-term implications.
              </P>
              <P>
                You think you communicated the whole system. They received just the instruction.
              </P>
              <P>
                This is one of the most common sources of organizational dysfunction. It&apos;s not a failure of clarity. It&apos;s a failure of translation.
              </P>
              <P className="font-semibold text-fg">The fix isn&apos;t to dumb it down. It&apos;s to build multiple representations of the same idea:</P>
              <ol className="mb-4 ml-5 space-y-2 text-[16px] leading-[1.6] text-fg-muted">
                <li>1. A <strong className="text-fg">one-paragraph version</strong> for reactive thinkers who need to know what to do.</li>
                <li>2. A <strong className="text-fg">step-by-step version</strong> for problem solvers who need the execution path.</li>
                <li>3. A <strong className="text-fg">full-system version</strong> for metacognitive thinkers who need the map.</li>
              </ol>
              <P>
                Blaming people for being in a different cognitive zone is like blaming fish for not climbing trees. The question isn&apos;t &ldquo;why don&apos;t they get it.&rdquo; It&apos;s &ldquo;do I have a communication strategy that maps to different cognitive architectures?&rdquo;
              </P>
            </ArticleSection>

            <hr className="my-10 border-subtle" />

            {/*** MBTI ***/}
            <ArticleSection title="MBTI Correlations">
              <P>Loose, but real:</P>
              <ul className="mb-4 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">
                <li>• <strong className="text-fg">INTP / INTJ / ENTP</strong> — high metacognitive tendency</li>
                <li>• <strong className="text-fg">ENTJ</strong> — mixed; some metacognitive, many action-focused</li>
                <li>• <strong className="text-fg">ESTJ</strong> — primarily execution-focused</li>
              </ul>
              <P>But MBTI explains a small part of the picture. More important factors:</P>
              <ul className="mb-4 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">
                <li>• Intellectual curiosity — the habit of asking why</li>
                <li>• Openness to experience — willingness to hold your own models loosely</li>
                <li>• Abstract reasoning — capacity to manipulate non-physical concepts</li>
                <li>• Environment — whether metacognition was modeled, taught, or rewarded</li>
                <li>• Habit of reflection — done or not done, no in-between</li>
              </ul>
              <P>
                The zones describe direction of attention, not value. A person can be in any zone and be brilliant, kind, effective, or none of the above.
              </P>
            </ArticleSection>

            <hr className="my-10 border-subtle" />

            {/*** SO WHAT ***/}
            <ArticleSection title="So What?">
              <P className="font-semibold text-fg">If you&apos;re a metacognitive thinker:</P>
              <ul className="mb-4 ml-5 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">
                <li>• Assume most people do not see the systems you see. This isn&apos;t arrogance — it&apos;s statistics.</li>
                <li>• Build communications that work at different abstraction levels.</li>
                <li>• Hire for complement, not clone. People who think like you will validate you. People who don&apos;t will complete you.</li>
              </ul>
              <p className="font-semibold text-fg">If you&apos;re a problem solver:</p>
              <ul className="mb-4 ml-5 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">
                <li>• You&apos;re already effective. The question is whether you&apos;re solving the right problem.</li>
                <li>• Before executing, pause: why this approach? What assumptions am I making?</li>
                <li>• Seek out metacognitive thinkers for strategy alignment, even if their style frustrates you.</li>
              </ul>
              <P className="font-semibold text-fg">If you work with people who think differently:</P>
              <ul className="mb-4 ml-5 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">
                <li>• The gap is not intelligence. Don&apos;t let frustration become condescension.</li>
                <li>• Learn to translate. Same idea, multiple registers.</li>
                <li>• Build teams where all four zones are represented and valued.</li>
              </ul>
            </ArticleSection>

            <hr className="my-10 border-subtle" />

            {/*** BOTTOM LINE ***/}
            <ArticleSection title="Bottom Line">
              <P>
                Metacognition is not evenly distributed.
              </P>
              <P>
                Reactive thinkers experience the world. Problem solvers shape it. Metacognitive thinkers see how they shape it. Systems thinkers see how the shaping tools are shaped.
              </P>
              <P>
                None is better. Different contexts, different optimizations.
              </P>
              <P>
                The trouble starts when everyone assumes everyone else is running the same OS — and then blames the other person when the software doesn&apos;t compile.
              </P>
              <P className="text-[17px] font-semibold leading-[1.6] text-fg">
                The best leaders and teams don&apos;t try to make everyone think the same. They build interfaces between cognitive modes. They translate. They bridge.
              </P>
              <P>
                Harder than building a monoculture. The only path to building something that actually works.
              </P>
            </ArticleSection>

            {/* CTA */}
            <div className="mt-16 rounded-2xl border border-moss/20 bg-base-raised p-8 text-center">
              <p className="text-[15px] leading-[1.6] text-fg-muted">
                Written by Quentin Cloarec, co-founder of Trees OS.
                <br />
                We rebuild traditional businesses to run on AI, then keep them running.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <Button href="/company" variant="ghost">
                  About Trees OS →
                </Button>
                <Button href={brand.links.book} external track="booking:article-cta">
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
