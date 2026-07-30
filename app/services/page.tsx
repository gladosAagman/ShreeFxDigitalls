import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { FeaturedService } from "@/components/sections/featured-service";
import { ServiceCategoriesGrid } from "@/components/sections/service-categories-grid";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PortfolioHighlights } from "@/components/sections/portfolio-highlights";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ShreeFX Digitals' full range of digital marketing, business automation, creative, and web development services designed for measurable growth.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <FeaturedService />
      <ServiceCategoriesGrid />
      <ProcessTimeline />
      <WhyChooseUs />
      <PortfolioHighlights />
      <FaqSection limit={6} />
      <FinalCta title="Ready to Grow Faster?" description="Book a free consultation or schedule a discovery call to get started." />
    </>
  );
}
