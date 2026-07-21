import { Target, Eye, Sparkles, ShieldCheck, Lightbulb, HeartHandshake, Trophy } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { companyTimeline } from "@/content/site-data";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";

export function CompanyStory() {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal variant="slideRight">
          <span className="mb-4 inline-flex items-center rounded-full bg-brand-orange/10 px-3.5 py-1.5 text-sm font-medium text-brand-orange-dark">
            Our Story
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Built to Help Businesses Grow Without the Guesswork
          </h2>
          <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-text-muted">
            <p>
              ShreeFX Digitals was founded to solve a simple but common problem: businesses were
              spending on marketing without a clear, measurable path to growth.
            </p>
            <p>
              We combine performance marketing, creative content, and AI-powered automation into
              a single growth system — so every rupee spent has a clear line to a business
              outcome.
            </p>
            <p>
              Today, we partner with startups, local businesses, and enterprises across India,
              building long-term relationships focused on sustained, compounding growth.
            </p>
          </div>
        </Reveal>
        <Reveal variant="slideLeft" className="relative">
          <div className="glass-panel animate-float-slow aspect-[4/3] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-lg)]">
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-brand-orange),var(--color-brand-purple))] text-2xl font-extrabold text-white">
                SF
              </span>
              <p className="text-lg font-semibold text-text">Digital Growth Partner</p>
              <p className="max-w-xs text-sm text-text-muted">
                Creativity + Technology + Automation, built for measurable outcomes.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function MissionVision() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <StaggerItem>
            <div className="card-liquid h-full rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-text">Our Mission</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
                Empower businesses with innovative digital solutions that deliver measurable
                growth and lasting value.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card-liquid h-full rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-text">Our Vision</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
                Become one of India&apos;s most trusted digital growth partners, known for
                innovation, transparency, and measurable results.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </Section>
  );
}

const coreValues = [
  { icon: Lightbulb, title: "Innovation", description: "We stay ahead of trends so your business benefits from modern technology." },
  { icon: ShieldCheck, title: "Transparency", description: "Clear reporting and honest communication, always." },
  { icon: Sparkles, title: "Creativity", description: "Original ideas that make your brand stand out." },
  { icon: Trophy, title: "Performance", description: "Every decision is measured against real business outcomes." },
  { icon: HeartHandshake, title: "Partnership", description: "We grow when you grow — long-term relationships over one-off projects." },
  { icon: Target, title: "Customer Success", description: "Your growth goals are the definition of our success." },
];

export function CoreValues() {
  return (
    <Section>
      <Container>
        <SectionHeader badge="Core Values" title="What Drives Us" />
        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => {
            const accent = getAccent(i);
            return (
              <StaggerItem key={value.title}>
                <div
                  className={cn(
                    "card-liquid group h-full rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]",
                    accent.glow
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110",
                      accent.badge,
                      accent.iconHover
                    )}
                  >
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-text">{value.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{value.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export function GrowthTimeline() {
  return (
    <Section className="bg-surface-muted">
      <Container className="max-w-3xl">
        <SectionHeader badge="Our Journey" title="Growth Timeline" />
        <div className="relative mt-14 space-y-8 border-l border-neutral-300 pl-8">
          {companyTimeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.08} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full bg-brand-orange ring-4 ring-brand-orange/15" />
              <p className="text-sm font-semibold text-brand-orange">{item.year}</p>
              <h3 className="mt-1 text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function TeamCulture() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="Team & Culture"
          title="A Team That Grows With You"
          description="Collaborative, curious, and customer-first — our team combines strategists, creatives, and engineers under one roof."
        />
        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Collaborative Mindset", description: "We work as an extension of your team, not a vendor." },
            { title: "Continuous Learning", description: "We stay current with platform changes and emerging tools." },
            { title: "Customer-First Culture", description: "Every decision is filtered through client impact." },
            { title: "Innovation-Driven", description: "We test new approaches before they become mainstream." },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-liquid h-full rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6">
                <h3 className="text-base font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export function ClientPromise() {
  const promises = ["Honest communication", "Reliable delivery", "Continuous optimization", "Long-term growth"];
  return (
    <Section>
      <Container className="max-w-3xl text-center">
        <SectionHeader badge="Our Promise" title="What You Can Always Expect From Us" />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {promises.map((p) => (
            <span key={p} className="rounded-full bg-brand-purple/10 px-4 py-2 text-sm font-medium text-brand-purple">
              {p}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
