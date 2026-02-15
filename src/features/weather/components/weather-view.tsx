"use client";

import { useClock } from "@/hooks";
import { Badge, Icon, Text } from "@/components/ui";
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

function LiveDot() {
  return <div className="size-1.5 animate-pulse rounded-full bg-emerald-500" />;
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
    <div className="flex flex-col justify-between gap-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-1">
          <Icon as={MapPin} size={16} />
          <Text as="span" weight="medium" className="tracking-tight">
            {city}, {country}
          </Text>
        </div>

        <Badge
          variant="outline"
          icon={LiveDot}
          className="border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-700 dark:bg-emerald-900 dark:text-emerald-400"
        >
          Live
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Text
            as="span"
            size="xl"
            weight="medium"
            className="leading-none tracking-tight tabular-nums"
          >
            {tempC}°
          </Text>
          <Text as="span" size="sm" weight="medium" tone="muted">
            {condition}
          </Text>
        </div>

        <div className="flex flex-col items-end gap-1">
          <Text
            as="span"
            size="xl"
            weight="medium"
            className="leading-none tracking-tight tabular-nums"
          >
            {time || "--:--"}
          </Text>
          <Text
            as="span"
            size="xs"
            weight="medium"
            tone="subtle"
            className="tracking-wide uppercase"
          >
            Local Time
          </Text>
        </div>
      </div>
    </div>
  );
}
