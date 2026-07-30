"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

// Dynamically import the WebGL component to avoid SSR issues
const Iridescence = dynamic(
  () => import("@/components/effects/Iridescence"),
  { ssr: false }
);

const stats = [
  { icon: TrendingUp, value: "180+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
];

export function AboutHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16">
      {/* React Bits Iridescence WebGL Background — orange-black in dark, purple in light (matches Home) */}
      <Iridescence
        color={isDark ? [1.0, 0.38, 0.05] : [0.55, 0.4, 0.9]}
        speed={0.7}
        amplitude={0.15}
        mouseReact={true}
      />

      {/* Overlay: black in dark mode, soft white in light mode */}
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

            {/* Subtle glow inside the card */}
            <div
              className={cn(
                "pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl",
                isDark ? "bg-orange-500/20" : "bg-violet-400/25"
              )}
            />

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
                Our Story
              </span>
            </Reveal>

            <TextReveal
              as="h1"
              text="We Don't Just Market. We Build Businesses."
              className={cn(
                "text-center text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-[68px]",
                isDark ? "text-white" : "text-gray-900"
              )}
              stagger={0.04}
            />

            <Reveal variant="fadeUp" delay={0.4}>
              <p
                className={cn(
                  "mx-auto mt-6 max-w-xl text-[17px] leading-relaxed",
                  isDark ? "text-white/70" : "text-gray-600"
                )}
              >
                ShreeFX Digitals is a performance-first digital agency based in India — helping local businesses and startups scale with AI automation, Meta & Google Ads, and high-converting web solutions.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.55}>
              <div
                className={cn(
                  "mt-10 flex flex-wrap items-center justify-center gap-6 border-y py-8",
                  isDark ? "border-white/10" : "border-gray-900/10"
                )}
              >
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 px-6">
                    <Icon className={cn("mb-1 h-5 w-5", isDark ? "text-orange-400" : "text-violet-500")} />
                    <span className={cn("text-3xl font-extrabold", isDark ? "text-white" : "text-gray-900")}>
                      {value}
                    </span>
                    <span
                      className={cn(
                        "text-xs font-medium uppercase tracking-widest",
                        isDark ? "text-white/50" : "text-gray-500"
                      )}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.7}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                  className={cn(
                    "rounded-full px-8 py-4 text-sm font-semibold shadow-[0_4px_24px_rgba(241,128,41,0.5)] transition-all hover:scale-105 active:scale-95",
                    isDark
                      ? "bg-orange-500 text-black hover:bg-orange-400 hover:shadow-[0_6px_32px_rgba(241,128,41,0.7)]"
                      : "bg-violet-600 text-white shadow-[0_4px_24px_rgba(139,92,246,0.4)] hover:bg-violet-500 hover:shadow-[0_6px_32px_rgba(139,92,246,0.6)]"
                  )}
                >
                  Our Journey ↓
                </button>
                <Link
                  href="/portfolio"
                  className={cn(
                    "rounded-full border px-8 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:scale-105 active:scale-95",
                    isDark
                      ? "border-orange-500/40 bg-white/5 text-orange-300 hover:border-orange-400/60 hover:bg-white/10"
                      : "border-violet-400/40 bg-black/5 text-violet-600 hover:border-violet-500/60 hover:bg-black/10"
                  )}
                >
                  View Our Work
                </Link>
              </div>
            </Reveal>

          </div>
        </TiltCard>
      </Container>
    </section>
  );
}