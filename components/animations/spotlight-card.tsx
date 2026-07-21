"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn("card-liquid cursor-target", className)}
      style={{
        backgroundImage: active
          ? `radial-gradient(90px circle at ${pos.x}% ${pos.y}%, color-mix(in oklab, var(--color-brand-orange) 20%, transparent), transparent 70%)`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
