import "server-only";
import { cache } from "react";
import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

export const getAllPosts = cache(async () => {
  const query = `
    *[_type == "post"] {
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

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
