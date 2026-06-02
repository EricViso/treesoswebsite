import { cn } from "@/lib/cn";

/**
 * "AI-driven company" badge — the leading-by-example signal.
 * A live pulse + mono label. Use on dark surfaces.
 */
export function AiDrivenBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/[0.08] px-3 py-1.5",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-pulsering rounded-full bg-moss" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
      </span>
      <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-moss">
        AI-driven company
      </span>
    </span>
  );
}
