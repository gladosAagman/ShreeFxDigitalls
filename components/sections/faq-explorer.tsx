"use client";

import { useMemo, useState } from "react";
import { Search, MessageCircle } from "lucide-react";
import { faqs, faqCategories } from "@/content/faq";
import { Container, Section } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/config/site";
import Link from "next/link";

export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const categories = ["All", ...faqCategories];

  const filtered = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const matchesQuery =
        query.trim() === "" ||
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const popular = faqs.filter((f) => f.popular);

  return (
    <Section className="pt-0">
      <Container className="max-w-4xl">
        <div className="mx-auto max-w-lg">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input
              placeholder="Search questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-11"
              aria-label="Search FAQs"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                category === cat
                  ? "bg-brand-orange text-white shadow-[var(--shadow-sm)]"
                  : "border border-neutral-200 bg-surface text-text-muted hover:border-brand-orange/40 hover:text-brand-orange"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {category === "All" && query === "" && popular.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Popular Questions</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {popular.map((f) => (
                <span key={f.question} className="rounded-full bg-brand-orange/10 px-3.5 py-1.5 text-sm font-medium text-brand-orange-dark">
                  {f.question}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <Reveal className="mt-10">
          {filtered.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-3">
              {filtered.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-text-muted">No matching questions found.</p>
          )}
        </Reveal>

        <div className="card-liquid mt-16 rounded-[var(--radius-xl)] border border-neutral-200 bg-surface-muted p-8 text-center">
          <h3 className="text-lg font-semibold text-text">Still have questions?</h3>
          <p className="mt-2 text-[15px] text-text-muted">Our team is happy to help with anything not covered here.</p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="whatsapp" asChild>
              <a href={whatsappLink("Hi ShreeFX Digitals, I have a question.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
              </a>
            </Button>
            <Button asChild>
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
