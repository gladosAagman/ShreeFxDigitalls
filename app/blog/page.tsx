import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FeaturedArticle } from "@/components/sections/featured-article";
import { BlogExplorer } from "@/components/sections/blog-explorer";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Educational content on digital marketing, SEO, WhatsApp automation, AI, website development, and business growth from the ShreeFX Digitals team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Insights"
        title="Insights That Help Businesses Grow"
        description="Educational content covering marketing, AI, web development, automation, branding, and business growth."
      />
      <FeaturedArticle />
      <BlogExplorer />
      <FinalCta title="Have a Project in Mind?" />
    </>
  );
}
