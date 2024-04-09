import React from "react";
import {
  PortableText,
  PortableTextComponents,
  PortableTextBlock,
  PortableTextComponentProps,
} from "@portabletext/react";
import { slugify } from "@/_lib/helpers";

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
      <h3 id={slug}>
        <a href={href}>{children}</a>
      </h3>
    );
  };

  const components: PortableTextComponents = {
    block: {
      h3: LinkableHeader,
    },
  };

  return <PortableText value={content} components={components} />;
};
