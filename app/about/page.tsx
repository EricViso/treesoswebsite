import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { TopNavDark } from "@/components/marketing/TopNavDark";
import {
  Container,
  Button,
} from "@/components/marketing/primitives";
import { RootDivider } from "@/components/marketing/RootDivider";

export const metadata: Metadata = {
  title: `${brand.company} · Who we are`,
  description:
    "Trees OS was founded by Eric Miki, Quentin Cloarec, and Nathaniella. Three builders who believe the point of automation isn't to remove people — it's to let them do what only people can do.",
};

const founders = [
  {
    name: "Eric Miki",
    role: "Founder, Trees OS",
    avatar: null,
    initials: "EM",
    bio: [
      "Engineer and entrepreneur with a physics background. Based in Kuala Lumpur, with roots that span South America and Asia. Speaks English, French and Japanese, and builds at the intersection of systems thinking and extreme automation.",
      "Eric started Trees OS with a conviction: running a company should mean making high-level decisions, not drowning in coordination. The thesis is straightforward — if the AI handles the orchestration, the humans handle the judgement.",
    ],
    focus: [
      "Agent orchestration & AI infrastructure",
      "Network-state governance & frontier cities",
      "Building the CAIO operating system",
    ],
    linkedin: "https://www.linkedin.com/in/eric-miki",
    email: "eric@treesos.io",
  },
  {
    name: "Quentin Cloarec",
    role: "Co-Founder, Trees OS",
    avatar: null,
    initials: "QC",
    bio: [
      "Founder of Trees Engineering and the originator of the Treelance concept. Quentin spent years deep inside energy-sector recruitment before building the system he wished had existed: real-time talent orchestration, not another job board.",
      "He brought the domain problem — energy staffing agencies sitting on databases worth millions, with no way to keep them live — and the conviction that AI agents, not better spreadsheets, were the answer. That conviction became Treelance.",
    ],
    focus: [
      "Energy-sector workforce orchestration",
      "ESN operations & compliance (PDPA, AIGE)",
      "Product-to-market for Treelance",
    ],
    linkedin: "https://www.linkedin.com/in/quentincloarec",
    email: "quentin@treesos.io",
  },
  {
    name: "Nathaniella",
    role: "🥥 Co-Co-Founder, Trees OS",
    avatar: null,
    initials: "NA",
    bio: [
      "Nathaniella is a co-founder of Trees OS, working alongside Eric and Quentin on the Treelance product and voice agent infrastructure.",
    ],
    focus: [
      "Voice agent design & prompt engineering",
      "Treelance talent operations",
      "Product development",
    ],
    linkedin: "",
    email: "nathaniella@trees-engineering.com",
  },
];

