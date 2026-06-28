"use client";

import { useState } from "react";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/cn";
import { Container } from "./primitives";
import { Wordmark } from "./Wordmark";

const link = "mx-1 hidden text-[13.5px] font-medium text-fg-muted hover:text-fg sm:inline";
const mobileLink =
  "block px-4 py-3 text-[15px] font-medium text-fg-muted hover:text-fg hover:bg-overlay-subtle rounded-lg transition-colors";

/**
 * Sticky dark nav. Product variant carries section links + the pilot CTA and a
 * cross-link to the Trees OS company site; company variant is minimal.
 * Mobile-friendly: hamburger menu on small screens.
 */
export function TopNavDark({
  variant = "product",
}: {
  variant?: "product" | "company";
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks =
    variant === "product"
      ? ([
          { href: "#how", label: "How it works" },
          { href: "#demo", label: "Live demo" },
          { href: "#pilot", label: "Pilot" },
          { href: "#faq", label: "FAQ" },
          { href: "/blog", label: "Blog" },
          { href: "/about", label: "About" },
          { href: brand.sites.company, label: "Trees OS ↗" },
        ] as const)
      : ([
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/blog", label: "Blog" },
          { href: brand.sites.product, label: "Treelance ↗" },
        ] as const);

  return (
    <nav className="sticky top-0 z-30 border-b border-subtle bg-base/80 backdrop-blur-md">
      <Container width="wide" className="flex h-[58px] items-center gap-2">
        <a href="/" className="no-underline" onClick={closeMenu}>
          <Wordmark variant={variant} />
        </a>
        <span className="flex-1" />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={link}>
              {label}
            </a>
          ))}
          <a
            href={brand.links.book}
            data-analytics={variant === "product" ? "booking:nav" : "booking:company-nav"}
            className="ml-2 rounded-lg bg-moss px-4 py-2 text-[13px] font-semibold text-[#0e2a0c] no-underline hover:brightness-105"
          >
            {variant === "product" ? "Bring us one role" : "Work with us"}
          </a>
        </div>

        {/* Hamburger button — visible only on mobile */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg text-fg-muted hover:text-fg sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            /* X icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-subtle bg-base sm:hidden">
          <Container width="wide" className="py-4 pb-6">
            <div className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} className={mobileLink} onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-4 border-t border-subtle pt-4">
              <a
                href={brand.links.book}
                className="flex w-full items-center justify-center rounded-lg bg-moss px-4 py-3 text-[14px] font-semibold text-[#0e2a0c] no-underline hover:brightness-105"
                onClick={closeMenu}
              >
                {variant === "product" ? "Bring us one role" : "Work with us"}
              </a>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
