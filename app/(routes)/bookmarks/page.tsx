import Heading from "@/_components/Heading";
import { getBookmarkCollections } from "@/_lib/raindrop/query";
import { BookmarkCollectionProps } from "@/_lib/raindrop/types";
import { BookmarkCollection } from "@/_components/Bookmark";

export default async function Page() {
  const bookmarkCollections = await getBookmarkCollections();

  return (
    <>
      <Heading>
        <h1>My Personal Directory of Bookmarks</h1>
        <p>
          Explore my curated collection of bookmarks, where I&apos;ve gathered
          valuable resources and insightful reads.
        </p>
      </Heading>
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
    </>
  );
}
