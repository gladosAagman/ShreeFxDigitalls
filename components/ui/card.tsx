"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, onMouseMove, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const rectRef = React.useRef<DOMRect | null>(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      rectRef.current = e.currentTarget.getBoundingClientRect();
      onMouseEnter?.(e);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = rectRef.current || e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      onMouseMove?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      rectRef.current = null;
      onMouseLeave?.(e);
    };

    return (
      <div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "card-spotlight rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6 shadow-[var(--shadow-sm)] transition-all duration-300",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-semibold text-text", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-[15px] leading-relaxed text-text-muted", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export { Card, CardTitle, CardDescription };
