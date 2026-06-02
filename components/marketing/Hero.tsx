import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container, Button } from "./primitives";
import { Wordmark } from "./Wordmark";

export type HeroCta = {
  label: string;
  href: string;
  external?: boolean;
  /** Declarative analytics tag, e.g. "booking:hero". */
  track?: string;
};

export type HeroProps = {
  /** Small uppercase badge above the headline (e.g. the audience). */
  eyebrow?: string;
  /** Headline. Pass JSX to highlight words with <Hl>. */
  title: ReactNode;
  /** Supporting paragraph. */
  lead?: ReactNode;
  primary?: HeroCta;
  secondary?: HeroCta;
  /** Show the brand wordmark top-left. */
  showWordmark?: boolean;
  align?: "left" | "center";
};

/**
 * HERO TEMPLATE — dark navy gradient hero with grid texture and a moss accent.
 * The primary above-the-fold block for any Treelance / Trees OS page.
 */
export function Hero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  showWordmark = true,
  align = "left",
}: HeroProps) {
  return (
    <header className="relative overflow-hidden bg-navy bg-[radial-gradient(120%_90%_at_85%_-10%,rgba(88,180,81,.18)_0%,transparent_55%),linear-gradient(160deg,#1B3862_0%,#0F2440_100%)] py-[70px] text-white">
      {/* grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(120%_80%_at_70%_0,#000_0%,transparent_70%)]"
      />
      {/* bottom accent line */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(88,180,81,.6),transparent)]"
      />
      <Container className="relative z-10">
        <div className={cn(align === "center" && "mx-auto text-center")}>
          {showWordmark && (
            <div className={cn("mb-8", align === "center" && "flex justify-center")}>
              <Wordmark />
            </div>
          )}

          {eyebrow && (
            <div
              className={cn(
                "mb-6 inline-flex animate-rise items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-[7px] font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-soft",
              )}
            >
              <span className="h-[7px] w-[7px] rounded-full bg-moss" />
              {eyebrow}
            </div>
          )}

          <h1 className="animate-rise text-[clamp(34px,6vw,60px)] font-black leading-[1.02] tracking-tightest [animation-delay:.1s]">
            {title}
          </h1>

          {lead && (
            <p
              className={cn(
                "mt-6 max-w-[64ch] animate-rise text-[clamp(16px,2.4vw,20px)] font-normal text-white/[0.78] [animation-delay:.2s]",
                align === "center" && "mx-auto",
              )}
            >
              {lead}
            </p>
          )}

          {(primary || secondary) && (
            <div
              className={cn(
                "mt-9 flex animate-rise flex-wrap items-center gap-3.5 [animation-delay:.3s]",
                align === "center" && "justify-center",
              )}
            >
              {primary && (
                <Button
                  href={primary.href}
                  external={primary.external}
                  track={primary.track}
                >
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button
                  href={secondary.href}
                  variant="ghost"
                  external={secondary.external}
                  track={secondary.track}
                >
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
