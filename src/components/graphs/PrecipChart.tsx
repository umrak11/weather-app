import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next";

export default function PrecipChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
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
          stroke: "#38bdf8",
          legend: precipTotal,
        },
        {
          dataKey: "precipRate",
          stroke: "#818cf8",
          legend: intensity,
        },
      ]}
      yAxisLabel={`${precipTotal} (mm)`}
      xAxisLabel={t('hoursOfMesurments')}
      xTickFormatter={props.xTickFormatter}
    />
  );
}
