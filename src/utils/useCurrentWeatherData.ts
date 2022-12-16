import { useQuery } from "react-query";
import { fetchFromApi } from "./api";

export function useCurrentWeatherData() {
  const currentWeatherDataQuery = useQuery("currentWeatherData", () =>
    fetchFromApi(`${import.meta.env.VITE_WEATHER_API_URL}/current-weather`)
  );

  return currentWeatherDataQuery;
}
