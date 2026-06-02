import { cn } from "@/lib/cn";

export type Phase = {
  n: string;
  name: string;
  line: string;
  status: "now" | "next" | "later";
};

/** Draft arc, grounded in the strategy docs — confirm/replace the names. */
export const DEFAULT_PHASES: Phase[] = [
  {
    n: "01",
    name: "Treelance",
    line: "AI matching layer. Make the database you own live; qualified people for every open role.",
    status: "now",
  },
  {
    n: "02",
    name: "Agency OS",
    line: "Full orchestration for one agency: taxonomy, pipelines, the agent fleet, voice, recruiter dashboard.",
    status: "next",
  },
  {
    n: "03",
    name: "Talent network",
    line: "Consented talent shared across agencies — the super-connector, with provenance and audit.",
    status: "later",
  },
  {
    n: "04",
    name: "Coordination layer",
    line: "The agentic coordination infrastructure for the labour market: identity, settlement, oversight.",
    status: "later",
  },
];

const STATUS_LABEL: Record<Phase["status"], string> = {
  now: "now",
  next: "next",
  later: "later",
};

function StatusChip({ status }: { status: Phase["status"] }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.12em]",
        status === "now" && "bg-moss text-[#0e2a0c]",
        status === "next" && "border border-moss/50 text-moss",
        status === "later" && "border border-white/15 text-fg-faint",
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

/**
 * PHASE PIPELINE — the "wedge → orchestration OS" roadmap as a horizontal rail.
 * Treelance (now) → … → the endgame. Dark-surface styling.
 */
export function PhasePipeline({ phases = DEFAULT_PHASES }: { phases?: Phase[] }) {
  const currentIndex = phases.findIndex((p) => p.status === "now");

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {phases.map((p, i) => (
        <div key={p.n} className="flex items-center md:flex-1">
          <div
            className={cn(
              "h-full w-full rounded-xl border bg-base-raised p-5 transition",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_2px_8px_rgba(0,0,0,0.4)]",
              p.status === "now"
                ? "border-moss/40"
                : "border-white/[0.08] hover:border-white/20",
            )}
          >
            <div className="mb-3 flex items-center justify-between">
              <span
                className={cn(
                  "font-mono text-[22px] font-semibold leading-none tracking-[-0.03em]",
                  p.status === "later" ? "text-fg-faint" : "text-moss",
                )}
              >
                {p.n}
              </span>
              <StatusChip status={p.status} />
            </div>
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-fg">
              {p.name}
            </h3>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-fg-muted">
              {p.line}
            </p>
          </div>

          {/* connector (desktop only, between cards) */}
          {i < phases.length - 1 && (
            <div className="mx-1 hidden shrink-0 items-center md:flex" aria-hidden>
              <div
                className={cn(
                  "h-px w-5",
                  i < currentIndex ? "bg-moss" : "bg-white/15",
                )}
              />
              <span
                className={cn(
                  "text-[13px]",
                  i < currentIndex ? "text-moss" : "text-white/25",
                )}
              >
                →
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
