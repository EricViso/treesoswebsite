/**
 * Brand architecture — single source of truth.
 *
 *   Trees OS   → the company
 *   Treelance  → the first product (energy-sector ESNs) — what the marketing speaks as
 *
 * Trees Engineering (the first client) is intentionally NOT referenced anywhere public.
 *
 * To re-point the whole template system at the company brand instead of the product,
 * change `name`/`presentedBy` below — every template reads from here.
 */
export const brand = {
  /** Lead name shown in wordmarks and headlines. */
  name: "Treelance",
  /** Parent company, shown as the endorsement lockup. */
  company: "Trees OS",
  presentedBy: "A Trees OS product",
  tagline: "Energy workforce orchestration",
  /** One-line positioning used in meta + hero subtext. */
  promise:
    "Make the candidate database your agency already owns work for you.",
  domain: "treesos.io",

  audience: "Energy staffing agencies & ESNs",

  links: {
    book: "https://calendar.app.google/HLfcvtmSVVJjtb7n7",
    whatsapp: "https://wa.me/33761481089",
    linkedin: "https://www.linkedin.com/in/quentincloarec",
    // NOTE: swap to a treesos.io address once mailboxes are live.
    email: "quentin@trees-engineering.com",
  },

  legal: {
    entity: "Trees OS",
    // Operating address kept for legal footer; not surfaced as a client reference.
    address:
      "Block C, Level 27, Unit 3A, KL Trillion, Jalan Tun Razak, Kuala Lumpur 50400, Malaysia",
  },

  /** Design tokens mirrored from tailwind.config.ts for use in inline gradients. */
  color: {
    navy: "#1B3862",
    navyDeep: "#0F2440",
    moss: "#58B451",
    mossDark: "#2F6E2A",
    mossSoft: "#EAF6E9",
    canvas: "#F3F2F3",
  },
} as const;

export type Brand = typeof brand;
