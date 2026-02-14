import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icon";

export const SITE_NAME = "Alihan Ayaz";
export const SITE_URL = "https://alihanayaz.com";
export const SITE_DOMAIN = "alihanayaz.com";
export const DEFAULT_LOCALE = "en-US";
export const PRIMARY_CITY = "Istanbul";

export const METADATA = {
  siteUrl: SITE_URL,
  root: {
    name: "Home",
    title: SITE_NAME,
    description: `${SITE_NAME}'s personal website and portfolio.`,
    path: "/",
  },
  bookmarks: {
    name: "Bookmarks",
    title: `Bookmarks — ${SITE_NAME}`,
    description:
      "My digital archive. A curation of insightful reads, resources, and timeless ideas—gathered for inspiration and future reference.",
    path: "/bookmarks",
  },
  colophon: {
    name: "Colophon",
    title: `Colophon — ${SITE_NAME}`,
    description:
      "A behind-the-scenes look at the tools, technologies, and processes that power this website, along with acknowledgments to those who contributed to its creation.",
    path: "/colophon",
  },
  now: {
    name: "Now",
    title: `Now — ${SITE_NAME}`,
    description:
      "A snapshot of what I'm currently focused on, learning, and exploring in both my personal and professional life.",
    path: "/now",
  },
  writing: {
    name: "Writing",
    title: `Writing — ${SITE_NAME}`,
    description:
      "My digital garden. Essays bridging technology and the humanities—exploring the intersection of code, language, and life.",
    path: "/writing",
  },
};

export const NAV_ITEMS = [
  { href: METADATA.root.path, label: METADATA.root.name },
  { href: METADATA.writing.path, label: METADATA.writing.name },
  { href: METADATA.bookmarks.path, label: METADATA.bookmarks.name },
];

export const CONTACT = [
  {
    title: "Email",
    href: "mailto:alihan@alihanayaz.com",
    icon: MailIcon,
  },
  {
    title: "Github",
    href: "https://github.com/alihanayaz",
    icon: GitHubIcon,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/alihan-ayaz",
    icon: LinkedInIcon,
  },
];

export const CONTENT_TYPE = {
  BOOKMARKS: "bookmarks",
  PAGE: "page",
  WRITING: "writing",
};

export const REVALIDATE = {
  BOOKMARKS: 60 * 60 * 24 * 2, // 2 days
  WEATHER: 60 * 10, // 10 minutes
};

export const BOOKMARKS_CONFIG = {
  BOOKMARKS_PER_PAGE: 20,
  PUBLIC_BOOKMARK_COLLECTION_ID: 58710200,
};
