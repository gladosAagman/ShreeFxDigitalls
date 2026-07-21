"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/theme-provider";
import { GridScan } from "@/components/effects/grid-scan";
import SplashCursor from "@/components/effects/splash-cursor";

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
    <section className={cn("relative flex min-h-screen items-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28", className)}>
      {theme === "light" ? (
        <SplashCursor
          DYE_RESOLUTION={720}
          PRESSURE_ITERATIONS={14}
          SPLAT_RADIUS={0.15}
          DENSITY_DISSIPATION={4}
          COLOR_UPDATE_SPEED={6}
        />
      ) : null}
      <div className="mesh-gradient-bg pointer-events-none absolute inset-0" aria-hidden />
      {theme === "dark" ? (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(65% 55% at 50% 0%, color-mix(in oklab, #3b82f6 30%, transparent) 0%, transparent 70%)," +
              "radial-gradient(45% 40% at 85% 100%, color-mix(in oklab, #2563eb 22%, transparent) 0%, transparent 70%)",
          }}
        />
      ) : null}
      <div className={cn("absolute inset-0", theme === "dark" ? "opacity-25" : "opacity-[0.14]")} aria-hidden>
        <GridScan
          sensitivity={0.5}
          lineThickness={1}
          linesColor={theme === "dark" ? "#324a7a" : "#c9c2d6"}
          gridScale={0.28}
          scanColor="#3b82f6"
          scanOpacity={0.5}
          enablePost={false}
          noiseIntensity={0.008}
        />
      </div>
      <Container className="relative mx-auto max-w-3xl text-center">
        {badge ? (
          <Reveal variant="scaleIn">
            <span className="mb-5 inline-flex items-center rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-medium text-brand-orange-dark">
              {badge}
            </span>
          </Reveal>
        ) : null}
        <TextReveal
          as="h1"
          text={title}
          className={cn("text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[56px]", titleClassName)}
          stagger={0.05}
        />
        {description ? (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-text-muted">{description}</p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
