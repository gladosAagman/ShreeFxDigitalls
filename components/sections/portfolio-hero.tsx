"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Briefcase, TrendingUp, Star } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";

const Iridescence = dynamic(
  () => import("@/components/effects/Iridescence"),
  { ssr: false }
);

const stats = [
  { icon: Briefcase, value: "180+", label: "Projects Delivered" },
  { icon: TrendingUp, value: "4x", label: "Avg. Revenue Growth" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

export function PortfolioHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 pb-12">
      <Iridescence
        color={[1.0, 0.38, 0.05]}
        speed={0.7}
        amplitude={0.15}
        mouseReact={true}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(241,128,41,0.18) 0%, rgba(0,0,0,0.75) 70%)",
        }}
      />
      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <TiltCard maxTilt={3} className="mx-auto mt-12 w-full">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[var(--radius-xl)] border border-orange-500/20 bg-black/50 px-10 py-14 shadow-[0_8px_80px_rgba(241,128,41,0.25)] backdrop-blur-xl md:px-20 md:py-16">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

            <Reveal variant="fadeUp" delay={0.1}>
              <span className="mb-5 flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-5 py-2 text-sm font-semibold tracking-wide text-orange-300">
                <Briefcase className="h-4 w-4 text-orange-400" />
                Our Work
              </span>
            </Reveal>

            <TextReveal
              as="h1"
              text="Results That Speak for Themselves"
              className="text-center text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[64px]"
              stagger={0.04}
            />

            <Reveal variant="fadeUp" delay={0.4}>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
                Explore selected projects spanning performance marketing, web development, branding, and AI automation — each with measurable business outcomes.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.55}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 px-6">
                    <Icon className="mb-1 h-5 w-5 text-orange-400" />
                    <span className="text-3xl font-extrabold text-white">{value}</span>
                    <span className="text-xs font-medium uppercase tracking-widest text-white/50">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </TiltCard>
      </Container>
    </section>
  );
}
