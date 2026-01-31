"use client";

import { usePathname } from "next/navigation";
import { useCopy } from "@/hooks";
import { Button, Icon } from "@/components/ui";
import { Copy, Check } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

interface CopyButtonProps {
  content?: string;
  className?: string;
}

export function CopyButton({ content, className = "" }: CopyButtonProps) {
  const pathname = usePathname();

  const { isCopied, copyToClipboard } = useCopy(
    content || `${SITE_URL}${pathname || "/"}`,
  );

  return (
    <Button
      onClick={copyToClipboard}
      variant="outline"
      size="sm"
      tone="muted"
      disabled={isCopied}
      aria-label={isCopied ? "Copied" : content ? "Copy content" : "Copy link"}
      title={isCopied ? "Copied!" : content ? "Copy content" : "Copy link"}
      className={className}
    >
      {isCopied ? <Icon as={Check} size={16} /> : <Icon as={Copy} size={16} />}
      {!content ? (isCopied ? "Copied" : "Share") : null}
    </Button>
  );
}
