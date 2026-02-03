import { revalidatePath, revalidateTag } from "next/cache";
import { jsonResponse } from "@/lib/utils";
import { CONTENT_TYPE, METADATA } from "@/lib/constants";
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

type RevalidatePayload = {
  type: string;
  slug?: string;
};

export async function POST(request: Request) {
  const revalidateSecret = request.headers.get("x-revalidate-secret");

  if (!revalidateSecret || revalidateSecret !== REVALIDATE_SECRET) {
    return jsonResponse({ revalidated: false, message: "Unauthorized" }, 401);
  }

  let payload: RevalidatePayload;

  try {
    payload = (await request.json()) as RevalidatePayload;
  } catch {
    return jsonResponse({ revalidated: false, message: "Invalid JSON" }, 400);
  }

  const { type, slug } = payload ?? {};

  if (!type) {
    return jsonResponse({ revalidated: false, message: "Missing type" }, 400);
  }

  try {
    switch (type) {
      case CONTENT_TYPE.PAGE:
        if (slug) {
          revalidatePath(`/${slug}`);
        }
        break;
      case CONTENT_TYPE.WRITING:
        if (slug) {
          revalidatePath(`${METADATA.writing.path}/${slug}`);
        }
        revalidatePath(METADATA.writing.path);
        break;
      case CONTENT_TYPE.BOOKMARKS:
        revalidateTag("bookmarks", "max");
        break;
      default:
        return jsonResponse(
          { revalidated: false, message: "Invalid type" },
          400,
        );
    }

    return jsonResponse(
      {
        revalidated: true,
        message: `${type}${slug ? ` (${slug})` : ""} revalidated`,
      },
      200,
    );
  } catch (error) {
    console.error("Error revalidating:", error);
    return jsonResponse(
      { revalidated: false, message: "Error revalidating" },
      500,
    );
  }
}
