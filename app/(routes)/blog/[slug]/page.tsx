import { getAllPosts, getPost } from "@/_lib/sanity/query";
import { PostProps } from "@/_lib/sanity/types";
import { formatDate } from "@/_lib/helpers";
import Heading from "@/_components/Heading";
import PortableContent from "@/_components/PortableContent";
import { notFound } from "next/navigation";

export const dynamicParams = false;
export const dynamic = "auto";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: PostProps) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);
  !post && notFound();
  const { title, content, _createdAt } = post;

  return (
    <>
      <span className="self-end mb-3 text-sm text-neutral-500">
        {formatDate(_createdAt)}
      </span>
      <Heading text={title}></Heading>
      <hr />
      <div className="flex flex-col gap-6 mt-8">
        <PortableContent content={content} />
      </div>
    </>
  );
}
