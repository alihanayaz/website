"use client";

import { useState, useEffect } from "react";
import { formatLocalTime } from "@/lib/utils";

interface UseClockOptions {
  timeZone: string;
}

export function useClock({ timeZone }: UseClockOptions) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatLocalTime(new Date(), timeZone));

    update();

    const now = new Date();
    const msToNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeoutId = setTimeout(() => {
      update();
      const intervalId = setInterval(update, 60_000);
      return () => clearInterval(intervalId);
    }, msToNextMinute);

    return () => clearTimeout(timeoutId);
  }, [timeZone]);

  return time;
}
