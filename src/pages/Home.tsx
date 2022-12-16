import Divider, { DividerColor, DividerMargin } from "../components/Divider";
import DailyTable from "../components/home/DailyTable";
import Summary from "../components/home/Summary";

function Home() {
  return (
    <>
      <Summary />
      <Divider margin={DividerMargin.Md} color={DividerColor.Gray} />
      <DailyTable />
    </>
  );
}

export default Home;
