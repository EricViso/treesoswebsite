import { brand } from "@/lib/brand";
import { cn } from "@/lib/cn";
import { Container } from "./primitives";
import { Wordmark } from "./Wordmark";

const link = "mx-1 hidden text-[13.5px] font-medium text-fg-muted hover:text-fg sm:inline";

/**
 * Sticky dark nav. Product variant carries section links + the pilot CTA and a
 * cross-link to the Trees OS company site; company variant is minimal.
 */
export function TopNavDark({
  variant = "product",
}: {
  variant?: "product" | "company";
}) {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/[0.07] bg-base/80 backdrop-blur-md">
      <Container width="wide" className="flex h-[58px] items-center gap-2">
        <Wordmark variant={variant} />
        <span className="flex-1" />
        {variant === "product" ? (
          <>
            <a href="#how" className={link}>How it works</a>
            <a href="#demo" className={link}>Live demo</a>
            <a href="#pilot" className={link}>Pilot</a>
            <a href="#faq" className={link}>FAQ</a>
            <a href="/company" className={cn(link, "text-fg-faint")}>Trees OS ↗</a>
            <a
              href={brand.links.book}
              data-analytics="booking:nav"
              className="ml-2 rounded-lg bg-moss px-4 py-2 text-[13px] font-semibold text-[#0e2a0c] no-underline hover:brightness-105"
            >
              Bring us one role
            </a>
          </>
        ) : (
          <>
            <a href="/" className={link}>Treelance</a>
            <a
              href={brand.links.book}
              data-analytics="booking:company-nav"
              className="ml-2 rounded-lg bg-moss px-4 py-2 text-[13px] font-semibold text-[#0e2a0c] no-underline hover:brightness-105"
            >
              Work with us
            </a>
          </>
        )}
      </Container>
    </nav>
  );
}
