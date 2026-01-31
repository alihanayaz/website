import { notFound } from "next/navigation";
import {
  getBookmarksByCollectionId,
  getPublicCollections,
} from "@/features/bookmarks/api/queries";
import { BookmarkList } from "@/features/bookmarks";
import { PageHeader } from "@/components/layout";
import { METADATA, SITE_NAME } from "@/lib/constants";

async function getCollection(slug: string) {
  const collections = await getPublicCollections();

  return collections.find((c) => c.slug === slug);
}

export async function generateStaticParams() {
  const collections = await getPublicCollections();

  return (collections || []).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = await getCollection(slug);

  if (!collection) return null;

  const path = `${METADATA.bookmarks.path}/${slug}`;
  const absoluteUrl = new URL(path, METADATA.siteUrl).toString();
  const title = `${collection.title} | Bookmarks — ${SITE_NAME}`;
  const description = `A curated selection of handpicked ${collection.title.toLowerCase()} bookmarks by ${SITE_NAME}.`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
    },
  };
}

export default async function BookmarkCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = await getCollection(slug);

  if (!collection) notFound();

  const initialData = await getBookmarksByCollectionId(collection._id);

  return (
    <>
      <PageHeader title={collection.title} backHref={METADATA.bookmarks.path} />
      <BookmarkList initialData={initialData} collectionId={collection._id} />
    </>
  );
}
