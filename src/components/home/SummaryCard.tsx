type SummaryCardProps = {
  title: string;
  icon: JSX.Element;
  data: string;
  accentColor: string;
  subtitle?: string;
};

function SummaryCard({ title, icon, data, accentColor, subtitle }: SummaryCardProps) {
  return (
    <div
      className="rounded-lg p-2.5 sm:p-4 flex flex-col gap-1.5 sm:gap-3 border border-white/[0.1] hover:border-white/[0.18] transition-colors duration-150"
      style={{ backgroundColor: "#2d3f55" }}
    >
      <div className="flex items-center gap-1.5">
        <span className="text-sm sm:text-xl leading-none flex-shrink-0" style={{ color: accentColor }}>{icon}</span>
        <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wide leading-tight line-clamp-2">{title}</span>
      </div>
      <div className="text-base sm:text-2xl font-semibold text-white tracking-tight leading-none">{data}</div>
      {subtitle && <div className="text-[10px] sm:text-xs text-slate-400">{subtitle}</div>}
    </div>
  );
}

export default SummaryCard;
