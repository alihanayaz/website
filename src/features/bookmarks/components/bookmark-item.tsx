import type { BookmarkItem } from "@/features/bookmarks";
import { Card, Heading, Hyperlink, Icon, Img, Text } from "@/components/ui";
import { Link2 } from "lucide-react";

export function BookmarkItem(bookmark: BookmarkItem) {
  return (
    <Card variant="outline" padding="none" interactive asChild>
      <Hyperlink key={bookmark.link} href={bookmark.link} variant="plain">
        <div className="relative h-48 w-full sm:h-64">
          <Img
            src={bookmark.cover}
            alt={bookmark.title}
            className="size-full rounded-b-none border-none object-cover"
            fill
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <Heading as="h2" size="xs" className="line-clamp-2">
            {bookmark.title}
          </Heading>
          <Text
            as="span"
            size="sm"
            tone="muted"
            className="line-clamp-2 inline-flex items-center gap-1"
          >
            <Icon as={Link2} size={16} />
            {bookmark.domain}
          </Text>
          {bookmark.excerpt && (
            <Text size="sm" tone="muted" className="line-clamp-6">
              {bookmark.excerpt}
            </Text>
          )}
        </div>
      </Hyperlink>
    </Card>
  );
}
