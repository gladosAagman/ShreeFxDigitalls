"use client";

import { useState, useRef } from "react";
import { MessageCircle, CheckCircle2, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/content/services";
import { whatsappLink } from "@/config/site";
import { useServiceModal } from "@/components/providers/service-modal-provider";

export function FeaturedService() {
  const service = getServiceBySlug("whatsapp-business-api");
  const { openService } = useServiceModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  if (!service) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <Section className="relative overflow-hidden py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-neutral-800 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black p-6 sm:p-10 lg:p-12 shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-[#25D366]/15 blur-3xl" />

            {/* Header / Intro */}
            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#25D366]">
                <MessageCircle className="h-4 w-4" /> Official Meta Verified Solution
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                WhatsApp Business API Dashboard
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                Automate customer replies, broadcast promotions to 10,000+ contacts, capture leads directly, and manage all chats from one centralized dashboard.
              </p>
            </div>

            {/* Big Prominent Video Showcase */}
            <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-neutral-800/80 bg-neutral-900/90 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 hidden font-mono text-xs text-neutral-400 sm:inline">
                    whatsapp-api-dashboard.shreefx.com • live portal walkthrough
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                  </span>
                  <span className="text-xs font-semibold text-[#25D366]">Live Dashboard Demo</span>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-[800/576] w-full bg-black">
                <video
                  ref={videoRef}
                  src="/Videos/WhatsappApiDashboard.mp4"
                  poster="/Videos/posters/WhatsappApiDashboard.jpg"
                  playsInline
                  loop
                  muted={isMuted}
                  preload="metadata"
                  className="h-full w-full object-contain cursor-pointer"
                  onClick={togglePlay}
                >
                  <source src="/Videos/WhatsappApiDashboard.mp4" type="video/mp4" />
                </video>

                {/* Big Center Play Button when paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba59]"
                    aria-label="Play Dashboard Walkthrough"
                  >
                    <Play className="ml-1 h-9 w-9 fill-white" />
                  </button>
                )}

                {/* Floating Bottom Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 text-white backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
                    </button>
                    <span className="text-xs font-medium text-neutral-300">
                      {isPlaying ? "Playing Dashboard Walkthrough" : "Click to Play Live Demo"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={handleFullscreen}
                      className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Pills Grid Below Video */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/85"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={whatsappLink("Hi ShreeFX Digitals, I saw the WhatsApp API Dashboard demo and want to set this up for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" /> Get WhatsApp API Dashboard Setup
                </a>
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => openService(service.slug)}
              >
                View Full Specifications <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
