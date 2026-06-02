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
