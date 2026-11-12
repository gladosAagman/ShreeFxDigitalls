export type VideoShowcaseItem = {
  id: string;
  title: string;
  category: "Reels / Shorts" | "Brand Commercial" | "Promotional" | "Product Showcase";
  aspectRatio: "portrait" | "landscape";
  src: string;
  poster: string;
  duration: string;
  description: string;
};

export const videoCategories = [
  "All",
  "Reels / Shorts",
  "Brand Commercial",
  "Promotional",
  "Product Showcase",
] as const;

export type VideoCategory = (typeof videoCategories)[number];

export const videoPortfolio: VideoShowcaseItem[] = [
  {
    id: "video-1",
    title: "Commercial Film & Visual Production",
    category: "Brand Commercial",
    aspectRatio: "landscape",
    src: "/Videos/IMG_1474.MOV",
    poster: "/Videos/posters/IMG_1474.jpg",
    duration: "0:29",
    description: "Cinematic 16:9 brand storytelling production with high-impact color grade and pacing.",
  },
  {
    id: "video-2",
    title: "Social Growth Reel & Hook Cut",
    category: "Reels / Shorts",
    aspectRatio: "portrait",
    src: "/Videos/IMG_3073.MOV",
    poster: "/Videos/posters/IMG_3073.jpg",
    duration: "0:29",
    description: "Dynamic vertical 9:16 short-form video edit designed for retention, trending pacing, and CTA.",
  },
  {
    id: "video-3",
    title: "Brand Campaign Creative",
    category: "Promotional",
    aspectRatio: "portrait",
    src: "/Videos/IMG_5136.MOV",
    poster: "/Videos/posters/IMG_5136.jpg",
    duration: "0:39",
    description: "Story-driven vertical brand promo engineered for high CTR across Instagram & Meta Ads.",
  },
  {
    id: "video-4",
    title: "High-Resolution Showcase Feature",
    category: "Product Showcase",
    aspectRatio: "portrait",
    src: "/Videos/IMG_5312.MOV",
    poster: "/Videos/posters/IMG_5312.jpg",
    duration: "0:49",
    description: "Crisp 2K resolution master showcase edit featuring product reveals and audio sync.",
  },
  {
    id: "video-5",
    title: "Viral Short & Rapid Transition Cut",
    category: "Reels / Shorts",
    aspectRatio: "portrait",
    src: "/Videos/IMG_7888.MOV",
    poster: "/Videos/posters/IMG_7888.jpg",
    duration: "0:24",
    description: "Snappy pacing with sound design and motion elements tailored for viral organic reach.",
  },
  {
    id: "video-6",
    title: "Brand Aesthetic Video Reel",
    category: "Brand Commercial",
    aspectRatio: "portrait",
    src: "/Videos/IMG_7890.MOV",
    poster: "/Videos/posters/IMG_7890.jpg",
    duration: "0:25",
    description: "Modern lifestyle and business vibe reel highlighting brand identity and atmosphere.",
  },
  {
    id: "video-7",
    title: "Client Showcase & Conversion Edit",
    category: "Promotional",
    aspectRatio: "portrait",
    src: "/Videos/IMG_8874.MOV",
    poster: "/Videos/posters/IMG_8874.jpg",
    duration: "0:36",
    description: "Polished multi-scene video edit built for lead generation campaigns and landing page embeds.",
  },
];

