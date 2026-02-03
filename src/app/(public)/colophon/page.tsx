import { getContentPageBySlug } from "@/features/content/api/queries";
import { RichText } from "@/features/content";
import { PageHeader } from "@/components/layout";
import { METADATA } from "@/lib/constants";

export default async function ColophonContentPage() {
  const data = await getContentPageBySlug(METADATA.colophon.name.toLowerCase());

  return (
    <>
      <PageHeader
        title={METADATA.colophon.name}
        backHref={METADATA.root.path}
      />
      {data && <RichText content={data.content} />}
    </>
  );
}
