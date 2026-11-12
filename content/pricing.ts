export type PricingPlan = {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlights?: string[];
  popular?: boolean;
  ctaText: string;
  whatsappMessage: string;
  accentColor: "green" | "orange";
};

export const featuredPlans: PricingPlan[] = [
  {
    id: "whatsapp-api",
    badge: "Business Automation",
    title: "WhatsApp Business API",
    subtitle: "Smarter Communication. Stronger Connections.",
    price: "₹10,000",
    period: "Monthly",
    description:
      "Official Meta-verified WhatsApp Business API solution for automated customer communication, bulk broadcasts, and 24/7 lead capture.",
    features: [
      "Auto Respond — Instant automated replies 24/7",
      "Broadcast — Reach 10,000+ people at one time",
      "Smart Inbox — Manage all customer chats in one place",
      "100% Secure — Official Meta API, safe & policy-compliant",
      "Boost Customer Engagement & Retention",
      "Save Manual Work & Team Hours",
      "Higher Sales & Conversion Rates",
    ],
    highlights: ["10,000+ Broadcasts", "Instant 24/7 Auto-Reply", "Official Meta Verified"],
    popular: true,
    ctaText: "Get WhatsApp API Now",
    whatsappMessage:
      "Hi ShreeFX Digitals, I am interested in your WhatsApp Business API Monthly Plan (₹10,000/mo). Please share the setup details.",
    accentColor: "green",
  },
  {
    id: "website-package",
    badge: "Web Solutions",
    title: "Professional Website Package",
    subtitle: "That Grows Your Business",
    price: "₹14,999",
    period: "One-Time Starting Price",
    description:
      "Complete modern, high-converting responsive website designed and developed for digital impact, speed, and real lead generation.",
    features: [
      "Modern & Responsive Design (Mobile, Tablet, Desktop)",
      "SEO-Friendly Structure & Fast Loading Speed",
      "Contact Form & WhatsApp Lead Integration",
      "Social Media Profiles Integration",
      "Basic On-Page SEO Setup",
      "1 Year Free Support & Maintenance",
      "Secure & Cloud-Optimized Deployment",
    ],
    highlights: ["Mobile Optimized", "1 Year Free Support", "Fast Loading Speed"],
    popular: false,
    ctaText: "Get Started Today",
    whatsappMessage:
      "Hi ShreeFX Digitals, I want to build a Professional Website at ₹14,999. Please share the timeline and process.",
    accentColor: "orange",
  },
];

