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
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 4);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
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
          <Link href="/" className="cursor-target relative flex items-center gap-2 focus-ring rounded-full shrink-0">
            <Image
              src="/shreefx-logo.png"
              alt={siteConfig.name}
              width={88}
              height={88}
              className={cn(
                "relative z-10 shrink-0 object-contain transition-all duration-300 ease-out",
                scrolled
                  ? "h-10 w-10 md:h-11 md:w-11"
                  : "h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14"
              )}
              priority
            />
            <div className="relative z-0 flex items-baseline gap-1 sm:gap-1.5 whitespace-nowrap">
              <span className="text-gradient-brand text-[19px] sm:text-[22px] md:text-[25px] font-extrabold italic leading-none tracking-tight">
                ShreeFX
              </span>
              <span className="text-[14px] sm:text-[16px] md:text-[19px] font-bold leading-none tracking-tight text-text">
                Digitals
              </span>
            </div>
          </Link>
        }
        center={mainNav.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "cursor-target group focus-ring relative inline-flex items-center rounded-full font-medium transition-all duration-300",
                scrolled ? "text-[14px] px-3.5 py-1.5" : "text-[16px] px-4 py-2",
                active ? "text-brand-orange" : "text-text-muted hover:text-brand-orange"
              )}
            >
              <TextRoll>{link.label}</TextRoll>
              <span
                className={cn(
                  "pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-[2px] scale-x-0 rounded-full bg-[linear-gradient(90deg,var(--color-brand-orange),var(--color-brand-purple))] transition-transform duration-300 origin-left group-hover:scale-x-100",
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
            <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-surface/95 dark:bg-neutral-900/95 backdrop-blur-md p-4 shadow-[var(--shadow-lg)]">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="cursor-target focus-ring rounded-2xl px-4 py-3 text-[16px] font-medium text-text hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
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
