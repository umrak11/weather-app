import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next";

export default function WindChillHeatChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
  const { t } = useTranslation();

  return (
    <LineChartContainer
      data={props.chartsData}
      lines={[
        { dataKey: "windChillAvg", stroke: "#38bdf8", legend: t("windChill") },
        { dataKey: "heatIndexAvg", stroke: "#fb923c", legend: t("heatIndex") },
      ]}
      yAxisLabel="°C"
      xAxisLabel={t("hoursOfMesurments")}
      xTickFormatter={props.xTickFormatter}
    />
  );
}
