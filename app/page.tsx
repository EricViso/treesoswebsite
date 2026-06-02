import Link from "next/link";
import { brand } from "@/lib/brand";
import { Container } from "@/components/marketing/primitives";
import { Wordmark } from "@/components/marketing/Wordmark";

const templates = [
  {
    href: "/templates/one-pager",
    name: "One-pager",
    desc: "The full Treelance marketing page — hero, problem, how-it-works, live dashboard demo, pilot, FAQ and CTA. The flagship layout.",
    tag: "OnePager",
  },
  {
    href: "/templates/hero",
    name: "Hero",
    desc: "The above-the-fold block. Navy gradient, grid texture, moss accent, configurable eyebrow / headline / CTAs. Shown in three variants.",
    tag: "Hero",
  },
  {
    href: "/templates/speech",
    name: "Paragraph / Speech",
    desc: "Long-form editorial narrative for manifestos, founder letters and vision sections — lead drop-cap, pull-quote, signoff.",
    tag: "SpeechBlock",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-navy bg-[radial-gradient(120%_90%_at_85%_-10%,rgba(88,180,81,.16)_0%,transparent_55%),linear-gradient(160deg,#1B3862_0%,#0F2440_100%)] py-20 text-white">
      <Container width="wide">
        <Wordmark />
        <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-moss">
          // marketing template system
        </p>
        <h1 className="mt-3 max-w-[18ch] text-[clamp(32px,5vw,52px)] font-black leading-[1.04] tracking-tightest">
          The {brand.name} design system & templates.
        </h1>
        <p className="mt-5 max-w-[58ch] text-[18px] text-white/[0.72]">
          A tokenised marketing kit for {brand.name}, {brand.presentedBy.toLowerCase()}. Brand colour and type live in <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px]">tailwind.config.ts</code>; names and links in <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px]">lib/brand.ts</code>. The full design file is in <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px]">docs/MARKETING_DESIGN.md</code>.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
          {templates.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-2xl border border-white/15 bg-white/[0.04] p-6 no-underline transition hover:-translate-y-1 hover:border-moss/50 hover:bg-white/[0.07]"
            >
              <div className="mb-3 inline-block rounded-full bg-moss-soft px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.1em] text-moss-dark">
                {t.tag}
              </div>
              <h2 className="text-[20px] font-extrabold tracking-[-0.01em] text-white">
                {t.name}
              </h2>
              <p className="mt-2 text-[14px] leading-[1.55] text-white/65">{t.desc}</p>
              <span className="mt-4 inline-block text-[13px] font-semibold text-moss group-hover:underline">
                View template →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-[13px] text-white/45">
          Also:{" "}
          <Link href="/v2" className="text-moss-soft hover:underline">
            Treelance product (dark) →
          </Link>
          {"  ·  "}
          <Link href="/company" className="text-moss-soft hover:underline">
            Trees OS company →
          </Link>
          {"  ·  "}
          <a href="/dashboard.html" className="text-moss-soft hover:underline" target="_blank" rel="noopener noreferrer">
            interactive dashboard demo ↗
          </a>
        </div>
      </Container>
    </main>
  );
}
