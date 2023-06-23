import style from "./DataIntervals.module.css";
import { FetchPrediction } from "../../../../assets/constants/interfaces";

function DataIntervals({ prediccionNow }: { prediccionNow: FetchPrediction }) {
  const { date_pred, hora_max, hora_min, demanda_pred } = prediccionNow;
  return (
    <section className={style.interval}>
      <div>
        <p>Predicción</p>
        <p>{demanda_pred ? `${demanda_pred} MW` : "sin datos"}</p>
      </div>
      <div>
        <p>Estimación Horaria</p>
        <p>{date_pred.slice(11, 16)} hs</p>
      </div>
      <div>
        <p>Intervalo de modulación</p>
        <p>
          {hora_min.slice(11, 16)} - {hora_max.slice(11, 16)} hs
        </p>
      </div>
      <div>
        <p>Gestión de Riesgo</p>
        <p>Low/Medium/Hard</p>
      </div>
    </section>
  );
}

export default DataIntervals;
