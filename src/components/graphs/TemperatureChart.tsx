import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next";

export default function TemperatureChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
  const {t} = useTranslation();

  const temperature: string = t('temperature');
  const dewPoint: string = t('dewPoint');

  return (
    <LineChartContainer
      key={"temperature"}
      data={props.chartsData}
      lines={[
        { dataKey: "temperatureAvg", stroke: "#f97316", legend: temperature },
        { dataKey: "temperatureHigh", stroke: "#fb923c", legend: `${temperature} max`, dashed: true },
        { dataKey: "temperatureLow", stroke: "#fbbf24", legend: `${temperature} min`, dashed: true },
        { dataKey: "dewPointAvg", stroke: "#34d399", legend: dewPoint },
      ]}
      yAxisLabel={`${temperature} (°C)`}
      xAxisLabel={t('hoursOfMesurments')}
      xTickFormatter={props.xTickFormatter}
    />
  );
}
