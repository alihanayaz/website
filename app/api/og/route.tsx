import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const imageData = await fetch(
    new URL("/assets/gradient.png", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await fetch(
    new URL("/assets/Inter.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const base64ImageData = Buffer.from(imageData).toString("base64");
  const backgroundImageUrl = `data:image/png;base64,${base64ImageData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "Inter",
          fontSize: 100,
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span>alihan.dev</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
