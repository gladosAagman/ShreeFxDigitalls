import { whyChooseUs } from "@/content/site-data";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { Icon } from "@/lib/icon-map";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  return (
    <Section className="relative overflow-hidden bg-surface-muted">
      <div className="mesh-gradient-soft pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionHeader
          badge="Why Choose Us"
          title="Growth Built on Data, Not Guesswork"
          description="We combine strategy, creativity, and automation into one accountable growth system."
        />
        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const accent = getAccent(i);
            return (
              <StaggerItem key={item.title}>
                <SpotlightCard
                  className={cn(
                    "grid-glow-border group h-full rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]",
                    accent.glow
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110",
                      accent.badge,
                      accent.iconHover
                    )}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{item.description}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
