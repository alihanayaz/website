import type { LucideProps } from "lucide-react";
import {
  FolderOpen as Collection,
  Link2 as Link,
  X as Close,
  Linkedin as LinkedIn,
  Github,
  ExternalLink,
} from "lucide-react";

const TwitterIcon: React.FC<LucideProps> = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${size} w-${size}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Collection,
  Link,
  Close,
  LinkedIn,
  Github,
  Twitter: TwitterIcon,
  ExternalLink,
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
