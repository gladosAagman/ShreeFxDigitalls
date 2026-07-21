import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "focus-ring flex h-12 w-full rounded-[var(--radius-md)] border border-neutral-300 bg-surface px-4 text-[15px] text-text placeholder:text-neutral-500 transition-colors duration-200 focus-visible:border-brand-orange disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-error",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "focus-ring flex min-h-32 w-full rounded-[var(--radius-md)] border border-neutral-300 bg-surface px-4 py-3 text-[15px] text-text placeholder:text-neutral-500 transition-colors duration-200 focus-visible:border-brand-orange disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-error",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("mb-1.5 block text-sm font-medium text-text", className)} {...props} />
  )
);
Label.displayName = "Label";

export { Input, Textarea, Label };
