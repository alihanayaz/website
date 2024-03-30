"use client";
import styles from "./BookmarkItem.module.scss";
import Image from "next/image";
import { BookmarkItemProps } from "@/_lib/raindrop/types";

export function BookmarkItem({
  title,
  link,
  cover,
  excerpt,
}: BookmarkItemProps) {
  const strippedLink = link.replace(/(^\w+:|^)\/\/([^/]+).*/, "$2");
  return (
    <a
      className={styles.bookmarkItem}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className={styles.imageContainer}>
        <img
          src={cover || "/fallback.webp"}
          alt={title}
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = "/fallback.webp";
          }}
        ></img>
      </div>
      <div className={styles.textContainer}>
        <span>{title}</span>
      </div>
      <span className={styles.link}>
        <Image
          src="/link.svg"
          width={18}
          height={18}
          alt="link icon"
          priority={true}
        ></Image>
        {strippedLink}
      </span>
      <div className={styles.textContainer}>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </a>
  );
}
