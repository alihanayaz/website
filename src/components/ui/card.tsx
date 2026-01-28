import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group relative flex flex-col overflow-hidden transition-all ease-in-out",
  {
    variants: {
      variant: {
        outline: "border-border border",
        plain: "bg-transparent",
      },
      interactive: {
        true: "hover:border-border-hover hover:bg-surface-hover cursor-pointer",
        false: "",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        xxl: "rounded-2xl",
        xxxl: "rounded-3xl",
        full: "rounded-full",
      },
      padding: {
        none: "p-0",
        sm: "p-2 sm:p-4",
        md: "p-4 sm:p-6",
        lg: "p-6 sm:p-8",
      },
    },
    defaultVariants: {
      variant: "plain",
      interactive: false,
      radius: "md",
      padding: "md",
    },
  },
);

interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export function Card({
  asChild = false,
  children,
  variant,
  interactive,
  radius,
  padding,
  ref,
  className,
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      className={cn(
        cardVariants({ variant, interactive, radius, padding }),
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
