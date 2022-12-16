import { TailSpin } from "react-loading-icons";
import PrecipChart from "../components/graphs/PrecipChart";
import PressureChart from "../components/graphs/PressureChart";
import SolarRadiationChart from "../components/graphs/SolarRadiationChart";
import TemperatureChart from "../components/graphs/TemperatureChart";
import UVIndexChart from "../components/graphs/UVIndexChart";
import WindDirChart from "../components/graphs/WindDirChart";
import WindSpeedChart from "../components/graphs/WindSpeedChart";
import { useDailyGraphsData } from "../utils/useDailyGraphsData";

function Graphs() {
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
      <h2 className="text-2xl font-bold mb-4">Dnevni grafi za dan: {date}</h2>
      <div className="text-xl text-center mb-4">Temperatura</div>
      <TemperatureChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">Veter</div>
      <WindSpeedChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">Smer vetra</div>
      <WindDirChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">Padavine</div>
      <PrecipChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">Zračni tlak</div>
      <PressureChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">Sončno sevanje</div>
      <SolarRadiationChart chartsData={chartsData.data} />
      <div className="text-xl text-center mt-12 mb-4">UV index</div>
      <UVIndexChart chartsData={chartsData.data} />
    </>
  );
}

export default Graphs;
