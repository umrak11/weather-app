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
  if (dailyTable.isError) return <div>{t('error')}</div>;

  return (
    <div className="daily-table">
      <h2 className="text-2xl font-bold mb-4">{t('homePage.todaysDetailsTable')}</h2>
      <Table data={dailyTable.data} />
    </div>
  );
}

export default DailyTable;
