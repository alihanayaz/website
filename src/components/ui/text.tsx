import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("leading-relaxed", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    tone: {
      base: "text-foreground",
      muted: "text-foreground-muted",
      subtle: "text-foreground-subtle",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    tone: "base",
  },
});

type TextProps<T extends React.ElementType> = {
  as?: T;
} & VariantProps<typeof textVariants> &
  React.ComponentProps<T>;

export function Text<T extends React.ElementType = "p">({
  as,
  size,
  weight,
  tone,
  ref,
  className,
  ...props
}: TextProps<T>) {
  const Comp = as || "p";

  return (
    <Comp
      ref={ref}
      className={cn(textVariants({ size, weight, tone }), className)}
      {...props}
    />
  );
}
