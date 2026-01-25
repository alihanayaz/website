import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, isExternalLink } from "@/lib/utils";
import { SITE_DOMAIN } from "@/lib/constants";

const hyperlinkVariants = cva("break-words", {
  variants: {
    variant: {
      default: "link",
      plain: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface HyperlinkProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof hyperlinkVariants> {
  href?: string;
  children: React.ReactNode;
  disableRef?: boolean;
}

function appendRefToUrl(href: string, refDomain: string): string {
  try {
    const url = new URL(href);
    url.searchParams.set("ref", refDomain);
    return url.toString();
  } catch {
    return href;
  }
}

export function Hyperlink({
  href = "#",
  children,
  variant,
  disableRef = false,
  className,
  ...props
}: HyperlinkProps) {
  const isExternal = isExternalLink(href);
  const classes = cn(
    hyperlinkVariants({ variant }),
    className,
    isExternal && variant !== "plain" && "after:content-['_↗']",
  );

  if (isExternal) {
    return (
      <a
        href={disableRef ? href : appendRefToUrl(href, SITE_DOMAIN)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
