import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import {
  CompanyStory,
  MissionVision,
  CoreValues,
  GrowthTimeline,
  TeamCulture,
  ClientPromise,
} from "@/components/sections/about-sections";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ShreeFX Digitals is a growth-focused digital partner specializing in marketing, automation, creative services, and web solutions. Learn our story, mission, and values.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
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
