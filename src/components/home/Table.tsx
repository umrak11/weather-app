import { getEnvironmentData } from "worker_threads";

type TableProps = {
  data: Weather;
};

type Weather = {
  stationID: string;
  tz: string;
  obsTimeUtc: string;
  obsTimeLocal: string;
  epoch: number;
  lat: number;
  lon: number;
  solarRadiationHigh: number;
  uvHigh: number;
  winddirAvg: number;
  humidityHigh: number;
  humidityLow: number;
  humidityAvg: number;
  qcStatus: number;
  metric: Metric;
};

type Metric = {
  tempHigh: number;
  tempLow: number;
  tempAvg: number;
  windspeedHigh: number;
  windspeedLow: number;
  windspeedAvg: number;
  windgustHigh: number;
  windgustLow: number;
  windgustAvg: number;
  dewptHigh: number;
  dewptLow: number;
  dewptAvg: number;
  windchillHigh: number;
  windchillLow: number;
  windchillAvg: number;
  heatindexHigh: number;
  heatindexLow: number;
  heatindexAvg: number;
  pressureMax: number;
  pressureMin: number;
  pressureTrend: number;
  precipRate: number;
  precipTotal: number;
};

//TODO: This can be done in more abstract way - make it more generic
function Table(props: TableProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-center font-sans">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left"></th>
                  <th className="py-3 px-6 text-left bg-gray-200">
                    Najvišja vrednost
                  </th>
                  <th className="py-3 px-6 text-left bg-gray-200">
                    Najnižja vrednost
                  </th>
                  <th className="py-3 px-6 text-left bg-gray-200">
                    Povprečna vrednost
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-bold">Temperatura</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.tempHigh} °C</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.tempLow} °C</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.tempAvg} °C</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-bold">Rosišče</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.dewptHigh} °C</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.dewptLow} °C</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.dewptAvg} °C</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-bold">Vlaga</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.humidityHigh} %</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.humidityLow} %</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.humidityAvg} %</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-bold">Tlak</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.pressureMax} hPa</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.pressureMin} hPa</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>
                        {getAvg(
                          props.data.metric.pressureMin,
                          props.data.metric.pressureMax
                        )}{" "}
                        hPa
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-bold">Veter</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.windspeedHigh} km/h</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.windspeedLow} km/h</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{props.data.metric.windspeedAvg} km/h</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function getAvg(num: number, num2: number) {
  return (num + num2) / 2;
}

export default Table;
