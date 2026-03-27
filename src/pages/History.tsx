import { useState } from "react";
import { TailSpin } from "react-loading-icons";
import { useTranslation } from "react-i18next";
import { useHistoryHourlyData } from "../utils/useHistoryHourlyData";
import TemperatureChart from "../components/graphs/TemperatureChart";
import HumidityChart from "../components/graphs/HumidityChart";
import WindSpeedChart from "../components/graphs/WindSpeedChart";
import WindDirChart from "../components/graphs/WindDirChart";
import WindChillHeatChart from "../components/graphs/WindChillHeatChart";
import PrecipChart from "../components/graphs/PrecipChart";
import PressureChart from "../components/graphs/PressureChart";
import SolarRadiationChart from "../components/graphs/SolarRadiationChart";
import UVIndexChart from "../components/graphs/UVIndexChart";
import { formatTimeLabel } from "../components/chartTypes/LineChart";

function toApiDate(iso: string) { return iso.replace(/-/g, ""); }

function toLocalIso(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

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

const today = toLocalIso(new Date());

export default function History() {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(today);
  const { data, isLoading, isError } = useHistoryHourlyData(toApiDate(selectedDate));

  function shiftDate(days: number) {
    const d = new Date(selectedDate + "T00:00:00");
    d.setDate(d.getDate() + days);
    const shifted = toLocalIso(d);
    if (shifted <= today) setSelectedDate(shifted);
  }

  const displayDate = new Date(selectedDate + "T00:00:00");
  const displayLabel = `${displayDate.getDate()}.${displayDate.getMonth() + 1}.${displayDate.getFullYear()}`;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">{t("historyPage.title")}</h2>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => shiftDate(-1)}
            className="p-2 rounded border border-white/[0.1] text-slate-400 hover:text-slate-200 hover:border-white/[0.2] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <input
            type="date"
            value={selectedDate}
            max={today}
            onChange={(e) => e.target.value && setSelectedDate(e.target.value)}
            className="text-sm text-slate-300 rounded border border-white/[0.1] px-2.5 py-1.5 focus:outline-none focus:border-sky-500/50 cursor-pointer"
            style={{ backgroundColor: "#2d3f55" }}
          />

          <button
            onClick={() => shiftDate(1)}
            disabled={selectedDate >= today}
            className="p-2 rounded border border-white/[0.1] text-slate-400 hover:text-slate-200 hover:border-white/[0.2] transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <span className="text-sm text-slate-500 ml-1">{displayLabel}</span>
        </div>
      </div>

      {isLoading && <div className="flex justify-center py-16"><TailSpin stroke="#38bdf8" /></div>}
      {isError && <p className="text-sm text-red-400">{t("error")}</p>}

      {data && !isLoading && (
        <div className="space-y-8">
          <ChartSection title={t("temperature")} color="#f97316">
            <TemperatureChart chartsData={data as []} xTickFormatter={formatTimeLabel} />
          </ChartSection>
          <ChartSection title={t("humidity")} color="#22d3ee">
            <HumidityChart chartsData={data as []} xTickFormatter={formatTimeLabel} />
          </ChartSection>
          <ChartSection title={t("windSpeed")} color="#60a5fa">
            <WindSpeedChart chartsData={data as []} xTickFormatter={formatTimeLabel} />
          </ChartSection>
          <ChartSection title={t("windDir")} color="#7dd3fc">
            <WindDirChart chartsData={data as []} />
          </ChartSection>
          <ChartSection title={`${t("windChill")} & ${t("heatIndex")}`} color="#38bdf8">
            <WindChillHeatChart chartsData={data as []} xTickFormatter={formatTimeLabel} />
          </ChartSection>
          <ChartSection title={t("precipTotal")} color="#38bdf8">
            <PrecipChart chartsData={data as []} xTickFormatter={formatTimeLabel} />
          </ChartSection>
          <ChartSection title={t("pressure")} color="#a78bfa">
            <PressureChart chartsData={data as []} xTickFormatter={formatTimeLabel} />
          </ChartSection>
          <ChartSection title={t("solarRadiation")} color="#fbbf24">
            <SolarRadiationChart chartsData={data as []} xTickFormatter={formatTimeLabel} />
          </ChartSection>
          <ChartSection title={t("uv")} color="#f87171">
            <UVIndexChart chartsData={data as []} xTickFormatter={formatTimeLabel} />
          </ChartSection>
        </div>
      )}
    </div>
  );
}
