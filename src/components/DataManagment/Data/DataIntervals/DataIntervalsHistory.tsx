import style from "./DataIntervals.module.css";

function DataIntervalsHistory() {
  return (
    <section className={style.intervalHistory}>
      <div>
        <p>Maxima Demanda SEIN</p>
        {/* <p>{demanda_pred ? `${demanda_pred} MW` : "sin datos"}</p> */}
        <p>Valor MW</p>
      </div>
      <div>
        <p>Fecha y Hora</p>
        {/* <p>{date_pred ? date_pred.slice(11, 16) : "sin datos"} hs</p> */}
        <p>Fecha hora</p>
      </div>
    </section>
  );
}

export default DataIntervalsHistory;
