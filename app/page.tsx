import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Industries } from "@/components/sections/industries";
import { PortfolioHighlights } from "@/components/sections/portfolio-highlights";
import { Stats } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessTimeline />
      <Industries />
      <PortfolioHighlights />
      <Stats />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
