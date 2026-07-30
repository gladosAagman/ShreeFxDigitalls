import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types/content";

export function PortfolioCard({ project, index = 0 }: { project: PortfolioProject; index?: number }) {
  const accent = getAccent(index);

  return (
    <TiltCard maxTilt={6} className="h-full">
      <Link
        href={`/portfolio/${project.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]",
          accent.glow
        )}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.client}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Industry badge */}
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg backdrop-blur-md">
            {project.industry}
          </span>

          {/* Arrow icon */}
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>

          {/* Results metrics — revealed on hover from bottom */}
          {project.results && (
            <div className="absolute bottom-0 left-0 right-0 flex translate-y-2 items-center justify-around gap-2 px-4 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {project.results.slice(0, 3).map((r) => (
                <div key={r.label} className="flex flex-col items-center rounded-xl bg-black/60 px-3 py-2 backdrop-blur-sm">
                  <span className="text-base font-extrabold text-orange-400">{r.value}</span>
                  <span className="text-[10px] font-medium text-white/70 text-center leading-tight">{r.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-text transition-colors group-hover:text-brand-orange">
            {project.client}
          </h3>
          <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-muted">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.categories.slice(0, 2).map((c) => (
              <span
                key={c}
                className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-text-muted transition-colors group-hover:bg-brand-orange/10 group-hover:text-brand-orange-dark"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
