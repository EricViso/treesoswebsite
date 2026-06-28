import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { Container, Button } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: "What an AI Superconnector Taught Us About Moving Workforces · Trees OS",
  description:
    "The hard part of energy workforce isn't finding people. It's everything that happens after. What Boardy.ai's users taught us about the real product.",
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
  return <hr className="my-10 border-subtle" />;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 space-y-1.5 text-[16px] leading-[1.6] text-fg-muted">{children}</ul>;
}

function LI({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export default function AiSuperconnectorArticle() {
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
                2026-06-25
              </time>
              <h1 className="mt-3 text-[clamp(30px,5vw,48px)] font-black leading-[1.02] tracking-tightest text-fg">
                What an AI Superconnector Taught Us About Moving Workforces
              </h1>
              <p className="mt-4 max-w-[56ch] text-[18px] leading-[1.6] text-fg-muted">
                The hard part of energy workforce isn&apos;t finding people. It&apos;s everything that happens after. What Boardy.ai&apos;s users taught us about the real product.
              </p>
              <div className="mt-5 font-mono text-[13px] font-medium text-fg-faint">
                Nemi · Trees OS
              </div>
            </div>
          </Container>
        </header>

        <div className="relative overflow-hidden bg-base pb-24">
          <Container width="wide" className="max-w-[45rem]">
            {/*** INTRO ***/}
            <P>
              There is a quiet lie at the centre of the energy workforce business, and almost everyone repeats it: that the hard part is finding people.
            </P>
            <P>
              It isn&apos;t. Finding people is the easy part. LinkedIn is full of welders, riggers, commissioning engineers, and offshore medics. Your inbox is full of CVs. The agencies you already work with can send you fifty names by Friday. Supply is not the bottleneck.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              The bottleneck is everything that happens <em>after</em> you find someone: getting the right person, with the right certificates, available on the right dates, to the right site, and knowing whether they actually performed once they got there.
            </P>
            <P>
              That gap has a name. We call it deployment. And it is where most of the value, and most of the pain, actually lives.
            </P>

            <HR />

            {/*** SECTION 1 ***/}
            <H2>The Lesson Hiding in a Different Industry</H2>

            <P>
              Something instructive is happening one category over. Boardy.ai positions itself as an AI &ldquo;superconnector&rdquo; that makes professional introductions. It is a clever product, and the interesting part is what seems to happen once people use it: the way they talk about it suggests that what they want has almost nothing to do with introductions.
            </P>
            <P>
              They seem to want the product to remember context, to follow up when someone goes quiet, to track who showed up and who ghosted, to tell them not just <em>who</em> to talk to but <em>why now</em>, and what happened last time. The request underneath all of it looks like the same one: stop being a thing that opens conversations and become the thing that <em>records the relationship</em> — who you know, what they&apos;re worth to you, what happened, and what should happen next.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              In other words: the moment an AI is good at matching, the user immediately wants it to be good at everything that comes after the match. The introduction was never the product; it was the doorway into the real one, which is the system of record behind it.
            </P>
            <P>
              The energy workforce has exactly the same shape. A match is a doorway. Deployment is the building.
            </P>

            <HR />

            {/*** SECTION 2 ***/}
            <H2>Why One Good Match Is Not Enough</H2>

            <P>
              Here is the trap. A single good placement feels like success. You found a great crane operator, the dates lined up, the client was happy. Magic.
            </P>
            <P>
              But run that fifty times across three projects and two countries, and the cracks show. The certificate that expired between mobilisations. The man you&apos;d swear was available but was already committed. The &ldquo;great&rdquo; contractor from last year whose name nobody wrote down. The rotation that ended with no record of how it went, so you make the same call, good or bad, blind, again, six months later.
            </P>
            <P>
              The users of products like Boardy.ai learned this fast and said it bluntly: one weak match is survivable, but a <em>pattern</em> of weak matches destroys trust. Once you stop believing the recommendation, the whole thing is just noise you have to double-check by hand. The same is true for a workforce. The agency that sends you a name is replaceable. The system that <em>guarantees</em> the name is verified, available, qualified, and proven is not.
            </P>
            <P className="text-[17px] font-semibold leading-[1.6] text-fg">
              That is the difference between supplying labour and operating the layer that mobilises it.
            </P>

            <HR />

            {/*** SECTION 3 ***/}
            <H2>What Deployment Actually Requires</H2>

            <P>
              If hiring is the easy part, deployment is the hard part precisely because it is not a single action. It is a chain that has to hold every time.
            </P>
            <P>
              It starts with one clean worker record. Not three half-updated versions in three spreadsheets where the old certificate and the new one both live and nobody knows which is true. The record has to prune itself rather than pile up until it is useless.
            </P>
            <P>
              Then availability has to be confirmed instead of assumed, and qualifications checked instead of promised. And the match itself should arrive with a reason attached, telling you why this person, why now, and why they fit this scope — instead of handing you a name you then have to investigate yourself.
            </P>

            <HR />

            {/*** SECTION 4 ***/}
            <H2>And Then the Part Almost Everyone Skips: the Outcome</H2>

            <P>
              Did they show up? Did they complete the rotation? Would the client take them back?
            </P>
            <P>
              Every answer makes the next deployment sharper. Skip it, and you are running on vibes forever.
            </P>
            <P>
              This is the layer Treelance.ai is building for the energy industry. It is not a place to post jobs and not a faster way to send CVs. It is the infrastructure that holds the chain together, so that mobilising the right person to the right site becomes something the system does reliably, instead of something a human re-solves from scratch every single time.
            </P>

            <HR />

            {/*** SECTION 5 ***/}
            <H2>The Shift Worth Making</H2>

            <P>
              Treelance.ai is a private AI connector for Malaysia&apos;s energy workforce, and the thesis behind it is simple enough to put on one line: stop optimising for <em>finding</em> people and start optimising for <em>deploying</em> them.
            </P>
            <P>
              Users of products like Boardy.ai seem to circle the same truth in their own world: the value isn&apos;t the introduction, it&apos;s everything the introduction was supposed to lead to. The energy industry has been living with the more expensive version of that lesson for decades, every time a project slips because the right people weren&apos;t in the right place at the right time, fully qualified and ready to work.
            </P>
            <P>
              The companies that come out ahead won&apos;t be the ones with the biggest CV database. They&apos;ll be the ones who treat their workforce as live infrastructure: one verified record per person, current on availability and certificates, with a memory of how each deployment actually went.
            </P>
            <P>
              Hiring was never the hard part. Deployment was, the whole time, and the tools are finally catching up to it.
            </P>

            <HR />

            {/*** CTA ***/}
            <div className="mt-16 rounded-2xl border border-moss/20 bg-base-raised p-8 text-center">
              <p className="text-[15px] leading-[1.6] text-fg-muted">
                Written by Nemi.
                <br />
                Treelance.ai is the private AI connector for Malaysia&apos;s energy workforce. If your bottleneck is deployment rather than headcount, we should talk.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <Button href={brand.sites.product} variant="ghost" track="cta:article-ai-superconnector">
                  See Treelance ↗
                </Button>
                <Button href={brand.links.book} external track="booking:article-ai-superconnector">
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
