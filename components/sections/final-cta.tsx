import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Magnetic } from "@/components/animations/magnetic";
import { TextRoll } from "@/components/animations/text-roll";
import { whatsappLink } from "@/config/site";

export function FinalCta({
  title = "Ready to Grow Your Business?",
  description = "Book a free consultation and let's build your growth strategy together.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section>
      <Container>
        <Reveal variant="scaleIn">
          <div className="group relative overflow-hidden rounded-[var(--radius-xl)] bg-[linear-gradient(135deg,var(--color-brand-orange),var(--color-brand-purple))] px-6 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(40% 60% at 20% 20%, white 0%, transparent 60%), radial-gradient(30% 50% at 80% 80%, white 0%, transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <TextReveal as="h2" text={title} className="text-3xl font-bold text-white sm:text-4xl" />
              <Reveal delay={0.15}>
                <p className="mx-auto mt-4 max-w-xl text-[17px] text-white/85">{description}</p>
              </Reveal>
              <Reveal delay={0.25} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Magnetic>
                  <Button size="lg" className="bg-surface text-brand-orange-dark hover:bg-white/90 hover:scale-[1.03]" asChild>
                    <Link href="/contact">
                      <TextRoll>Book Free Consultation</TextRoll>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" variant="glass" className="text-white" asChild>
                    <a href={whatsappLink("Hi ShreeFX Digitals, I'd like to know more about your services.")} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      <TextRoll>Talk on WhatsApp</TextRoll>
                    </a>
                  </Button>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
