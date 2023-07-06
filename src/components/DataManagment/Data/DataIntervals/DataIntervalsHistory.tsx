import { MDCHistory } from "../../../../assets/constants/interfaces";
import style from "./DataIntervals.module.css";

function DataIntervalsHistory({
  date,
  mdcHistory,
}: {
  date: string;
  mdcHistory: MDCHistory[];
}) {
  const SEIN = mdcHistory.find((e) => e.date.slice(0, 7) === date.slice(0, 7));
  return (
    <section className={style.intervalHistory}>
      <div>
        <p>Maxima Demanda SEIN</p>
        <p>{SEIN?.valor ? `${SEIN.valor} MW` : "sin datos"}</p>
      </div>
      <div>
        <p>Fecha y Hora</p>
        <p>
          {SEIN?.valor
            ? `${SEIN.date.slice(8, 10)} de ${SEIN.month_name} ${
                SEIN.year
              } a las ${SEIN.date.slice(11, 16)} hs`
            : "sin datos"}
        </p>
      </div>
    </section>
  );
}

export default DataIntervalsHistory;
