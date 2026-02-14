"use client";

import { usePathname } from "next/navigation";
import { useNavigation } from "@/providers";
import { useAutoClose, useScrollLock } from "@/hooks";
import { Button, Hyperlink, Icon, LogoIcon } from "@/components/ui";
import { cn, isActiveLink } from "@/lib/utils";
import { Command, X } from "lucide-react";
import { METADATA, NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const { isNavOpen, toggleNav } = useNavigation();
  const { handleAutoClose } = useAutoClose(() => isNavOpen && toggleNav());

  useScrollLock(isNavOpen);

  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    isActive: isActiveLink(pathname, item.href),
  }));

  return (
    <header className="bg-background/80 border-border sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-8">
        <Hyperlink href={METADATA.root.path} variant="plain">
          <LogoIcon
            size={64}
            className="text-foreground hover:text-foreground-muted transition-colors"
          />
        </Hyperlink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className={cn(
                !item.isActive && "text-foreground-muted hover:text-foreground",
              )}
              asChild
            >
              <Hyperlink href={item.href} variant="plain">
                {item.label}
              </Hyperlink>
            </Button>
          ))}
        </nav>

        <div className="block md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleNav}
            className="relative z-50 transition-transform active:scale-95"
            aria-label="Toggle navigation menu"
            title="Toggle navigation menu"
          >
            <Icon as={isNavOpen ? X : Command} size={24} />
          </Button>
        </div>
      </div>

      {isNavOpen && (
        <nav
          onClick={handleAutoClose}
          className="bg-background animate-fade-in fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center md:hidden"
        >
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="animate-reveal p-0">
                <Button
                  variant="ghost"
                  className={cn(
                    "text-4xl font-bold tracking-tight transition-transform hover:scale-105 active:scale-95 sm:text-5xl",
                    !item.isActive && "text-foreground-muted",
                  )}
                  asChild
                >
                  <Hyperlink href={item.href} variant="plain">
                    {item.label}
                  </Hyperlink>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
