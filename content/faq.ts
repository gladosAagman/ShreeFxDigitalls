import type { FaqItem } from "@/types/content";

export const faqs: FaqItem[] = [
  {
    question: "What services does ShreeFX Digitals offer?",
    answer:
      "We offer digital marketing (Meta Ads, Google Ads, SEO), business automation (WhatsApp Business API, AI chatbots, CRM), creative services (branding, video, design), and web solutions (website development, landing pages).",
    category: "General",
    popular: true,
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on scope and channels involved. We offer a free consultation to understand your goals and provide a transparent proposal with no hidden fees.",
    category: "Pricing",
    popular: true,
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Websites typically launch in 3-5 weeks. Marketing campaigns start showing initial data within 2-4 weeks, with meaningful optimization by month two.",
    category: "Project Process",
    popular: true,
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. All engagements include a support window post-launch, and we offer ongoing retainers for continued optimization, content, and maintenance.",
    category: "Technical Support",
  },
  {
    question: "How does WhatsApp Business API verification work?",
    answer:
      "We handle the entire verification process with Meta on your behalf, including business documentation and message template approval, typically completed in 5-10 business days.",
    category: "WhatsApp API",
    popular: true,
  },
  {
    question: "Can I send bulk WhatsApp messages to customers?",
    answer:
      "Yes, using approved message templates and within WhatsApp's opt-in policies to ensure deliverability and account safety.",
    category: "WhatsApp API",
  },
  {
    question: "How do you measure marketing campaign success?",
    answer:
      "We track cost per lead, conversion rate, and return on ad spend, with transparent weekly or monthly reporting depending on your plan.",
    category: "Marketing",
  },
  {
    question: "Do you manage the ad spend budget?",
    answer:
      "Ad spend is billed directly by Meta or Google to your account for full transparency. Our fee covers strategy, management, and optimization.",
    category: "Billing",
  },
  {
    question: "What's included in a free consultation?",
    answer:
      "A 30-minute call to understand your business goals, current challenges, and a high-level recommendation on the right services and next steps — no obligation.",
    category: "General",
    popular: true,
  },
  {
    question: "How will we communicate during the project?",
    answer:
      "We set up a dedicated WhatsApp or email channel plus scheduled check-in calls, so you always know project status.",
    category: "Project Process",
  },
  {
    question: "Can you work with businesses outside India?",
    answer:
      "Yes, we work with clients globally, with flexible scheduling to accommodate different time zones.",
    category: "General",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "Typically a 50% upfront deposit with the balance due on delivery for project work, or monthly billing for ongoing retainers.",
    category: "Billing",
  },
];

export const faqCategories = [
  "General",
  "Services",
  "Pricing",
  "Project Process",
  "Technical Support",
  "Billing",
  "WhatsApp API",
  "Marketing",
] as const;
