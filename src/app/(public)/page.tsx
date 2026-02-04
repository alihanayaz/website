import { WeatherWidget } from "@/features/weather";
import { Button, Card, Heading, Hyperlink, Icon, Text } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { CONTACT, METADATA } from "@/lib/constants";

function SectionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card variant="outline" interactive asChild>
      <Hyperlink href={href} variant="plain" className="gap-6">
        <div className="flex flex-col gap-4">
          <Heading as="h2" size="sm" weight="medium">
            {title}
          </Heading>
          <Text tone="muted" size="sm">
            {description}
          </Text>
          <div className="border-border text-border group-hover:text-border-hover group-hover:border-border-hover absolute top-4 right-4 flex items-center justify-center rounded-full border p-1 transition-all group-hover:rotate-45">
            <Icon as={ArrowUpRight} size={20} />
          </div>
        </div>
      </Hyperlink>
    </Card>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16 sm:pt-16">
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-2">
          <Heading as="h1">Hi, I&apos;m Alihan</Heading>
          <Text as="span" tone="muted">
            /a.liˈhan/
          </Text>
        </div>

        <Text tone="muted">
          I’m a software developer blending thoughtful design with solid
          engineering to build elegant, performant, and intuitive digital
          experiences.
        </Text>
        <Text tone="muted">
          Beyond work, I’m an avid weightlifter, a minimalist at heart, and a
          curious mind exploring new fields—from languages and literature to
          engineering and technology.
        </Text>

        <div className="mt-2 flex flex-wrap gap-6">
          {CONTACT.map((link) => (
            <Button
              key={link.href}
              variant="plain"
              size="xs"
              tone="muted"
              asChild
            >
              <Hyperlink
                href={link.href}
                rel="me noopener noreferrer"
                variant="plain"
              >
                <link.icon size={24} />
                <Text as="span" className="sr-only">
                  {link.title}
                </Text>
              </Hyperlink>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <SectionCard
          title={METADATA.writing.name}
          description={METADATA.writing.description}
          href={METADATA.writing.path}
        />

        <SectionCard
          title={METADATA.bookmarks.name}
          description={METADATA.bookmarks.description}
          href={METADATA.bookmarks.path}
        />

        <WeatherWidget />
      </div>
    </div>
  );
}
