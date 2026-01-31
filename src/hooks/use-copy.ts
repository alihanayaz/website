import { useState, useEffect, useRef } from "react";

export function useCopy(text: string) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const clearTimeoutRef = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const fallbackCopy = (value: string) => {
    const textarea = document.createElement("textarea");

    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";

    document.body.appendChild(textarea);
    textarea.select();

    const ok = document.execCommand("copy");

    document.body.removeChild(textarea);
    return ok;
  };

  async function copyToClipboard(): Promise<boolean> {
    clearTimeoutRef();

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ok = fallbackCopy(text);
        if (!ok) return false;
      }

      setIsCopied(true);

      timeoutRef.current = window.setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return true;
    } catch {
      setIsCopied(false);
      clearTimeoutRef();
      return false;
    }
  }

  useEffect(() => () => clearTimeoutRef(), []);

  return { isCopied, copyToClipboard };
}
