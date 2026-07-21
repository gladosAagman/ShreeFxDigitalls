import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/cards/blog-card";
import { FinalCta } from "@/components/sections/final-cta";
import { siteConfig } from "@/config/site";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.publishedAt },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`${siteConfig.url}/blog/${post.slug}`}
        datePublished={post.publishedAt}
        author={post.author}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ]}
      />
      <Section className="pt-36 md:pt-44">
        <Container className="max-w-3xl">
          <Reveal>
            <Badge variant="brand">{post.category}</Badge>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}, {post.authorRole}
              </span>
              <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingTime}
              </span>
            </div>

            <div className="mt-8 aspect-[16/7] rounded-[var(--radius-xl)] bg-[linear-gradient(135deg,var(--color-brand-orange),var(--color-brand-purple))]" />

            <div className="prose-content mt-10 space-y-5 text-[17px] leading-relaxed text-text-muted">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-text-muted">
                  #{tag}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section className="bg-surface-muted pt-0">
          <Container>
            <h2 className="text-2xl font-bold text-text">Related Articles</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
            <Link href="/blog" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
              View all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Container>
        </Section>
      ) : null}

      <FinalCta title="Ready to Put This Into Action?" />
    </>
  );
}
