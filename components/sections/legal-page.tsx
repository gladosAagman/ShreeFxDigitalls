import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { siteConfig } from "@/config/site";

export function LegalPage({
  title,
  updatedAt,
  sections,
}: {
  title: string;
  updatedAt: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <Section className="pt-36 md:pt-44">
      <Container className="max-w-3xl">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-text-muted">Last updated: {updatedAt}</p>
          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-text">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-text-muted">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h2 className="text-xl font-semibold text-text">Contact Us</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
                Questions about this policy? Reach us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-orange">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
