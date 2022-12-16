import LineChartContainer from "../chartTypes/LineChart";

export default function TemperatureChart(props: { chartsData: [] }) {
  return (
    <LineChartContainer
      key={"temperature"}
      data={props.chartsData}
      lines={[
        { dataKey: "temperature", stroke: "#28605B", legend: "Temperatura" },
        { dataKey: "dewPoint", stroke: "#C28F39", legend: "Rosišče" },
      ]}
      yAxisLabel={"Temperatura °C"}
      xAxisLabel={"Ure meritev"}
    />
  );
}
