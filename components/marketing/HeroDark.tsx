import type { ReactNode } from "react";
import { Container, Button } from "./primitives";
import { Wordmark } from "./Wordmark";
import { AiDrivenBadge } from "./AiDrivenBadge";
import { ComplianceBand } from "./ComplianceBand";
import type { HeroCta } from "./Hero";

export type HeroDarkProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  primary?: HeroCta;
  secondary?: HeroCta;
  /** Show the "AI-driven company" badge next to the wordmark. */
  aiBadge?: boolean;
  /** Compliance band items; omit to hide the band. */
  compliance?: string[];
  /** Wordmark lockup: product (Treelance by Trees OS) or company (Trees OS). */
  wordmarkVariant?: "product" | "company";
};

/**
 * HERO (DARK) — near-black, technical, minimal. Faint dotted grid + a soft
 * green glow + hairline rules. The new default direction for Treelance.
 */
export function HeroDark({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  aiBadge = true,
  compliance,
  wordmarkVariant = "product",
}: HeroDarkProps) {
  return (
    <header className="relative overflow-hidden bg-base py-7 text-fg">
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
        {/* top bar */}
        <div className="flex items-center justify-between py-2">
          <Wordmark variant={wordmarkVariant} />
          {aiBadge && <AiDrivenBadge />}
        </div>

        <div className="max-w-[20ch] pt-16 max-[700px]:pt-10">
          {eyebrow && (
            <div className="mb-5 animate-rise font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-moss">
              // {eyebrow}
            </div>
          )}

          <h1 className="animate-rise text-[clamp(38px,6.4vw,68px)] font-black leading-[1.0] tracking-tightest text-fg [animation-delay:.08s]">
            {title}
          </h1>
        </div>

        {lead && (
          <p className="mt-6 max-w-[60ch] animate-rise text-[clamp(16px,2.2vw,19px)] leading-[1.6] text-fg-muted [animation-delay:.16s]">
            {lead}
          </p>
        )}

        {(primary || secondary) && (
          <div className="mt-8 flex animate-rise flex-wrap items-center gap-3.5 [animation-delay:.24s]">
            {primary && (
              <Button href={primary.href} external={primary.external} track={primary.track}>
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

        {compliance && (
          <ComplianceBand
            items={compliance}
            className="mt-10 animate-rise border-t border-white/[0.06] pt-6 [animation-delay:.32s]"
          />
        )}
      </Container>
    </header>
  );
}
