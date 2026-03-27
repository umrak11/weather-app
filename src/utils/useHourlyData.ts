import { useQuery } from "react-query";
import { fetchFromApi } from "./api";

export function useHourlyData() {
  return useQuery({
    queryKey: ["hourlyData"],
    queryFn: () => fetchFromApi(`${import.meta.env.VITE_WEATHER_API_URL}/hourly`),
    staleTime: 3600000,
  });
}
