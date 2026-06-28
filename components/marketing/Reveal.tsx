"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Reveal — a scroll-triggered fade-in-up animation wrapper.
 * Children animate in once when they enter the viewport.
 *
 * Usage:
 *   <Reveal>
 *     <YourComponent />
 *   </Reveal>
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 700,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Stagger — wraps multiple Reveal calls with automatic cascading delay.
 * Each child enters with incremental delay.
 *
 * Usage:
 *   <Stagger baseDelay={100} staggerMs={80}>
 *     {items.map(item => <div key={...}>{item}</div>)}
 *   </Stagger>
 */
export function Stagger({
  children,
  baseDelay = 0,
  staggerMs = 80,
  className,
}: {
  children: React.ReactNode[];
  baseDelay?: number;
  staggerMs?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={baseDelay + i * staggerMs}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
