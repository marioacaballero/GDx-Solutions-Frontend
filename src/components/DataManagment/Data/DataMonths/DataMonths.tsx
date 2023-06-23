import { databarDaily } from "../../../../assets/constants/dataGraphBar";
import {
  actualDateMonth,
  actualDateYear,
} from "../../../../assets/constants/initialStates";
import { FetchGDx } from "../../../../assets/constants/interfaces";
import { months } from "../../../../assets/constants/schedule";
import { BarGraph } from "../../../Graphs/BarGraph";
import style from "./DataMonths.module.css";

function DataMonths({ dataMonthNow }: { dataMonthNow: FetchGDx[] }) {
  return (
    <>
      <h3>
        Resultado Mensual{" "}
        {months.find((e) => e.value === actualDateMonth())?.name}{" "}
        {actualDateYear}
      </h3>
      <section className={style.barGraph}>
        <BarGraph myData={databarDaily(dataMonthNow)} />
      </section>
    </>
  );
}

export default DataMonths;
