import { NextResponse } from "next/server";

export const isDevelopment = process.env.NODE_ENV === "development";

export function jsonResponse<T extends object>(data: T, status = 200) {
  return NextResponse.json(
    { ...data, now: new Date().toISOString() },
    { status },
  );
}
