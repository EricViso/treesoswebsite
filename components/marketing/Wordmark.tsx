import { brand } from "@/lib/brand";
import { cn } from "@/lib/cn";

/**
 * Brand wordmark. Defaults to the product name (Treelance) with an optional
 * "by Trees OS" endorsement lockup. Reads names from lib/brand.ts.
 */
export function Wordmark({
  endorsed = true,
  tone = "light",
  className,
}: {
  /** Show the "by Trees OS" company lockup. */
  endorsed?: boolean;
  /** "light" for dark backgrounds, "dark" for light backgrounds. */
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <span
        className={cn(
          "text-[19px] font-black tracking-[-0.02em]",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        {brand.name}
      </span>
      {endorsed && (
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
