import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function PressureChart(props: { chartsData: [] }) {
  const { t } = useTranslation();

  const pressure: string = t("pressure");

  //TODO: Extract this to helper function / typed properties - properly without ts-ignore
  // @ts-ignore
  const minPressure = props.chartsData.reduce((prev: any, curr: any) => {
    return prev.pressure < curr.pressure ? prev : curr;
  });
  // @ts-ignore
  const maxPressure = props.chartsData.reduce((prev: any, curr: any) => {
    return prev.pressure > curr.pressure ? prev : curr;
  });

  return (
    <LineChartContainer
      key={"pressure"}
      data={props.chartsData}
      lines={[
        { dataKey: "pressure", stroke: "#3C4856", legend: pressure },
      ]}
      yAxisLabel={`${pressure} (hPa)`}
      yAxisDomain={[minPressure, maxPressure]}
      xAxisLabel={t('hoursOfMesurments')}
    />
  );
}
