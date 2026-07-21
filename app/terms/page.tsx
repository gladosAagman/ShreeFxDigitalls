import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for using the ${siteConfig.name} website and services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updatedAt="January 1, 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            `By accessing and using the ${siteConfig.name} website, you agree to be bound by these Terms & Conditions.`,
          ],
        },
        {
          heading: "Services",
          body: [
            "Details of any engagement, deliverables, timelines, and pricing will be confirmed separately in a written proposal or agreement before work begins.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this website, including text, graphics, logos, and design, is the property of ShreeFX Digitals unless otherwise noted, and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            `${siteConfig.name} is not liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.`,
          ],
        },
      ]}
    />
  );
}
