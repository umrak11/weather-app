import {
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiBarometer,
  WiNightRain,
  WiSunset,
} from "react-icons/wi";
import SummaryCard from "./SummaryCard";
import { TbTemperature } from "react-icons/tb";
import { useCurrentWeatherData } from "../../utils/useCurrentWeatherData";
import { TailSpin } from "react-loading-icons";


function Summary() {
  const currentWeatherData = useCurrentWeatherData();

  if (currentWeatherData.isLoading) return <div className="flex justify-center"><TailSpin stroke="#009FF5" /></div>;
  if (currentWeatherData.isError) return <div>Error</div>;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Trenutne razmere</h2>
      <div className="text-sm my-3">Čas osvežitve: {currentWeatherData.data.dateTime}</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-8 text-center">
        {Object.keys(currentWeatherData.data).map((key) => {
          const data = currentWeatherData.data[key];
          switch (key) {
            case WeatherDataKey.temperature:
              return (
                <SummaryCard
                  key={key}
                  title="Temperatura"
                  bgColor="bg-indigo-50"
                  icon={<TbTemperature />}
                  data={`${data} °C`}
                />
              );
            case WeatherDataKey.humidity:
              return (
                <SummaryCard
                  key={key}
                  title="Vlaga"
                  bgColor="bg-washedGreen"
                  icon={<WiHumidity />}
                  data={`${data} %`}
                />
              );
            case WeatherDataKey.windSpeed:
              return (
                <SummaryCard
                  key={key}
                  title="Hitrost vetra"
                  bgColor="bg-gray-50"
                  icon={<WiStrongWind />}
                  data={`${data} km/h`}
                />
              );
            case WeatherDataKey.pressure:
              return (
                <SummaryCard
                  key={key}
                  title="Pritisk"
                  bgColor="bg-red-50"
                  icon={<WiBarometer />}
                  data={`${data} hPa`}
                />
              );
            case WeatherDataKey.solarRadiation:
              return (
                <SummaryCard
                  key={key}
                  title="Sončno obsevanje"
                  bgColor="bg-yellow-100"
                  icon={<WiSunrise />}
                  data={`${data} W/m²`}
                />
              );
            case WeatherDataKey.uv:
              return (
                <SummaryCard
                  key={key}
                  title="UV indeks"
                  bgColor="bg-yellow-50"
                  icon={<WiSunset />}
                  data={data}
                />
              );
            case WeatherDataKey.precipTotal:
              return (
                <SummaryCard
                  key={key}
                  title="Padavine"
                  bgColor="bg-blue-50"
                  icon={<WiNightRain />}
                  data={`${data} mm`}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </>
  );
}

export default Summary;

enum WeatherDataKey {
  temperature = "temperature",
  humidity = "humidity",
  windSpeed = "windSpeed",
  pressure = "pressure",
  solarRadiation = "solarRadiation",
  uv = "uv",
  precipTotal = "precipTotal",
}
