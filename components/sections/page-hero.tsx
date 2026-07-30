"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/theme-provider";
import { NebulaShader } from "@/components/effects/nebula-shader";

// Deterministic hash so the same badge always maps to the same variant
function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

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

  const source = badge ?? title;
  const variantIndex = hashString(source) % 3;
  const shaderProps =
    variantIndex === 1
      ? { hasActiveReminders: true }
      : variantIndex === 2
      ? { hasUpcomingReminders: true }
      : {};

  const signalLabel = (badge ?? title)
    .split(/\s+/)[0]
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase()
    .slice(0, 8);

  return (
    <section
      className={cn(
        "relative flex min-h-screen items-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28",
        isDark ? "bg-[#05070d]" : "bg-background",
        className
      )}
    >
      {/* Base tint layer, matches home's overall wash */}
      <div className="mesh-gradient-bg pointer-events-none absolute inset-0" aria-hidden />

      {/* Signal field background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          isDark ? "opacity-100" : "opacity-60"
        )}
        aria-hidden
      >
        <NebulaShader disableCenterDimming {...shaderProps} />
      </div>

      {/* HUD viewfinder frame */}
      <div
        className={cn(
          "pointer-events-none absolute inset-6 border md:inset-10",
          isDark ? "border-white/10" : "border-black/10"
        )}
        aria-hidden
      >
        <span className="absolute -top-px -left-px h-4 w-4 border-t border-l border-brand-orange/60" />
        <span className="absolute -top-px -right-px h-4 w-4 border-t border-r border-brand-orange/60" />
        <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-brand-orange/60" />
        <span className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-brand-orange/60" />
      </div>

      {/* Corner readout */}
      <div
        className="pointer-events-none absolute bottom-24 right-10 hidden font-mono text-[11px] tracking-wider text-brand-orange/40 md:block"
        aria-hidden
      >
        <div>{signalLabel}.{new Date().getFullYear()}</div>
        <div className={isDark ? "text-white/20" : "text-black/20"}>TRANSMITTING</div>
      </div>

      <Container className="relative mx-auto max-w-3xl">
        {badge ? (
          <Reveal variant="scaleIn">
            <span
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-text-muted",
                isDark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"
              )}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-brand-orange" />
              </span>
              {badge}
            </span>
          </Reveal>
        ) : null}

        <div className="relative overflow-hidden">
          <TextReveal
            as="h1"
            text={title}
            className={cn(
              "text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[56px]",
              titleClassName
            )}
            stagger={0.05}
          />
          <span
            className="animate-signal-scan pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-brand-orange/25 to-transparent"
            aria-hidden
          />
        </div>

        {description ? (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-text-muted">
              {description}
            </p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}