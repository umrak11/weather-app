import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function WindSpeedChart(props: { chartsData: [] }) {
  const {t} = useTranslation();

  const windSpeed: string = t('windSpeed');

  return (
    <LineChartContainer
      key={"windSpeed"}
      data={props.chartsData}
      lines={[
        { dataKey: "windSpeed", stroke: "#008A5D", legend: windSpeed },
      ]}
      yAxisLabel={`${windSpeed} (km/h)`}
      xAxisLabel={t("hoursOfMesurments")}
    />
  );
}
