import { testimonials } from "@/content/testimonials";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { TestimonialCard } from "@/components/cards/testimonial-card";

export function TestimonialsSection() {
  return (
    <Section className="relative overflow-hidden bg-surface-muted">
      <div className="mesh-gradient-soft pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="We measure success by the growth our clients experience."
        />
        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
