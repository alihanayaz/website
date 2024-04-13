import styles from "./PostCard.module.scss";
import Link from "next/link";
import { PostProps } from "@/_lib/sanity/types";

export function PostCard({
  title,
  excerpt,
  slug,
  image,
  _createdAt,
}: PostProps) {
  return (
    <Link className={styles.wrapper} href={`/notebook/${slug}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <span className={styles.date}>{_createdAt}</span>
      </div>
      <div className={styles.textContainer}>
        <h1>{title}</h1>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.excerpt}>{excerpt}</span>
      </div>
    </Link>
  );
}
