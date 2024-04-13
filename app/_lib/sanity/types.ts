export interface PostProps {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  _createdAt: string;
}

export interface TimelineProps {
  year: string;
  title: string;
  duration?: string;
  detail: string;
  image?: string;
}
