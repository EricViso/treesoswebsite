import { cn } from "@/lib/cn";
import { Container, Kicker } from "./primitives";

export type SpeechBlockProps = {
  eyebrow?: string;
  title: string;
  /** Larger intro paragraph, rendered with a drop-cap. */
  lead?: string;
  /** Body paragraphs. */
  body: string[];
  /** Optional emphasised pull-quote rendered mid-flow. */
  pullQuote?: string;
  signoff?: { name: string; role?: string };
  tone?: "light" | "dark";
};

/**
 * PARAGRAPH / SPEECH TEMPLATE — long-form editorial narrative.
 * For manifestos, founder letters, vision/thesis sections: a single, readable
 * column with a lead drop-cap, a moss pull-quote, and a signoff.
 */
export function SpeechBlock({
  eyebrow,
  title,
  lead,
  body,
  pullQuote,
  signoff,
  tone = "light",
}: SpeechBlockProps) {
  // Place the pull-quote roughly in the middle of the body flow.
  const mid = Math.ceil(body.length / 2);
  const before = body.slice(0, mid);
  const after = body.slice(mid);
  const dark = tone === "dark";

  return (
    <section className={cn("py-[88px]", dark ? "bg-base text-fg" : "bg-white")}>
      <Container>
        <div className="mx-auto max-w-reading">
          {eyebrow && <Kicker>{eyebrow}</Kicker>}
          <h2
            className={cn(
              "mb-7 text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest",
              dark ? "text-fg" : "text-navy",
            )}
          >
            {title}
          </h2>

          {lead && (
            <p
              className={cn(
                "mb-6 text-[19px] leading-[1.65] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-black first-letter:text-[58px] first-letter:leading-[0.8] first-letter:text-moss",
                dark ? "text-fg" : "text-ink",
              )}
            >
              {lead}
            </p>
          )}

          {before.map((p, i) => (
            <p key={`b${i}`} className={cn("mb-5 text-[16.5px] leading-[1.7]", dark ? "text-fg-muted" : "text-[#3a4453]")}>
              {p}
            </p>
          ))}

          {pullQuote && (
            <blockquote
              className={cn(
                "my-9 border-l-[3px] border-moss pl-6 text-[clamp(20px,3vw,27px)] font-extrabold leading-[1.25] tracking-[-0.02em]",
                dark ? "text-fg" : "text-navy",
              )}
            >
              {pullQuote}
            </blockquote>
          )}

          {after.map((p, i) => (
            <p key={`a${i}`} className={cn("mb-5 text-[16.5px] leading-[1.7]", dark ? "text-fg-muted" : "text-[#3a4453]")}>
              {p}
            </p>
          ))}

          {signoff && (
            <div className={cn("mt-9 flex items-center gap-3 border-t pt-6", dark ? "border-white/10" : "border-line")}>
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-moss font-mono text-sm font-bold text-[#0e2a0c]">
                {signoff.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className={cn("text-[15px] font-bold", dark ? "text-fg" : "text-navy")}>{signoff.name}</div>
                {signoff.role && (
                  <div className={cn("text-[13px]", dark ? "text-fg-muted" : "text-muted")}>{signoff.role}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
