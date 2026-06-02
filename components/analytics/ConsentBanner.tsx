"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

/**
 * Minimal, on-brand consent banner. Until a choice is made, PostHog stays
 * opted-out and cookieless (set in PostHogAnalytics). Matches the
 * "consent-first by design" promise in the marketing copy.
 */
export function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!KEY) return;
    if (!localStorage.getItem("ph_consent")) setShow(true);
  }, []);

  const decide = (granted: boolean) => {
    localStorage.setItem("ph_consent", granted ? "granted" : "denied");
    if (granted) {
      posthog.set_config({ persistence: "localStorage+cookie" });
      posthog.opt_in_capturing();
      posthog.capture("$pageview");
    } else {
      posthog.opt_out_capturing();
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/95 px-5 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-wide flex-col items-start gap-3 sm:flex-row sm:items-center">
        <p className="flex-1 text-[13px] leading-[1.5] text-white/70">
          We use privacy-friendly, EU-hosted analytics to understand what works on
          this page. No data leaves until you say yes.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => decide(false)}
            className="rounded-lg border border-white/25 px-4 py-2 text-[13px] font-semibold text-white hover:bg-white/10"
          >
            Decline
          </button>
          <button
            onClick={() => decide(true)}
            className="rounded-lg bg-moss px-4 py-2 text-[13px] font-semibold text-[#0e2a0c] hover:brightness-105"
          >
            Allow analytics
          </button>
        </div>
      </div>
    </div>
  );
}
