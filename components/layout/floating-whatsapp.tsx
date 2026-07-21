"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/social-icons";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink("Hi ShreeFX Digitals, I'd like to know more about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-target focus-ring group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/60 [animation-duration:2.2s] group-hover:animate-none" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] shadow-[var(--shadow-lg),0_0_0_1px_rgba(255,255,255,0.15)]" />
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_55%)]" />
      <WhatsAppIcon className="relative z-10 h-7 w-7 text-white" />
    </motion.a>
  );
}
