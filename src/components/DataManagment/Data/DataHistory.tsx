import { FetchGDx } from "../../../assets/constants/interfaces";
import style from "./Data.module.css";
import DataMonths from "./DataMonths/DataMonths";
import MarginalCost from "./MarginalCost/MarginalCost";

function DataHistory({
  date,
  dataMonthNow,
}: {
  date: string;
  dataMonthNow: FetchGDx[];
}) {
  return (
    <main>
      <div>
        <article></article>
        <div></div>
        <section>
          <DataMonths key={"dataMonthsHistory"} dataMonthNow={dataMonthNow} />
        </section>
      </div>
      <div>
        <h2>Generación</h2>
        <MarginalCost key={"marginalCostHistory"} date={date} />
        <div></div>
        <div></div>
      </div>
    </main>
  );
}

export default DataHistory;
