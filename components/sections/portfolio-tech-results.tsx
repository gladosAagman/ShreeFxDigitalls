import { techStack } from "@/content/site-data";
import { Container, Section, SectionHeader } from "@/components/layout/container";

export function TechnologiesUsed() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <SectionHeader badge="Technologies" title="Tools & Platforms We Use" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-neutral-200 bg-surface px-4 py-2 text-sm font-medium text-text-muted">
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
