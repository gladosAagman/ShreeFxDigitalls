import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactMethods, ConsultationFormSection } from "@/components/sections/contact-sections";
import { FaqSection } from "@/components/sections/faq-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ShreeFX Digitals for marketing, automation, branding, or web solutions. Book a free consultation today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get In Touch"
        title="Let's Build Something Great Together"
        description={`Whether you need marketing, automation, branding, or web solutions, our team is ready to help. ${siteConfig.businessHours}.`}
      />
      <ContactMethods />
      <ConsultationFormSection />
      <FaqSection limit={4} />
    </>
  );
}
