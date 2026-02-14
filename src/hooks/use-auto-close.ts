export function useAutoClose(closeFn: () => void) {
  const handleAutoClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const shouldClose = target.closest("a[href]");
    if (shouldClose) {
      closeFn();
    }
  };

  return { handleAutoClose };
}
