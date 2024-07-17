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
          <Heading text="My Personal Directory of Notes"></Heading>
          <p className="mb-6">
            Step inside my digital notebook, where you&apos;ll find a glimpse
            into my mind, captured in snippets of thoughts and reflections.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
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
