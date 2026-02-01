import "server-only";

import { cache } from "react";
import { fetchGql, isDevelopment, type GqlConfig } from "@/lib/utils";
import type { WritingCollectionQuery, WritingEntryQuery } from "./types";

const CONTENTFUL_API_BASE_URL = "https://graphql.contentful.com";
const url = `${CONTENTFUL_API_BASE_URL}/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

async function getContentfulData<T>({
  query,
  variables = {},
  preview = isDevelopment,
  revalidate,
  tags,
}: GqlConfig & {
  preview?: boolean;
}) {
  return await fetchGql<T>(url, {
    query,
    variables: { preview, ...variables },
    headers: {
      Authorization: `Bearer ${
        preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    revalidate,
    tags,
  });
}

export const getWritingEntries = cache(
  async (limit?: number, preview?: boolean) => {
    const query = `
    query WritingCollection($preview: Boolean!, $limit: Int) {
      writingCollection(order: date_DESC, limit: $limit, preview: $preview) {
        items {
          title
          slug
          description
          date
        }
      }
    }
  `;

    const response = await getContentfulData<WritingCollectionQuery>({
      query,
      variables: { limit },
      preview,
    });

    return response?.writingCollection.items ?? [];
  },
);

export const getWritingEntryBySlug = cache(
  async (slug: string, preview?: boolean) => {
    const query = `
    query WritingBySlug($slug: String!, $preview: Boolean!) {
        writingCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
          items {
            title
            slug
            description
            date
            content {
              json
              links {
                assets {
                  block {
                    sys { id }
                    url(transform: { format: AVIF, quality: 50 })
                    title
                    description
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await getContentfulData<WritingEntryQuery>({
      query,
      variables: { slug },
      preview,
    });

    return response?.writingCollection.items[0];
  },
);
