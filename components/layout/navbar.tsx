"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { TextRoll } from "@/components/animations/text-roll";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { FloatingNavbar } from "@/components/layout/floating-navbar";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header>
      <FloatingNavbar
        left={
          <Link href="/" className="cursor-target relative flex items-center gap-2 focus-ring rounded-full">
            <Image
              src="/shreefx-logo.png"
              alt={siteConfig.name}
              width={88}
              height={88}
              className={cn(
                "relative z-10 shrink-0 object-contain transition-all duration-300 ease-out",
                scrolled ? "h-11 w-11" : "h-[77px] w-[77px]"
              )}
              priority
            />
            <AnimatePresence>
              {!scrolled && (
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-0 flex items-baseline gap-1.5 whitespace-nowrap overflow-hidden"
                >
                  <span className="text-gradient-brand text-[26px] font-extrabold italic leading-none tracking-tighter">
                    ShreeFX
                  </span>
                  <span className="text-[20px] font-bold leading-none tracking-tight text-text">
                    Digitals
                  </span>
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        }
        center={mainNav.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "cursor-target group focus-ring relative inline-flex items-center rounded-full px-4 py-2 font-medium transition-all duration-300",
                scrolled ? "text-[15px]" : "text-[19px] px-5",
                active ? "text-brand-orange" : "text-text-muted hover:text-brand-orange"
              )}
            >
              <TextRoll>{link.label}</TextRoll>
              <span
                className={cn(
                  "pointer-events-none absolute inset-x-4 -bottom-0.5 h-[2px] scale-x-0 rounded-full bg-[linear-gradient(90deg,var(--color-brand-orange),var(--color-brand-purple))] transition-transform duration-300 origin-left group-hover:scale-x-100",
                  active && "scale-x-100"
                )}
              />
            </Link>
          );
        })}
        right={
          <>
            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle className={cn("transition-all duration-300", !scrolled && "h-[52px] w-[52px]")} />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="cursor-target focus-ring flex h-11 w-11 items-center justify-center rounded-full text-text"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </>
        }
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="container-page fixed inset-x-0 top-20 z-40 md:hidden"
          >
            <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-neutral-200 bg-surface p-4 shadow-[var(--shadow-lg)]">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="cursor-target focus-ring rounded-2xl px-4 py-3 text-[16px] font-medium text-text hover:bg-neutral-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
