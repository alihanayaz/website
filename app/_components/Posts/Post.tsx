import styles from "./Post.module.scss";
import Link from "next/link";
import { PostProps } from "@/_lib/sanity/types";

export function Post({ title, excerpt, slug, image, _createdAt }: PostProps) {
  return (
    <Link className={styles.postCard} href={`/notebook/${slug}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <span>{_createdAt}</span>
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
