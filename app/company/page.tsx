import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { manifesto } from "@/lib/content";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { SpeechBlock } from "@/components/marketing/SpeechBlock";
import { Container, Button, Hl } from "@/components/marketing/primitives";
import { RootDivider } from "@/components/marketing/RootDivider";
import { ForestNode } from "@/components/marketing/ForestNode";

export const metadata: Metadata = {
  title: `${brand.company} · AI-first digital transformation`,
  description:
    "Trees OS is an AI-first company. We rebuild traditional businesses to run on AI, then keep them running and improving forever. Treelance is our first transformation.",
};

const model = [
  {
    tag: "dogfood",
    title: "We run on it ourselves",
    body: "Every part of Trees OS is AI-operated: delivery, research, ops, even this website. We don't recommend a transformation we haven't lived.",
  },
  {
    tag: "transform",
    title: "We rebuild, not bolt-on",
    body: "We don't sell a tool you wire into a legacy process. We rebuild the business to be AI-first. Treelance is our own first transformation: energy staffing in Malaysia, made real-time.",
  },
  {
    tag: "maintain",
    title: "We stay, and keep improving",
    body: "We don't ship and leave. We run the AI systems we build and improve them every week. The work and the relationship are ongoing.",
  },
];

const proof = [
  "This site is instrumented and reviewed weekly by an AI analyst agent that proposes its own improvements.",
  "Treelance runs on an agent fleet: matching, candidate outreach and the live dashboard.",
  "Internal delivery, research and content are AI-operated by default.",
];

/**
 * /company — Trees OS company thesis (treesos.io). Miki Mafia is teased, not named.
 */
