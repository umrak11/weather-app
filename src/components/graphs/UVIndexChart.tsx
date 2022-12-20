import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function UVIndexChart(props: { chartsData: [] }) {
  const {t} = useTranslation();

  const uv: string = t('uv');

  return (
    <LineChartContainer
      key={"uvIndex"}
      data={props.chartsData}
      lines={[
        { dataKey: "uv", stroke: "#802674", legend: uv },
      ]}
      yAxisLabel={uv}
      xAxisLabel={t("hoursOfMesurments")}
    />
  );
}
