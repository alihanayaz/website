import Section from "@/_components/Section";
import { getBookmarkCollections } from "@/_lib/raindrop/query";
import { BookmarkCollectionProps } from "@/_lib/raindrop/types";
import { BookmarkCollection } from "@/_components/Bookmark";

export default async function Page() {
  const bookmarkCollections = await getBookmarkCollections();

  return (
    <>
      <Section>
        <h3>My Personal Directory of Bookmarks</h3>
        <p>
          Explore my curated collection of bookmarks, where I&apos;ve gathered
          valuable resources and insightful reads.
        </p>
      </Section>
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
