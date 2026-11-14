"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiquidGlass } from "@/components/effects/liquid-glass";
import { cn } from "@/lib/utils";

export interface FloatingNavbarProps {
  /** Left-hand cluster (e.g. logo/wordmark). */
  left: React.ReactNode;
  /** Optional centered cluster (e.g. primary nav links), hidden on small screens by default. */
  center?: React.ReactNode;
  /** Right-hand cluster (e.g. actions/CTAs). */
  right: React.ReactNode;
  className?: string;
}

/**
 * Generic floating navbar shell: full-width and transparent at the top of the
 * page, continuously squeezing into a centered pill as the page scrolls.
 * Liquid glass is a hard on/off tied to a 50px scroll threshold — it never
 * renders at the top, only once the bar has docked into its pill shape.
 *
 * Content is entirely slot-driven (left/center/right) — this component knows
 * nothing about brand, links, CTAs, or theme.
 */
export function FloatingNavbar({ left, center, right, className }: FloatingNavbarProps) {
  const { scrollY } = useScroll();
  const maxWidth = useTransform(scrollY, [0, 200], [1320, 1100]);
  const y = useTransform(scrollY, [0, 50, 200], [12, 18, 22]);
  const barHeight = useTransform(scrollY, [0, 200], [78, 66]);
  const paddingInline = useTransform(scrollY, [0, 200], [24, 20]);
  const borderRadius = useTransform(scrollY, [0, 200], [9999, 9999]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 30);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={cn("pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-5 md:px-6", className)}>
      <motion.div className="pointer-events-auto relative w-full" style={{ maxWidth, y, borderRadius }}>
        <LiquidGlass
          enabled={isScrolled}
          radius={999}
          className={cn(
            "rounded-full transition-colors duration-300",
            isScrolled ? "liquid-glass--dock shadow-lg" : "bg-surface/80 dark:bg-black/60 shadow-sm"
          )}
        >
          <motion.nav
            className="flex w-full items-center justify-between gap-3 md:grid md:grid-cols-[auto_1fr_auto] md:gap-4"
            style={{
              minHeight: 60,
              height: barHeight,
              paddingLeft: paddingInline,
              paddingRight: paddingInline,
            }}
          >
            <div className="flex min-w-0 shrink-0 items-center gap-2">{left}</div>
            {center ? (
              <div className="hidden min-w-0 items-center justify-center gap-1 md:flex">{center}</div>
            ) : null}
            <div className="flex shrink-0 items-center justify-self-end gap-2">{right}</div>
          </motion.nav>
        </LiquidGlass>
      </motion.div>
    </div>
  );
}
