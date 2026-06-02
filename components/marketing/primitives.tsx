import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centered max-width container. */
export function Container({
  children,
  width = "page",
  className,
}: {
  children: ReactNode;
  width?: "page" | "wide";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto px-7",
        width === "wide" ? "max-w-wide" : "max-w-page",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Mono eyebrow label, e.g. "// how it works". */
export function Kicker({
  children,
  tone = "moss",
}: {
  children: ReactNode;
  tone?: "moss" | "white";
}) {
  return (
    <div
      className={cn(
        "mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em]",
        tone === "white" ? "text-moss" : "text-moss",
      )}
    >
      // {children}
    </div>
  );
}

/** Inline brand highlight inside headings. */
export function Hl({ children }: { children: ReactNode }) {
  return <span className="text-moss">{children}</span>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
  /** Declarative analytics tag, e.g. "booking:hero" or "demo:open". */
  track?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
  track,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(track ? { "data-analytics": track } : {})}
      className={cn(
        "inline-flex items-center gap-2 rounded-[10px] px-6 py-3.5 text-[15px] font-semibold no-underline transition-transform duration-150",
        variant === "primary"
          ? "bg-moss text-[#0e2a0c] shadow-[0_8px_24px_rgba(88,180,81,.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(88,180,81,.38)]"
          : "border border-white/30 text-white hover:bg-white/10",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Section heading used across light sections. */
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 max-w-[24ch] text-[clamp(24px,3.6vw,34px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-navy">
      {children}
    </h2>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return (
    <p className="mb-9 max-w-reading text-[17px] text-muted">{children}</p>
  );
}
