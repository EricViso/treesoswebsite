import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { HeroDark } from "@/components/marketing/HeroDark";
import { Container, Button, Hl } from "@/components/marketing/primitives";

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline} (dark direction)`,
};

const system = [
  {
    tag: "matching",
    title: "Deterministic taxonomy",
    body: "Candidates match on verifiable certifications and your own role logic — BOSIET, GWO, CSWIP, NEBOSH — not black-box profiling. Every match is explainable and auditable.",
  },
  {
    tag: "memory",
    title: "Living candidate graph",
    body: "Connect the database you already own. Agents keep it current — availability, certs, mobility, notice period — so it's never stale the moment you need it.",
  },
  {
    tag: "onboarding",
    title: "WhatsApp-native",
    body: "Agents reach candidates where they already are. Consent-first, double opt-in, transparent on every contact. No new login nobody will use.",
  },
];

/**
 * /v2 — preview of the new dark-technical direction. Once approved, this
 * becomes the Treelance product landing and we expand the theme across it.
 */
export default function DarkDirection() {
  return (
    <main className="bg-base">
      <HeroDark
        eyebrow={brand.tagline}
        title={
          <>
            AI workforce orchestration for the <Hl>energy sector.</Hl>
          </>
        }
        lead="Treelance connects to the candidate database your agency already owns, keeps it live through AI agents on WhatsApp and Telegram, and turns every open role into a shortlist of people who are available, certified and interested — matched on verifiable certifications, not black-box profiling."
        primary={{ label: "Bring us one open role →", href: brand.links.book, external: true, track: "booking:hero" }}
        secondary={{ label: "See the live dashboard", href: "/dashboard.html", external: true, track: "demo:hero" }}
        compliance={["PDPA aligned", "GDPR aligned", "Consent-first", "Audit trail"]}
      />

      {/* SYSTEM — dark card section */}
      <section className="border-t border-white/[0.06] bg-base py-20 text-fg">
        <Container width="wide">
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
            // the system
          </div>
          <h2 className="mt-3 max-w-[20ch] text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest text-fg">
            Legacy ATS store CVs. Treelance keeps a workforce live.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[16.5px] leading-[1.6] text-fg-muted">
            Energy hires die in coordination — stale databases, expired certs, the
            same manual hunt every role. Treelance is the operating layer that
            removes it.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
            {system.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-base-raised p-6 transition hover:border-moss/40"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.16),transparent_65%)] opacity-0 transition group-hover:opacity-100"
                />
                <div className="mb-4 inline-block rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-moss">
                  {s.tag}
                </div>
                <h3 className="text-[18px] font-bold tracking-[-0.01em] text-fg">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-fg-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-base py-20 text-center text-fg">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,180,81,.16)_0%,transparent_60%)] blur-2xl"
        />
        <Container>
          <h2 className="relative mx-auto max-w-[22ch] text-[clamp(24px,3.6vw,36px)] font-extrabold leading-[1.12] tracking-tightest text-fg">
            Bring us one open role. We&apos;ll show you the matching live.
          </h2>
          <p className="relative mx-auto mt-4 max-w-[50ch] text-[16.5px] text-fg-muted">
            Forty-five minutes to map it together — then we run your own role end to
            end, in the room.
          </p>
          <div className="relative mt-7 flex justify-center">
            <Button href={brand.links.book} external track="booking:final">
              Bring us one open role →
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
