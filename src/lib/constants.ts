import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icon";

export const SITE_NAME = "Alihan Ayaz";
export const SITE_URL = "https://alihanayaz.com";
export const SITE_DOMAIN = "alihanayaz.com";
export const PRIMARY_CITY = "Istanbul";

export const METADATA = {
  siteUrl: SITE_URL,
  root: {
    title: SITE_NAME,
    description: `${SITE_NAME}'s personal website and portfolio.`,
    path: "/",
  },
  bookmarks: {
    name: "Bookmarks",
    title: `Bookmarks — ${SITE_NAME}`,
    description:
      "A curated collection of bookmarks—insightful articles, captivating reads, and valuable resources.",
    path: "/bookmarks",
  },
};

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
};

export const REVALIDATE = {
  BOOKMARKS: 60 * 60 * 24 * 2, // 2 days
  WEATHER: 60 * 10, // 10 minutes
};

export const BOOKMARKS_CONFIG = {
  BOOKMARKS_PER_PAGE: 20,
  PUBLIC_BOOKMARK_COLLECTION_ID: 58710200,
};
