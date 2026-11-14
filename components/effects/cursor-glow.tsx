"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(hover: none), (pointer: coarse), (max-width: 1024px)").matches) {
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let pendingX = 0;
    let pendingY = 0;

    const apply = () => {
      raf = 0;
      el.style.transform = `translate3d(${pendingX}px, ${pendingY}px, 0)`;
    };

    const onMove = (e: PointerEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      el.classList.add("is-active");
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => el.classList.remove("is-active");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden />;
}
