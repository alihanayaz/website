import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}

export const isExternalLink = (href: string): boolean =>
  !!href && !href.startsWith("/") && !href.startsWith("#");
