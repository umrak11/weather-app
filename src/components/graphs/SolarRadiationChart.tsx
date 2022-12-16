import LineChartContainer from "../chartTypes/LineChart";

export default function SolarRadiationChart(props: { chartsData: [] }) {
  return (
    <LineChartContainer
      key={"solarRadiation"}
      data={props.chartsData}
      lines={[
        { dataKey: "solarRadiation", stroke: "#FFB92F", legend: "Sončno sevanje W/m²" },
      ]}
      yAxisLabel={"Sončno sevanje W/m²"}
      xAxisLabel={"Ure meritev"}
    />
  );
}
