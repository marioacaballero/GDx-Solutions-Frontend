import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";
import DataIntervalsHistory from "./DataIntervals/DataIntervalsHistory";
import DataMonths from "./DataMonths/DataMonths";
import MarginalCost from "./MarginalCost/MarginalCost";
import DataMDC from "./DataMDC/DataMDC";
import { fetchingAsyncHistory } from "../../../assets/helpers/auxiliar";
import { MDCHistory } from "../../../assets/constants/interfaces";
import GenerationResourceYear from "./GenerationResource/GenerationResourceYear";
import style from "./Data.module.css";

function DataHistory({
  date,
  loading,
  setLoading,
}: {
  date: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    fetchingAsyncHistory(setMdcHistory, setLoading);
  }, [setLoading, date]);
  const [mdcHistory, setMdcHistory] = useState<MDCHistory[]>([]);
  return (
    <>
      {loading ? (
        <div className={style.loader}>
          <DotSpinner size={70} speed={0.9} color="white" />
        </div>
      ) : (
        <main>
          <div>
            <article>
              <DataIntervalsHistory
                key={"intervalHistory"}
                date={date}
                mdcHistory={mdcHistory}
              />
            </article>
            <div>
              <div className={style.tableData}></div>
              <DataMDC key={"datamdc"} mdcHistory={mdcHistory} />
            </div>
            <section>
              <DataMonths key={"dataMonthsHistory"} date={date} />
            </section>
          </div>
          <div>
            <h2>Generación</h2>
            <MarginalCost key={"marginalCostHistory"} date={date} />
            <GenerationResourceYear
              key={"generationResourceHistory"}
              date={date}
            />
            <div></div>
          </div>
        </main>
      )}
    </>
  );
}

export default DataHistory;
