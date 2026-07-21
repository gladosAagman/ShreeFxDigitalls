export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "instagram" | "facebook" | "youtube" | "twitter";
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/company/shreefxdigitals", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/shreefxdigitals", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com/shreefxdigitals", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com/@shreefxdigitals", icon: "youtube" },
  { label: "X (Twitter)", href: "https://twitter.com/shreefxdigitals", icon: "twitter" },
];
