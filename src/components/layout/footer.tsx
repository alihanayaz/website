import { Button, Hyperlink, Icon, LogoIcon, Text } from "@/components/ui";
import { ThemeToggle } from "@/components/shared";
import { CopyrightIcon } from "lucide-react";
import { METADATA, SITE_NAME } from "@/lib/constants";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-border bg-background relative z-20 mt-auto flex w-full border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 pt-4 sm:pb-4">
        <div className="border-surface-hover flex justify-between gap-2 border-b pb-4">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Hyperlink href={METADATA.now.path} variant="plain">
                {METADATA.now.name}
              </Hyperlink>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Hyperlink href={METADATA.colophon.path} variant="plain">
                {METADATA.colophon.name}
              </Hyperlink>
            </Button>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-x-2">
          <Text
            as="span"
            size="sm"
            tone="muted"
            className="col-span-2 inline-flex items-center gap-1 sm:col-span-1"
          >
            <Icon as={CopyrightIcon} size={12} />
            {year} {SITE_NAME}. All rights reserved.
          </Text>

          <div className="col-span-1 flex h-full flex-wrap content-center items-center gap-x-1">
            <Text as="span" size="xs" tone="subtle">
              The starry heavens above me
            </Text>
            <Text as="span" size="xs" tone="subtle">
              and the moral law within me.
            </Text>
          </div>

          <div className="col-span-1 flex justify-end sm:col-start-2 sm:row-span-2 sm:row-start-1">
            <LogoIcon size={64} className="text-foreground-subtle" />
          </div>
        </div>
      </div>
    </footer>
  );
}
