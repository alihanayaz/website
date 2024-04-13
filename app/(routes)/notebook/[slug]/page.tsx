import styles from "./page.module.scss";
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
      <Heading>
        <h1>{title}</h1>
        <span className={styles.date}>{formatDate(_createdAt)}</span>
      </Heading>
      <hr />
      <div className={styles.container}>
        <PortableContent content={content} />
      </div>
    </>
  );
}
