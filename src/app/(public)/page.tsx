import { WritingWidget } from "@/features/content";
import { WeatherWidget } from "@/features/weather";
import { Button, Heading, Hyperlink, Text } from "@/components/ui";
import { CONTACT } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
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

      <WritingWidget />

      <WeatherWidget />
    </div>
  );
}
