import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight, Sparkles, Globe } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredPlans } from "@/content/pricing";
import { whatsappLink } from "@/config/site";

export function FeaturedPlansSection() {
  return (
    <Section className="relative overflow-hidden bg-surface-muted/50 py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orange">
              <Sparkles className="h-3.5 w-3.5" /> Featured Packages
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Transparent, Outcome-Focused Plans
            </h2>
            <p className="mt-4 text-base text-text-muted sm:text-lg">
              Pre-built growth packages engineered for high ROI, automation, and digital credibility.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredPlans.map((plan, index) => {
            const isGreen = plan.accentColor === "green";
            return (
              <Reveal key={plan.id} delay={index * 0.1}>
                <Card
                  className={`relative flex h-full flex-col justify-between border-2 p-8 sm:p-10 transition-all duration-300 hover:shadow-xl ${
                    isGreen
                      ? "border-[#25D366]/40 hover:border-[#25D366]"
                      : "border-brand-orange/40 hover:border-brand-orange"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 right-8 rounded-full bg-[#25D366] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <Badge variant="outline" className="font-semibold">
                        {plan.badge}
                      </Badge>
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                          isGreen ? "bg-[#25D366]/10 text-[#25D366]" : "bg-brand-orange/10 text-brand-orange"
                        }`}
                      >
                        {isGreen ? <MessageCircle className="h-6 w-6" /> : <Globe className="h-6 w-6" />}
                      </div>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-text sm:text-3xl">{plan.title}</h3>
                    <p
                      className={`mt-1 text-sm font-semibold tracking-wide uppercase ${
                        isGreen ? "text-[#25D366]" : "text-brand-orange"
                      }`}
                    >
                      {plan.subtitle}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-text sm:text-5xl">{plan.price}</span>
                      {plan.period && (
                        <span className="text-sm font-medium text-text-muted">/ {plan.period}</span>
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-text-muted">{plan.description}</p>

                    <div className="my-6 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted">What You Get</p>
                    <ul className="mt-4 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-text">
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              isGreen ? "text-[#25D366]" : "text-brand-orange"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Button
                      variant={isGreen ? "whatsapp" : "primary"}
                      size="lg"
                      className="w-full text-base font-bold shadow-md"
                      asChild
                    >
                      <a href={whatsappLink(plan.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" /> {plan.ctaText}
                      </a>
                    </Button>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

