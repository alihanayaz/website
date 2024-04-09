import { revalidatePath } from "next/cache";
import { CONTENT_TYPES } from "@/_lib/constants";

const secret = `${process.env.NEXT_REVALIDATE_SECRET}`;

export async function POST(request: Request) {
  const payload = await request.json();

  const requestHeaders = new Headers(request.headers);
  const revalidateSecret = requestHeaders.get("x-revalidate-secret");
  if (revalidateSecret !== secret) {
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: "Invalid secret",
      },
      { status: 401 }
    );
  }

  const { contentType, slug } = payload;

  switch (contentType) {
    case CONTENT_TYPES.POST:
      if (slug) {
        revalidatePath(`/notebook/${slug}`);
        revalidatePath("/notebook");
      } else {
        return Response.json(
          {
            revalidated: false,
            now: Date.now(),
            message: "Missing slug to revalidate",
          },
          { status: 400 }
        );
      }
      break;
    case CONTENT_TYPES.TIMELINE:
      revalidatePath("/journey");
      break;
    default:
      return Response.json(
        {
          revalidated: false,
          now: Date.now(),
          message: "Invalid content type",
        },
        { status: 400 }
      );
  }

  return Response.json({ revalidated: true, now: Date.now() });
}
