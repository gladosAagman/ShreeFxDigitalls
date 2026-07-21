import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/lib/icon-map";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { Service } from "@/types/content";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const accent = getAccent(index);
  return (
    <SpotlightCard
      className={cn(
        "grid-glow-border group h-full rounded-[var(--radius-xl)] border border-neutral-200 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]",
        accent.glow
      )}
    >
      <Link href={`/services/${service.slug}`} className="focus-ring flex h-full flex-col p-6">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110",
            accent.badge,
            accent.iconHover
          )}
        >
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-text transition-colors group-hover:text-brand-orange">{service.name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{service.summary}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-text-muted">
          {service.benefits.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-orange" />
              {b}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </Link>
    </SpotlightCard>
  );
}
