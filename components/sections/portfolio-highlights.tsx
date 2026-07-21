import Link from "next/link";
import { portfolioProjects } from "@/content/portfolio";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { Button } from "@/components/ui/button";

export function PortfolioHighlights() {
  const featured = portfolioProjects.filter((p) => p.featured).slice(0, 3);
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="Our Work"
          title="Portfolio Highlights"
          description="Real projects, real outcomes — a look at how we've helped businesses grow."
        />
        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <StaggerItem key={project.slug}>
              <PortfolioCard project={project} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
