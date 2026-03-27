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

type LineConfig = {
  dataKey: string;
  stroke: string;
  legend: string;
  dashed?: boolean;
  strokeWidth?: number;
};

type LineChartProps = {
  data: [];
  yAxisLabel: string;
  xAxisLabel: string;
  yAxisDomain?: [number, number];
  lines: LineConfig[];
  xTickFormatter?: (value: string) => string;
};

export function formatTimeLabel(value: string) {
  const date = new Date(value);
  return (
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0")
  );
}

export function formatDateTimeLabel(value: string) {
  const date = new Date(value);
  return `${date.getDate()}.${date.getMonth() + 1} ${String(date.getHours()).padStart(2, "0")}:00`;
}

export function formatDateOnlyLabel(value: string) {
  const date = new Date(value);
  return `${date.getDate()}.${date.getMonth() + 1}.`;
}

const CustomTooltip = ({ active, payload, label, tickFormatter }: any) => {
  if (active && payload && payload.length) {
    const timeLabel = tickFormatter ? tickFormatter(label) : formatTimeLabel(label);
    return (
      <div className="border border-white/[0.1] rounded-md px-3 py-2.5 shadow-xl text-xs" style={{ backgroundColor: "#2d3f55" }}>
        <p className="text-slate-500 mb-1.5">{timeLabel}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: entry.stroke }} />
            <span className="text-slate-400">{entry.name}:</span>
            <span className="font-medium text-slate-200">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

function LineChartContainer(props: LineChartProps) {
  const tickFmt = props.xTickFormatter ?? formatTimeLabel;

  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart
        data={props.data}
        syncId="synced"
        margin={{ top: 10, right: 20, bottom: 30, left: 20 }}
      >
        <CartesianGrid strokeDasharray="1 4" stroke="#ffffff10" vertical={false} />
        <XAxis
          dataKey="dateTime"
          tickFormatter={tickFmt}
          tick={{ fill: "#9ca3af", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          minTickGap={50}
        >
          <Label
            value={props.xAxisLabel}
            position="insideBottom"
            offset={-15}
            style={{ fill: "#374151", fontSize: 10 }}
          />
        </XAxis>
        <YAxis
          tickLine={false}
          domain={props.yAxisDomain}
          tick={{ fill: "#9ca3af", fontSize: 11 }}
          axisLine={false}
          width={52}
        >
          <Label
            value={props.yAxisLabel}
            angle={-90}
            position="insideLeft"
            offset={-5}
            style={{ fill: "#374151", fontSize: 10 }}
          />
        </YAxis>
        <Tooltip content={<CustomTooltip tickFormatter={tickFmt} />} />
        <Legend
          wrapperStyle={{ paddingTop: "8px", paddingBottom: "8px", color: "#6b7280", fontSize: "11px" }}
        />
        {props.lines.map((line) => (
          <Line
            connectNulls={false}
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
            strokeWidth={line.strokeWidth ?? 2}
            strokeDasharray={line.dashed ? "5 3" : undefined}
            dot={false}
            activeDot={{ r: 5, strokeWidth: 0 }}
            name={line.legend}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartContainer;
