"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/components/theme/theme-provider";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Sparkles } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";
import { cn } from "@/lib/utils";

// Dynamically import the WebGL component to avoid SSR issues
const Iridescence = dynamic(
  () => import("@/components/effects/Iridescence"),
  { ssr: false }
);

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
  const isDark = theme === "dark";

  return (
    <section className={cn("relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16", className)}>
      {/* React Bits Iridescence WebGL Background — orange-black in dark, purple-pink in light (matches Home) */}
      <Iridescence
        color={isDark ? [1.0, 0.38, 0.05] : [0.55, 0.4, 0.9]}
        speed={0.7}
        amplitude={0.15}
        mouseReact={true}
      />

      {/* Overlay: pushes toward black in dark mode, toward soft white in light mode */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 60% 40%, rgba(241,128,41,0.18) 0%, rgba(0,0,0,0.72) 70%)"
            : "radial-gradient(ellipse at 60% 40%, rgba(168,120,255,0.12) 0%, rgba(255,255,255,0.85) 70%)",
        }}
      />

      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <TiltCard maxTilt={3} className="mx-auto mt-12 w-full">
          <div
            className={cn(
              "relative flex flex-col items-center justify-center overflow-hidden rounded-[var(--radius-xl)] border px-10 py-16 backdrop-blur-xl md:px-20 md:py-20",
              isDark
                ? "border-orange-500/20 bg-black/50 shadow-[0_8px_80px_rgba(241,128,41,0.25)]"
                : "border-violet-300/40 bg-white/60 shadow-[0_8px_80px_rgba(139,92,246,0.18)]"
            )}
          >

            {/* Subtle glow inside the card — orange in dark, violet in light */}
            <div
              className={cn(
                "pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl",
                isDark ? "bg-orange-500/20" : "bg-violet-400/25"
              )}
            />

            {badge && (
              <Reveal variant="fadeUp" delay={0.1}>
                <span
                  className={cn(
                    "mb-6 flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold tracking-wide",
                    isDark
                      ? "border-orange-500/40 bg-orange-500/15 text-orange-300"
                      : "border-violet-400/40 bg-violet-500/10 text-violet-600"
                  )}
                >
                  <Sparkles className={cn("h-4 w-4", isDark ? "text-orange-400" : "text-violet-500")} />
                  {badge}
                </span>
              </Reveal>
            )}

            <TextReveal
              as="h1"
              text={title}
              className={cn(
                "text-center text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[64px]",
                isDark ? "text-white" : "text-gray-900",
                titleClassName
              )}
              stagger={0.04}
            />

            {description && (
              <Reveal variant="fadeUp" delay={0.4}>
                <p
                  className={cn(
                    "mx-auto mt-6 max-w-xl text-[17px] leading-relaxed",
                    isDark ? "text-white/70" : "text-gray-600"
                  )}
                >
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