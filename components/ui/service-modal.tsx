"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { getServiceBySlug } from "@/content/services";
import { Icon } from "@/lib/icon-map";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { whatsappLink } from "@/config/site";

type ServiceModalProps = {
  slug: string | null;
  onClose: () => void;
};

export function ServiceModal({ slug, onClose }: ServiceModalProps) {
  const service = slug ? getServiceBySlug(slug) : null;
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (slug) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slug, onClose]);

  // Handle click outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {slug && service && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Overlay */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={handleOverlayClick}
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: "rgba(10, 15, 30, 0.75)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="card-liquid relative z-10 flex w-[60vw] sm:w-[55vw] max-w-[1200px] h-[85vh] flex-col lg:flex-row overflow-hidden rounded-[24px] border border-neutral-200 bg-surface text-left shadow-[var(--shadow-glow-purple)]"
          >
            {/* Glass Close Button */}
            <div className="absolute right-5 top-5 z-30">
              <button
                onClick={onClose}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/50 bg-white/10 backdrop-blur-sm text-text-muted transition-all duration-200 hover:bg-neutral-200 hover:text-brand-orange hover:shadow-[var(--shadow-glow-orange)] dark:border-white/10 dark:bg-black/20 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-brand-orange"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              </button>
            </div>

            {/* Left Content (Scrollable) */}
            <div className="flex-1 h-full overflow-y-auto overscroll-contain scrollbar-hide px-6 py-8 sm:px-8 sm:py-10 lg:pr-6">
              <div className="mb-6 inline-flex rounded-full bg-brand-orange/10 px-3.5 py-1.5 text-sm font-semibold text-brand-orange">
                {service.category}
              </div>
              
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                  <Icon name={service.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                <h1 className="mt-2 text-3xl font-bold text-text sm:text-4xl md:text-5xl pr-12">{service.name}</h1>
              </div>
              
              <p className="mt-6 text-[18px] leading-relaxed text-text-muted">{service.summary}</p>

              <h2 className="mt-14 text-2xl font-bold text-text">Overview</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-text-muted">{service.description}</p>

              <h2 className="mt-14 text-2xl font-bold text-text">Key Benefits</h2>
              <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="card-liquid flex items-start gap-3 rounded-2xl border border-neutral-200 bg-surface p-5 text-[15px] text-text shadow-[var(--shadow-sm)]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 text-2xl font-bold text-text">Deliverables</h2>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] text-text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 text-2xl font-bold text-text">Our Process</h2>
              <ol className="mt-5 flex flex-wrap gap-3">
                {service.process.map((step, i) => (
                  <li key={step} className="flex items-center gap-2.5 rounded-full border border-neutral-200 bg-surface px-4 py-2.5 text-[15px] font-medium text-text-muted shadow-[var(--shadow-sm)]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-[12px] font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              {service.faqs.length > 0 && (
                <>
                  <h2 className="mt-14 text-2xl font-bold text-text">FAQs</h2>
                  <Accordion type="single" collapsible className="mt-5 space-y-3">
                    {service.faqs.map((faq) => (
                      <AccordionItem key={faq.question} value={faq.question}>
                        <AccordionTrigger className="text-left text-lg font-medium text-text hover:text-brand-orange">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-[16px] text-text-muted leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              )}

              {/* Bottom CTA for Mobile or convenient scrolling end */}
              <div className="mt-16 rounded-[var(--radius-xl)] border border-brand-orange/20 bg-brand-orange/5 p-8 text-center sm:p-10 lg:hidden">
                <h3 className="text-xl font-bold text-text">Ready to get started?</h3>
                <p className="mt-2 text-[15px] text-text-muted">Let's build a strategy that works for your business.</p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button asChild onClick={onClose}>
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                  <Button variant="whatsapp" asChild>
                    <a href={whatsappLink(`Hi ShreeFX Digitals, I'd like to know more about ${service.name}.`)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" /> <span>Talk on WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Permanently Visible on Desktop */}
            <div className="hidden lg:flex lg:w-[300px] lg:flex-shrink-0 lg:flex-col bg-surface-muted/30 border-l border-neutral-200 p-6 xl:p-8 h-full overflow-y-auto scrollbar-hide">
              <div className="card-liquid sticky top-0 rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6 shadow-[var(--shadow-sm)] mt-6">
                <h3 className="text-xl font-semibold text-text">Interested in {service.name}?</h3>
                <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
                  Book a free consultation and we'll map out a strategy tailored to your business.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  <Button asChild size="lg" className="w-full" onClick={onClose}>
                    <Link href="/contact">
                      Book Consultation <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="whatsapp" size="lg" asChild className="w-full">
                    <a href={whatsappLink(`Hi ShreeFX Digitals, I'd like to know more about ${service.name}.`)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" /> <span>Talk on WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
