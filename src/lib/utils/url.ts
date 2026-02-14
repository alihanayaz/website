export const isActiveLink = (path: string, href: string): boolean =>
  href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

export const isExternalLink = (href: string): boolean =>
  !!href && !href.startsWith("/") && !href.startsWith("#");