export default function Company() {
  return (
    <main className="bg-base">
      <TopNavDark variant="company" />

      {/* Trees OS hero with logo watermark */}
      <header className="relative overflow-hidden bg-base py-20 max-[700px]:py-14">
        {/* dotted grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(120%_90%_at_75%_0,#000_0%,transparent_72%)]"
        />
        {/* green glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[10%] -top-[30%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.20)_0%,transparent_60%)] blur-2xl"
        />
        {/* bottom hairline */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(88,180,81,.45),transparent)]"
        />

        {/* big logo watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.07] max-[820px]:hidden"
        >
          <img
            src="/images/trees-os-logo.png"
            alt=""
            width="400"
            height="400"
            className="object-contain"
          />
        </div>

        <Container width="wide" className="relative z-10">
          <div className="flex items-start gap-8">
            {/* logo mark */}
            <div className="shrink-0 max-[700px]:hidden">
              <img
                src="/images/trees-os-logo.png"
                alt="Trees OS logo"
                width="120"
                height="120"
                className="object-contain"
              />
            </div>
            <div className="max-w-[45rem]">
              <div className="mb-5 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
                // AI-first digital transformation
              </div>
              <h1 className="text-[clamp(38px,6.4vw,68px)] font-black leading-[1.0] tracking-tightest text-fg">
                We use AI to be more <Hl>human.</Hl>
              </h1>
              <p className="mt-6 max-w-[60ch] text-[clamp(16px,2.2vw,19px)] leading-[1.6] text-fg-muted">
                Trees OS is an AI-first company. We rebuild traditional businesses to run on AI, then keep them running and improving forever. Treelance, our real-time talent orchestration for energy, is our first transformation.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button href={brand.links.book} external track="booking:company-hero">
                  Work with us →
                </Button>
                <Button href={brand.sites.product} variant="ghost" track="cta:see-treelance">
                  See Treelance ↗
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* MANIFESTO */}
      <SpeechBlock
        tone="dark"
        eyebrow={manifesto.eyebrow}
        title={manifesto.title}
        lead={manifesto.lead}
        body={manifesto.body}
        pullQuote={manifesto.pullQuote}
        signoff={manifesto.signoff}
      />

      {/* THE MODEL — simultaneous principles, not steps */}
      <section className="relative overflow-hidden bg-base-rail bg-rings-dark py-20 text-fg">
        <RootDivider className="absolute top-0" />
        <Container width="wide">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            <ForestNode size={11} className="mr-1.5 -mt-0.5" />the model
          </div>
          <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest text-fg">
            Not a tool we sell. A business we rebuild and run.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[16.5px] leading-[1.6] text-fg-muted">
            These aren&apos;t phases. We do all three at once, on ourselves first,
            then for the businesses we transform.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
            {model.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-subtle bg-base-raised p-6 shadow-[0_0_0_1px_rgba(var(--color-card-shadow-r), var(--color-card-shadow-g), var(--color-card-shadow-b), 0.04),0_2px_10px_rgba(0,0,0,0.45)]"
              >
                <div className="mb-4 inline-block rounded-md border border-subtle bg-overlay-subtle px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-moss">
                  {m.tag}
                </div>
                <h3 className="text-[18px] font-bold tracking-[-0.01em] text-fg">{m.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-fg-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* EXHIBIT A — Treelance */}
      <section className="relative overflow-hidden bg-base py-16 text-fg">
        <RootDivider className="absolute top-0" />
        <Container width="wide">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-moss/20 bg-base-raised p-8 md:flex-row md:items-center">
            <div className="max-w-[52ch]">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-moss">
                <ForestNode size={11} className="mr-1.5 -mt-0.5" />exhibit A
              </div>
              <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.01em] text-fg">
                Treelance. Our first transformation.
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-fg-muted">
                Real-time AI talent orchestration for energy staffing agencies, in
                Malaysia. The proof that the model works. Running live, today.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button href={brand.sites.product} track="cta:exhibit-treelance">
                See Treelance →
              </Button>
              <Button href="/dashboard.html" variant="ghost" external track="demo:company">
                Live demo ↗
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* PROOF — dogfooding */}
      <section className="relative overflow-hidden bg-base-rail bg-rings-dark py-20 text-fg">
        <RootDivider className="absolute top-0" />
        <Container width="wide">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            <ForestNode size={11} className="mr-1.5 -mt-0.5" />proof, not promises
          </div>
          <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest text-fg">
            The method is credible because we live it.
          </h2>
          <ul className="mt-8 max-w-[64ch] divide-y divide-border-subtle border-y border-subtle">
            {proof.map((p) => (
              <li key={p} className="flex items-start gap-3 py-4">
                <span className="mt-0.5 font-mono text-moss">→</span>
                <span className="text-[15.5px] leading-[1.55] text-fg-muted">{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* HORIZON — teased, unnamed */}
      <section className="relative overflow-hidden bg-base py-20 text-fg">
        <RootDivider className="absolute top-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[8%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.14)_0%,transparent_62%)] blur-2xl"
        />
        <Container width="wide" className="relative">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            <ForestNode size={11} className="mr-1.5 -mt-0.5" />the horizon
          </div>
          <h2 className="mt-3 max-w-[24ch] text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest text-fg">
            If the model holds, we don&apos;t stop at one industry.
          </h2>
          <p className="mt-4 max-w-[60ch] text-[16.5px] leading-[1.6] text-fg-muted">
            Energy staffing is the first. The same playbook, rebuild AI-first and
            maintain forever, applies anywhere a traditional business is ready to
            be reinvented. In time, we back the operators doing exactly that.
            <span className="text-fg-faint"> More on that when it&apos;s real.</span>
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-base py-20 text-center text-fg">
        <RootDivider className="absolute top-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.16)_0%,transparent_60%)] blur-2xl"
        />
        <Container>
          <h2 className="relative mx-auto max-w-[22ch] text-[clamp(24px,3.6vw,36px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            Let&apos;s rebuild something.
          </h2>
          <p className="relative mx-auto mt-4 max-w-[50ch] text-[16.5px] text-fg-muted">
            If your business is ready to run on AI, not bolt it on, we should talk.
          </p>
          <div className="relative mt-7 flex justify-center">
            <Button href={brand.links.book} external track="booking:company-final">
              Work with us →
            </Button>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-subtle bg-base-rail py-9 text-center text-[13px] text-fg-faint">
        {/* root-line accent */}
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-[-20px] h-10 w-full opacity-[0.06]"
          aria-hidden
        >
          <path
            d="M0 20 Q 200 0, 400 20 T 800 20 T 1200 20"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="text-moss"
          />
        </svg>
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
            <a href={`mailto:${brand.links.email}`} className="mx-2 text-fg-muted no-underline hover:text-fg" data-analytics="outbound:email">{brand.links.email}</a> ·
            <a href={brand.links.linkedin} className="mx-2 text-fg-muted no-underline hover:text-fg" data-analytics="outbound:linkedin">LinkedIn</a> ·
            <a href={brand.sites.product} className="mx-2 text-fg-muted no-underline hover:text-fg">Treelance</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
