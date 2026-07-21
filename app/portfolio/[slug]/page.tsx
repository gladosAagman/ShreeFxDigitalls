import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Quote } from "lucide-react";
import { portfolioProjects, getPortfolioProjectBySlug } from "@/content/portfolio";
import { Container, Section } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/final-cta";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.client} Case Study`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
          { name: project.client, url: `${siteConfig.url}/portfolio/${project.slug}` },
        ]}
      />
      <PageHero badge={project.industry} title={project.client} description={project.summary} />

      <Container className="-mt-4 mb-4">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)]">
          <Image src={project.image} alt={project.client} fill sizes="(min-width: 1024px) 1200px, 100vw" className="object-cover" priority />
        </div>
      </Container>

      <Section className="pt-0">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-text">The Challenge</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-text-muted">{project.challenge}</p>

              <h2 className="mt-10 text-2xl font-bold text-text">Our Strategy</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-text-muted">{project.strategy}</p>

              <h2 className="mt-10 text-2xl font-bold text-text">Execution</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-text-muted">{project.execution}</p>

              {project.testimonial ? (
                <div className="card-liquid mt-10 rounded-[var(--radius-xl)] border border-neutral-200 bg-surface-muted p-6">
                  <Quote className="h-7 w-7 text-brand-orange/40" />
                  <p className="mt-3 text-[16px] leading-relaxed text-text">&ldquo;{project.testimonial.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-text">
                    {project.testimonial.author} <span className="font-normal text-text-muted">— {project.testimonial.role}</span>
                  </p>
                </div>
              ) : null}
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal variant="slideLeft">
              <div className="card-liquid rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Results</h3>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  {project.results.map((result) => (
                    <div key={result.label}>
                      <p className="text-2xl font-extrabold text-brand-orange">{result.value}</p>
                      <p className="text-sm text-text-muted">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal variant="slideLeft" delay={0.1}>
              <div className="card-liquid rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Technologies</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Button className="w-full" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <FinalCta title="Ready to Become Our Next Success Story?" />
    </>
  );
}
