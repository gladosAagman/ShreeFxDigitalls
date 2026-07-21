"use client";

import { useState } from "react";
import { portfolioProjects, portfolioCategories } from "@/content/portfolio";
import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [active, setActive] = useState<string>("All");
  const categories = ["All", ...portfolioCategories];
  const filtered =
    active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.categories.includes(active as never));

  return (
    <Section className="pt-0">
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                active === cat
                  ? "bg-brand-orange text-white shadow-[var(--shadow-sm)]"
                  : "border border-neutral-200 bg-surface text-text-muted hover:border-brand-orange/40 hover:text-brand-orange"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <StaggerContainer key={active} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <StaggerItem key={project.slug}>
              <PortfolioCard project={project} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
