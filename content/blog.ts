import type { BlogPost } from "@/types/content";

export const blogPosts: BlogPost[] = [
  {
    slug: "whatsapp-business-api-guide-2026",
    title: "WhatsApp Business API: The Complete 2026 Guide for Growing Businesses",
    excerpt: "Everything you need to know about setting up WhatsApp Business API for lead capture, broadcasts, and automated support.",
    category: "WhatsApp Business API",
    tags: ["WhatsApp", "Automation", "Lead Generation"],
    author: "ShreeFX Team",
    authorRole: "Marketing Strategy",
    publishedAt: "2026-01-12",
    readingTime: "7 min read",
    content: [
      "WhatsApp has become the default communication channel for businesses across India, and the official Business API unlocks capabilities far beyond a personal chat account.",
      "In this guide, we cover verification requirements, broadcast messaging rules, automated reply flows, and how to connect WhatsApp to your CRM for a complete lead-to-close workflow.",
      "Businesses that adopt WhatsApp automation typically see faster response times and measurably higher conversion rates because customers get instant answers on the channel they already trust.",
      "We close with a checklist you can use to plan your own WhatsApp automation rollout, from message templates to compliance considerations.",
    ],
    featured: true,
  },
  {
    slug: "meta-ads-vs-google-ads-where-to-start",
    title: "Meta Ads vs Google Ads: Where Should Your Business Start?",
    excerpt: "A practical framework for deciding between Meta Ads and Google Ads based on your business model and sales cycle.",
    category: "Meta Ads",
    tags: ["Meta Ads", "Google Ads", "Strategy"],
    author: "ShreeFX Team",
    authorRole: "Performance Marketing",
    publishedAt: "2025-12-02",
    readingTime: "6 min read",
    content: [
      "Choosing between Meta Ads and Google Ads is one of the most common questions we hear from new clients, and the right answer depends on demand type.",
      "Google Ads captures existing, high-intent demand — people actively searching for a solution. Meta Ads creates demand by reaching people based on interests and behavior before they're actively searching.",
      "We walk through decision criteria based on average order value, sales cycle length, and available creative assets to help you choose (or combine) the right channel mix.",
    ],
  },
  {
    slug: "local-seo-checklist-for-service-businesses",
    title: "The Local SEO Checklist Every Service Business Needs",
    excerpt: "A step-by-step local SEO checklist to help service businesses rank higher and get found by nearby customers.",
    category: "SEO",
    tags: ["SEO", "Local SEO"],
    author: "ShreeFX Team",
    authorRole: "SEO Specialist",
    publishedAt: "2025-11-18",
    readingTime: "5 min read",
    content: [
      "Local SEO is often the highest-ROI channel for service businesses because it targets customers who are ready to buy, right now, nearby.",
      "This checklist covers Google Business Profile optimization, citation consistency, review generation, and on-page signals that influence local rankings.",
      "Follow these steps consistently over 90 days and most businesses see measurable improvement in local map pack visibility.",
    ],
  },
  {
    slug: "ai-chatbots-that-actually-convert",
    title: "AI Chatbots That Actually Convert: Design Principles We Use",
    excerpt: "The design principles behind AI chatbots that qualify leads instead of frustrating customers.",
    category: "AI Automation",
    tags: ["AI", "Automation", "Chatbots"],
    author: "ShreeFX Team",
    authorRole: "Automation Lead",
    publishedAt: "2025-10-27",
    readingTime: "6 min read",
    content: [
      "A poorly designed chatbot can do more harm than good. We share the principles behind chatbots that actually move leads through your funnel.",
      "Key ideas include fast escalation paths to humans, short qualifying question sequences, and clear expectation-setting about response times.",
      "We also cover how to train an AI chatbot on your existing content so answers stay accurate and on-brand.",
    ],
  },
  {
    slug: "nextjs-website-performance-checklist",
    title: "Our Next.js Website Performance Checklist (95+ Lighthouse Every Time)",
    excerpt: "The exact performance checklist our development team uses to consistently ship 95+ Lighthouse scores.",
    category: "Website Development",
    tags: ["Next.js", "Performance", "Web Development"],
    author: "ShreeFX Team",
    authorRole: "Frontend Engineering",
    publishedAt: "2025-09-30",
    readingTime: "8 min read",
    content: [
      "Performance is a feature, not an afterthought. Here's the exact checklist our engineering team runs before every website launch.",
      "It covers image optimization, font loading strategy, code splitting, and how we use Server Components to minimize JavaScript sent to the browser.",
      "Following this checklist consistently gets our client sites into the 95+ Lighthouse performance range, which also improves Core Web Vitals and SEO rankings.",
    ],
  },
  {
    slug: "branding-basics-for-startups",
    title: "Branding Basics: What Early-Stage Startups Should Get Right First",
    excerpt: "The essential branding decisions early-stage startups should nail before spending on paid ads.",
    category: "Branding",
    tags: ["Branding", "Startups"],
    author: "ShreeFX Team",
    authorRole: "Creative Director",
    publishedAt: "2025-09-05",
    readingTime: "5 min read",
    content: [
      "Founders often jump straight to paid ads before their brand identity is clear, which wastes budget on inconsistent creative.",
      "We break down the minimum viable brand system every startup should have: logo, color palette, typography, and a one-line positioning statement.",
      "Getting these fundamentals right first makes every future marketing dollar work harder.",
    ],
  },
];

export const blogCategories = [
  "Digital Marketing",
  "SEO",
  "Meta Ads",
  "Google Ads",
  "WhatsApp Business API",
  "AI Automation",
  "Website Development",
  "Branding",
  "Case Studies",
  "Company News",
] as const;

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
