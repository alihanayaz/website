import { Button, Heading, Hyperlink, Icon, Text } from "@/components/ui";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="mx-auto flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center"
      aria-labelledby="not-found-title"
      aria-describedby="not-found-desc"
    >
      <div className="bg-surface-hover rounded-full p-4">
        <Icon as={Compass} size={40} />
      </div>

      <div className="flex flex-col gap-2">
        <Heading id="not-found-title" as="h1" size="xl" weight="semibold">
          Page not found
        </Heading>

        <Text id="not-found-desc" tone="muted">
          The page you’re looking for doesn’t exist or may have moved.
        </Text>
      </div>

      <Button className="mt-2" asChild>
        <Hyperlink href="/" variant="plain">
          Go home
        </Hyperlink>
      </Button>
    </main>
  );
}
