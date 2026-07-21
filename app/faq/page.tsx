import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FaqExplorer } from "@/components/sections/faq-explorer";
import { faqs } from "@/content/faq";
import { FaqJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find quick answers about ShreeFX Digitals' services, pricing, timelines, processes, and support.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Find quick answers about our services, pricing, timelines, processes, and support."
      />
      <FaqExplorer />
    </>
  );
}
