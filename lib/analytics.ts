/**
 * Analytics event taxonomy + a safe `track()` helper.
 *
 * Everything here is a no-op until PostHog is configured
 * (NEXT_PUBLIC_POSTHOG_KEY) and the visitor has consented — so the site
 * works identically with analytics off.
 *
 * Convention for declarative tracking: put `data-analytics="<kind>:<label>"`
 * on any clickable element. The client listener (PostHogAnalytics) maps:
 *   cta:<label>      → cta_click       { location: <label> }
 *   booking:<label>  → booking_started { location: <label> }   ← north star
 *   demo:<label>     → demo_opened     { location: <label> }
 *   outbound:<label> → outbound_click  { target: <label> }
 */

export const EVENTS = {
  CTA_CLICK: "cta_click",
  BOOKING_STARTED: "booking_started",
  DEMO_OPENED: "demo_opened",
  OUTBOUND_CLICK: "outbound_click",
  SECTION_VIEW: "section_view",
  SCROLL_DEPTH: "scroll_depth",
} as const;

/** Maps the `data-analytics` kind prefix to a canonical event + prop key. */
export const ANALYTICS_KIND: Record<
  string,
  { event: string; propKey: string }
> = {
  cta: { event: EVENTS.CTA_CLICK, propKey: "location" },
  booking: { event: EVENTS.BOOKING_STARTED, propKey: "location" },
  demo: { event: EVENTS.DEMO_OPENED, propKey: "location" },
  outbound: { event: EVENTS.OUTBOUND_CLICK, propKey: "target" },
};

declare global {
  interface Window {
    posthog?: { capture: (event: string, props?: Record<string, unknown>) => void };
  }
}

/** Fire an event if PostHog is loaded; otherwise do nothing. */
export function track(event: string, props?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture(event, props);
  }
}
