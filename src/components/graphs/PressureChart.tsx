import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function PressureChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
  const { t } = useTranslation();

  const pressure: string = t("pressure");

  const data = props.chartsData as any[];
  const minPressure = data.reduce((prev: any, curr: any) =>
    prev.pressureMin < curr.pressureMin ? prev : curr, data[0])?.pressureMin ?? 0;
  const maxPressure = data.reduce((prev: any, curr: any) =>
    prev.pressureMax > curr.pressureMax ? prev : curr, data[0])?.pressureMax ?? 0;

  return (
    <LineChartContainer
      key={"pressure"}
      data={props.chartsData}
      lines={[
        { dataKey: "pressureMax", stroke: "#8b5cf6", legend: pressure },
        { dataKey: "pressureMin", stroke: "#a78bfa", legend: `${pressure} min`, dashed: true },
      ]}
      yAxisLabel={`${pressure} (hPa)`}
      yAxisDomain={[Math.floor(minPressure - 1), Math.ceil(maxPressure + 1)]}
      xAxisLabel={t('hoursOfMesurments')}
      xTickFormatter={props.xTickFormatter}
    />
  );
}
