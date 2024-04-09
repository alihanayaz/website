import styles from "./page.module.scss";
import { getAllPosts, urlFor } from "@/_lib/sanity/query";
import { formatDate } from "@/_lib/helpers";
import { PostProps } from "@/_lib/sanity/types";
import Post from "@/_components/Posts";
import Heading from "@/_components/Heading";
import { notFound } from "next/navigation";

export default async function Page() {
  const posts = await getAllPosts();
  !posts && notFound();
  return (
    <>
      <Heading>
        <h1>My Personal Directory of Notes</h1>
        <p>
          Step inside my digital notebook, where you&apos;ll find a glimpse into
          my mind, captured in snippets of thoughts and reflections.
        </p>
      </Heading>
      <div className={styles.postContainer}>
        {posts.map((post: PostProps, id: number) => {
          return (
            <Post
              key={id}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              image={urlFor(post.image).url()}
              _createdAt={formatDate(post._createdAt)}
            />
          );
        })}
      </div>
    </>
  );
}
