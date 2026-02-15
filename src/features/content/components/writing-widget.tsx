import { getWritingEntries } from "@/features/content/api/queries";
import {
  Text,
  Widget,
  WidgetHeader,
  WidgetItem,
  WidgetList,
} from "@/components/ui";
import { formatDate, formatDateTime, formatDateTitle } from "@/lib/utils";
import { METADATA } from "@/lib/constants";

const MAX_ENTRIES = 3;

export async function WritingWidget() {
  const writingEntries = await getWritingEntries(MAX_ENTRIES);

  return (
    <Widget>
      <WidgetHeader
        title={METADATA.writing.name}
        href={METADATA.writing.path}
      />

      <WidgetList>
        {writingEntries.map((entry, i) => (
          <WidgetItem
            key={i}
            href={`${METADATA.writing.path}/${entry.slug}`}
            title={entry.title}
            meta={
              <Text
                as="time"
                size="sm"
                tone="subtle"
                dateTime={formatDateTime(entry.date)}
                title={formatDateTitle(entry.date)}
                className="sm:shrink-0"
              >
                {formatDate(entry.date)}
              </Text>
            }
          />
        ))}
      </WidgetList>
    </Widget>
  );
}
