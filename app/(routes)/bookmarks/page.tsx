import Heading from "@/_components/Heading";
import { getBookmarkCollections } from "@/_lib/raindrop/query";
import { BookmarkCollectionProps } from "@/_lib/raindrop/types";
import { BookmarkCollection } from "@/_components/Bookmark";
import { notFound } from "next/navigation";

export default async function Page() {
  const bookmarkCollections = await getBookmarkCollections();
  !bookmarkCollections && notFound();

  return (
    <>
      <Heading text="My Personal Directory of Bookmarks"></Heading>
      <p className="mb-6">
        Explore my curated collection of bookmarks, where I&apos;ve gathered
        valuable resources and insightful reads.
      </p>
      <div className="flex flex-col gap-4">
        {bookmarkCollections.map((bookmark: BookmarkCollectionProps) => {
          return (
            <BookmarkCollection
              key={bookmark._id}
              _id={bookmark._id}
              title={bookmark.title}
              slug={bookmark.slug}
              count={bookmark.count}
            />
          );
        })}
      </div>
    </>
  );
}
