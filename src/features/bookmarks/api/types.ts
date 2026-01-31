export type BookmarkCollection = {
  _id: number;
  title: string;
  slug: string;
  parent: { $id: number } | null;
  count: number;
};

export type BookmarkItem = {
  _id: number;
  title: string;
  excerpt: string;
  link: string;
  domain: string;
  cover: string;
};

export type BookmarkResponse = {
  collectionId: number;
  items: BookmarkItem[];
  count: number;
};

export type PaginatedBookmarks = {
  items: BookmarkItem[];
  total: number;
  totalPages: number;
  currentPage: number;
};
