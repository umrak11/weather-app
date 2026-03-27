import { TailSpin } from "react-loading-icons";
import { useDailyTableData } from "../../utils/useDailyTableData";
import Table from "./Table";
import { useTranslation } from "react-i18next";

function DailyTable() {
  const { t } = useTranslation();
  const dailyTable = useDailyTableData();

  if (dailyTable.isLoading)
    return (
      <div className="flex justify-center">
        <TailSpin stroke="#009FF5" />
      </div>
    );
  if (dailyTable.isError) return <div className="text-red-400">{t('error')}</div>;

  const raw = dailyTable.data;
  const tableData = Array.isArray(raw) ? raw[0] : raw;

  if (!tableData?.temperatureHigh) return null;

  return (
    <div className="daily-table">
      <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">{t('homePage.todaysDetailsTable')}</h2>
      <Table data={tableData} />
    </div>
  );
}

export default DailyTable;
