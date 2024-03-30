import Section from "@/_components/Section";
import { getBookmarkCollections, getBookmarks } from "@/_lib/raindrop/query";
import {
  BookmarkItemProps,
  BookmarkCollectionProps,
} from "@/_lib/raindrop/types";
import { BookmarkItem } from "@/_components/Bookmark";
import styles from "./page.module.scss";

export const dynamicParams = false;

export async function generateStaticParams() {
  const bookmarkCollections = await getBookmarkCollections();
  return bookmarkCollections.map((bookmark: BookmarkCollectionProps) => ({
    slug: bookmark.slug,
  }));
}

export default async function BookmarkPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const bookmarkCollections = await getBookmarkCollections();
  const currentCollection = await bookmarkCollections.find(
    (bookmark: BookmarkCollectionProps) => bookmark.slug === slug
  );
  const bookmarks = await getBookmarks(currentCollection._id);

  return (
    <Section>
      <h3>{currentCollection.title}</h3>
      <div className={styles.bookmarkItemContainer}>
        {bookmarks.map((bookmark: BookmarkItemProps) => {
          return (
            <BookmarkItem
              key={bookmark._id}
              _id={bookmark._id}
              title={bookmark.title}
              link={bookmark.link}
              cover={bookmark.cover}
              excerpt={bookmark.excerpt}
            />
          );
        })}
      </div>
    </Section>
  );
}
