"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/theme-provider";
import { Particles } from "@/components/effects/particles";

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
      <div className={cn("pointer-events-none absolute inset-0", theme === "dark" ? "opacity-40" : "opacity-[0.15]")} aria-hidden>
        <Particles
          className="absolute inset-0"
          quantity={120}
          ease={80}
          color={theme === "dark" ? "#F18029" : "#c9691d"}
          refresh
        />
        <Particles
          className="absolute inset-0"
          quantity={80}
          ease={120}
          color={theme === "dark" ? "#f1a519" : "#c98510"}
          refresh
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
