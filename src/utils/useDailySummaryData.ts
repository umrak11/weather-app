import { useQuery } from "react-query";
import { fetchFromApi } from "./api";

export function useDailySummaryData() {
  return useQuery({
    queryKey: ["dailySummaryData"],
    queryFn: () => fetchFromApi(`${import.meta.env.VITE_WEATHER_API_URL}/daily-summary`),
    staleTime: 3600000,
  });
}
