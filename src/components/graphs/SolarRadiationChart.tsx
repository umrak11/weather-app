import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function SolarRadiationChart(props: { chartsData: []; xTickFormatter?: (v: string) => string }) {
  const {t} = useTranslation();

  const solarRadiation: string = t('solarRadiation');

  return (
    <LineChartContainer
      key={"solarRadiation"}
      data={props.chartsData}
      lines={[
        { dataKey: "solarRadiationHigh", stroke: "#eab308", legend: solarRadiation },
      ]}
      yAxisLabel={`${solarRadiation} (W/m²)`}
      xAxisLabel={t('hoursOfMesurments')}
      xTickFormatter={props.xTickFormatter}
    />
  );
}
