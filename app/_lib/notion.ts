/* import { cache } from "react";
import "server-only";
import { Client } from "@notionhq/client";

const notionSecretKey = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecretKey,
});

if (!notionSecretKey || !notionDatabaseId) {
  throw new Error("Missing environment variable.");
}

export const queryNotion = cache(async () => {
  try {
    const response = await notion.databases.query({
      database_id: notionDatabaseId,
    });
    return response.results;
  } catch (error) {
    console.error(error);
    return null;
  }
});
 */