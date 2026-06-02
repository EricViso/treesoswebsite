import { cn } from "@/lib/cn";

const DEFAULT_ITEMS = [
  "PDPA aligned",
  "GDPR aligned",
  "Consent-first",
  "Audit trail",
];

function Check() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-moss"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Compliance trust band — hairline-separated, mono micro-labels.
 * Reinforces the regulatory/auditability story. Dark-surface styling.
 */
export function ComplianceBand({
  items = DEFAULT_ITEMS,
  className,
}: {
  items?: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-2.5",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.1em] text-fg-muted"
        >
          <Check />
          {item}
        </li>
      ))}
    </ul>
  );
}
