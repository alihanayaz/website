import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "text-tiny! inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 font-mono font-medium tracking-wide uppercase transition-colors ease-in-out",
  {
    variants: {
      variant: {
        solid: "bg-foreground text-background",
        outline: "bg-background border-border text-foreground-muted border",
        surface: "bg-border text-foreground-muted",
        plain: "bg-transparent text-foreground-muted",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ElementType;
}

export function Badge({
  children,
  icon: Icon,
  variant,
  className,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {Icon && <Icon size={10} strokeWidth={2.5} />}
      <span>{children}</span>
    </div>
  );
}
