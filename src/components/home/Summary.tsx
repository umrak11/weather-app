import {
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiBarometer,
  WiNightRain,
  WiSunset,
} from "react-icons/wi";
import { useTranslation } from "react-i18next";
import SummaryCard from "./SummaryCard";
import { TbTemperature } from "react-icons/tb";
import { useCurrentWeatherData } from "../../utils/useCurrentWeatherData";
import { TailSpin } from "react-loading-icons";


function Summary() {
  const currentWeatherData = useCurrentWeatherData();
  const { t } = useTranslation();

  if (currentWeatherData.isLoading) return <div className="flex justify-center"><TailSpin stroke="#009FF5" /></div>;
  if (currentWeatherData.isError) return <div>{t('error')}</div>;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{t('homePage.currentConditions')}</h2>
      <div className="text-sm my-3">{t('homePage.refreshTime')}: {currentWeatherData.data.dateTime}</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-8 text-center">
        {Object.keys(currentWeatherData.data).map((key) => {
          const data = currentWeatherData.data[key];
          switch (key) {
            case WeatherDataKey.temperature:
              return (
                <SummaryCard
                  key={key}
                  title={t('temperature')}
                  bgColor="bg-indigo-50"
                  icon={<TbTemperature />}
                  data={`${data} °C`}
                />
              );
            case WeatherDataKey.humidity:
              return (
                <SummaryCard
                  key={key}
                  title={t('humidity')}
                  bgColor="bg-washedGreen"
                  icon={<WiHumidity />}
                  data={`${data} %`}
                />
              );
            case WeatherDataKey.windSpeed:
              return (
                <SummaryCard
                  key={key}
                  title={t('windSpeed')}
                  bgColor="bg-gray-50"
                  icon={<WiStrongWind />}
                  data={`${data} km/h`}
                />
              );
            case WeatherDataKey.pressure:
              return (
                <SummaryCard
                  key={key}
                  title={t('pressure')}
                  bgColor="bg-red-50"
                  icon={<WiBarometer />}
                  data={`${data} hPa`}
                />
              );
            case WeatherDataKey.solarRadiation:
              return (
                <SummaryCard
                  key={key}
                  title={t('solarRadiation')}
                  bgColor="bg-yellow-100"
                  icon={<WiSunrise />}
                  data={`${data} W/m²`}
                />
              );
            case WeatherDataKey.uv:
              return (
                <SummaryCard
                  key={key}
                  title={t('uv')}
                  bgColor="bg-yellow-50"
                  icon={<WiSunset />}
                  data={data}
                />
              );
            case WeatherDataKey.precipTotal:
              return (
                <SummaryCard
                  key={key}
                  title={t('precipTotal')}
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
