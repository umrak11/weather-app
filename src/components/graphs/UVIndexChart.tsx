import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function UVIndexChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
  const {t} = useTranslation();

  const uv: string = t('uv');

  return (
    <LineChartContainer
      key={"uvIndex"}
      data={props.chartsData}
      lines={[
        { dataKey: "uvHigh", stroke: "#ef4444", legend: uv },
      ]}
      yAxisLabel={uv}
      xAxisLabel={t("hoursOfMesurments")}
    />
  );
}
