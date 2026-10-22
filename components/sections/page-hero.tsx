"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Sparkles } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/theme-provider";

// Dynamically import the WebGL component to avoid SSR issues
const Iridescence = dynamic(
  () => import("@/components/effects/Iridescence"),
  { ssr: false }
);

const DARK_IRIDESCENCE: [number, number, number] = [1.0, 0.38, 0.05];
const LIGHT_IRIDESCENCE: [number, number, number] = [0.31, 0.27, 0.90];

export function PageHero({
  badge,
  title,
  description,
  className,
  titleClassName,
}: {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}) {
  const { theme } = useTheme();

  return (
    <section className={cn("relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16", className)}>
      {/* Iridescence WebGL Background — royal blue in light mode, deep orange in dark mode */}
      <div className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-500 dark:opacity-100">
        <Iridescence
          color={theme === "dark" ? DARK_IRIDESCENCE : LIGHT_IRIDESCENCE}
          speed={0.7}
          amplitude={0.15}
          mouseReact={true}
        />
      </div>

      {/* Ambient glowing blue & purple orbs in light mode like home page */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px] transition-opacity dark:opacity-0" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px] transition-opacity dark:opacity-0" />

      {/* Radial overlay: luminous blue-tinted wash in light mode, deep black in dark mode */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_30%,rgba(79,70,229,0.18)_0%,rgba(139,92,246,0.10)_45%,rgba(240,244,255,0.75)_100%)] dark:bg-[radial-gradient(ellipse_at_60%_40%,rgba(241,128,41,0.18)_0%,rgba(0,0,0,0.72)_70%)] transition-colors duration-500"
      />

      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <TiltCard maxTilt={3} className="mx-auto mt-12 w-full">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[var(--radius-xl)] border border-indigo-100/90 bg-white/95 px-10 py-16 shadow-[0_24px_70px_-15px_rgba(79,70,229,0.16),0_0_0_1px_rgba(79,70,229,0.06),0_4px_6px_-2px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-500 dark:border-orange-500/20 dark:bg-black/50 dark:shadow-[0_8px_80px_rgba(241,128,41,0.25)] md:px-20 md:py-20">

            {/* Glowing accent inside the card: blue in light mode, orange in dark mode */}
            <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl dark:bg-orange-500/20" />

            {badge && (
              <Reveal variant="fadeUp" delay={0.1}>
                <span className="mb-6 flex items-center gap-2 rounded-full border border-indigo-200/90 bg-indigo-50/90 px-5 py-2 text-sm font-semibold tracking-wide text-indigo-600 transition-colors dark:border-orange-500/40 dark:bg-orange-500/15 dark:text-orange-300">
                  <Sparkles className="h-4 w-4 text-indigo-600 dark:text-orange-400" />
                  {badge}
                </span>
              </Reveal>
            )}

            <TextReveal
              as="h1"
              text={title}
              className={cn("text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 transition-colors dark:text-white sm:text-5xl lg:text-[64px]", titleClassName)}
              stagger={0.04}
            />

            {description && (
              <Reveal variant="fadeUp" delay={0.4}>
                <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-neutral-700 transition-colors dark:text-white/70">
                  {description}
                </p>
              </Reveal>
            )}
          </div>
        </TiltCard>
      </Container>
    </section>
  );
}
