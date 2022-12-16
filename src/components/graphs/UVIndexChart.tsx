import LineChartContainer from "../chartTypes/LineChart";

export default function UVIndexChart(props: { chartsData: [] }) {
  return (
    <LineChartContainer
      key={"uvIndex"}
      data={props.chartsData}
      lines={[
        { dataKey: "uv", stroke: "#802674", legend: "UV index" },
      ]}
      yAxisLabel={"UV index"}
      xAxisLabel={"Ure meritev"}
    />
  );
}
