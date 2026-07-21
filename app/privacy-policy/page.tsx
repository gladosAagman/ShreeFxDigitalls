import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}, explaining how we collect and use information from website visitors.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="January 1, 2026"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information you voluntarily provide through our consultation form, such as your name, company, email, and phone number, so we can respond to your inquiry.",
            "We may also collect anonymous usage data through analytics tools to understand how visitors use our website and improve the experience.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "Information submitted through our contact and consultation forms is used solely to respond to your inquiry and, where relevant, deliver the services you request.",
            "We do not sell or rent your personal information to third parties.",
          ],
        },
        {
          heading: "Cookies & Analytics",
          body: [
            "We may use cookies and analytics tools (such as Google Analytics) to understand aggregate visitor behavior. You can control cookie preferences through your browser settings.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take reasonable technical and organizational measures to protect any information you share with us from unauthorized access, alteration, or disclosure.",
          ],
        },
      ]}
    />
  );
}
