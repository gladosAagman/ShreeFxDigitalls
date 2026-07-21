"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { SpecularGlow } from "@/components/effects/specular-glow";

const buttonVariants = cva(
  "cursor-target focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[16px] font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-orange text-white shadow-[var(--shadow-md)] hover:bg-brand-orange-dark hover:scale-[1.03] hover:shadow-[var(--shadow-glow-orange)]",
        secondary:
          "bg-surface text-brand-orange border border-brand-orange/40 hover:bg-brand-orange/5 hover:scale-[1.02]",
        ghost: "bg-transparent text-text hover:bg-neutral-100",
        glass:
          "glass-panel text-text hover:shadow-[var(--shadow-md)] hover:scale-[1.02]",
        gradient:
          "bg-[linear-gradient(90deg,var(--color-brand-orange),var(--color-brand-purple))] text-white shadow-[var(--shadow-md)] hover:scale-[1.03] hover:shadow-[var(--shadow-glow-purple)]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe57] hover:scale-[1.03] shadow-[var(--shadow-md)]",
        icon: "bg-surface border border-neutral-200 text-text hover:bg-neutral-100",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[17px]",
        icon: "h-11 w-11 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(node);
      else (ref as React.MutableRefObject<T | null>).current = node;
    });
  };
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const innerRef = React.useRef<HTMLButtonElement>(null);
    return (
      <span className={cn("specular-wrap", className)}>
        <SpecularGlow targetRef={innerRef} />
        <Comp
          className={cn(buttonVariants({ variant, size }), "relative z-[2] w-full")}
          ref={mergeRefs(ref, innerRef)}
          {...props}
        />
      </span>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
