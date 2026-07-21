import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { TiltCard } from "@/components/animations/tilt-card";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <TiltCard maxTilt={4} className="h-full">
      <SpotlightCard className="group flex h-full flex-col rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
        <Quote className="h-7 w-7 text-brand-orange/40 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text">&ldquo;{testimonial.quote}&rdquo;</p>
        <div className="mt-5 flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3">
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-purple/20 transition-transform duration-300 group-hover:scale-110">
            <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="40px" className="object-cover" />
          </span>
          <div>
            <p className="text-sm font-semibold text-text">{testimonial.name}</p>
            <p className="text-xs text-text-muted">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </SpotlightCard>
    </TiltCard>
  );
}
