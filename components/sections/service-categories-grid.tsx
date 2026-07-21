"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, serviceCategories } from "@/content/services";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { Icon } from "@/lib/icon-map";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import ScrollStack, { ScrollStackItem } from "@/components/effects/scroll-stack";

export function ServiceCategoriesGrid() {
  const [active, setActive] = useState<string>("All");
  const categories = ["All", ...serviceCategories];
  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <Section>
      <Container>
        <SectionHeader
          badge="Our Services"
          title="Every Solution Your Business Needs to Grow"
          description="Filter by category to explore the full range of marketing, automation, creative, and web solutions."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                active === cat
                  ? "bg-brand-orange text-white shadow-[var(--shadow-sm)]"
                  : "border border-neutral-200 bg-surface text-text-muted hover:border-brand-orange/40 hover:text-brand-orange"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <ScrollStack key={active} useWindowScroll className="mx-auto max-w-4xl">

            {filtered.map((service, i) => {
              const accent = getAccent(i);
              return (
                <ScrollStackItem
                  key={service.slug}
                  itemClassName={cn(
                    "card-liquid overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 bg-surface shadow-[var(--shadow-lg)]",
                    accent.glow
                  )}
                >
                  <Link href={`/services/${service.slug}`} className="focus-ring group flex h-full flex-col p-8 sm:p-10">
                    <span
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110",
                        accent.badge,
                        accent.iconHover
                      )}
                    >
                      <Icon name={service.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold text-text transition-colors group-hover:text-brand-orange">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-text-muted">{service.summary}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-text-muted sm:grid-cols-2">
                      {service.benefits.slice(0, 4).map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-orange" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </Container>
    </Section>
  );
}
