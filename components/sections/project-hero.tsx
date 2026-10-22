"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import type { PortfolioProject } from "@/types/content";
import { useTheme } from "@/components/theme/theme-provider";

const Iridescence = dynamic(
  () => import("@/components/effects/Iridescence"),
  { ssr: false }
);

const DARK_IRIDESCENCE: [number, number, number] = [1.0, 0.38, 0.05];
const LIGHT_IRIDESCENCE: [number, number, number] = [0.31, 0.27, 0.90];

export function ProjectHero({ project }: { project: PortfolioProject }) {
  const { theme } = useTheme();

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-36 pb-12 md:pt-44 md:pb-20">
      {/* WebGL Animated Background — royal blue in light mode, deep orange in dark mode */}
      <div className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-500 dark:opacity-100">
        <Iridescence
          color={theme === "dark" ? DARK_IRIDESCENCE : LIGHT_IRIDESCENCE}
          speed={0.5}
          amplitude={0.1}
          mouseReact={false}
        />
      </div>

      {/* Ambient glowing blue & purple orbs in light mode like home page */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px] transition-opacity dark:opacity-0" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px] transition-opacity dark:opacity-0" />

      {/* Overlay to ensure text readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_40%,rgba(79,70,229,0.18)_0%,rgba(240,244,255,0.75)_50%,rgba(255,255,255,0.92)_100%)] dark:bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.9)_100%)] transition-colors duration-500"
      />

      <Container className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Heading Section - Outside the card so it's massive and clear */}
        <Reveal variant="scaleIn">
          <span className="mb-6 inline-flex items-center rounded-full border border-indigo-200/90 bg-indigo-50/90 px-5 py-2 text-sm font-bold uppercase tracking-widest text-indigo-600 shadow-md backdrop-blur-md transition-colors dark:border-orange-500/30 dark:bg-black/40 dark:text-orange-400">
            {project.industry}
          </span>
        </Reveal>

        <TextReveal
          as="h1"
          text={project.client}
          className="mx-auto text-5xl font-extrabold tracking-tight text-neutral-900 transition-colors dark:text-white sm:text-6xl lg:text-7xl"
          stagger={0.05}
        />

        <Reveal delay={0.3} variant="fadeUp">
          <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-relaxed text-neutral-700 transition-colors dark:text-white/80 md:text-xl">
            {project.summary}
          </p>
        </Reveal>

        {/* Massive 3D Image below the heading */}
        <Reveal delay={0.5} variant="fadeUp" className="mt-14 w-full">
          <TiltCard maxTilt={3} className="mx-auto w-full">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-indigo-100/90 shadow-[0_20px_70px_-15px_rgba(79,70,229,0.18)] transition-colors dark:border-white/10 dark:shadow-[0_16px_100px_rgba(241,128,41,0.2)]">
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
