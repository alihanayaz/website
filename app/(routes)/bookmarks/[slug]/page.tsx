import Heading from "@/_components/Heading";
import { getBookmarkCollections, getBookmarks } from "@/_lib/raindrop/query";
import {
  BookmarkItemProps,
  BookmarkCollectionProps,
} from "@/_lib/raindrop/types";
import { BookmarkItem } from "@/_components/Bookmark";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const bookmarkCollections = await getBookmarkCollections();
  return bookmarkCollections.map((bookmark: BookmarkCollectionProps) => ({
    slug: bookmark.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const bookmarkCollections = await getBookmarkCollections();
  const currentCollection = await bookmarkCollections.find(
    (bookmark: BookmarkCollectionProps) => bookmark.slug === slug
  );
  !currentCollection && notFound();
  const bookmarks = await getBookmarks(currentCollection._id);

  return (
    <>
      <Heading>
        <h1>{currentCollection.title}</h1>
      </Heading>
      <div className={styles.container}>
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
    </>
  );
}
