import { TailSpin } from "react-loading-icons";
import PrecipChart from "../components/graphs/PrecipChart";
import PressureChart from "../components/graphs/PressureChart";
import SolarRadiationChart from "../components/graphs/SolarRadiationChart";
import TemperatureChart from "../components/graphs/TemperatureChart";
import UVIndexChart from "../components/graphs/UVIndexChart";
import WindDirChart from "../components/graphs/WindDirChart";
import WindSpeedChart from "../components/graphs/WindSpeedChart";
import { useDailyGraphsData } from "../utils/useDailyGraphsData";
import { useTranslation } from "react-i18next";

function Graphs() {
  const { t } = useTranslation();
  const chartsData = useDailyGraphsData();
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

  if (chartsData.isLoading)
    return (
      <div className="flex justify-center">
        <TailSpin stroke="#009FF5" />
      </div>
    );

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{t('graphsPage.dailyGraphs')}: {date}</h2>
      <div className="text-xl text-center mb-4">{t('temperature')}</div>
      <TemperatureChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">{t('windSpeed')}</div>
      <WindSpeedChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">{t('windDir')}</div>
      <WindDirChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">{t('precipTotal')}</div>
      <PrecipChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">{t('pressure')}</div>
      <PressureChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">{t('solarRadiation')}</div>
      <SolarRadiationChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">{t('uv')}</div>
      <UVIndexChart chartsData={chartsData.data} />
    </>
  );
}

export default Graphs;
