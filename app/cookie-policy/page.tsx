import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy explaining how ${siteConfig.name} uses cookies and similar technologies.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updatedAt="January 1, 2026"
      sections={[
        {
          heading: "What Are Cookies",
          body: [
            "Cookies are small text files stored on your device that help websites remember information about your visit, such as preferences and usage patterns.",
          ],
        },
        {
          heading: "How We Use Cookies",
          body: [
            "We may use analytics cookies to understand how visitors interact with our website so we can improve content, performance, and user experience.",
          ],
        },
        {
          heading: "Managing Cookies",
          body: [
            "You can control or disable cookies through your browser settings at any time. Disabling cookies may affect some functionality of the site.",
          ],
        },
      ]}
    />
  );
}
