import { FetchEject } from "../../../assets/constants/interfaces";
import DataIntervalsHistory from "./DataIntervals/DataIntervalsHistory";
import DataMonths from "./DataMonths/DataMonths";
import MarginalCost from "./MarginalCost/MarginalCost";
import style from "./Data.module.css";
import DataMDC from "./DataMDC/DataMDC";

function DataHistory({
  date,
  dataMonthNow,
}: {
  date: string;
  dataMonthNow: FetchEject[];
}) {
  return (
    <main>
      <div>
        <article>
          <DataIntervalsHistory />
        </article>
        <div>
          <div className={style.tableData}></div>
          <DataMDC />
        </div>
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
