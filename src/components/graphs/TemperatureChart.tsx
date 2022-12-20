import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next";

export default function TemperatureChart(props: { chartsData: [] }) {
  const {t} = useTranslation();

  const temperature: string = t('temperature');
  const dewPoint: string = t('dewPoint');

  return (
    <LineChartContainer
      key={"temperature"}
      data={props.chartsData}
      lines={[
        { dataKey: "temperature", stroke: "#28605B", legend: temperature },
        { dataKey: "dewPoint", stroke: "#C28F39", legend: dewPoint },
      ]}
      yAxisLabel={`${temperature} (°C)`}
      xAxisLabel={t('hoursOfMesurments')}
    />
  );
}
