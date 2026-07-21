import Link from "next/link";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/content";

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const accent = getAccent(index);
  return (
    <TiltCard maxTilt={4} className="h-full">
      <SpotlightCard
        className={cn(
          "grid-glow-border group focus-ring flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]",
          accent.glow
        )}
      >
        <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
          <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand-orange)_16%,white),color-mix(in_oklab,var(--color-brand-purple)_16%,white))]">
            <div className="mesh-gradient-bg absolute inset-0 opacity-70" aria-hidden />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-brand-orange),var(--color-brand-purple))] text-white shadow-[var(--shadow-md)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <BookOpen className="h-6 w-6" />
            </span>
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-text shadow-sm">
              {post.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-semibold leading-snug text-text transition-colors group-hover:text-brand-orange">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-text-muted">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {post.readingTime}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 -translate-x-1 text-brand-orange opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </div>
        </Link>
      </SpotlightCard>
    </TiltCard>
  );
}
