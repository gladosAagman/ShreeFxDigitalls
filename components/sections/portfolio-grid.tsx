"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioProjects, portfolioCategories } from "@/content/portfolio";
import { Container, Section } from "@/components/layout/container";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [active, setActive] = useState<string>("All");
  const categories = ["All", ...portfolioCategories];
  const filtered =
    active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.categories.includes(active as never));

  return (
    <Section className="pt-0">
      <Container>
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                active === cat
                  ? "bg-brand-orange text-white shadow-[var(--shadow-sm)]"
                  : "border border-neutral-200 bg-surface text-text-muted hover:border-brand-orange/40 hover:text-brand-orange"
              )}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-orange"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
              >
                <PortfolioCard project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
