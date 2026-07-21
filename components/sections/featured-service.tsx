import Link from "next/link";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/content/services";
import { whatsappLink } from "@/config/site";

export function FeaturedService() {
  const service = getServiceBySlug("whatsapp-business-api");
  if (!service) return null;

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[var(--radius-xl)] bg-neutral-900 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white">
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> Featured Service
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">{service.name}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/70">{service.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={whatsappLink("Hi ShreeFX Digitals, I'd like to talk to an expert about WhatsApp Business API.")} target="_blank" rel="noopener noreferrer">
                    Talk to an Expert
                  </a>
                </Button>
                <Button variant="glass" size="lg" className="text-white" asChild>
                  <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 rounded-2xl bg-white/5 p-4 text-sm text-white/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
