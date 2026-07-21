import Image from "next/image";
import { industries } from "@/content/site-data";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { Icon } from "@/lib/icon-map";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";

export function Industries() {
  return (
    <Section className="relative overflow-hidden bg-surface-muted">
      <div className="mesh-gradient-soft pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionHeader badge="Industries" title="Businesses We Help Grow" />
        <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((industry, i) => {
            const accent = getAccent(i);
            return (
              <StaggerItem key={industry.name}>
                <div
                  className={cn(
                    "card-liquid group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] border border-neutral-200 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]",
                    accent.glow
                  )}
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 p-5">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110",
                        accent.badge,
                        accent.iconHover
                      )}
                    >
                      <Icon name={industry.icon} className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold text-white">{industry.name}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
