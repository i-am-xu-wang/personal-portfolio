"use client";

import React, { createContext, useContext, useState } from "react";
import { links } from "../../lib/data";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
export type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider",
    );
  }
  return context;
}
