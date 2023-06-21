import { databarDaily } from "../../../assets/constants/dataGraphBar";
import { myDataDaily } from "../../../assets/constants/dataGraphLine";
import {
  actualDateMonth,
  actualDateYear,
} from "../../../assets/constants/initialStates";
import {
  FetchEject,
  FetchGDx,
  FetchPrediction,
} from "../../../assets/constants/interfaces";
import { months } from "../../../assets/constants/schedule";
import { BarGraph } from "../../Graphs/BarGraph";
import { LineGraph } from "../../Graphs/LineGraph";
import style from "./Data.module.css";

function DataNow({
  ejecutadoNow,
  gdxNow,
  diarioNow,
  prediccionNow,
  displayEjNow,
  setDisplayEjNow,
  displayGDxNow,
  setDisplayGDxNow,
  displayDiNow,
  setDisplayDiNow,
  dataMonthNow,
  displayIntervalNow,
  setDisplayIntervalNow,
  reprodiario,
  displayReproDiNow,
  setDisplayReproDiNow,
}: {
  ejecutadoNow: FetchEject[];
  gdxNow: FetchGDx[];
  diarioNow: FetchGDx[];
  displayEjNow: boolean;
  setDisplayEjNow: React.Dispatch<React.SetStateAction<boolean>>;
  displayGDxNow: boolean;
  setDisplayGDxNow: React.Dispatch<React.SetStateAction<boolean>>;
  displayDiNow: boolean;
  setDisplayDiNow: React.Dispatch<React.SetStateAction<boolean>>;
  dataMonthNow: FetchGDx[];
  prediccionNow: FetchPrediction;
  displayIntervalNow: boolean;
  setDisplayIntervalNow: React.Dispatch<React.SetStateAction<boolean>>;
  reprodiario: FetchGDx[];
  displayReproDiNow: boolean;
  setDisplayReproDiNow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { date_pred, hora_max, hora_min, demanda_pred } = prediccionNow;

  return (
    <main>
      <article>
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
      </article>
      <div>
        <section>
          <section className={style.lineGraph}>
            <LineGraph
              myData={myDataDaily(
                reprodiario,
                displayReproDiNow,
                displayEjNow,
                ejecutadoNow,
                // displayIntervalNow,
                displayGDxNow,
                gdxNow,
                displayDiNow,
                diarioNow
                // intervalForGraphNow()
              )}
            />
          </section>
        </section>
        <section>
          <section className={style.graphFilter}>
            <label>
              Estimación de la demanda
              <input
                type="checkbox"
                defaultChecked={displayGDxNow}
                onClick={() => setDisplayGDxNow(!displayGDxNow)}
              />
            </label>
            <label>
              MDC GDx
              <input
                type="checkbox"
                defaultChecked={displayIntervalNow}
                onClick={() => setDisplayIntervalNow(!displayIntervalNow)}
              />
            </label>
            <label>
              Demanda Ejecutada
              <input
                type="checkbox"
                defaultChecked={displayEjNow}
                onClick={() => setDisplayEjNow(!displayEjNow)}
              />
            </label>
            <label>
              Programa Diario
              <input
                type="checkbox"
                defaultChecked={displayDiNow}
                onClick={() => setDisplayDiNow(!displayDiNow)}
              />
            </label>
            <label>
              Reprograma Diario
              <input
                type="checkbox"
                defaultChecked={displayReproDiNow}
                onClick={() => setDisplayReproDiNow(!displayReproDiNow)}
              />
            </label>
            {/* <label>
              Programa Semanal
              <input
                type="checkbox"
                defaultChecked={displayIntervalNow}
                onClick={() => setDisplayIntervalNow(!displayIntervalNow)}
              />
            </label> */}
          </section>
        </section>
      </div>
      <section>
        <h3>
          Resultado Mensual{" "}
          {months.find((e) => e.value === actualDateMonth())?.name}{" "}
          {actualDateYear}
        </h3>
        <section className={style.barGraph}>
          <BarGraph myData={databarDaily(dataMonthNow)} />
        </section>
      </section>
    </main>
  );
}

export default DataNow;
