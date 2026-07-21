"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/content/blog";
import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { BlogCard } from "@/components/cards/blog-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const categories = ["All", ...blogCategories];

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <Section className="pt-0">
      <Container>
        <div className="mx-auto max-w-lg">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-11"
              aria-label="Search articles"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                category === cat
                  ? "bg-brand-orange text-white shadow-[var(--shadow-sm)]"
                  : "border border-neutral-200 bg-surface text-text-muted hover:border-brand-orange/40 hover:text-brand-orange"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <StaggerContainer key={category + query} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <p className="mt-16 text-center text-text-muted">No articles found. Try a different search or category.</p>
        )}
      </Container>
    </Section>
  );
}
