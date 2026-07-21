export type Accent = {
  badge: string;
  iconHover: string;
  glow: string;
  ring: string;
};

// Literal, fully-formed class strings so Tailwind's content scanner can find them.
export const accents: Accent[] = [
  {
    badge: "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand-orange)_18%,transparent),color-mix(in_oklab,var(--color-brand-orange)_8%,transparent))] text-brand-orange shadow-[var(--shadow-sm)] ring-1 ring-inset ring-brand-orange/15",
    iconHover: "group-hover:bg-brand-orange group-hover:text-white group-hover:ring-transparent",
    glow: "hover:shadow-[var(--shadow-glow-orange)]",
    ring: "group-hover:border-brand-orange/40",
  },
  {
    badge: "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand-purple)_18%,transparent),color-mix(in_oklab,var(--color-brand-purple)_8%,transparent))] text-brand-purple shadow-[var(--shadow-sm)] ring-1 ring-inset ring-brand-purple/15",
    iconHover: "group-hover:bg-brand-purple group-hover:text-white group-hover:ring-transparent",
    glow: "hover:shadow-[var(--shadow-glow-purple)]",
    ring: "group-hover:border-brand-purple/40",
  },
  {
    badge: "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand-gold)_22%,transparent),color-mix(in_oklab,var(--color-brand-gold)_10%,transparent))] text-brand-gold-dark shadow-[var(--shadow-sm)] ring-1 ring-inset ring-brand-gold/25",
    iconHover: "group-hover:bg-brand-gold group-hover:text-white group-hover:ring-transparent",
    glow: "hover:shadow-[var(--shadow-glow-gold)]",
    ring: "group-hover:border-brand-gold/50",
  },
];

export function getAccent(index: number): Accent {
  return accents[index % accents.length];
}
