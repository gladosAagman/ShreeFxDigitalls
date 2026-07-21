export const siteConfig = {
  name: "ShreeFX Digitals",
  tagline: "Your Digital Growth Partner",
  description:
    "ShreeFX Digitals helps startups, local businesses, and enterprises grow faster with performance marketing, WhatsApp automation, AI chatbots, creative content, and modern website development.",
  url: "https://www.shreefxdigitals.com",
  ogImage: "/og-image.png",
  keywords: [
    "digital marketing agency",
    "WhatsApp Business API",
    "Meta Ads",
    "Google Ads",
    "AI automation",
    "website development",
    "SEO agency India",
    "performance marketing",
    "branding agency",
    "CRM automation",
  ],
  email: "hello@shreefxdigitals.com",
  phone: "+91 93407 48274",
  phoneDisplay: "+91 93407 48274",
  whatsappNumber: "919340748274",
  address: "Ahmedabad, Gujarat, India",
  businessHours: "Mon - Sat, 10:00 AM - 7:00 PM IST",
  foundingYear: "2022",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${siteConfig.email}${query ? `?${query}` : ""}`;
}
