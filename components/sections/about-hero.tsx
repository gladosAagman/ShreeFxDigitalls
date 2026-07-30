"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";

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
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16">
      {/* React Bits Iridescence WebGL Background — orange-black tones */}
      <Iridescence
        color={[1.0, 0.38, 0.05]}   /* deep orange */
        speed={0.7}
        amplitude={0.15}
        mouseReact={true}
      />

      {/* Dark overlay to push toward black and keep text readable */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(241,128,41,0.18) 0%, rgba(0,0,0,0.72) 70%)",
        }}
      />

      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <TiltCard maxTilt={3} className="mx-auto mt-12 w-full">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[var(--radius-xl)] border border-orange-500/20 bg-black/50 px-10 py-16 shadow-[0_8px_80px_rgba(241,128,41,0.25)] backdrop-blur-xl md:px-20 md:py-20">

            {/* Subtle orange glow inside the card */}
            <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

            <Reveal variant="fadeUp" delay={0.1}>
              <span className="mb-6 flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-5 py-2 text-sm font-semibold tracking-wide text-orange-300">
                <Sparkles className="h-4 w-4 text-orange-400" />
                Our Story
              </span>
            </Reveal>

            <TextReveal
              as="h1"
              text="We Don't Just Market. We Build Businesses."
              className="text-center text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[68px]"
              stagger={0.04}
            />

            <Reveal variant="fadeUp" delay={0.4}>
              <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                ShreeFX Digitals is a performance-first digital agency based in India — helping local businesses and startups scale with AI automation, Meta & Google Ads, and high-converting web solutions.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.55}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-y border-white/10 py-8">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 px-6">
                    <Icon className="mb-1 h-5 w-5 text-orange-400" />
                    <span className="text-3xl font-extrabold text-white">{value}</span>
                    <span className="text-xs font-medium uppercase tracking-widest text-white/50">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.7}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-black shadow-[0_4px_24px_rgba(241,128,41,0.5)] transition-all hover:scale-105 hover:bg-orange-400 hover:shadow-[0_6px_32px_rgba(241,128,41,0.7)] active:scale-95"
                >
                  Our Journey ↓
                </button>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-orange-500/40 bg-white/5 px-8 py-4 text-sm font-semibold text-orange-300 backdrop-blur-sm transition-all hover:scale-105 hover:border-orange-400/60 hover:bg-white/10 active:scale-95"
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
