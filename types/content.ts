export type ServiceCategory =
  | "Digital Marketing"
  | "Business Automation"
  | "Creative Services"
  | "Web Solutions";

export type Service = {
  slug: string;
  category: ServiceCategory;
  icon: string;
  name: string;
  summary: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
};

export type PortfolioCategory =
  | "Website Development"
  | "Branding"
  | "Performance Marketing"
  | "WhatsApp Automation"
  | "SEO"
  | "Content Creation"
  | "Video Editing"
  | "AI Automation";

export type PortfolioProject = {
  slug: string;
  client: string;
  industry: string;
  image: string;
  categories: PortfolioCategory[];
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  technologies: string[];
  results: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  featured?: boolean;
};

export type BlogCategory =
  | "Digital Marketing"
  | "SEO"
  | "Meta Ads"
  | "Google Ads"
  | "WhatsApp Business API"
  | "AI Automation"
  | "Website Development"
  | "Branding"
  | "Case Studies"
  | "Company News";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string;
  readingTime: string;
  content: string[];
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
};

export type FaqCategory =
  | "General"
  | "Services"
  | "Pricing"
  | "Project Process"
  | "Technical Support"
  | "Billing"
  | "WhatsApp API"
  | "Marketing";

export type FaqItem = {
  question: string;
  answer: string;
  category: FaqCategory;
  popular?: boolean;
};
