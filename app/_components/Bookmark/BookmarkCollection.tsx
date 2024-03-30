import Image from "next/image";
import styles from "./BookmarkCollection.module.scss";
import Link from "next/link";
import { BookmarkCollectionProps } from "@/_lib/raindrop/types";

export function BookmarkCollection({
  title,
  slug,
  count,
}: BookmarkCollectionProps) {
  return (
    <div>
      <Link className={styles.collection} href={`/bookmarks/${slug}`}>
        <div className={styles.title}>
          <Image
            src="/folder.svg"
            width={24}
            height={24}
            alt="folder icon"
            priority={true}
          />
          <h4>{title}</h4>
        </div>
        <span>
          {count} {count > 1 ? "Bookmarks" : "Bookmark"}
        </span>
      </Link>
    </div>
  );
}
