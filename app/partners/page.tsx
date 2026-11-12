import type { Metadata } from "next";
import Image from "next/image";
import { Handshake } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Partners",
  description: "Meet the companies ShreeFX Digitals partners with to deliver growth for our clients.",
  alternates: { canonical: "/partners" },
};

const partners = [
  {
    name: "Tata Capital",
    description: "One of India's leading financial services companies, partnering with us on digital growth and marketing initiatives.",
    logo: "/images/partners/tata-capital-clean.svg",
    logoDark: "/images/partners/tata-capital-white.svg",
    logoType: "horizontal" as const,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80&auto=format&fit=crop",
  },
  {
    name: "Vulcrux Systems",
    description: "A technology systems partner collaborating with us on automation, AI, and modern engineering solutions.",
    logo: "/images/partners/vulcrux-logo.png",
    logoType: "square" as const,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80&auto=format&fit=crop",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        badge="Our Partners"
        title="Companies We Partner With"
        description="We work closely with trusted organizations to deliver measurable growth and technology outcomes for our clients."
      />
      <Section>
        <Container>
          <SectionHeader badge="Partners" title="Trusted Partnerships" />
          <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {partners.map((partner, i) => {
              const accent = getAccent(i);
              return (
                <StaggerItem key={partner.name}>
                  <TiltCard maxTilt={5} className="h-full">
                    <div
                      className={cn(
                        "card-liquid group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 dark:border-neutral-800 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]",
                        accent.glow
                      )}
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                        {/* Official Brand Logo Badge */}
                        <div className="absolute bottom-4 left-4 flex items-center">
                          <div className="flex h-12 items-center justify-center rounded-2xl bg-white/95 px-4 py-2 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-105 dark:bg-neutral-900/90 dark:border dark:border-neutral-700/60">
                            {partner.logoType === "horizontal" ? (
                              <>
                                <Image
                                  src={partner.logo}
                                  alt={partner.name}
                                  width={130}
                                  height={36}
                                  className="h-6 w-auto object-contain dark:hidden"
                                />
                                <Image
                                  src={partner.logoDark || partner.logo}
                                  alt={partner.name}
                                  width={130}
                                  height={36}
                                  className="hidden h-6 w-auto object-contain dark:block"
                                />
                              </>
                            ) : (
                              <div className="flex items-center gap-2.5">
                                <Image
                                  src={partner.logo}
                                  alt={partner.name}
                                  width={34}
                                  height={34}
                                  className="h-8 w-8 object-contain"
                                />
                                <span className="font-bold text-xs tracking-wider text-neutral-900 dark:text-white uppercase">
                                  Vulcrux
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-start gap-4 p-8">
                        <div className="flex w-full items-center justify-between">
                          <h3 className="text-xl font-semibold text-text">{partner.name}</h3>
                          <span className="rounded-full bg-brand-orange/10 px-2.5 py-1 text-xs font-semibold text-brand-orange">
                            Official Partner
                          </span>
                        </div>
                        <p className="text-[15px] leading-relaxed text-text-muted">{partner.description}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                          <Handshake className="h-4 w-4" /> Strategic Partner
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}
