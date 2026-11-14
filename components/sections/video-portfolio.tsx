"use client";

import { useState } from "react";
import { Play, Pause, Maximize2, Sparkles, Film, ExternalLink, X } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { videoPortfolio, videoCategories, type VideoShowcaseItem, type VideoCategory } from "@/content/videos";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function VideoPortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
  const [selectedVideo, setSelectedVideo] = useState<VideoShowcaseItem | null>(null);
  // Default to first video autoplaying automatically
  const [playingId, setPlayingId] = useState<string | null>("yt-1");

  const filteredVideos =
    activeCategory === "All"
      ? videoPortfolio
      : videoPortfolio.filter((item) => item.category === activeCategory);

  return (
    <Section className="relative overflow-hidden bg-surface py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-purple">
            <Film className="h-3.5 w-3.5" /> Video Production & Reels
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            High-Impact Video Portfolio
          </h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">
            Reels, ads, brand commercials, and high-retention video edits created for digital platforms.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {videoCategories.map((cat) => {
            const count =
              cat === "All"
                ? videoPortfolio.length
                : videoPortfolio.filter((item) => item.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                }}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                  activeCategory === cat
                    ? "bg-brand-purple text-white shadow-md scale-105"
                    : "border border-neutral-200 dark:border-neutral-800 bg-surface text-text-muted hover:border-brand-purple/40 hover:text-brand-purple"
                )}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Video Grid: 3-column layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              isPlaying={playingId === item.id}
              onPlayToggle={() => {
                setPlayingId((curr) => (curr === item.id ? null : item.id));
              }}
              onExpand={() => setSelectedVideo(item)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="whatsapp" size="lg" asChild>
            <a
              href={whatsappLink("Hi ShreeFX Digitals, I saw your video portfolio and want video production / reels for my brand.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Custom Video Production
            </a>
          </Button>
        </div>

        {/* Modal Player */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-2xl bg-neutral-950 p-2 shadow-2xl border border-neutral-800",
                selectedVideo.aspectRatio === "portrait" ? "max-w-md" : "max-w-4xl"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-neutral-800 p-3 text-white">
                <div className="min-w-0 pr-4">
                  <h3 className="text-base font-bold truncate">{selectedVideo.title}</h3>
                  <p className="text-xs text-neutral-400">{selectedVideo.category} · {selectedVideo.duration}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-neutral-200 hover:bg-white/20"
                    title="Watch on YouTube"
                  >
                    YouTube <ExternalLink className="h-3 w-3" />
                  </a>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="rounded-full bg-white/10 p-1.5 text-sm font-semibold hover:bg-white/20 text-neutral-200"
                    aria-label="Close modal"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div
                className={cn(
                  "relative w-full overflow-hidden bg-black",
                  selectedVideo.aspectRatio === "portrait" ? "aspect-[9/16] max-h-[75vh]" : "aspect-[16/9] max-h-[75vh]"
                )}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&mute=0&rel=0&playsinline=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

function VideoCard({
  item,
  isPlaying,
  onPlayToggle,
  onExpand,
}: {
  item: VideoShowcaseItem;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onExpand: () => void;
}) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${item.youtubeId}&playsinline=1&controls=1&rel=0&modestbranding=1`;

  // Landscape / Widescreen Featured Showcase Layout
  if (item.aspectRatio === "landscape") {
    return (
      <div className="group relative sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 dark:border-neutral-800 bg-surface shadow-sm transition-all duration-300 hover:shadow-xl">
        {/* 16:9 Video Box */}
        <div className="relative w-full md:w-3/5 overflow-hidden bg-black aspect-[16/9]">
          {isPlaying ? (
            <iframe
              src={embedUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          ) : (
            <>
              {/* YouTube Poster Image */}
              <img
                src={item.poster}
                alt={item.title}
                className="h-full w-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                onClick={onPlayToggle}
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

              {/* Badges */}
              <div className="absolute left-3 top-3 flex items-center gap-2">
                <Badge variant="outline" className="border-white/30 bg-black/60 text-xs font-semibold text-white backdrop-blur-sm">
                  {item.category}
                </Badge>
                <Badge variant="outline" className="border-brand-orange/40 bg-brand-orange/20 text-xs font-semibold text-brand-orange backdrop-blur-sm">
                  Cinematic 16:9
                </Badge>
              </div>

              <div className="absolute right-3 top-3">
                <span className="rounded-md bg-black/70 px-2 py-0.5 text-xs font-mono font-medium text-white backdrop-blur-sm">
                  {item.duration}
                </span>
              </div>

              {/* Big Center Play Button */}
              <button
                onClick={onPlayToggle}
                className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange/90 text-white shadow-xl transition-all duration-200 hover:scale-110 hover:bg-brand-orange"
                aria-label="Play video"
              >
                <Play className="ml-1 h-7 w-7 fill-white" />
              </button>
            </>
          )}

          {/* Floating Action Controls */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2 pointer-events-auto">
            {isPlaying && (
              <button
                onClick={onPlayToggle}
                className="rounded-full bg-black/70 p-2 text-white hover:bg-black/90 backdrop-blur-sm transition-colors"
                title="Pause preview"
                aria-label="Pause preview"
              >
                <Pause className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={onExpand}
              className="rounded-full bg-black/70 p-2 text-white hover:bg-black/90 backdrop-blur-sm transition-colors"
              title="Watch full screen"
              aria-label="Watch full screen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Info Column */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orange">
              <Sparkles className="h-3.5 w-3.5" /> Featured Widescreen Film
            </span>
            <h3 className="mt-3 text-xl font-bold text-text sm:text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg bg-surface-muted px-3 py-1.5 text-xs font-medium text-text-muted">
                16:9 Widescreen Master
              </span>
              <span className="rounded-lg bg-surface-muted px-3 py-1.5 text-xs font-medium text-text-muted">
                Pro Color Grading
              </span>
              <span className="rounded-lg bg-surface-muted px-3 py-1.5 text-xs font-medium text-text-muted">
                Cinematic Sound Design
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-4">
            <span className="text-xs font-medium text-text-muted">Commercial Showcase</span>
            <Button size="sm" variant="secondary" onClick={onExpand}>
              Watch Fullscreen <Maximize2 className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Portrait 9:16 Vertical Reels Layout
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 dark:border-neutral-800 bg-surface shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Video Container */}
      <div className="relative w-full overflow-hidden bg-black aspect-[9/16]">
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <>
            {/* YouTube Poster Image */}
            <img
              src={item.poster}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              onClick={onPlayToggle}
              loading="lazy"
            />

            {/* Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute left-3 top-3 flex items-center gap-2">
              <Badge variant="outline" className="border-white/30 bg-black/60 text-xs font-semibold text-white backdrop-blur-sm">
                {item.category}
              </Badge>
            </div>

            <div className="absolute right-3 top-3">
              <span className="rounded-md bg-black/70 px-2 py-0.5 text-xs font-mono font-medium text-white backdrop-blur-sm">
                {item.duration}
              </span>
            </div>

            {/* Center Play Button */}
            <button
              onClick={onPlayToggle}
              className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/90 text-white shadow-xl transition-all duration-200 hover:scale-110 hover:bg-brand-orange"
              aria-label="Play video"
            >
              <Play className="ml-1 h-6 w-6 fill-white" />
            </button>
          </>
        )}

        {/* Floating Action Controls */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 pointer-events-auto">
          {isPlaying && (
            <button
              onClick={onPlayToggle}
              className="rounded-full bg-black/70 p-2 text-white hover:bg-black/90 backdrop-blur-sm transition-colors"
              title="Pause preview"
              aria-label="Pause preview"
            >
              <Pause className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onExpand}
            className="rounded-full bg-black/70 p-2 text-white hover:bg-black/90 backdrop-blur-sm transition-colors"
            title="Watch full screen"
            aria-label="Watch full screen"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Info Card */}
      <div className="flex flex-1 flex-col justify-between p-4 border-t border-neutral-200 dark:border-neutral-800">
        <div>
          <h4 className="font-bold text-sm text-text line-clamp-1">{item.title}</h4>
          <p className="mt-1 text-xs text-text-muted line-clamp-2">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
