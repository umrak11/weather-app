import LineChartContainer from "../chartTypes/LineChart";
import { useTranslation } from "react-i18next"

export default function SolarRadiationChart(props: { chartsData: [] }) {
  const {t} = useTranslation();

  const solarRadiation: string = t('solarRadiation');

  return (
    <LineChartContainer
      key={"solarRadiation"}
      data={props.chartsData}
      lines={[
        { dataKey: "solarRadiation", stroke: "#FFB92F", legend: solarRadiation },
      ]}
      yAxisLabel={`${solarRadiation} (W/m²)`}
      xAxisLabel={t('hoursOfMesurments')}
    />
  );
}
