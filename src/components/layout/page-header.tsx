import { Button, Heading, Hyperlink, Icon, Text } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  backHref: string;
  className?: string;
}

export function PageHeader({
  title,
  description,
  backHref,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-8 flex flex-col gap-8", className)}>
      <Button
        variant="outline"
        size="icon"
        tone="muted"
        className="w-fit"
        asChild
      >
        <Hyperlink
          href={backHref}
          variant="plain"
          aria-label="Go back"
          title="Go back"
        >
          <Icon as={ArrowLeft} size={20} />
        </Hyperlink>
      </Button>
      <div className="flex flex-col gap-2">
        <Heading as="h1" size="lg">
          {title}
        </Heading>
        {description && <Text tone="muted">{description}</Text>}
      </div>
    </div>
  );
}
