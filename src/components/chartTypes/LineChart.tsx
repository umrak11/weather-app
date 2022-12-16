import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";

type LineChartProps = {
  data: [];
  yAxisLabel: string;
  xAxisLabel: string;
  yAxisDomain?: [number, number];
  lines: { dataKey: string; stroke: string; legend: string }[];
};

function formatXAxisLabel(value: string) {
  const date = new Date(value);
  return String(date.getHours()).padStart(2, "0") + ':' + String(date.getMinutes()).padStart(2, "0");
}

function LineChartContainer(props: LineChartProps) {
  return (
    <ResponsiveContainer width={"100%"} height={500} min-width={150}>
      <LineChart data={props.data} width={500} syncId="synced">
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="dateTime" tickFormatter={formatXAxisLabel}>
          <Label angle={0} dy={30} value={props.xAxisLabel} />
        </XAxis>
        <YAxis tickLine={false} domain={props.yAxisDomain}>
          <Label angle={270} dx={-30} value={props.yAxisLabel} />
        </YAxis>
        <Tooltip />
        <Legend
          wrapperStyle={{
            paddingTop: "40px",
          }}
        />
        {props.lines.map((line) => (
          <Line
            connectNulls={false}
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
            name={line.legend}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartContainer;
