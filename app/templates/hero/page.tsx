import { brand } from "@/lib/brand";
import { Hero } from "@/components/marketing/Hero";
import { Hl } from "@/components/marketing/primitives";

/**
 * HERO TEMPLATE preview — three configurations of the same component.
 */
export default function HeroTemplate() {
  return (
    <main>
      {/* 1 — Product launch (default, left-aligned, two CTAs) */}
      <Hero
        eyebrow={brand.audience}
        title={
          <>
            The problem is not hiring.
            <br />
            It is <Hl>deployment.</Hl>
          </>
        }
        lead="Treelance connects to the candidate database you already own, keeps it live through AI agents on WhatsApp and Telegram, and surfaces qualified, available people for every open role."
        primary={{ label: "Bring us one open role →", href: brand.links.book, external: true }}
        secondary={{ label: "See the live dashboard", href: "#" }}
      />

      {/* 2 — Centered, single CTA, no wordmark */}
      <Hero
        align="center"
        showWordmark={false}
        eyebrow="energy talent, deployed"
        title={
          <>
            Your database is full.
            <br />
            It&apos;s just <Hl>asleep.</Hl>
          </>
        }
        lead="Wake it up. One open role is all it takes to see the matching run end to end."
        primary={{ label: "Book the mapping session", href: brand.links.book, external: true }}
      />

      {/* 3 — Minimal: headline only */}
      <Hero
        showWordmark={false}
        title={
          <>
            Stop searching your database. <Hl>Activate it.</Hl>
          </>
        }
      />
    </main>
  );
}
