import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("tracking-tight", {
  variants: {
    size: {
      xs: "text-lg lg:text-xl",
      sm: "text-xl lg:text-2xl",
      md: "text-2xl lg:text-3xl",
      lg: "text-3xl lg:text-4xl",
      xl: "text-4xl lg:text-5xl",
    },
    weight: {
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "semibold",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps
  extends
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
  ref?: React.Ref<HTMLHeadingElement>;
}

export function Heading({
  as: Comp = "h2",
  size,
  weight,
  ref,
  className,
  ...props
}: HeadingProps) {
  return (
    <Comp
      ref={ref}
      className={cn(headingVariants({ size, weight }), className)}
      {...props}
    />
  );
}
