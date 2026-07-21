import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center pt-36">
      <Container className="max-w-lg text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
          <Compass className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text">404</h1>
        <p className="mt-3 text-lg font-semibold text-text">Page Not Found</p>
        <p className="mt-2 text-[15px] text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button className="mt-8" asChild>
          <Link href="/">
            Back to Homepage <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </Container>
    </Section>
  );
}
