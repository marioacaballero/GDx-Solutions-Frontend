import { BarGraph } from "../../../Graphs/BarGraph";
import { dataBarMDC } from "../../../../assets/constants/dataGraphMDC";
import { useEffect, useState } from "react";
import { FetchData } from "../../../../assets/constants/fetchData";
import { MDCHistory } from "../../../../assets/constants/interfaces";
import style from "./DataMDC.module.css";

function DataMDC() {
  const [mdcHistory, setMdcHistory] = useState<MDCHistory[]>([]);
  useEffect(() => {
    fetch(FetchData("mdc_historico"))
      .then((res) => res.json())
      .then((data) => setMdcHistory(data));
  });
  return (
    <div className={style.mdcGraph}>
      <BarGraph key={"MDCHistory"} myData={dataBarMDC(mdcHistory)} />
    </div>
  );
}

export default DataMDC;
