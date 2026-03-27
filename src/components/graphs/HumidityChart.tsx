import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next";

export default function HumidityChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
  const { t } = useTranslation();
  const humidity = t("humidity");

  return (
    <LineChartContainer
      data={props.chartsData}
      lines={[
        { dataKey: "humidityAvg", stroke: "#06b6d4", legend: humidity },
        { dataKey: "humidityHigh", stroke: "#67e8f9", legend: `${humidity} max`, dashed: true },
        { dataKey: "humidityLow", stroke: "#a5f3fc", legend: `${humidity} min`, dashed: true },
      ]}
      yAxisLabel={`${humidity} (%)`}
      xAxisLabel={t("hoursOfMesurments")}
      yAxisDomain={[0, 100]}
      xTickFormatter={props.xTickFormatter}
    />
  );
}
