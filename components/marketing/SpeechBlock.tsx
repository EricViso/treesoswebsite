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
}: SpeechBlockProps) {
  // Place the pull-quote roughly in the middle of the body flow.
  const mid = Math.ceil(body.length / 2);
  const before = body.slice(0, mid);
  const after = body.slice(mid);

  return (
    <section className="bg-white py-[88px]">
      <Container>
        <div className="mx-auto max-w-reading">
          {eyebrow && <Kicker>{eyebrow}</Kicker>}
          <h2 className="mb-7 text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-tightest text-navy">
            {title}
          </h2>

          {lead && (
            <p className="mb-6 text-[19px] leading-[1.65] text-ink first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-black first-letter:text-[58px] first-letter:leading-[0.8] first-letter:text-moss">
              {lead}
            </p>
          )}

          {before.map((p, i) => (
            <p key={`b${i}`} className="mb-5 text-[16.5px] leading-[1.7] text-[#3a4453]">
              {p}
            </p>
          ))}

          {pullQuote && (
            <blockquote className="my-9 border-l-[3px] border-moss pl-6 text-[clamp(20px,3vw,27px)] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy">
              {pullQuote}
            </blockquote>
          )}

          {after.map((p, i) => (
            <p key={`a${i}`} className="mb-5 text-[16.5px] leading-[1.7] text-[#3a4453]">
              {p}
            </p>
          ))}

          {signoff && (
            <div className="mt-9 flex items-center gap-3 border-t border-line pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-navy font-mono text-sm font-bold text-white">
                {signoff.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="text-[15px] font-bold text-navy">{signoff.name}</div>
                {signoff.role && (
                  <div className="text-[13px] text-muted">{signoff.role}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
