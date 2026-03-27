import { useQuery } from "react-query";
import { fetchFromApi } from "./api";

export function useHistoryHourlyData(date: string) {
  return useQuery({
    queryKey: ["historyHourly", date],
    queryFn: () =>
      fetchFromApi(`${import.meta.env.VITE_WEATHER_API_URL}/history-hourly?date=${date}`),
    staleTime: 3600000,
    enabled: !!date,
  });
}
