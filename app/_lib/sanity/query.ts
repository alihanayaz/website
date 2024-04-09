import "server-only";
import { cache } from "react";
import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

export const getAllPosts = cache(async () => {
  const query = `
    *[_type == "post"] | order(_createdAt desc) {
        title,
        "slug": slug.current,
        excerpt,
        "image": coverImage.asset._ref,
        _createdAt
      }
    `;
  const data = await client.fetch(query);
  return data;
});

export const getPost = cache(async (slug: string) => {
  const query = `
    *[_type == "post" && slug.current == '${slug}'] {
        title,
        content,
        _createdAt
      }[0]
    `;
  const data = await client.fetch(query);
  return data;
});

export const getTimeline = cache(async () => {
  const query = `
    *[_type == "timeline"] | order(_createdAt desc) {
      title,
      year,
      duration,
      detail
      }
    `;
  const data = await client.fetch(query);
  return data;
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
