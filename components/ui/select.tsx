import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "focus-ring flex h-12 w-full appearance-none rounded-[var(--radius-md)] border border-neutral-300 bg-surface px-4 pr-10 text-[15px] text-text transition-colors duration-200 focus-visible:border-brand-orange disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
    </div>
  )
);
Select.displayName = "Select";

export { Select };
