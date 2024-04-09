import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fxilysgk",
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: "2024-01-01",
  useCdn: false,
});
