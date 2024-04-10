import React from "react";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
  type PortableTextComponentProps,
} from "@portabletext/react";
import { slugify } from "@/_lib/helpers";
import { urlFor } from "@/_lib/sanity/query";
import styles from "./PortableContent.module.scss";

export const PortableContent = ({
  content,
}: {
  content: PortableTextBlock[];
}) => {
  const LinkableHeader = ({
    children,
  }: PortableTextComponentProps<PortableTextBlock>) => {
    const childrenArray = React.Children.toArray(children);
    const joinedChildren = childrenArray.join("");
    const slug = slugify(joinedChildren);
    const href = `#${slug}`;
    return (
      <h2 id={slug} className={styles.title}>
        <a href={href}>{children}</a>
      </h2>
    );
  };

  const components: PortableTextComponents = {
    block: {
      h2: LinkableHeader,
    },
    types: {
      image: ({ value }) => {
        return (
          <img
            src={urlFor(value.asset).url()}
            alt={value.alt}
            className={styles.image}
          />
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            target="_blank"
            className={styles.link}
          >
            {children}
          </a>
        );
      },
    },
  };

  return <PortableText value={content} components={components} />;
};
