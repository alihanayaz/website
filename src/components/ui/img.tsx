"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn, isExternalLink } from "@/lib/utils";

type CommonRequired = {
  src: string;
  alt: string;
  fallback?: string;
};
type WithoutSrcAlt<T> = Omit<T, "src" | "alt">;
type ImgProps = CommonRequired &
  WithoutSrcAlt<ImageProps> &
  WithoutSrcAlt<React.ImgHTMLAttributes<HTMLImageElement>>;

export function Img({
  src,
  alt,
  fallback = "/assets/fallback.avif",
  className,
  fill,
  quality,
  preload,
  ...props
}: ImgProps) {
  const [error, setError] = useState(false);

  const resolvedSrc = error || !src?.trim() ? fallback : src;

  if (isExternalLink(resolvedSrc)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolvedSrc}
        alt={alt}
        className={cn("animate-reveal", className)}
        onError={() => setError(true)}
        {...props}
      />
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill={fill}
      quality={quality}
      preload={preload}
      className={cn("animate-reveal", className)}
      onError={() => setError(true)}
      {...props}
    />
  );
}
