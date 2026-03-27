import { useQuery } from "react-query";
import { fetchFromApi } from "./api";

export function useWeeklyData() {
  return useQuery({
    queryKey: ["weeklyData"],
    queryFn: () => fetchFromApi(`${import.meta.env.VITE_WEATHER_API_URL}/weekly`),
    staleTime: 3600000, // 1 hour
  });
}
