"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import "./liquid-glass.css";

export interface LiquidGlassOptions {
  radius?: number;
  scale?: number;
  chroma?: number;
  blur?: number;
}

export interface LiquidGlassProps extends LiquidGlassOptions {
  children?: React.ReactNode;
  className?: string;
  enabled?: boolean;
}

export function liquidGlass(el: HTMLElement, opts: LiquidGlassOptions = {}) {
  const { blur = 14 } = opts;

  el.classList.add("lg-fallback");
  const filterVal = `blur(${blur}px) saturate(1.5)`;
  el.style.backdropFilter = filterVal;
  (el.style as unknown as { webkitBackdropFilter: string }).webkitBackdropFilter = filterVal;

  return {
    destroy() {
      el.classList.remove("lg-fallback");
      el.style.backdropFilter = "";
      (el.style as unknown as { webkitBackdropFilter: string }).webkitBackdropFilter = "";
    },
  };
}

export function LiquidGlass({ children, className, radius = 24, scale = 40, chroma = 4, blur = 14, enabled = true }: LiquidGlassProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const instance = liquidGlass(ref.current, { radius, scale, chroma, blur });
    return () => instance.destroy();
  }, [enabled, radius, scale, chroma, blur]);

  return (
    <div ref={ref} className={cn(enabled && "liquid-glass", className)}>
      {children}
    </div>
  );
}
