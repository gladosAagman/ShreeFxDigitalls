import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function FeaturedArticle() {
  const post = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  if (!post) return null;
  return (
    <Section className="pt-0">
      <Container>
        <Reveal>
          <Link
            href={`/blog/${post.slug}`}
            className="card-liquid group grid grid-cols-1 overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 bg-surface lg:grid-cols-2"
          >
            <div className="relative min-h-[280px] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-text shadow-sm">
                {post.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-orange">Featured Article</span>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-text transition-colors group-hover:text-brand-orange sm:text-3xl">
                {post.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{post.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" /> {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {post.readingTime}
                </span>
              </div>
              <Button className="mt-6 w-fit" variant="secondary">
                Read More <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}