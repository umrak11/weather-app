import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function WindDirChart(props: { chartsData: [] }) {
  const {t} = useTranslation();

  const windDir: string = t('windDir');

  return (
    <LineChartContainer
      key={"windDir"}
      data={props.chartsData}
      lines={[{ dataKey: "windDir", stroke: "#F76E46", legend: windDir }]}
      yAxisLabel={`${windDir} (°)`}
      xAxisLabel={t("hoursOfMesurments")}
    />
  );
}
