export const isExternalLink = (href: string): boolean =>
  !!href && !href.startsWith("/") && !href.startsWith("#");
