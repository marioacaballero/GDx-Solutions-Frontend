import style from "./DataIntervals.module.css";
import {
  FetchPrediction,
  FetchRisk,
} from "../../../../assets/constants/interfaces";

function DataIntervals({
  prediccionNow,
  risk,
}: {
  prediccionNow: FetchPrediction;
  risk: FetchRisk[];
}) {
  const { date_pred, hora_max, hora_min, demanda_pred } = prediccionNow;

  const riskColorBg = () => {
    switch (risk[0].risk) {
      case "Bajo":
        return "linear-gradient(#232c79 50%, green 50%)";
      case "Medio":
        return "linear-gradient(#232c79 50%, yellow 50%)";
      case "Alto":
        return "linear-gradient(#232c79 50%, red 50%)";
      default:
        return;
    }
  };

  const riskColor = () => {
    switch (risk[0].risk) {
      case "Bajo":
        return "";
      case "Medio":
        return "black";
      case "Alto":
        return "";
      default:
        return;
    }
  };

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
      <div style={{ background: riskColorBg() }}>
        <p>Gestión de Riesgo</p>
        <p style={{ color: riskColor() }}>{risk[0].risk}</p>
      </div>
    </section>
  );
}

export default DataIntervals;
