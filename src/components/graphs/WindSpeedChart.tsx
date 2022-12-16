import LineChartContainer from "../chartTypes/LineChart";

export default function WindSpeedChart(props: { chartsData: [] }) {
  return (
    <LineChartContainer
      key={"windSpeed"}
      data={props.chartsData}
      lines={[
        { dataKey: "windSpeed", stroke: "#008A5D", legend: "Hitrost vetra" },
      ]}
      yAxisLabel={"Hitrost km/h"}
      xAxisLabel={"Ure meritev"}
    />
  );
}
