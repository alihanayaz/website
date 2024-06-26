import "server-only";
import { cache } from "react";
import { BOOKMARK_COLLECTIONS } from "@/_lib/constants";

const raindropApiUrl = "https://api.raindrop.io/rest/v1";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
  },
};

export const getBookmarkCollections = cache(async () => {
  try {
    const response = await fetch(`${raindropApiUrl}/collections`, options);
    const responseData = await response.json();
    const filteredData = await responseData.items.filter(
      (item: any) => item.count > 0 && BOOKMARK_COLLECTIONS.includes(item._id)
    );
    return filteredData;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export const getBookmarks = cache(async (id: string) => {
  try {
    const response = await fetch(`${raindropApiUrl}/raindrops/${id}`, options);
    const responseData = await response.json();
    return responseData.items;
  } catch (error) {
    console.error(error);
    return null;
  }
});
