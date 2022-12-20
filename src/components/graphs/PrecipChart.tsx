import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next";

export default function PrecipChart(props: { chartsData: [] }) {
  const {t} = useTranslation();

  const precipTotal: string = t('precipTotal');
  const intensity: string = t('intensity');

  return (
    <LineChartContainer
      key={"precipTotal"}
      data={props.chartsData}
      lines={[
        {
          dataKey: "precipTotal",
          stroke: "#3C4856",
          legend: precipTotal,
        },
        {
          dataKey: "precipRate",
          stroke: "#508882",
          legend: intensity,
        },
      ]}
      yAxisLabel={`${precipTotal} (mm)`}
      xAxisLabel={t('hoursOfMesurments')}
    />
  );
}
