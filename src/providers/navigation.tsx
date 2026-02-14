"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavigationContext = {
  isNavOpen: boolean;
  toggleNav: () => void;
};

const NavigationContext = createContext<NavigationContext | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen((prev) => !prev);

  return (
    <NavigationContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return ctx;
}
