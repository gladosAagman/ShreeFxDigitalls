import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { services, getServiceBySlug } from "@/content/services";
import { Container, Section } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FinalCta } from "@/components/sections/final-cta";
import { Icon } from "@/lib/icon-map";
import { siteConfig, whatsappLink } from "@/config/site";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd name={service.name} description={service.description} url={`${siteConfig.url}/services/${service.slug}`} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
        ]}
      />
      <PageHero badge={service.category} title={service.name} description={service.summary} />

      <Section className="pt-0">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                <Icon name={service.icon} className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-text">Overview</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-text-muted">{service.description}</p>

              <h2 className="mt-10 text-2xl font-bold text-text">Key Benefits</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="card-liquid flex items-start gap-2 rounded-2xl border border-neutral-200 bg-surface p-4 text-[15px] text-text">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-2xl font-bold text-text">Deliverables</h2>
              <ul className="mt-4 space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px] text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-2xl font-bold text-text">Our Process</h2>
              <ol className="mt-4 flex flex-wrap gap-3">
                {service.process.map((step, i) => (
                  <li key={step} className="flex items-center gap-2 rounded-full border border-neutral-200 bg-surface px-4 py-2 text-sm font-medium text-text-muted">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              {service.faqs.length > 0 ? (
                <>
                  <h2 className="mt-10 text-2xl font-bold text-text">FAQs</h2>
                  <Accordion type="single" collapsible className="mt-4 space-y-3">
                    {service.faqs.map((faq) => (
                      <AccordionItem key={faq.question} value={faq.question}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              ) : null}
            </Reveal>
          </div>

          <div>
            <Reveal variant="slideLeft">
              <div className="glass-panel sticky top-28 rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-md)]">
                <h3 className="text-lg font-semibold text-text">Interested in {service.name}?</h3>
                <p className="mt-2 text-[15px] text-text-muted">
                  Book a free consultation and we&apos;ll map out a strategy tailored to your business.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button asChild>
                    <Link href="/contact">
                      Book Free Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="whatsapp" asChild>
                    <a href={whatsappLink(`Hi ShreeFX Digitals, I'd like to know more about ${service.name}.`)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
