import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva("inline-block align-middle shrink-0 select-none", {
  variants: {
    variant: {
      stroke: "fill-none stroke-current",
      fill: "fill-current stroke-none",
      plain: "",
    },
  },
  defaultVariants: { variant: "stroke" },
});

interface IconProps
  extends React.SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
  as?: React.ElementType;
  size?: number | string;
  ref?: React.Ref<SVGSVGElement>;
}

export function Icon({
  as: Comp = "svg",
  children,
  variant,
  size = 24,
  viewBox = "0 0 24 24",
  role,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ref,
  className,
  ...rest
}: IconProps) {
  const isDecorative = !ariaLabel && !ariaLabelledBy && role !== "img";
  const isStroke = variant === "stroke";

  return (
    <Comp
      ref={ref}
      width={size}
      height={size}
      viewBox={viewBox}
      strokeLinecap={isStroke ? "round" : undefined}
      strokeLinejoin={isStroke ? "round" : undefined}
      strokeWidth={isStroke ? 2 : undefined}
      className={cn(iconVariants({ variant }), className)}
      aria-hidden={isDecorative ? "true" : undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      role={isDecorative ? role : (role ?? "img")}
      focusable="false"
      {...rest}
    >
      {children}
    </Comp>
  );
}
