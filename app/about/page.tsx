import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import {
  CompanyStory,
  MissionVision,
  CoreValues,
  GrowthTimeline,
  TeamCulture,
  ClientPromise,
} from "@/components/sections/about-sections";
import { FinalCta } from "@/components/sections/final-cta";
import CursorGrid from "@/components/effects/cursor-grid";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ShreeFX Digitals is a growth-focused digital partner specializing in marketing, automation, creative services, and web solutions. Learn our story, mission, and values.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <CursorGrid
          className="pointer-events-auto"
          cellSize={64}
          color="#F18029"
          radius={160}
          falloff="smooth"
          holdTime={400}
          fadeDuration={900}
          lineWidth={1.2}
          maxOpacity={0.5}
          fillOpacity={0.04}
          gridOpacity={0.03}
          cellRadius={6}
          clickPulse
          pulseSpeed={650}
        />
      </div>
      <PageHero
        badge="About ShreeFX Digitals"
        title="Helping Businesses Grow Through Technology & Marketing"
        titleClassName="text-5xl sm:text-6xl lg:text-[64px]"
        description="We're a growth-focused digital partner specializing in marketing, automation, creative services, and web solutions."
      />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <GrowthTimeline />
      <TeamCulture />
      <ClientPromise />
      <FinalCta title="Let's Build Your Next Growth Story" />
    </>
  );
}
