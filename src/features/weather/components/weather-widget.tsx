import { getCurrentWeather } from "@/features/weather/api/queries";
import { WeatherView } from "./weather-view";
import { Card } from "@/components/ui";

export async function WeatherWidget() {
  const weather = await getCurrentWeather();

  if (!weather?.location || !weather?.current) return null;

  const {
    location: { name, country, tz_id },
    current: { temp_c, condition, is_day },
  } = weather;

  if (!name || !tz_id || temp_c == null || !condition?.text) {
    return null;
  }

  return (
    <Card variant="outline" className="col-span-full">
      <WeatherView
        city={name}
        country={country}
        tzId={tz_id}
        tempC={Math.round(temp_c)}
        condition={condition.text}
        isDay={is_day}
        code={condition.code}
      />
    </Card>
  );
}
