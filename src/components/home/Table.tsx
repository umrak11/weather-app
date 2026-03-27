import { useTranslation } from "react-i18next";

type DailyData = {
  temperatureHigh: number;
  temperatureLow: number;
  temperatureAvg: number;
  dewPointHigh: number;
  dewPointLow: number;
  dewPointAvg: number;
  humidityHigh: number;
  humidityLow: number;
  humidityAvg: number;
  pressureMax: number;
  pressureMin: number;
  pressureTrend: number;
  windSpeedHigh: number;
  windSpeedLow: number;
  windSpeedAvg: number;
  windGustHigh: number;
  windGustLow: number;
  windGustAvg: number;
  windChillHigh: number;
  windChillLow: number;
  windChillAvg: number;
  heatIndexHigh: number;
  heatIndexLow: number;
  heatIndexAvg: number;
  precipTotal: number;
  precipRate: number;
  solarRadiationHigh: number;
  uvHigh: number;
};

type TableProps = { data: DailyData };

type RowConfig = {
  label: string;
  high: string;
  low: string;
  avg: string;
};

type SingleRowConfig = {
  label: string;
  value: string;
};

function Table({ data }: TableProps) {
  const { t } = useTranslation();

  const rows: RowConfig[] = [
    {
      label: t("temperature"),
      high: `${data.temperatureHigh} °C`,
      low: `${data.temperatureLow} °C`,
      avg: `${data.temperatureAvg} °C`,
    },
    { label: t("dewPoint"),    high: `${data.dewPointHigh} °C`,  low: `${data.dewPointLow} °C`,  avg: `${data.dewPointAvg} °C` },
    { label: t("humidity"),    high: `${data.humidityHigh} %`,   low: `${data.humidityLow} %`,   avg: `${data.humidityAvg} %` },
    { label: t("pressure"),    high: `${data.pressureMax} hPa`,  low: `${data.pressureMin} hPa`, avg: `${((data.pressureMax + data.pressureMin) / 2).toFixed(1)} hPa` },
    { label: t("windSpeed"),   high: `${data.windSpeedHigh} km/h`, low: `${data.windSpeedLow} km/h`, avg: `${data.windSpeedAvg} km/h` },
    { label: t("windGust"),    high: `${data.windGustHigh} km/h`,  low: `${data.windGustLow} km/h`,  avg: `${data.windGustAvg} km/h` },
    { label: t("windChill"),   high: `${data.windChillHigh} °C`,   low: `${data.windChillLow} °C`,   avg: `${data.windChillAvg} °C` },
    { label: t("heatIndex"),   high: `${data.heatIndexHigh} °C`,   low: `${data.heatIndexLow} °C`,   avg: `${data.heatIndexAvg} °C` },
  ];

  const singleRows: SingleRowConfig[] = [
    { label: t("precipTotal"),   value: `${data.precipTotal} mm` },
    { label: t("solarRadiation"), value: `${data.solarRadiationHigh} W/m²` },
    { label: t("uv"),             value: String(data.uvHigh) },
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-white/[0.1]" style={{ backgroundColor: "#2d3f55" }}>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b border-white/[0.08]">
            <th className="py-2.5 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider w-44" />
            <th className="py-2.5 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">{t("table.highest")}</th>
            <th className="py-2.5 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">{t("table.lowest")}</th>
            <th className="py-2.5 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">{t("table.average")}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06]">
          {rows.map((row) => (
            <tr key={row.label} className="hover:bg-white/[0.03] transition-colors duration-100">
              <td className="py-2.5 px-4 text-sm font-medium text-slate-300 whitespace-nowrap">{row.label}</td>
              <td className="py-2.5 px-4 text-sm text-slate-300">{row.high}</td>
              <td className="py-2.5 px-4 text-sm text-slate-300">{row.low}</td>
              <td className="py-2.5 px-4 text-sm font-medium text-white">{row.avg}</td>
            </tr>
          ))}
          <tr className="border-t border-white/[0.08]">
            <td colSpan={4} className="py-2 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
              {t("table.dailyTotals")}
            </td>
          </tr>
          {singleRows.map((row) => (
            <tr key={row.label} className="hover:bg-white/[0.02] transition-colors duration-100">
              <td className="py-2.5 px-4 text-sm font-medium text-slate-300 whitespace-nowrap">{row.label}</td>
              <td className="py-2.5 px-4 text-sm font-medium text-slate-200" colSpan={3}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
