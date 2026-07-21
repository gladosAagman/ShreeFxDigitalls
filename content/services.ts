import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "whatsapp-business-api",
    category: "Business Automation",
    icon: "MessageCircle",
    name: "WhatsApp Business API",
    summary: "Official WhatsApp integration for broadcasts, automated replies, and lead capture.",
    description:
      "We set up and manage the official WhatsApp Business API so you can broadcast offers, automate customer replies, capture leads, and support customers at scale — all inside the app your customers already use every day.",
    benefits: [
      "Official, verified WhatsApp Business integration",
      "Automated broadcast messaging to segmented audiences",
      "Instant lead capture from ads and website forms",
      "24/7 automated customer support replies",
    ],
    deliverables: [
      "Verified WhatsApp Business API account setup",
      "Automated chatbot flows",
      "Broadcast campaign templates",
      "Analytics dashboard for conversations",
    ],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [
      {
        question: "How long does WhatsApp API setup take?",
        answer: "Verification and setup typically take 5-10 business days depending on Meta's approval timeline.",
      },
      {
        question: "Can we send broadcast messages to all customers?",
        answer: "Yes, within WhatsApp's messaging policies using approved templates and opted-in contacts.",
      },
    ],
    featured: true,
  },
  {
    slug: "meta-ads",
    category: "Digital Marketing",
    icon: "Megaphone",
    name: "Meta Ads",
    summary: "High-converting Facebook & Instagram campaigns built for measurable ROI.",
    description:
      "Our Meta Ads team builds full-funnel Facebook and Instagram campaigns — from audience research to creative testing to conversion tracking — engineered to deliver high-quality leads at a predictable cost.",
    benefits: ["High-quality leads", "Continuous campaign optimization", "Precise audience targeting", "Transparent ROI tracking"],
    deliverables: ["Campaign strategy", "Ad creatives & copy", "Audience & retargeting setup", "Weekly performance reports"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [
      { question: "What budget do I need to start?", answer: "We tailor strategy to your budget; most campaigns start seeing data within the first ₹15,000-₹25,000 in ad spend." },
      { question: "How is success measured?", answer: "Cost per lead, conversion rate, and return on ad spend, reported weekly." },
    ],
  },
  {
    slug: "google-ads",
    category: "Digital Marketing",
    icon: "Search",
    name: "Google Ads",
    summary: "Search, display, and shopping campaigns that capture high-intent demand.",
    description:
      "We run Google Search, Display, and Shopping campaigns designed to capture customers actively searching for your products or services, with continuous conversion tracking and bid optimization.",
    benefits: ["Search campaigns", "Display ads", "Shopping campaigns", "Conversion tracking"],
    deliverables: ["Keyword research", "Campaign structure", "Ad copy & extensions", "Conversion tracking setup"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [
      { question: "Do you manage the ad spend?", answer: "We manage campaign strategy and optimization; ad spend is billed directly by Google to your account for full transparency." },
    ],
  },
  {
    slug: "performance-marketing",
    category: "Digital Marketing",
    icon: "TrendingUp",
    name: "Performance Marketing",
    summary: "Full-funnel, data-driven campaigns optimized purely for measurable outcomes.",
    description:
      "We combine paid media, landing pages, and analytics into a single performance system focused on outcomes — leads, sales, and revenue — not vanity metrics.",
    benefits: ["Outcome-focused strategy", "Cross-channel optimization", "Real-time analytics", "Scalable growth loops"],
    deliverables: ["Funnel strategy", "Landing page optimization", "Multi-channel ad management", "Monthly ROI reports"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "Which channels are included?", answer: "Meta, Google, and other channels are combined based on where your customers are." }],
  },
  {
    slug: "social-media-marketing",
    category: "Digital Marketing",
    icon: "Share2",
    name: "Social Media Marketing",
    summary: "Consistent, on-brand social content and community growth strategy.",
    description:
      "From content calendars to community management, we help your brand build an engaged, authentic social presence that supports your growth goals.",
    benefits: ["Consistent posting cadence", "On-brand creative", "Community engagement", "Performance tracking"],
    deliverables: ["Monthly content calendar", "Post design & copy", "Community management", "Growth reports"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "How many posts per month?", answer: "Typically 12-20 posts depending on your plan and platform mix." }],
  },
  {
    slug: "ai-chatbots",
    category: "Business Automation",
    icon: "Bot",
    name: "AI Chatbots",
    summary: "AI-powered chatbots that qualify leads and answer questions instantly.",
    description:
      "We build AI chatbots for your website and WhatsApp that answer FAQs, qualify leads, and route conversations to your team automatically, reducing response time to seconds.",
    benefits: ["Instant response times", "24/7 lead qualification", "Reduced support workload", "Seamless handoff to humans"],
    deliverables: ["Chatbot flow design", "AI training on your content", "Integration with website/WhatsApp", "Monthly performance review"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "Can the chatbot handle complex questions?", answer: "It handles common questions instantly and escalates complex ones to your team." }],
  },
  {
    slug: "crm-integration",
    category: "Business Automation",
    icon: "Workflow",
    name: "CRM Integration",
    summary: "Connect every lead source into one automated CRM workflow.",
    description:
      "We integrate your website, ads, and WhatsApp with a CRM so every lead is captured, tagged, and followed up automatically — nothing falls through the cracks.",
    benefits: ["Centralized lead management", "Automated follow-ups", "Sales pipeline visibility", "Reporting dashboards"],
    deliverables: ["CRM setup & configuration", "Lead source integrations", "Automation workflows", "Team training"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "Which CRMs do you support?", answer: "We work with most modern CRMs and can recommend the best fit for your team size and budget." }],
  },
  {
    slug: "lead-automation",
    category: "Business Automation",
    icon: "Zap",
    name: "Lead Automation",
    summary: "Automated nurture sequences that convert leads while you sleep.",
    description:
      "We design automated email, WhatsApp, and SMS nurture sequences that follow up with leads at the right time with the right message, improving conversion without manual work.",
    benefits: ["Faster lead response", "Consistent follow-up", "Higher conversion rates", "Less manual work for your team"],
    deliverables: ["Nurture sequence design", "Automation setup", "A/B tested messaging", "Conversion tracking"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "How fast can leads be contacted?", answer: "Automated sequences can respond within seconds of a lead submission." }],
  },
  {
    slug: "branding",
    category: "Creative Services",
    icon: "Palette",
    name: "Branding",
    summary: "Distinct visual identity systems that make your business memorable.",
    description:
      "We craft complete brand identities — logo, color system, typography, and guidelines — that give your business a premium, consistent presence everywhere it shows up.",
    benefits: ["Memorable visual identity", "Consistent brand guidelines", "Premium market positioning", "Ready-to-use brand assets"],
    deliverables: ["Logo design", "Brand color & typography system", "Brand guidelines document", "Social & print templates"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "How many logo concepts do we get?", answer: "Typically 2-3 concepts with two rounds of revisions on your chosen direction." }],
  },
  {
    slug: "graphic-design",
    category: "Creative Services",
    icon: "Brush",
    name: "Graphic Design",
    summary: "On-brand creative for social, ads, and print, delivered on schedule.",
    description:
      "Our design team produces on-brand creatives for social media, ad campaigns, and print collateral so every touchpoint looks premium and consistent.",
    benefits: ["Consistent visual quality", "Fast turnaround", "Platform-optimized formats", "Unlimited revisions within scope"],
    deliverables: ["Social media creatives", "Ad creative sets", "Print & presentation design", "Source files"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "What's the typical turnaround?", answer: "2-4 business days depending on complexity and volume." }],
  },
  {
    slug: "video-editing",
    category: "Creative Services",
    icon: "Video",
    name: "Video Editing",
    summary: "Scroll-stopping short-form and long-form video content.",
    description:
      "From Reels and Shorts to long-form brand films, our editors turn raw footage into scroll-stopping video content optimized for each platform.",
    benefits: ["Platform-optimized edits", "Motion graphics & captions", "Fast turnaround", "Consistent brand style"],
    deliverables: ["Short-form video edits", "Long-form video editing", "Motion graphics", "Captions & subtitles"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "Do you shoot video too?", answer: "We primarily edit; we can recommend trusted production partners for shoots." }],
  },
  {
    slug: "website-development",
    category: "Web Solutions",
    icon: "Code2",
    name: "Website Development",
    summary: "Fast, modern, conversion-focused websites built on Next.js.",
    description:
      "We design and build fast, modern, SEO-friendly websites and landing pages using Next.js — engineered for performance, accessibility, and conversion from day one.",
    benefits: ["Lightning-fast performance", "SEO-friendly architecture", "Mobile-first responsive design", "Easy to maintain and scale"],
    deliverables: ["UI/UX design", "Next.js development", "SEO setup", "Performance optimization"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "How long does a website take to build?", answer: "Most business websites launch in 3-5 weeks depending on scope." }],
  },
  {
    slug: "landing-pages",
    category: "Web Solutions",
    icon: "LayoutTemplate",
    name: "Landing Pages",
    summary: "High-converting campaign landing pages built for speed.",
    description:
      "We build dedicated, fast-loading landing pages for your ad campaigns, optimized for conversion with clear messaging and strong calls to action.",
    benefits: ["Higher conversion rates", "Fast load times", "A/B test ready", "Mobile-optimized"],
    deliverables: ["Landing page design", "Copywriting", "Development & deployment", "Conversion tracking setup"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "Can you build multiple variants for testing?", answer: "Yes, we can build A/B test variants for key campaign pages." }],
  },
  {
    slug: "seo",
    category: "Web Solutions",
    icon: "LineChart",
    name: "SEO",
    summary: "Technical, on-page, and local SEO that compounds over time.",
    description:
      "Our SEO service covers technical audits, on-page optimization, content strategy, and local SEO to help your business rank and stay ranked in search results.",
    benefits: ["Higher organic rankings", "Increased qualified traffic", "Local search visibility", "Long-term compounding growth"],
    deliverables: ["Technical SEO audit", "On-page optimization", "Local SEO setup", "Monthly ranking reports"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "How long until we see SEO results?", answer: "Meaningful movement typically starts within 8-12 weeks, compounding after that." }],
  },
  {
    slug: "erp-management",
    category: "Business Automation",
    icon: "Database",
    name: "ERP Management",
    summary: "Unified ERP systems that connect inventory, sales, and finance.",
    description:
      "We implement and manage ERP systems that bring inventory, sales, finance, and operations into one connected platform — replacing spreadsheets and disconnected tools with a single source of truth.",
    benefits: ["Unified business data", "Automated inventory & order tracking", "Real-time financial visibility", "Reduced manual data entry"],
    deliverables: ["ERP setup & configuration", "Data migration", "Workflow automation", "Team training & support"],
    process: ["Discovery", "Strategy", "Execution", "Optimization", "Reporting"],
    faqs: [{ question: "Can you migrate our existing data?", answer: "Yes, we handle full data migration from spreadsheets or legacy systems with minimal downtime." }],
  },
];

export const serviceCategories = [
  "Digital Marketing",
  "Business Automation",
  "Creative Services",
  "Web Solutions",
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
