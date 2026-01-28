"use client";

import { useClock } from "@/hooks";
import { Icon, Text } from "@/components/ui";
import { MapPin } from "lucide-react";

interface WeatherViewProps {
  city: string;
  country: string;
  tzId: string;
  tempC: number;
  condition: string;
  isDay: number;
  code: number;
}

export function WeatherView({
  city,
  country,
  tzId,
  tempC,
  condition,
}: WeatherViewProps) {
  const time = useClock({ timeZone: tzId });

  return (
    <div className="flex flex-col gap-px">
      <div className="flex items-center gap-1">
        <Icon as={MapPin} size={12} strokeWidth={2.5} />
        <Text as="span" size="sm" weight="semibold" className="tracking-tight">
          {city}, {country}
        </Text>
      </div>

      <div className="mt-auto flex items-end justify-between">
        <div className="flex flex-col gap-px">
          <Text
            as="span"
            size="xxxl"
            weight="medium"
            className="tracking-tight tabular-nums"
          >
            {tempC}°
          </Text>
          <Text as="span" size="xs" weight="medium" tone="muted">
            {condition}
          </Text>
        </div>

        <div className="flex flex-col items-end gap-px font-mono">
          <Text
            as="span"
            size="xs"
            weight="medium"
            tone="muted"
            className="tracking-wide uppercase"
          >
            Local Time
          </Text>
          <Text
            as="span"
            size="lg"
            weight="medium"
            className="tracking-tight tabular-nums"
          >
            {time || "--:--"}
          </Text>
        </div>
      </div>
    </div>
  );
}
