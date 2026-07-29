import type { Metadata } from "next";
import { PortfolioHero } from "@/components/sections/portfolio-hero";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Stats } from "@/components/sections/stats";
import { TechnologiesUsed } from "@/components/sections/portfolio-tech-results";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore ShreeFX Digitals' portfolio of marketing campaigns, websites, branding, and automation projects with measurable business results.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <Stats />
      <TechnologiesUsed />
      <TestimonialsSection />
      <FinalCta title="Ready to Become Our Next Success Story?" />
    </>
  );
}
