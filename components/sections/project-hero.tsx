"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import type { PortfolioProject } from "@/types/content";

const Iridescence = dynamic(
  () => import("@/components/effects/Iridescence"),
  { ssr: false }
);

export function ProjectHero({ project }: { project: PortfolioProject }) {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-36 pb-12 md:pt-44 md:pb-20">
      {/* WebGL Animated Background */}
      <Iridescence
        color={[1.0, 0.38, 0.05]}
        speed={0.5}
        amplitude={0.1}
        mouseReact={false}
      />
      {/* Dark overlay to ensure text readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      <Container className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Heading Section - Outside the card so it's massive and clear */}
        <Reveal variant="scaleIn">
          <span className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-black/40 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-400 shadow-lg backdrop-blur-md">
            {project.industry}
          </span>
        </Reveal>

        <TextReveal
          as="h1"
          text={project.client}
          className="mx-auto text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          stagger={0.05}
        />

        <Reveal delay={0.3} variant="fadeUp">
          <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-relaxed text-white/80 md:text-xl">
            {project.summary}
          </p>
        </Reveal>

        {/* Massive 3D Image below the heading */}
        <Reveal delay={0.5} variant="fadeUp" className="mt-14 w-full">
          <TiltCard maxTilt={3} className="mx-auto w-full">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-white/10 shadow-[0_16px_100px_rgba(241,128,41,0.2)]">
              <Image
                src={project.image}
                alt={project.client}
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </TiltCard>
        </Reveal>
      </Container>
    </section>
  );
}
