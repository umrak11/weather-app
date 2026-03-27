import { useState } from "react";
import { TailSpin } from "react-loading-icons";
import PrecipChart from "../components/graphs/PrecipChart";
import PressureChart from "../components/graphs/PressureChart";
import SolarRadiationChart from "../components/graphs/SolarRadiationChart";
import TemperatureChart from "../components/graphs/TemperatureChart";
import UVIndexChart from "../components/graphs/UVIndexChart";
import WindDirChart from "../components/graphs/WindDirChart";
import WindSpeedChart from "../components/graphs/WindSpeedChart";
import HumidityChart from "../components/graphs/HumidityChart";
import WindChillHeatChart from "../components/graphs/WindChillHeatChart";
import { useDailyGraphsData } from "../utils/useDailyGraphsData";
import { useHourlyData } from "../utils/useHourlyData";
import { useDailySummaryData } from "../utils/useDailySummaryData";
import { useTranslation } from "react-i18next";
import { formatTimeLabel, formatDateTimeLabel, formatDateOnlyLabel } from "../components/chartTypes/LineChart";

type Period = "today" | "week" | "summary";

const PERIODS: { key: Period; labelKey: string }[] = [
  { key: "today",   labelKey: "graphsPage.today" },
  { key: "week",    labelKey: "graphsPage.week" },
  { key: "summary", labelKey: "graphsPage.summary" },
];

function ChartSection({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-1">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</p>
      </div>
      <div className="rounded-lg border border-white/[0.1] overflow-hidden" style={{ backgroundColor: "#2d3f55" }}>
        {children}
      </div>
    </div>
  );
}

export default function Graphs() {
  const { t } = useTranslation();
  const [period, setPeriod] = useState<Period>("today");

  const todayQuery   = useDailyGraphsData();
  const weekQuery    = useHourlyData();
  const summaryQuery = useDailySummaryData();

  const activeQuery =
    period === "today"   ? todayQuery :
    period === "week"    ? weekQuery  : summaryQuery;

  const xTickFormatter =
    period === "today"   ? formatTimeLabel :
    period === "week"    ? formatDateTimeLabel : formatDateOnlyLabel;

  if (activeQuery.isLoading)
    return <div className="flex justify-center py-16"><TailSpin stroke="#38bdf8" /></div>;

  const data = activeQuery.data as [];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">{t("graphsPage.title")}</h2>

        <div className="flex gap-1 self-start sm:self-auto">
          {PERIODS.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className={`px-3 py-2 rounded text-xs font-medium transition-colors duration-150 ${
                period === key
                  ? "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                  : "text-slate-400 hover:text-slate-200 border border-white/[0.08] hover:border-white/[0.15]"
              }`}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

      <ChartSection title={t("temperature")} color="#f97316">
        <TemperatureChart chartsData={data} xTickFormatter={xTickFormatter} />
      </ChartSection>

      <ChartSection title={t("humidity")} color="#22d3ee">
        <HumidityChart chartsData={data} xTickFormatter={xTickFormatter} />
      </ChartSection>

      <ChartSection title={t("windSpeed")} color="#60a5fa">
        <WindSpeedChart chartsData={data} xTickFormatter={xTickFormatter} />
      </ChartSection>

      <ChartSection title={t("windDir")} color="#7dd3fc">
        <WindDirChart chartsData={data} />
      </ChartSection>

      <ChartSection title={`${t("windChill")} & ${t("heatIndex")}`} color="#38bdf8">
        <WindChillHeatChart chartsData={data} xTickFormatter={xTickFormatter} />
      </ChartSection>

      <ChartSection title={t("precipTotal")} color="#38bdf8">
        <PrecipChart chartsData={data} xTickFormatter={xTickFormatter} />
      </ChartSection>

      <ChartSection title={t("pressure")} color="#a78bfa">
        <PressureChart chartsData={data} xTickFormatter={xTickFormatter} />
      </ChartSection>

      <ChartSection title={t("solarRadiation")} color="#fbbf24">
        <SolarRadiationChart chartsData={data} xTickFormatter={xTickFormatter} />
      </ChartSection>

      <ChartSection title={t("uv")} color="#f87171">
        <UVIndexChart chartsData={data} xTickFormatter={xTickFormatter} />
      </ChartSection>
    </div>
  );
}
