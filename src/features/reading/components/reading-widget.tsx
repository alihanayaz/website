import { getCurrentlyReading } from "@/features/reading/api/queries";
import { Hyperlink, Img, Text, Widget, WidgetHeader } from "@/components/ui";

export async function ReadingWidget() {
  const book = await getCurrentlyReading();

  if (!book) return null;

  return (
    <Widget>
      <WidgetHeader title="Reading" />

      <Hyperlink
        href={book.url}
        variant="plain"
        className="group flex items-center gap-4"
      >
        <div className="h-20 w-14 shrink-0 overflow-hidden rounded-l-none rounded-r-md drop-shadow-md transition-transform group-hover:scale-110">
          <Img
            src={book.coverUrl}
            alt={book.title}
            className="size-full border-none object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-1 overflow-hidden transition-transform group-hover:translate-x-1">
          <Text
            as="span"
            size="base"
            weight="medium"
            className="truncate leading-tight"
            title={book.title}
          >
            {book.title}
          </Text>
          <Text as="span" size="sm" tone="muted" className="truncate">
            {book.author}
          </Text>
        </div>
      </Hyperlink>
    </Widget>
  );
}
