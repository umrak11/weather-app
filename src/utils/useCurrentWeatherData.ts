import { useQuery } from "react-query";
import { fetchFromApi } from "./api";

export function useCurrentWeatherData() {
  const currentWeatherDataQuery = useQuery("currentWeatherData", () =>
    fetchFromApi(`${process.env.WEATHER_API_URL}/current-weather`)
  );

  return currentWeatherDataQuery;
}
