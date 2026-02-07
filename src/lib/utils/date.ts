import { DEFAULT_LOCALE } from "@/lib/constants";

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString(DEFAULT_LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateTime(date: string | Date) {
  return new Date(date).toISOString().split("T")[0];
}

export function formatDateTitle(date: string | Date) {
  return new Date(date).toLocaleDateString(DEFAULT_LOCALE, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatLocalTime(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat(DEFAULT_LOCALE, {
    timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(date);
}
