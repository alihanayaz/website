import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-border h-auto w-full animate-pulse rounded-md",
        className,
      )}
    />
  );
}
