import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-text-muted",
        brand: "bg-brand-orange/10 text-brand-orange-dark",
        glass: "glass-panel text-text shadow-[var(--shadow-sm)]",
        outline: "border border-neutral-300 text-text-muted",
        success: "bg-success/10 text-success",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
