import {
  WiHumidity, WiStrongWind, WiSunrise, WiBarometer,
  WiNightRain, WiSunset, WiThermometer, WiWindDeg, WiRaindrop,
} from "react-icons/wi";
import { useTranslation } from "react-i18next";
import SummaryCard from "./SummaryCard";
import { TbTemperature, TbDroplet } from "react-icons/tb";
import { useCurrentWeatherData } from "../../utils/useCurrentWeatherData";
import { TailSpin } from "react-loading-icons";

type MetricRow = {
  title: string;
  icon: JSX.Element;
  data: string;
  accentColor: string;
  subtitle?: string;
};

function MobileRow({ title, icon, data, accentColor, subtitle }: MetricRow) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5">
      <span className="text-lg flex-shrink-0" style={{ color: accentColor }}>{icon}</span>
      <span className="text-sm text-slate-400 flex-1 min-w-0 truncate">{title}</span>
      <div className="flex flex-col items-end flex-shrink-0">
        <span className="text-sm font-semibold text-white">{data}</span>
        {subtitle && <span className="text-[10px] text-slate-500 leading-tight">{subtitle}</span>}
      </div>
    </div>
  );
}

export default function Summary() {
  const { data, isLoading, isError } = useCurrentWeatherData();
  const { t } = useTranslation();

  function degreesToCompass(deg: number): string {
    const dirs = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"] as const;
    return t(`compass.${dirs[Math.round(deg / 22.5) % 16]}`);
  }

  if (isLoading) return <div className="flex justify-center py-16"><TailSpin stroke="#38bdf8" /></div>;
  if (isError) return <div className="text-red-400 text-sm">{t("error")}</div>;

  const d = data;

  const metrics: MetricRow[] = [
    { title: t("temperature"),    accentColor: "#f97316", icon: <TbTemperature />,  data: `${d.temperature} °C` },
    { title: t("feelsLike"),      accentColor: "#fb923c", icon: <WiThermometer />,  data: `${d.heatIndex ?? d.windChill} °C`, subtitle: String(d.heatIndex ? t("heatIndex") : t("windChill")) },
    { title: t("dewPoint"),       accentColor: "#34d399", icon: <TbDroplet />,      data: `${d.dewPoint} °C` },
    { title: t("humidity"),       accentColor: "#22d3ee", icon: <WiHumidity />,     data: `${d.humidity} %` },
    { title: t("windSpeed"),      accentColor: "#60a5fa", icon: <WiStrongWind />,   data: `${d.windSpeed} km/h` },
    { title: t("windGust"),       accentColor: "#93c5fd", icon: <WiStrongWind />,   data: `${d.windGust} km/h` },
    { title: t("windDir"),        accentColor: "#7dd3fc", icon: <WiWindDeg />,      data: degreesToCompass(d.windDir), subtitle: `${d.windDir}°` },
    { title: t("pressure"),       accentColor: "#a78bfa", icon: <WiBarometer />,    data: `${d.pressure} hPa` },
    { title: t("solarRadiation"), accentColor: "#fbbf24", icon: <WiSunrise />,      data: `${d.solarRadiation} W/m²` },
    { title: t("uv"),             accentColor: "#f87171", icon: <WiSunset />,       data: String(d.uv) },
    { title: t("precipTotal"),    accentColor: "#38bdf8", icon: <WiNightRain />,    data: `${d.precipTotal} mm` },
    { title: t("precipRate"),     accentColor: "#818cf8", icon: <WiRaindrop />,     data: `${d.precipRate} mm/h` },
  ];

  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t("homePage.currentConditions")}</h2>
        <span className="text-xs text-slate-500">{d.dateTime}</span>
      </div>

      {/* Mobile: compact list */}
      <div className="sm:hidden rounded-lg border border-white/[0.1] divide-y divide-white/[0.06]" style={{ backgroundColor: "#2d3f55" }}>
        {metrics.map((m) => (
          <MobileRow key={m.title} {...m} />
        ))}
      </div>

      {/* Tablet+: card grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {metrics.map((m) => (
          <SummaryCard key={m.title} {...m} />
        ))}
      </div>
    </section>
  );
}
