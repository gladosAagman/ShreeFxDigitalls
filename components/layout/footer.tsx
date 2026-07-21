import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { footerLinks } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import { siteConfig, mailtoLink } from "@/config/site";
import { LinkedinIcon, InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon } from "@/components/icons/social-icons";
import { AnimatedLink } from "@/components/ui/animated-link";
import { StaggerContainer, StaggerItem } from "@/components/animations/reveal";

const iconMap = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  twitter: TwitterIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-surface pt-16 pb-8">
      <Container>
        <StaggerContainer className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <StaggerItem className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/shreefx-logo.png"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <span className="text-[17px] font-bold tracking-tight text-text">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:border-brand-orange hover:text-brand-orange hover:shadow-[var(--shadow-sm)]"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-sm font-semibold text-text">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <AnimatedLink href={link.href} className="text-[15px]">
                    {link.label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-sm font-semibold text-text">Services</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <AnimatedLink href={link.href} className="text-[15px]">
                    {link.label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-sm font-semibold text-text">Contact</h4>
            <ul className="mt-4 space-y-3 text-[15px] text-text-muted">
              <li>
                <a href={mailtoLink()} className="group flex items-center gap-2 transition-colors hover:text-brand-orange">
                  <Mail className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" /> {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="group flex items-center gap-2 transition-colors hover:text-brand-orange">
                  <Phone className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" /> {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.address}
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <AnimatedLink href={link.href} className="text-sm">
                  {link.label}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
