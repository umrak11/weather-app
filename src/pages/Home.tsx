import DailyTable from "../components/home/DailyTable";
import Summary from "../components/home/Summary";

function Home() {
  return (
    <div className="space-y-10">
      <Summary />
      <DailyTable />
    </div>
  );
}

export default Home;
