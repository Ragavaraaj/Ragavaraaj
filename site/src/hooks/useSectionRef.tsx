import { useEffect, useRef } from "react";
import { SectionId } from "@/lib/types";
import { useActiveSection } from "@/hooks/useActiveSection";

export function useSectionRef(id: SectionId) {
  const { registerSection } = useActiveSection();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerSection(id, ref as React.RefObject<HTMLElement>);
  }, [id, registerSection]);

  return ref;
}
