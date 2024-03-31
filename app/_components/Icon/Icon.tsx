import { LucideProps } from "lucide-react";
import {
  Menu,
  Sparkles as Home,
  Bookmark as Bookmarks,
  Send as Journey,
  FolderHeart as Collection,
  Link2 as Link,
} from "lucide-react";

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Home,
  Journey,
  Bookmarks,
  Menu,
  Collection,
  Link,
};

const sizeMap = {
  small: 14,
  medium: 16,
  large: 24,
};

export function Icon({
  name,
  size = "medium",
}: {
  name: keyof typeof iconMap;
  size?: keyof typeof sizeMap;
}) {
  if (!(name in iconMap)) {
    return null;
  }

  const IconComponent = iconMap[name];
  const iconSize = sizeMap[size];

  return <IconComponent size={iconSize} />;
}
