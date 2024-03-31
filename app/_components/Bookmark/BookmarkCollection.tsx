import styles from "./BookmarkCollection.module.scss";
import Link from "next/link";
import { BookmarkCollectionProps } from "@/_lib/raindrop/types";
import Icon from "@/_components/Icon";

export function BookmarkCollection({
  title,
  slug,
  count,
}: BookmarkCollectionProps) {
  return (
    <div>
      <Link className={styles.collection} href={`/bookmarks/${slug}`}>
        <div className={styles.title}>
          <Icon name="Collection" />
          <h4>{title}</h4>
        </div>
        <span>
          {count} {count > 1 ? "Bookmarks" : "Bookmark"}
        </span>
      </Link>
    </div>
  );
}
