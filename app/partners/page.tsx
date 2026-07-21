import type { Metadata } from "next";
import Image from "next/image";
import { Landmark, Cpu, Handshake } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
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
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80&auto=format&fit=crop",
  },
  {
    name: "Vulcrux Systems",
    description: "A technology systems partner collaborating with us on automation, AI, and modern engineering solutions.",
    icon: Cpu,
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
                  <div
                    className={cn(
                      "card-liquid group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]",
                      accent.glow
                    )}
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                      <span
                        className={cn(
                          "absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110",
                          accent.badge,
                          accent.iconHover
                        )}
                      >
                        <partner.icon className="h-6 w-6" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col items-start gap-4 p-8">
                      <h3 className="text-xl font-semibold text-text">{partner.name}</h3>
                      <p className="text-[15px] leading-relaxed text-text-muted">{partner.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                        <Handshake className="h-4 w-4" /> Strategic Partner
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}
