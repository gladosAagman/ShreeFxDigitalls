"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { ServiceModal } from "@/components/ui/service-modal";

type ServiceModalContextType = {
  openService: (slug: string) => void;
  closeService: () => void;
  activeServiceSlug: string | null;
};

const ServiceModalContext = createContext<ServiceModalContextType | undefined>(undefined);

export function ServiceModalProvider({ children }: { children: ReactNode }) {
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(null);

  const openService = useCallback((slug: string) => {
    setActiveServiceSlug(slug);
  }, []);

  const closeService = useCallback(() => {
    setActiveServiceSlug(null);
  }, []);

  // Lock scroll completely using a robust injected style strategy
  useEffect(() => {
    if (activeServiceSlug) {
      // Add a class to body for potential CSS targeting
      document.body.classList.add("modal-open");
      
      // Prevent pointer events on the main content so the background is dead
      const main = document.getElementById("main-content");
      if (main) main.style.pointerEvents = "none";
    } else {
      document.body.classList.remove("modal-open");
      const main = document.getElementById("main-content");
      if (main) main.style.pointerEvents = "";
    }
    return () => {
      document.body.classList.remove("modal-open");
      const main = document.getElementById("main-content");
      if (main) main.style.pointerEvents = "";
    };
  }, [activeServiceSlug]);

  return (
    <ServiceModalContext.Provider value={{ openService, closeService, activeServiceSlug }}>
      {children}
      {activeServiceSlug && (
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            overflow: hidden !important;
            overscroll-behavior: none !important;
          }
        `}} />
      )}
      <ServiceModal slug={activeServiceSlug} onClose={closeService} />
    </ServiceModalContext.Provider>
  );
}

export function useServiceModal() {
  const context = useContext(ServiceModalContext);
  if (context === undefined) {
    throw new Error("useServiceModal must be used within a ServiceModalProvider");
  }
  return context;
}
