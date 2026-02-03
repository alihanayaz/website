import { useRef } from "react";

interface DragScrollOptions {
  enabled?: boolean;
  speed?: number;
}

interface DragScrollState {
  isDragging: boolean;
  startX: number;
  scrollLeft: number;
}

export function useDragScroll<T extends HTMLElement>({
  enabled = true,
  speed = 1.5,
}: DragScrollOptions = {}) {
  const ref = useRef<T>(null);

  const state = useRef<DragScrollState>({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!enabled || !ref.current || e.pointerType === "touch") return;

    const el = ref.current;

    state.current.isDragging = true;
    state.current.startX = e.clientX;
    state.current.scrollLeft = el.scrollLeft;

    el.style.scrollSnapType = "none";
    el.style.cursor = "grabbing";

    el.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (
      !enabled ||
      !ref.current ||
      e.pointerType === "touch" ||
      !state.current.isDragging
    )
      return;

    e.preventDefault();

    const el = ref.current;
    const deltaX = e.clientX - state.current.startX;
    const scrollOffset = deltaX * speed;

    el.scrollLeft = state.current.scrollLeft - scrollOffset;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!ref.current || !state.current.isDragging) return;

    const el = ref.current;

    state.current.isDragging = false;

    el.style.scrollSnapType = "";
    el.style.cursor = "grab";

    el.releasePointerCapture(e.pointerId);
  };

  return {
    ref,
    dragScrollProps: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
    },
  };
}
