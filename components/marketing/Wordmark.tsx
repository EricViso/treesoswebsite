import { brand } from "@/lib/brand";
import { cn } from "@/lib/cn";

/**
 * Brand wordmark. Defaults to the product name (Treelance) with an optional
 * "by Trees OS" endorsement lockup. Reads names from lib/brand.ts.
 */
export function Wordmark({
  endorsed = true,
  tone = "light",
  variant = "product",
  className,
}: {
  /** Show the "by Trees OS" company lockup (product variant only). */
  endorsed?: boolean;
  /** "light" for dark backgrounds, "dark" for light backgrounds. */
  tone?: "light" | "dark";
  /** "product" → Treelance by Trees OS · "company" → Trees OS. */
  variant?: "product" | "company";
  className?: string;
}) {
  const lead = variant === "company" ? brand.company : brand.name;
  const showEndorse = endorsed && variant === "product";
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      {/* tree icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className={cn("shrink-0 self-center", tone === "light" ? "text-moss" : "text-moss-dark")}
        aria-hidden
      >
        {/* trunk */}
        <rect x="8" y="11" width="2" height="5" rx="0.5" className="fill-current opacity-60" />
        {/* canopy — three overlapping triangles */}
        <path d="M9 2 L 4 9 L 14 9 Z" className="fill-current opacity-30" />
        <path d="M9 4 L 3 12 L 15 12 Z" className="fill-current opacity-20" />
        <path d="M9 6 L 2 14 L 16 14 Z" className="fill-current opacity-15" />
      </svg>
      <span
        className={cn(
          "text-[19px] font-black tracking-[-0.02em]",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        {lead}
      </span>
      {showEndorse && (
        <span
          className={cn(
            "font-mono text-[10px] font-semibold uppercase tracking-[0.12em]",
            tone === "light" ? "text-white/55" : "text-muted",
          )}
        >
          by {brand.company}
        </span>
      )}
    </span>
  );
}
