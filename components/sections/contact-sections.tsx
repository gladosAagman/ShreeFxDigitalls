import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations/reveal";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { siteConfig, whatsappLink, mailtoLink } from "@/config/site";

const contactMethods = [
  { icon: Phone, label: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: mailtoLink() },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat Instantly", href: whatsappLink("Hi ShreeFX Digitals, I'd like to get in touch.") },
  { icon: MapPin, label: "Office", value: siteConfig.address, href: siteConfig.googleMapsUrl },
];

export function ContactMethods() {
  return (
    <Section className="pt-0">
      <Container>
        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method) => {
            const content = (
              <div className="card-liquid h-full rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <method.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-medium text-text-muted">{method.label}</p>
                <p className="mt-1 text-[15px] font-semibold text-text">{method.value}</p>
              </div>
            );
            return (
              <StaggerItem key={method.label}>
                {method.href ? (
                  <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="focus-ring block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export function ConsultationFormSection() {
  return (
    <Section className="bg-surface-muted pt-0">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Reveal>
            <ConsultationForm />
          </Reveal>
        </div>
        <div className="space-y-6">
          <Reveal variant="slideLeft">
            <div className="card-liquid rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-text-muted">
                <Clock className="h-4 w-4" /> Business Hours
              </h3>
              <p className="mt-3 text-[15px] text-text">{siteConfig.businessHours}</p>
              <p className="mt-1 text-sm text-text-muted">We typically respond within a few hours.</p>
            </div>
          </Reveal>
          <Reveal variant="slideLeft" delay={0.1}>
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 dark:border-neutral-800 bg-surface shadow-sm">
              <iframe
                title="ShreeFX Digitals location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="border-t border-neutral-200 dark:border-neutral-800 bg-surface p-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-text-muted truncate mr-2">
                  <MapPin className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                  <span className="truncate">{siteConfig.address}</span>
                </div>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-md bg-brand-orange/10 px-2.5 py-1 text-xs font-semibold text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
