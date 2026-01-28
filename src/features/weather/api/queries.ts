import "server-only";

import { cache } from "react";
import { fetcher } from "@/lib/utils";
import { PRIMARY_CITY, REVALIDATE } from "@/lib/constants";
import type { WeatherApiResponse } from "@/features/weather";

const WEATHERAPI_KEY = process.env.WEATHERAPI_KEY;
const WEATHERAPI_BASE_URL = "https://api.weatherapi.com/v1";

export const getCurrentWeather = cache(async (city: string = PRIMARY_CITY) => {
  if (!WEATHERAPI_KEY) {
    throw new Error("Missing environment variable: WEATHERAPI_KEY");
  }

  const url = `${WEATHERAPI_BASE_URL}/current.json?key=${WEATHERAPI_KEY}&q=${encodeURIComponent(
    city,
  )}`;

  return await fetcher<WeatherApiResponse>(url, {
    revalidate: REVALIDATE.WEATHER,
  });
});
