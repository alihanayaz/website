"use client";

import { useTheme } from "next-themes";
import { Button, Icon } from "@/components/ui";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Icon as={Sun} size={20} className="inline-block dark:hidden" />
      <Icon as={Moon} size={20} className="hidden dark:inline-block" />
    </Button>
  );
}
