import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

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

export function GitHubIcon(props: IconProps) {
  return (
    <Icon variant="fill" viewBox="0 0 15 15" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
      />
    </Icon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Icon variant="fill" viewBox="0 0 15 15" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
      />
    </Icon>
  );
}

export function MailIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <Mail
      size={size}
      className={cn(iconVariants({ variant: "stroke" }), className)}
      {...props}
    />
  );
}

export function LogoIcon(props: IconProps) {
  return (
    <Icon variant="fill" viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0142157 20.6111C0.11958 20.0637 2.02061 18.9631 9.41967 15.1661C15.801 11.8913 20.1027 10.4255 21.0426 11.2056C21.5729 11.6456 21.6389 12.7491 21.1857 13.596C20.3481 15.1611 22.444 14.3045 24.2504 12.3435C25.4774 11.0116 26.1598 10.7469 26.1568 11.6041C26.1563 11.7948 25.2962 12.9333 24.2459 14.1341C20.5619 18.3457 19.2359 20.2472 19.9833 20.2472C20.1904 20.2472 22.4951 18.8715 27.9047 15.5188C31.3796 13.3651 31.7128 13.1875 31.9094 13.3842C32.3591 13.8339 31.2353 14.6905 26.2459 17.7009C19.6087 21.7055 18.0254 22.0692 18.0116 19.5923C18.0061 18.6039 17.6563 18.5857 16.4438 19.5105C14.9488 20.6507 13.4948 21.1613 12.6534 20.8415C11.8446 20.534 11.3118 19.723 11.3118 18.7993C11.3118 17.9996 12.2512 16.1737 13.0206 15.4779C14.1041 14.498 13.3676 14.4226 11.6645 15.3392C10.7501 15.8312 9.87088 16.3394 9.71077 16.4684C9.18351 16.8933 0.583139 21.1205 0.24597 21.1205C0.0645785 21.1205 -0.039711 20.8913 0.0142157 20.6111ZM18.7193 15.508C18.3089 16.4599 16.2889 18.6858 15.1597 19.4305C14.3252 19.9808 13.3496 20.1287 13.3496 19.7048C13.3496 19.1049 18.1461 12.9697 18.6151 12.9697C18.9953 12.9697 19.0664 14.7029 18.7193 15.508Z"
      />
    </Icon>
  );
}
