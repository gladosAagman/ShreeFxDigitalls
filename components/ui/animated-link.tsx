import Link from "next/link";
import { cn } from "@/lib/utils";

export function AnimatedLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("cursor-target group relative inline-block w-fit text-text-muted transition-colors hover:text-brand-orange", className)}>
      {children}
      <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-brand-orange transition-transform duration-300 origin-left group-hover:scale-x-100" />
    </Link>
  );
}
