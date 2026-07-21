import { stats } from "@/content/site-data";
import { Container, Section } from "@/components/layout/container";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Reveal } from "@/components/animations/reveal";

export function Stats() {
  return (
    <Section className="bg-[linear-gradient(135deg,var(--color-brand-orange),var(--color-brand-purple))]">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/85">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
