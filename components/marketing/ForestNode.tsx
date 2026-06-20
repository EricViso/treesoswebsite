import { cn } from "@/lib/cn";

/**
 * Minimal leaf/frond SVG accent for section markers.
 * Placed next to kickers or as corner decoration.
 */
export function ForestNode({
  size = 14,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={cn("inline-block shrink-0", className)}
      aria-hidden
    >
      {/* simple leaf shape */}
      <path
        d="M7 1 C 4 4, 3 8, 7 13 C 11 8, 10 4, 7 1Z"
        className="fill-moss/40"
      />
      {/* center vein */}
      <path
        d="M7 2 L 7 11"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-moss/60"
      />
    </svg>
  );
}

/**
 * Larger organic frond — used as corner decoration or section anchor.
 */
export function Frond({
  className,
  flipped = false,
}: {
  className?: string;
  flipped?: boolean;
}) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      className={cn("shrink-0", flipped && "scale-x-[-1]", className)}
      aria-hidden
    >
      {/* branching frond */}
      <path
        d="M4 44 C 12 36, 16 28, 20 18 C 24 8, 28 4, 36 2"
        stroke="currentColor"
        strokeWidth="1"
        className="text-moss/20"
        fill="none"
      />
      <path
        d="M14 30 C 20 26, 26 20, 30 12"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-moss/15"
        fill="none"
      />
      <path
        d="M24 20 C 28 16, 32 12, 34 6"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-moss/15"
        fill="none"
      />
      {/* leaf tip */}
      <circle cx="36" cy="2" r="2" className="fill-moss/20" />
    </svg>
  );
}
