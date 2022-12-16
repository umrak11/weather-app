import LineChartContainer from "../chartTypes/LineChart";

export default function WindDirChart(props: { chartsData: [] }) {
  return (
    <LineChartContainer
      key={"windDir"}
      data={props.chartsData}
      lines={[{ dataKey: "windDir", stroke: "#F76E46", legend: "Smer vetra" }]}
      yAxisLabel={"Smer vetra (°)"}
      xAxisLabel={"Ure meritev"}
    />
  );
}
