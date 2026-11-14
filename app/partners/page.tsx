import type { Metadata } from "next";
import Image from "next/image";
import { Handshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Partners & Clients",
  description: "Meet the strategic industry partners and trusted clients ShreeFX Digitals collaborates with to deliver measurable growth.",
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

const trustedClients = [
  {
    name: "Advanced Dental Jabalpur",
    category: "Dental & Healthcare",
    logo: "/images/Clients/AdvancedDentalJabalpur.jpeg",
    bgColor: "#ffffff",
  },
  {
    name: "BuildBest Construction",
    category: "Construction & Engineering",
    logo: "/images/Clients/BuildBestConstruction.jpeg",
    bgColor: "#0e2944",
  },
  {
    name: "Dharmendra Electronics",
    category: "Retail & Consumer Tech",
    logo: "/images/Clients/Dharmendra Electronics.jpeg",
    bgColor: "#e1e0de",
  },
  {
    name: "JWC",
    category: "Enterprise & Consulting",
    logo: "/images/Clients/JWC.jpeg",
    bgColor: "#c9ccd5",
  },
  {
    name: "Pitambara Physiotherapy",
    category: "Physical Rehab & Wellness",
    logo: "/images/Clients/Pitambara Physiotherapy.jpeg",
    bgColor: "#000000",
  },
  {
    name: "Sheetal Jyoti",
    category: "Hospitality & Celebrations",
    logo: "/images/Clients/SheetalJyoti.jpeg",
    bgColor: "#000000",
  },
  {
    name: "Visa Alliance",
    category: "Immigration & Global Visas",
    logo: "/images/Clients/VisaAlliance.jpeg",
    bgColor: "#000000",
  },
  {
    name: "Wash Wale Services",
    category: "Facility & Laundry Tech",
    logo: "/images/Clients/Wash wale services.jpeg",
    bgColor: "#001a3d",
  },
  {
    name: "The Gut Sutra",
    category: "Holistic Health & Nutrition",
    logo: "/images/Clients/the gut sutra.jpeg",
    bgColor: "#fdfef8",
  },
  {
    name: "Vidhya Dham",
    category: "Education & Academy",
    logo: "/images/Clients/vidhya dham.jpeg",
    bgColor: "#fefefe",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        badge="Partners & Clients"
        title="Partners & Trusted Clients"
        description="We work closely with strategic organizations and trusted businesses to deliver measurable growth and modern digital outcomes."
      />

      {/* Strategic Partners Section */}
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

      {/* Trusted Clients Section */}
      <Section className="border-t border-neutral-200/60 dark:border-neutral-800/80 bg-surface-muted/30">
        <Container>
          <SectionHeader
            badge="Our Clients"
            title="Trusted Clients"
            description="Businesses, healthcare practices, and institutions powered by ShreeFX Digitals across performance marketing, branding, and digital growth."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6">
            {trustedClients.map((client) => (
              <div
                key={client.name}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 dark:border-neutral-800 bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-lg"
              >
                <div
                  className="relative aspect-square w-full overflow-hidden rounded-xl p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{ backgroundColor: client.bgColor }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-3.5 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-text transition-colors group-hover:text-brand-orange leading-snug line-clamp-1">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-xs text-text-muted line-clamp-1">
                      {client.category}
                    </p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-orange">
                    <ShieldCheck className="h-3 w-3" />
                    Verified Client
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
