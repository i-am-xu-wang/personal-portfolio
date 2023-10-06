"use client";

import {
  SectionName,
  useActiveSectionContext,
} from "@/app/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref };
}
