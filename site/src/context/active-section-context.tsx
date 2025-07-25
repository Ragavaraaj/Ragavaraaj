"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { SectionId } from "@/lib/types";

interface ActiveSectionContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  registerSection: (id: SectionId, ref: React.RefObject<HTMLElement>) => void;
}

export const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);

export interface ActiveSectionProviderProps {
  children: React.ReactNode;
}

export function ActiveSectionProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const sectionRefs = useRef<Map<SectionId, React.RefObject<HTMLElement>>>(
    new Map()
  );

  // Register a section reference - memoized with useCallback
  const registerSection = useCallback(
    (id: SectionId, ref: React.RefObject<HTMLElement>) => {
      sectionRefs.current.set(id, ref);
    },
    []
  );

  // Update URL when active section changes
  useEffect(() => {
    // Skip URL update during initial render
    if (activeSection === "hero" && window.location.hash === "") {
      return;
    }

    // Update URL hash without triggering scroll (using replaceState)
    const hash = activeSection === "hero" ? "" : `#${activeSection}`;
    window.history.replaceState(null, "", hash || window.location.pathname);
  }, [activeSection]);

  // Set up intersection observer
  useEffect(() => {
    // Create a snapshot of current section refs to work with
    const sectionsToObserve = Array.from(sectionRefs.current.entries());

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the entries that are intersecting
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting
      );

      if (intersectingEntries.length > 0) {
        // Get the first intersecting entry
        const id = intersectingEntries[0].target.id as SectionId;
        setActiveSection(id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all section elements
    sectionsToObserve.forEach(([, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup function
    return () => {
      sectionsToObserve.forEach(([, ref]) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, []);

  // Handle initial hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1) as SectionId;
      const ref = sectionRefs.current.get(sectionId);

      if (ref?.current) {
        // Slight delay to ensure the DOM is ready
        setTimeout(() => {
          ref.current?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, registerSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
