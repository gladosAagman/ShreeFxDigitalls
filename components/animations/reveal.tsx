"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const smoothTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

const variantsMap: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: smoothTransition },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 16 },
    visible: { opacity: 1, x: 0, transition: smoothTransition },
  },
  slideRight: {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: smoothTransition },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: smoothTransition },
  },
};

export function Reveal({
  children,
  variant = "slideUp",
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  variant?: keyof typeof variantsMap;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variantsMap[variant]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "slideUp",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantsMap;
}) {
  return (
    <motion.div className={className} variants={variantsMap[variant]}>
      {children}
    </motion.div>
  );
}
