"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { growthProcess } from "@/content/site-data";
import { Container, Section, SectionHeader } from "@/components/layout/container";

export function ProcessTimeline() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="How We Work"
          title="Our Business Growth Process"
          description="A proven five-step process that takes your business from where it is to where it wants to be."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
          className="relative mt-20"
        >
          {/* Connector line: fills left-to-right as each step reveals. */}
          <div className="absolute top-7 left-7 right-7 hidden h-[3px] -translate-y-1/2 rounded-full bg-neutral-200 md:block" aria-hidden />
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.4, ease: "easeInOut" } } }}
            style={{ transformOrigin: "left" }}
            className="absolute top-7 left-7 right-7 hidden h-[3px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,var(--color-brand-gold),var(--color-brand-purple),var(--color-brand-orange))] md:block"
            aria-hidden
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-4">
            {growthProcess.map((item, i) => (
              <motion.div
                key={item.step}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.85 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 18 },
                  },
                }}
                className="group relative flex flex-col items-start gap-3 md:items-center md:text-center"
              >
                <div className="relative">
                  <motion.span
                    variants={{
                      hidden: { scale: 0, rotate: -90 },
                      visible: {
                        scale: 1,
                        rotate: 0,
                        transition: { type: "spring", stiffness: 240, damping: 14, delay: 0.15 },
                      },
                    }}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-brand-orange),var(--color-brand-purple))] text-lg font-bold text-white shadow-[var(--shadow-md)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-glow-purple)]"
                  >
                    {item.step}
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: [0, 0.6, 0],
                        scale: [0.8, 1.6, 1.8],
                        transition: { duration: 1.1, delay: 0.2 + i * 0.05, ease: "easeOut" },
                      },
                    }}
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-brand-purple"
                    aria-hidden
                  />
                </div>

                {i < growthProcess.length - 1 ? (
                  <motion.span
                    variants={{ hidden: { opacity: 0, x: -6 }, visible: { opacity: 1, x: 0, transition: { delay: 0.5 } } }}
                    className="absolute top-7 -right-2 hidden -translate-y-1/2 text-neutral-300 md:block lg:right-[-14px]"
                    aria-hidden
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                ) : null}

                <h3 className="text-lg font-semibold text-text transition-colors duration-300 group-hover:text-brand-purple">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
