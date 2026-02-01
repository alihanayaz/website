import { notFound } from "next/navigation";
import {
  getWritingEntries,
  getWritingEntryBySlug,
} from "@/features/content/api/queries";
import { RichText } from "@/features/content";
import { PageHeader } from "@/components/layout";
import { METADATA, SITE_NAME } from "@/lib/constants";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const entries = await getWritingEntries();

  return (entries ?? []).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getWritingEntryBySlug(slug);

  if (!entry) return null;

  const { title: rawTitle, description, date } = entry;
  const path = `${METADATA.writing.path}/${slug}`;
  const absoluteUrl = new URL(path, METADATA.siteUrl).toString();
  const title = `${rawTitle} — ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: new Date(date).toISOString(),
      url: absoluteUrl,
    },
  };
}

export default async function WritingEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getWritingEntryBySlug(slug);

  if (!entry) notFound();

  return (
    <>
      <PageHeader title={entry.title} backHref={METADATA.writing.path} />
      <RichText content={entry.content} />
    </>
  );
}
