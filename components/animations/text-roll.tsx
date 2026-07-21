"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STAGGER = 0.03;
const NBSP = " ";

export function TextRoll({
  children,
  className,
  center = false,
}: {
  children: string;
  className?: string;
  center?: boolean;
}) {
  const letters = children.split("");

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      whileTap="hovered"
      className={cn("relative inline-block overflow-hidden align-bottom whitespace-nowrap", className)}
      style={{ lineHeight: 1 }}
    >
      {/* Real letters in normal flow — these define the box's true width/height. */}
      <span>
        {letters.map((l, i) => {
          const delay = center ? STAGGER * Math.abs(i - (letters.length - 1) / 2) : STAGGER * i;
          return (
            <motion.span
              key={`top-${i}`}
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              transition={{ ease: "easeInOut", duration: 0.4, delay }}
              className="inline-block"
            >
              {l === " " ? NBSP : l}
            </motion.span>
          );
        })}
      </span>
      {/* Incoming copy, overlaid and initially hidden below the box. */}
      <span className="absolute inset-0">
        {letters.map((l, i) => {
          const delay = center ? STAGGER * Math.abs(i - (letters.length - 1) / 2) : STAGGER * i;
          return (
            <motion.span
              key={`bottom-${i}`}
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              transition={{ ease: "easeInOut", duration: 0.4, delay }}
              className="inline-block"
            >
              {l === " " ? NBSP : l}
            </motion.span>
          );
        })}
      </span>
    </motion.span>
  );
}
