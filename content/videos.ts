export type VideoShowcaseItem = {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
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
    id: "yt-1",
    youtubeId: "a2zWsXpTRpQ",
    youtubeUrl: "https://youtube.com/shorts/a2zWsXpTRpQ",
    title: "Festive Storytelling & Commercial Reel",
    category: "Brand Commercial",
    aspectRatio: "portrait",
    src: "https://youtube.com/shorts/a2zWsXpTRpQ",
    poster: "https://img.youtube.com/vi/a2zWsXpTRpQ/hqdefault.jpg",
    duration: "0:29",
    description: "Cinematic festive storytelling campaign creative with high-retention visual hooks and festive atmosphere.",
  },
  {
    id: "yt-2",
    youtubeId: "UYLQiW1JcDU",
    youtubeUrl: "https://youtube.com/shorts/UYLQiW1JcDU",
    title: "Doorstep Services Brand Commercial",
    category: "Promotional",
    aspectRatio: "portrait",
    src: "https://youtube.com/shorts/UYLQiW1JcDU",
    poster: "https://img.youtube.com/vi/UYLQiW1JcDU/hqdefault.jpg",
    duration: "0:39",
    description: "High-energy commercial reel for on-demand laundry and doorstep dry-cleaning services.",
  },
  {
    id: "yt-3",
    youtubeId: "0Ov5GTRZ4QA",
    youtubeUrl: "https://youtube.com/shorts/0Ov5GTRZ4QA",
    title: "Lifestyle & Matrimony Visual Campaign",
    category: "Product Showcase",
    aspectRatio: "portrait",
    src: "https://youtube.com/shorts/0Ov5GTRZ4QA",
    poster: "https://img.youtube.com/vi/0Ov5GTRZ4QA/hqdefault.jpg",
    duration: "0:49",
    description: "Minimalist, aesthetic social video showcase engineered for brand discovery and trust building.",
  },
  {
    id: "yt-4",
    youtubeId: "QjfkvNDs6AA",
    youtubeUrl: "https://youtube.com/shorts/QjfkvNDs6AA",
    title: "Local Business Growth Promo",
    category: "Promotional",
    aspectRatio: "portrait",
    src: "https://youtube.com/shorts/QjfkvNDs6AA",
    poster: "https://img.youtube.com/vi/QjfkvNDs6AA/hqdefault.jpg",
    duration: "0:30",
    description: "Story-driven vertical brand promo engineered for high CTR across Instagram & Meta Ads.",
  },
  {
    id: "yt-5",
    youtubeId: "E57n8J7Gp_A",
    youtubeUrl: "https://youtube.com/shorts/E57n8J7Gp_A",
    title: "Viral Social Hook Reel",
    category: "Reels / Shorts",
    aspectRatio: "portrait",
    src: "https://youtube.com/shorts/E57n8J7Gp_A",
    poster: "https://img.youtube.com/vi/E57n8J7Gp_A/hqdefault.jpg",
    duration: "0:25",
    description: "Fast-paced social media reel edit designed for maximum watch-time and audience engagement.",
  },
  {
    id: "yt-6",
    youtubeId: "wmp5ovYyBUc",
    youtubeUrl: "https://youtube.com/shorts/wmp5ovYyBUc",
    title: "Performance Ad Creative & Offer Cut",
    category: "Reels / Shorts",
    aspectRatio: "portrait",
    src: "https://youtube.com/shorts/wmp5ovYyBUc",
    poster: "https://img.youtube.com/vi/wmp5ovYyBUc/hqdefault.jpg",
    duration: "0:28",
    description: "Direct response performance video creative with hook, offer, and conversion-focused CTA.",
  },
  {
    id: "yt-7",
    youtubeId: "mmlONBPCjDM",
    youtubeUrl: "https://youtube.com/shorts/mmlONBPCjDM",
    title: "JWC Corporate Identity Reel",
    category: "Promotional",
    aspectRatio: "portrait",
    src: "https://youtube.com/shorts/mmlONBPCjDM",
    poster: "https://img.youtube.com/vi/mmlONBPCjDM/hqdefault.jpg",
    duration: "0:35",
    description: "Turnkey enterprise corporate showcase highlighting brand presence and consultation services.",
  },
  {
    id: "yt-8",
    youtubeId: "-R2VRuOWYA4",
    youtubeUrl: "https://youtube.com/shorts/-R2VRuOWYA4",
    title: "Visual Dynamics & Motion Edit",
    category: "Product Showcase",
    aspectRatio: "portrait",
    src: "https://youtube.com/shorts/-R2VRuOWYA4",
    poster: "https://img.youtube.com/vi/-R2VRuOWYA4/hqdefault.jpg",
    duration: "0:25",
    description: "Creative motion graphics and modern visual pacing for premium digital branding.",
  },
  {
    id: "yt-9",
    youtubeId: "_IP9KCIwT9Q",
    youtubeUrl: "https://youtu.be/_IP9KCIwT9Q",
    title: "Commercial Film & Visual Production",
    category: "Brand Commercial",
    aspectRatio: "landscape",
    src: "https://youtu.be/_IP9KCIwT9Q",
    poster: "https://img.youtube.com/vi/_IP9KCIwT9Q/hqdefault.jpg",
    duration: "0:30",
    description: "Cinematic 16:9 brand storytelling production with high-impact color grade and narrative pacing.",
  },
  {
    id: "yt-10",
    youtubeId: "voeK5YUQe9Q",
    youtubeUrl: "https://youtu.be/voeK5YUQe9Q",
    title: "Corporate Brand Production Master",
    category: "Brand Commercial",
    aspectRatio: "landscape",
    src: "https://youtu.be/voeK5YUQe9Q",
    poster: "https://img.youtube.com/vi/voeK5YUQe9Q/hqdefault.jpg",
    duration: "0:32",
    description: "High-end widescreen corporate production highlighting executive leadership and market impact.",
  },
];
