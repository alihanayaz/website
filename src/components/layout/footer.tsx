import { Icon } from "@/components/ui";
import { CopyrightIcon } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="text-foreground-muted border-border bg-background relative z-12 mx-auto mt-auto flex w-full max-w-5xl items-center justify-between gap-4 border-x border-t px-4 py-8 text-center text-sm">
      <span className="flex items-center">
        <Icon as={CopyrightIcon} size={12} className="mr-1" />
        {year} {SITE_NAME}. All rights reserved.
      </span>
    </footer>
  );
}
