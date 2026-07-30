"use client";

import dynamic from "next/dynamic";
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
  return (
    <section className={cn("relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16", className)}>
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

            {badge && (
              <Reveal variant="fadeUp" delay={0.1}>
                <span className="mb-6 flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-5 py-2 text-sm font-semibold tracking-wide text-orange-300">
                  <Sparkles className="h-4 w-4 text-orange-400" />
                  {badge}
                </span>
              </Reveal>
            )}

            <TextReveal
              as="h1"
              text={title}
              className={cn("text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]", titleClassName)}
              stagger={0.04}
            />

            {description && (
              <Reveal variant="fadeUp" delay={0.4}>
                <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
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
