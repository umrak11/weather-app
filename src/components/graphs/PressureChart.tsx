import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function PressureChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
  const { t } = useTranslation();

  const pressure: string = t("pressure");

  //TODO: Extract this to helper function / typed properties - properly without ts-ignore
  // @ts-ignore
  const minPressure = props.chartsData.reduce((prev: any, curr: any) => {
    return prev.pressureMin < curr.pressureMin ? prev : curr;
  }).pressureMin;
  // @ts-ignore
  const maxPressure = props.chartsData.reduce((prev: any, curr: any) => {
    return prev.pressureMax > curr.pressureMax ? prev : curr;
  }).pressureMax;

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
