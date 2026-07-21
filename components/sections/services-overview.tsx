import Link from "next/link";
import { services } from "@/content/services";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { Button } from "@/components/ui/button";

export function ServicesOverview() {
  const featured = services.slice(0, 8);
  return (
    <Section className="relative overflow-hidden">
      <div className="mesh-gradient-soft pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionHeader
          badge="What We Do"
          title="Services That Scale Your Business"
          description="From performance marketing to AI automation, every service is designed to deliver measurable growth."
        />
        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
