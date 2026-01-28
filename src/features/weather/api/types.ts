export type WeatherApiResponse = {
  location: {
    name: string;
    country: string;
    tz_id: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      code: number;
    };
  };
};
