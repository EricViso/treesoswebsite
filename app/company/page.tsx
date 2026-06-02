import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { manifesto } from "@/lib/content";
import { HeroDark } from "@/components/marketing/HeroDark";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import { SpeechBlock } from "@/components/marketing/SpeechBlock";
import { Container, Button, Hl } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: `${brand.company} — AI-first digital transformation`,
  description:
    "Trees OS is an AI-first company. We rebuild traditional businesses to run on AI — then keep them running, and improving, forever. Treelance is our first transformation.",
};

const model = [
  {
    tag: "dogfood",
    title: "We run on it ourselves",
    body: "Every part of Trees OS is AI-operated — delivery, research, ops, even this website. We don't recommend a transformation we haven't lived.",
  },
  {
    tag: "transform",
    title: "We rebuild, not bolt-on",
    body: "We don't sell a tool you wire into a legacy process. We rebuild the business to be AI-first. Treelance is our own first transformation: energy staffing in Malaysia, made real-time.",
  },
  {
    tag: "maintain",
    title: "We stay, and keep improving",
    body: "We don't ship and leave. We run the AI systems we build and improve them every week — the work, and the relationship, are ongoing.",
  },
];

const proof = [
  "This site is instrumented and reviewed weekly by an AI analyst agent that proposes its own improvements.",
  "Treelance runs on an agent fleet — matching, candidate outreach and the live dashboard.",
  "Internal delivery, research and content are AI-operated by default.",
];

/**
 * /company — Trees OS company thesis (treesos.io). Miki Mafia is teased, not named.
 */
export default function Company() {
  return (
    <main className="bg-base">
      <TopNavDark variant="company" />

      <HeroDark
        showTopBar={false}
        wordmarkVariant="company"
        eyebrow="AI-first digital transformation"
        title={
          <>
            We use AI to be more <Hl>human.</Hl>
          </>
        }
        lead="Trees OS is an AI-first company. We rebuild traditional businesses to run on AI — then keep them running, and improving, forever. Treelance, our real-time talent orchestration for energy, is our first transformation."
        primary={{ label: "Work with us →", href: brand.links.book, external: true, track: "booking:company-hero" }}
        secondary={{ label: "See Treelance ↗", href: "/", track: "cta:see-treelance" }}
      />

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
      <section className="border-t border-white/[0.06] bg-base-rail py-20 text-fg">
        <Container width="wide">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // the model
          </div>
          <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest text-fg">
            Not a tool we sell. A business we rebuild — and run.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[16.5px] leading-[1.6] text-fg-muted">
            These aren&apos;t phases. We do all three at once — on ourselves first,
            then for the businesses we transform.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
            {model.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/[0.08] bg-base-raised p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_2px_10px_rgba(0,0,0,0.45)]"
              >
                <div className="mb-4 inline-block rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-moss">
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
      <section className="border-t border-white/[0.06] bg-base py-16 text-fg">
        <Container width="wide">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-moss/20 bg-base-raised p-8 md:flex-row md:items-center">
            <div className="max-w-[52ch]">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-moss">
                // exhibit A
              </div>
              <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.01em] text-fg">
                Treelance — our first transformation
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-fg-muted">
                Real-time AI talent orchestration for energy staffing agencies, in
                Malaysia. The proof that the model works — running live, today.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button href="/" track="cta:exhibit-treelance">
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
      <section className="border-t border-white/[0.06] bg-base-rail py-20 text-fg">
        <Container width="wide">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // proof, not promises
          </div>
          <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest text-fg">
            The method is credible because we live it.
          </h2>
          <ul className="mt-8 max-w-[64ch] divide-y divide-white/[0.06] border-y border-white/[0.06]">
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
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-base py-20 text-fg">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[8%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.14)_0%,transparent_62%)] blur-2xl"
        />
        <Container width="wide" className="relative">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // the horizon
          </div>
          <h2 className="mt-3 max-w-[24ch] text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest text-fg">
            If the model holds, we don&apos;t stop at one industry.
          </h2>
          <p className="mt-4 max-w-[60ch] text-[16.5px] leading-[1.6] text-fg-muted">
            Energy staffing is the first. The same playbook — rebuild AI-first,
            maintain forever — applies anywhere a traditional business is ready to
            be reinvented. In time, we back the operators doing exactly that.
            <span className="text-fg-faint"> More on that when it&apos;s real.</span>
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-base py-20 text-center text-fg">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.16)_0%,transparent_60%)] blur-2xl"
        />
        <Container>
          <h2 className="relative mx-auto max-w-[22ch] text-[clamp(24px,3.6vw,36px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            Let&apos;s rebuild something.
          </h2>
          <p className="relative mx-auto mt-4 max-w-[50ch] text-[16.5px] text-fg-muted">
            If your business is ready to run on AI — not bolt it on — we should talk.
          </p>
          <div className="relative mt-7 flex justify-center">
            <Button href={brand.links.book} external track="booking:company-final">
              Work with us →
            </Button>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-base-rail py-9 text-center text-[13px] text-fg-faint">
        <Container width="wide">
          <div className="text-[17px] font-black tracking-[-0.01em] text-fg">{brand.company}</div>
          <div className="my-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-moss">
            AI-first digital transformation
          </div>
          <div className="mt-3">
            <a href={`mailto:${brand.links.email}`} className="mx-2 text-fg-muted no-underline hover:text-fg" data-analytics="outbound:email">{brand.links.email}</a> ·
            <a href={brand.links.linkedin} className="mx-2 text-fg-muted no-underline hover:text-fg" data-analytics="outbound:linkedin">LinkedIn</a> ·
            <a href="/" className="mx-2 text-fg-muted no-underline hover:text-fg">Treelance</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
