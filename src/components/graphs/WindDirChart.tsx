import { useTranslation } from "react-i18next";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

function formatTime(value: string) {
  const date = new Date(value);
  return (
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0")
  );
}

const COMPASS_TICKS = [0, 45, 90, 135, 180, 225, 270, 315, 360];
const COMPASS_TICK_KEYS: Record<number, string> = {
  0: "N", 45: "NE", 90: "E", 135: "SE",
  180: "S", 225: "SW", 270: "W", 315: "NW", 360: "N",
};

export default function WindDirChart(props: { chartsData: [] }) {
  const { t } = useTranslation();

  function degreesToCompass(deg: number): string {
    const dirs = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"] as const;
    return t(`compass.${dirs[Math.round(deg / 22.5) % 16]}`);
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const point = payload[0].payload;
      const deg = point.windDirAvg;
      return (
        <div className="border border-white/[0.1] rounded-md px-3 py-2.5 shadow-xl text-xs" style={{ backgroundColor: "#2d3f55" }}>
          <p className="text-slate-400 text-xs mb-2">{formatTime(point.dateTime)}</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#06b6d4" }} />
            <span className="text-slate-300 font-semibold text-base">
              {degreesToCompass(deg)}
            </span>
            <span className="text-slate-500">{deg}°</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const scatterData = (props.chartsData as any[]).map((d) => ({
    ...d,
    time: new Date(d.dateTime).getTime(),
  }));

  return (
    <ResponsiveContainer width="100%" height={320}>
      <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 20 }} syncId="synced">
        <CartesianGrid strokeDasharray="1 4" stroke="#ffffff10" vertical={false} />
        <XAxis
          dataKey="dateTime"
          type="category"
          allowDuplicatedCategory={false}
          tickFormatter={formatTime}
          tick={{ fill: "#9ca3af", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
        >
          <Label
            value={String(t("hoursOfMesurments"))}
            position="insideBottom"
            offset={-15}
            style={{ fill: "#64748b", fontSize: 11 }}
          />
        </XAxis>
        <YAxis
          dataKey="windDirAvg"
          type="number"
          domain={[0, 360]}
          ticks={COMPASS_TICKS}
          tickFormatter={(v) => COMPASS_TICK_KEYS[v] ? String(t(`compass.${COMPASS_TICK_KEYS[v]}`)) : ""}
          tick={{ fill: "#9ca3af", fontSize: 11 }}
          axisLine={{ stroke: "#4b5563" }}
          tickLine={false}
          width={40}
        >
          <Label
            value={`${t("windDir")} (°)`}
            angle={-90}
            position="insideLeft"
            offset={-5}
            style={{ fill: "#64748b", fontSize: 11 }}
          />
        </YAxis>
        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: "3 3", stroke: "#334155" }} />
        <Scatter
          data={scatterData}
          fill="#06b6d4"
          opacity={0.85}
          shape={(p: any) => (
            <circle cx={p.cx} cy={p.cy} r={3.5} fill="#06b6d4" stroke="#0e7490" strokeWidth={1} />
          )}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
