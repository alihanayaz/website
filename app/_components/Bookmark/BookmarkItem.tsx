"use client";
import styles from "./BookmarkItem.module.scss";
import { BookmarkItemProps } from "@/_lib/raindrop/types";
import Icon from "@/_components/Icon";

export function BookmarkItem({
  title,
  link,
  cover,
  excerpt,
}: BookmarkItemProps) {
  const strippedLink = link.replace(/(^\w+:|^)\/\/([^/]+).*/, "$2");
  const href = `${link}?ref=alihan.dev`;
  return (
    <a
      className={styles.wrapper}
      href={href}
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
        <Icon name="Link" size="small" />
        <span>{strippedLink}</span>
      </span>
      <div className={styles.textContainer}>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </a>
  );
}
