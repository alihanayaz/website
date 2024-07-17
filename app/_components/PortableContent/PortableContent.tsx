import React from "react";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
  type PortableTextComponentProps,
} from "@portabletext/react";
import { slugify } from "@/_lib/helpers";
import { urlFor } from "@/_lib/sanity/query";

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
      <h2
        id={slug}
        className="relative cursor-pointer text-xl font-semibold hover:underline hover:underline-offset-4 hover:before:absolute hover:before:-left-4 hover:before:content-['#']"
      >
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
            className="rounded-lg"
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
            className="text-blue-700 hover:underline hover:underline-offset-4"
          >
            {children}
          </a>
        );
      },
    },
  };

  return <PortableText value={content} components={components} />;
};
