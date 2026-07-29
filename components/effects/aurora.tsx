"use client";

import { cn } from "@/lib/utils";
import "./aurora.css";

interface AuroraProps {
  className?: string;
  children?: React.ReactNode;
}

export function Aurora({ className, children }: AuroraProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="aurora-bg">
        <div className="aurora-grid" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
