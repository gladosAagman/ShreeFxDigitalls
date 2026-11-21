export const siteConfig = {
  name: "ShreeFX Digitals",
  tagline: "Your Digital Growth Partner",
  description:
    "ShreeFX Digitals helps startups, local businesses, and enterprises grow faster with performance marketing, WhatsApp automation, AI chatbots, creative content, and modern website development.",
  url: "https://www.shreefxdigital.com",
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
  email: "shreefxdigital@gmail.com",
  phoneNumbers: [
    { display: "+91 93407 48274", raw: "+919340748274" },
    { display: "+91 88154 39533", raw: "+918815439533" },
    { display: "+91 92034 82201", raw: "+919203482201" },
  ],
  phone: "+91 93407 48274",
  phoneDisplay: "+91 93407 48274",
  whatsappNumber: "919340748274",
  address: "Jabalpur, Madhya Pradesh, India",
  googleMapsUrl:
    "https://www.google.com/maps/place/23%C2%B011'59.7%22N+79%C2%B055'35.3%22E/@23.1999168,79.9239006,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.1999168!4d79.9264755",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=23.1999168,79.9264755&hl=en&z=17&output=embed",
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
