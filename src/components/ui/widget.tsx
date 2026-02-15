import { ReactNode } from "react";
import { Button, Heading, Hyperlink, Icon, Text } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Widget({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      {children}
    </section>
  );
}

export function WidgetHeader({
  title,
  href,
  linkLabel = "View all",
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Heading as="h2" size="sm" weight="medium">
        {title}
      </Heading>
      {href && (
        <Button variant="plain" size="sm" tone="muted" asChild>
          <Hyperlink
            href={href}
            variant="plain"
            className="group inline-flex items-center gap-1"
          >
            {linkLabel}
            <Icon
              as={ArrowRight}
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Hyperlink>
        </Button>
      )}
    </div>
  );
}

export function WidgetList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <ul className={cn("flex flex-col", className)}>{children}</ul>;
}

export function WidgetItem({
  href,
  title,
  meta,
}: {
  href: string;
  title: string;
  meta?: ReactNode;
}) {
  return (
    <li className="overflow-hidden p-0">
      <Hyperlink
        href={href}
        variant="plain"
        className="group border-border hover:bg-surface-hover -mx-3 flex items-center justify-between gap-4 border-b p-3 transition-colors"
      >
        <Text weight="medium" className="sm:shrink-0">
          {title}
        </Text>
        <div className="text-right">{meta}</div>
      </Hyperlink>
    </li>
  );
}
