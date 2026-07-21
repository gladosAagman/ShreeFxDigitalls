"use client";

import { motion } from "framer-motion";

type MotionTagName = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

const container = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0 },
  }),
};

const word = {
  hidden: { opacity: 0, y: "0.6em", rotate: 2 },
  visible: {
    opacity: 1,
    y: "0em",
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 24, mass: 0.9 },
  },
};

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

export function TextReveal({
  text,
  as = "span",
  className,
  wordClassName,
  stagger = 0.045,
  once = true,
  delay = 0,
}: {
  text: string;
  as?: MotionTagName;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  once?: boolean;
  delay?: number;
}) {
  const words = text.split(" ");
  const MotionTag = motionTags[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      variants={container}
      custom={stagger}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span variants={word} className={wordClassName ?? "inline-block"}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}
