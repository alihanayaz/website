export interface BookmarkCollectionProps {
  _id: string;
  title: string;
  slug: string;
  count: number;
}

export interface BookmarkItemProps {
  _id: string;
  title: string;
  link: string;
  cover: string;
  excerpt: string;
}
