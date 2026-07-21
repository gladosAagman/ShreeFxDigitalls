import { faqs } from "@/content/faq";
import { Container, Section, SectionHeader } from "@/components/layout/container";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Reveal } from "@/components/animations/reveal";

export function FaqSection({ limit = 6 }: { limit?: number }) {
  const items = faqs.slice(0, limit);
  return (
    <Section>
      <Container className="max-w-3xl">
        <SectionHeader badge="FAQ" title="Frequently Asked Questions" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}
