import Link from "next/link";
import { brand } from "@/lib/brand";
import { Container } from "@/components/marketing/primitives";
import { Wordmark } from "@/components/marketing/Wordmark";

const live = [
  { href: "/", name: "Treelance — product (treelance.ai)", desc: "The full dark product landing.", tag: "ProductLanding" },
  { href: "/company", name: "Trees OS — company (treesos.io)", desc: "The AI-first transformation thesis + manifesto.", tag: "Company" },
];

const templates = [
  { href: "/templates/hero", name: "Hero", desc: "Dark + light hero variants.", tag: "Hero / HeroDark" },
  { href: "/templates/speech", name: "Paragraph / Speech", desc: "Long-form narrative / manifesto (light + dark).", tag: "SpeechBlock" },
  { href: "/templates/one-pager", name: "One-pager (light)", desc: "The original light marketing layout.", tag: "OnePager" },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-base py-20 text-fg">
      <Container width="wide">
        <Wordmark variant="company" />
        <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-moss">
          // design system & templates
        </p>
        <h1 className="mt-3 max-w-[20ch] text-[clamp(32px,5vw,52px)] font-black leading-[1.04] tracking-tightest">
          The {brand.company} marketing kit.
        </h1>
        <p className="mt-5 max-w-[58ch] text-[18px] text-fg-muted">
          Tokens in <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px]">tailwind.config.ts</code>, names/links in <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px]">lib/brand.ts</code>, copy in <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px]">lib/content.ts</code>. Design file: <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px]">docs/MARKETING_DESIGN.md</code>.
        </p>

        <h2 className="mt-12 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-faint">Live pages</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
          {live.map((t) => (
            <Card key={t.href} {...t} />
          ))}
        </div>

        <h2 className="mt-12 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-faint">Templates</h2>
        <div className="mt-4 grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
          {templates.map((t) => (
            <Card key={t.href} {...t} />
          ))}
        </div>

        <div className="mt-10 text-[13px] text-fg-faint">
          Also:{" "}
          <a href="/dashboard.html" className="text-moss-soft hover:underline" target="_blank" rel="noopener noreferrer">
            interactive dashboard demo ↗
          </a>
        </div>
      </Container>
    </main>
  );
}

function Card({ href, name, desc, tag }: { href: string; name: string; desc: string; tag: string }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/[0.08] bg-base-raised p-6 no-underline shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_2px_10px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-moss/40"
    >
      <div className="mb-3 inline-block rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-moss">
        {tag}
      </div>
      <h3 className="text-[18px] font-extrabold tracking-[-0.01em] text-fg">{name}</h3>
      <p className="mt-2 text-[14px] leading-[1.55] text-fg-muted">{desc}</p>
      <span className="mt-4 inline-block text-[13px] font-semibold text-moss group-hover:underline">View →</span>
    </Link>
  );
}
