import { cn } from "@/lib/cn";

/**
 * Organic root-system SVG divider between sections.
 * Replaces generic border-top lines with tree-root motifs.
 * Animated variant grows from left to right on scroll reveal.
 */
export function RootDivider({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative h-px w-full overflow-hidden",
        animate && "animate-rootGrow",
        className,
      )}
    >
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="absolute inset-0 h-6 w-full opacity-[0.15]"
        aria-hidden
      >
        {/* main root line */}
        <path
          d="M0 16 Q 80 2, 160 14 T 320 18 T 480 8 T 600 16 T 720 10 T 840 18 T 960 8 T 1080 14 T 1200 12"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-moss"
        />
        {/* secondary branching root */}
        <path
          d="M0 22 Q 120 12, 240 20 T 440 14 T 600 22 T 760 12 T 920 20 T 1200 16"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-moss/60"
        />
        {/* tertiary micro-roots (tips) */}
        <path
          d="M160 6 Q 180 2, 200 8"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="none"
          className="text-moss/40"
        />
        <path
          d="M480 2 Q 500 6, 520 2"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="none"
          className="text-moss/40"
        />
        <path
          d="M840 12 Q 860 6, 880 14"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="none"
          className="text-moss/40"
        />
        {/* nodes at branch points */}
        <circle cx="160" cy="8" r="1.5" className="fill-moss/40" />
        <circle cx="480" cy="6" r="1" className="fill-moss/30" />
        <circle cx="840" cy="14" r="1.5" className="fill-moss/40" />
        <circle cx="600" cy="18" r="1" className="fill-moss/30" />
      </svg>
    </div>
  );
}
