export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "instagram" | "facebook" | "youtube" | "twitter";
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shrideep-shrivastava-97a762207?utm_source=share_via&utm_content=profile&utm_medium=member_ios", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/shreefxdigital?psln=MTBnbGZlOHJ4czdqYQ%3D%3D&utm_source=qr", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com/shreefxdigitals", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com/@shreefxdigitals", icon: "youtube" },
  { label: "X (Twitter)", href: "https://twitter.com/shreefxdigitals", icon: "twitter" },
];
