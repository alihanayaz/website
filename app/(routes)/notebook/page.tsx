import styles from "./page.module.scss";
import { getAllPosts, urlFor } from "@/_lib/sanity/query";
import { formatDate } from "@/_lib/helpers";
import { PostProps } from "@/_lib/sanity/types";
import PostCard from "@/_components/PostCard";
import Heading from "@/_components/Heading";
import { notFound } from "next/navigation";
import MessageDisplay from "@/_components/MessageDisplay";

export default async function Page() {
  const posts = await getAllPosts();
  !posts && notFound();
  return (
    <>
      {!posts.length ? (
        <MessageDisplay type="emptyState" />
      ) : (
        <>
          <Heading>
            <h1>My Personal Directory of Notes</h1>
            <p>
              Step inside my digital notebook, where you&apos;ll find a glimpse
              into my mind, captured in snippets of thoughts and reflections.
            </p>
          </Heading>
          <div className={styles.container}>
            {posts.map((post: PostProps, i: number) => {
              return (
                <PostCard
                  key={i}
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
      )}
    </>
  );
}
