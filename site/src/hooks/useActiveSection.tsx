import { useContext } from "react";
import { ActiveSectionContext } from "@/context/active-section-context";

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
}
