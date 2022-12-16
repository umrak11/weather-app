import LineChartContainer from "../chartTypes/LineChart";

export default function PrecipChart(props: { chartsData: [] }) {
  return (
    <LineChartContainer
      key={"precipTotal"}
      data={props.chartsData}
      lines={[
        {
          dataKey: "precipTotal",
          stroke: "#3C4856",
          legend: "Količina padavin",
        },
        {
          dataKey: "precipRate",
          stroke: "#508882",
          legend: "Intenziteta (mm/h)",
        },
      ]}
      yAxisLabel={"Količina padavin (mm)"}
      xAxisLabel={"Ure meritev"}
    />
  );
}
