import LineChartContainer from "../chartTypes/LineChart";

export default function PressureChart(props: { chartsData: [] }) {
  //TODO: Extract this to helper function / typed properties - properly without ts-ignore
  // @ts-ignore
  const minPressure = props.chartsData.reduce((prev: any, curr: any) => {
    return prev.pressure < curr.pressure ? prev : curr;
  });
  // @ts-ignore
  const maxPressure = props.chartsData.reduce((prev: any, curr: any) => {
    return prev.pressure > curr.pressure ? prev : curr;
  });

  return (
    <LineChartContainer
      key={"pressure"}
      data={props.chartsData}
      lines={[
        { dataKey: "pressure", stroke: "#3C4856", legend: "Zračni tlak" },
      ]}
      yAxisLabel={"Tlak (hPa)"}
      yAxisDomain={[minPressure, maxPressure]}
      xAxisLabel={"Ure meritev"}
    />
  );
}
