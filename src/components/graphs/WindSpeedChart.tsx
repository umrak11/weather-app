import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function WindSpeedChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
  const {t} = useTranslation();

  const windSpeed: string = t('windSpeed');

  return (
    <LineChartContainer
      key={"windSpeed"}
      data={props.chartsData}
      lines={[
        { dataKey: "windSpeedAvg", stroke: "#60a5fa", legend: windSpeed },
        { dataKey: "windGustHigh", stroke: "#93c5fd", legend: `${windSpeed} gust`, dashed: true },
      ]}
      yAxisLabel={`${windSpeed} (km/h)`}
      xAxisLabel={t("hoursOfMesurments")}
    />
  );
}
