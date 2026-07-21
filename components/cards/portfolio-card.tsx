import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types/content";

export function PortfolioCard({ project, index = 0 }: { project: PortfolioProject; index?: number }) {
  const accent = getAccent(index);

  return (
    <TiltCard maxTilt={5} className="h-full">
      <SpotlightCard
        className={cn(
          "grid-glow-border group focus-ring relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]",
          accent.glow
        )}
      >
        <Link href={`/portfolio/${project.slug}`} className="flex h-full flex-col">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={project.client}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-text shadow-sm">
              {project.industry}
            </span>
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-text opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-semibold text-text transition-colors group-hover:text-brand-orange">
              {project.client}
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-text-muted">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.categories.slice(0, 2).map((c) => (
                <span key={c} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-text-muted transition-colors group-hover:bg-brand-orange/10 group-hover:text-brand-orange-dark">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </SpotlightCard>
    </TiltCard>
  );
}
