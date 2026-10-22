"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { RotatingText } from "@/components/sections/rotating-text";
import { Magnetic } from "@/components/animations/magnetic";
import { TiltCard } from "@/components/animations/tilt-card";
import { heroRotatingWords, trustIndicators } from "@/content/site-data";
import { whatsappLink } from "@/config/site";
import Lightfall from "@/components/effects/lightfall";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

const dashboardCardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
      delay: 0.6 + i * 0.15,
    },
  }),
};

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className={cn("pointer-events-none absolute inset-0", theme === "dark" ? "opacity-55" : "opacity-[0.16]")} aria-hidden>
        <Lightfall
          colors={["#F18029", "#F1A519", "#F2B048"]}
          backgroundColor="#7A3300"
          speed={0.6}
          streakCount={5}
          streakWidth={1}
          streakLength={1.2}
          glow={theme === "dark" ? 0.7 : 0.5}
          density={0.5}
          twinkle={1}
          zoom={4}
          backgroundGlow={0}
          opacity={0.8}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={0.8}
          mouseDampening={0.2}
        />
      </div>
      
      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200/20 bg-surface/50 px-3 py-1.5 text-sm font-medium text-brand-orange backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
            </span>
            India's AI-Powered Digital Growth Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-[72px] lg:leading-[1.1]"
          >
            <span className="block mb-2">Transform Your</span>
            <span className="block mb-2">Business Into a</span>
            <span className="text-gradient-brand block">Digital Powerhouse</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center gap-2 text-lg font-medium text-text-muted sm:text-xl"
          >
            <span>Powered by</span>
            <RotatingText words={heroRotatingWords} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 max-w-lg text-[17px] leading-relaxed text-text-muted"
          >
            We help businesses generate more leads, automate customer engagement, and build a
            premium online presence — combining creativity, performance marketing, and AI
            automation into one growth system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Magnetic>
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="secondary" size="lg" asChild>
                <a href={whatsappLink("Hi ShreeFX Digitals, I'd like to know more about your services.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Talk on WhatsApp</span>
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {trustIndicators.map((item) => (
              <span
                key={item}
                className="cursor-default rounded-full border border-neutral-200 bg-surface px-3.5 py-1.5 text-sm font-medium text-text transition-colors hover:border-brand-orange/40 hover:text-brand-orange"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[linear-gradient(135deg,var(--color-brand-orange),var(--color-brand-purple))] opacity-20 blur-3xl"
            aria-hidden
          />
          <TiltCard maxTilt={4}>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={dashboardCardVariants}
              className="glass-panel animate-float relative ml-auto w-[420px] rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-lg)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-text-muted">Campaign Performance</p>
                <span className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                  <TrendingUp className="h-3.5 w-3.5" /> +42%
                </span>
              </div>
              <div className="mt-5 flex items-end gap-2 h-[120px]">
                {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: "easeOut" }}
                    className="flex-1 rounded-t-md bg-[linear-gradient(180deg,var(--color-brand-orange),var(--color-brand-purple))]"
                  />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-neutral-200/20 pt-4">
                <div className="flex -space-x-2.5">
                  {["bg-brand-orange", "bg-brand-purple", "bg-brand-gold"].map((bg, i) => (
                    <span
                      key={i}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface text-[10px] font-bold text-white ${bg}`}
                    >
                      {["A", "R", "K"][i]}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-xs font-medium text-text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  Live tracking
                </span>
              </div>
            </motion.div>
          </TiltCard>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={dashboardCardVariants}
            className="glass-panel animate-float-slow absolute -left-6 top-16 w-64 rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-md)]"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-text-muted">Leads Generated</p>
                <p className="text-lg font-bold text-text">1,248</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={dashboardCardVariants}
            className="glass-panel animate-float absolute -bottom-8 right-4 w-60 rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-md)]"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Zap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-text-muted">WhatsApp Replies</p>
                <p className="text-lg font-bold text-text">Automated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
