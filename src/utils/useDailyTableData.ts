import { useQuery } from "react-query";
import { fetchFromApi } from "./api";

export function useDailyTableData() {
  const dailyTableData = useQuery({
    queryKey: ["dailyTableData"], 
    queryFn: () => fetchFromApi(`${import.meta.env.VITE_WEATHER_API_URL}/daily-table`),
    staleTime: 3600000, // 1 hour
});

  return dailyTableData;
}