export default function About() {
  return (
    <main className="bg-base text-fg">
      <TopNavDark variant="company" />

      {/* Hero */}
      <header className="relative overflow-hidden bg-base py-24">
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

        <Container width="wide" className="relative z-10">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // about
          </div>
          <h1 className="mt-4 max-w-[20ch] text-[clamp(32px,5.6vw,62px)] font-black leading-[1.0] tracking-tightest text-fg">
            Three builders. One operating system.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[clamp(15px,2vw,18px)] leading-[1.6] text-fg-muted">
            Trees OS was founded on a shared conviction: most companies bolt AI onto a broken process and call it transformation. We think that's backwards. Eric, Quentin and Nathaniella started with the operating system and built the product from there.
          </p>
        </Container>
      </header>

      {/* Founder cards */}
      <section className="relative overflow-hidden bg-base py-10 pb-20">
        <RootDivider className="absolute top-0" />
        <Container width="wide">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="relative flex flex-col rounded-2xl border border-subtle bg-base-raised p-8 shadow-[0_0_0_1px_rgba(var(--color-card-shadow-r), var(--color-card-shadow-g), var(--color-card-shadow-b), 0.04),0_2px_10px_rgba(0,0,0,0.45)]"
              >
                {/* Avatar / initials */}
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-xl border border-subtle bg-moss/10 text-2xl font-black tracking-tight text-moss select-none">
                  {founder.initials}
                </div>

                <h2 className="text-[24px] font-extrabold tracking-[-0.01em] text-fg">
                  {founder.name}
                </h2>
                <div className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-moss">
                  {founder.role}
                </div>

                <div className="mt-5 space-y-3 text-[14.5px] leading-[1.65] text-fg-muted">
                  {founder.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Focus areas */}
                <div className="mt-6">
                  <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fg-faint">
                    Focus
                  </div>
                  <ul className="space-y-1">
                    {founder.focus.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[13.5px] text-fg-muted"
                      >
                        <span className="mt-0.5 font-mono text-moss">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-4 border-t border-subtle pt-5">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium text-fg-muted no-underline hover:text-fg"
                    data-analytics="outbound:linkedin"
                  >
                    LinkedIn ↗
                  </a>
                  <span className="text-fg-faint">·</span>
                  <a
                    href={`mailto:${founder.email}`}
                    className="text-[13px] font-medium text-fg-muted no-underline hover:text-fg"
                    data-analytics="outbound:email"
                  >
                    {founder.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How they met / vision section */}
      <section className="relative overflow-hidden bg-base-rail py-20">
        <RootDivider className="absolute top-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[8%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.12)_0%,transparent_62%)] blur-2xl"
        />
        <Container width="wide" className="relative">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // the origin
          </div>
          <h2 className="mt-3 max-w-[22ch] text-[clamp(24px,3.6vw,38px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            Product meets infrastructure.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[16px] leading-[1.6] text-fg-muted">
            Quentin knew the energy staffing problem from the inside: the dead databases, the manual cert checks, the missed mobilisations. Eric knew how to build the AI infrastructure that could solve it — agent fleets, persistent memory, closed-loop orchestration. Nathaniella brought the product lens — designing the voice agent experiences, shaping how talent and clients interact with Treelance.
          </p>
          <p className="mt-3 max-w-[58ch] text-[16px] leading-[1.6] text-fg-muted">
            What they share is the conviction that AI transforms a business when it runs it, not when it's bolted on. Treelance is the first product of that conviction. The Miki Mafia, a venture studio to teach other founders how to replicate the model, is the long game.
          </p>

          <div className="mt-10">
            <Button
              href={brand.links.book}
              external
              track="booking:about"
            >
              Work with us →
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-base py-20 text-center">
        <RootDivider className="absolute top-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.16)_0%,transparent_60%)] blur-2xl"
        />
        <Container>
          <h2 className="relative mx-auto max-w-[22ch] text-[clamp(24px,3.6vw,36px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            Let&apos;s build something real.
          </h2>
          <p className="relative mx-auto mt-4 max-w-[50ch] text-[16.5px] text-fg-muted">
            If your business runs on coordination, and you're ready to let AI handle the parts a human shouldn't waste hours on, we should talk.
          </p>
          <div className="relative mt-7 flex justify-center gap-3">
            <Button href={brand.links.book} external track="booking:about-final">
              Work with us →
            </Button>
            <Button href={brand.sites.product} variant="ghost" track="cta:about-treelance">
              See Treelance ↗
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-subtle bg-base-rail py-9 text-center text-[13px] text-fg-faint">
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
            <div className="text-[17px] font-black tracking-[-0.01em] text-fg">
              {brand.company}
            </div>
          </div>
          <div className="my-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-moss">
            AI-first digital transformation
          </div>
          <div className="mt-3">
            <a
              href={`mailto:${brand.links.email}`}
              className="mx-2 text-fg-muted no-underline hover:text-fg"
              data-analytics="outbound:email"
            >
              {brand.links.email}
            </a>
            ·
            <a
              href={brand.links.linkedin}
              className="mx-2 text-fg-muted no-underline hover:text-fg"
            >
              LinkedIn
            </a>
            ·
            <a
              href={brand.sites.product}
              className="mx-2 text-fg-muted no-underline hover:text-fg"
            >
              Treelance
            </a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
