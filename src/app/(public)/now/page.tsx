import { getContentPageBySlug } from "@/features/content/api/queries";
import { RichText } from "@/features/content";
import { PageHeader } from "@/components/layout";
import { Text } from "@/components/ui";
import { formatDate, formatDateTime, formatDateTitle } from "@/lib/utils";
import { METADATA } from "@/lib/constants";

export default async function NowContentPage() {
  const data = await getContentPageBySlug(METADATA.now.name.toLowerCase());

  return (
    <>
      <PageHeader title={METADATA.now.name} backHref={METADATA.root.path} />
      {data && (
        <>
          <RichText content={data.content} />
          <Text
            as="time"
            size="sm"
            tone="muted"
            dateTime={formatDateTime(data.date)}
            title={formatDateTitle(data.date)}
            className="mt-8"
          >
            Last updated: {formatDate(data.date)}
          </Text>
        </>
      )}
    </>
  );
}
