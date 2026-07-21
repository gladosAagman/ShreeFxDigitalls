"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const springTransition = { type: "spring" as const, stiffness: 280, damping: 24, mass: 0.8 };

const variantsMap: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: springTransition },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0, transition: springTransition },
  },
  slideRight: {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0, transition: springTransition },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: springTransition },
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
