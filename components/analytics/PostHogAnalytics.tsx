"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { ANALYTICS_KIND, EVENTS, track } from "@/lib/analytics";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

let initialized = false;

/**
 * Initialises PostHog (consent-first), tracks pageviews on route change, and
 * wires declarative engagement listeners: data-analytics clicks, scroll depth,
 * and section views. Dormant when NEXT_PUBLIC_POSTHOG_KEY is unset.
 */
export function PostHogAnalytics() {
  const pathname = usePathname();

  // --- init once ---
  useEffect(() => {
    if (!KEY || initialized) return;
    posthog.init(KEY, {
      api_host: HOST,
      capture_pageview: false, // handled manually below for the App Router
      capture_pageleave: true,
      autocapture: true,
      persistence: "memory", // no cookies until consent
      opt_out_capturing_by_default: true,
      person_profiles: "identified_only",
    });
    window.posthog = posthog as unknown as Window["posthog"];
    initialized = true;

    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("ph_consent") === "granted"
    ) {
      posthog.set_config({ persistence: "localStorage+cookie" });
      posthog.opt_in_capturing();
    }
  }, []);

  // --- pageview on navigation ---
  useEffect(() => {
    if (KEY && initialized) posthog.capture("$pageview");
  }, [pathname]);

  // --- declarative engagement listeners (attach once) ---
  useEffect(() => {
    if (!KEY) return;

    // 1. data-analytics clicks
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-analytics]");
      if (!el) return;
      const raw = el.getAttribute("data-analytics") || "";
      const [kind, label] = raw.split(":");
      const mapping = ANALYTICS_KIND[kind];
      const href = el.getAttribute("href") || undefined;
      if (mapping) {
        track(mapping.event, { [mapping.propKey]: label, href, path: pathname });
      } else {
        track(EVENTS.CTA_CLICK, { location: raw, href, path: pathname });
      }
    };
    document.addEventListener("click", onClick, true);

    // 2. scroll depth milestones
    const seen = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = Math.round((window.scrollY / max) * 100);
      for (const m of [25, 50, 75, 100]) {
        if (pct >= m && !seen.has(m)) {
          seen.add(m);
          track(EVENTS.SCROLL_DEPTH, { percent: m, path: pathname });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3. section views
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const name = entry.target.getAttribute("data-section");
            track(EVENTS.SECTION_VIEW, { section: name, path: pathname });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4 },
    );
    document
      .querySelectorAll<HTMLElement>("[data-section]")
      .forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
