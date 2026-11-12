"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { videoPortfolio, videoCategories, type VideoShowcaseItem, type VideoCategory } from "@/content/videos";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function VideoPortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
  const [selectedVideo, setSelectedVideo] = useState<VideoShowcaseItem | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

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
                  setPlayingId(null);
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

        {/* Video Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-neutral-950 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-neutral-800 p-3 text-white">
                <div>
                  <h3 className="text-base font-bold">{selectedVideo.title}</h3>
                  <p className="text-xs text-neutral-400">{selectedVideo.category} · {selectedVideo.duration}</p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold hover:bg-white/20"
                >
                  Close ✕
                </button>
              </div>

              <div className="flex max-h-[75vh] items-center justify-center bg-black">
                <video
                  src={selectedVideo.src}
                  poster={selectedVideo.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[75vh] w-auto max-w-full rounded-b-xl"
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handleToggle = () => {
    onPlayToggle();
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-neutral-200 dark:border-neutral-800 bg-surface shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Video Container */}
      <div className={`relative w-full overflow-hidden bg-black ${item.aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-[16/9]"}`}>
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          playsInline
          muted={isMuted}
          preload="metadata"
          loop
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onClick={handleToggle}
        >
          <source src={item.src} type="video/mp4" />
        </video>

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

        {/* Center Play Button if paused */}
        {!isPlaying && (
          <button
            onClick={handleToggle}
            className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/90 text-white shadow-xl transition-all duration-200 hover:scale-110 hover:bg-brand-orange"
            aria-label="Play video"
          >
            <Play className="ml-1 h-6 w-6 fill-white" />
          </button>
        )}

        {/* Bottom Floating Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <button
            onClick={handleToggle}
            className="rounded-full bg-black/60 p-2 text-white hover:bg-black/80 backdrop-blur-sm"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !isMuted;
                  setIsMuted(!isMuted);
                }
              }}
              className="rounded-full bg-black/60 p-2 text-white hover:bg-black/80 backdrop-blur-sm"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              onClick={onExpand}
              className="rounded-full bg-black/60 p-2 text-white hover:bg-black/80 backdrop-blur-sm"
              aria-label="Fullscreen modal"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h4 className="font-bold text-text line-clamp-1">{item.title}</h4>
          <p className="mt-1 text-xs text-text-muted line-clamp-2">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

