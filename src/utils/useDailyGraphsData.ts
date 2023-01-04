import { useQuery } from "react-query";
import { fetchFromApi } from "./api";

export function useDailyGraphsData() {
  const dailyGraphsData = useQuery({
    queryKey: ["dailyGraphsData"], 
    queryFn: () => fetchFromApi(`${process.env.WEATHER_API_URL}/daily-graphs`),
    staleTime: 3600000, // 1 hour
});

  return dailyGraphsData;
}
