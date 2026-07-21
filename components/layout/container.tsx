import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/animations/text-reveal";
import { Reveal } from "@/components/animations/reveal";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-20 lg:py-24", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "max-w-xl text-left mx-0",
        className
      )}
    >
      {badge ? (
        <Reveal variant="scaleIn">
          <span className="mb-4 inline-flex items-center rounded-full bg-brand-orange/10 px-3.5 py-1.5 text-sm font-medium text-brand-orange-dark">
            {badge}
          </span>
        </Reveal>
      ) : null}
      <TextReveal
        as="h2"
        text={title}
        className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-[40px]"
      />
      {description ? (
        <Reveal delay={0.15}>
          <p className="mt-4 text-[17px] leading-relaxed text-text-muted">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
