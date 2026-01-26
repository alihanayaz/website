import { ComponentType } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui";

export function withDynamic<T>(
  importFn: () => Promise<{ default: ComponentType<T> } | ComponentType<T>>,
  className?: string,
) {
  return dynamic(importFn, {
    ssr: false,
    loading: () => <Skeleton className={className} />,
  });
}
