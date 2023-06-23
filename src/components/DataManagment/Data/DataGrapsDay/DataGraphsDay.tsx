import { myDataDaily } from "../../../../assets/constants/dataGraphLine";
import { FetchEject, FetchGDx } from "../../../../assets/constants/interfaces";
import { LineGraph } from "../../../Graphs/LineGraph";
import style from "./DataGraphsDay.module.css";

function DataGraphsDay({
  ejecutadoNow,
  gdxNow,
  diarioNow,
  displayEjNow,
  setDisplayEjNow,
  displayGDxNow,
  setDisplayGDxNow,
  displayDiNow,
  setDisplayDiNow,
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

  displayIntervalNow: boolean;
  setDisplayIntervalNow: React.Dispatch<React.SetStateAction<boolean>>;
  reprodiario: FetchGDx[];
  displayReproDiNow: boolean;
  setDisplayReproDiNow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={style.graphLineData}>
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
          <label>
            Estimación GDx
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
            Máximo GDx
            <input
              type="checkbox"
              defaultChecked={displayIntervalNow}
              onClick={() => setDisplayIntervalNow(!displayIntervalNow)}
            />
          </label>
        </section>
      </section>
    </div>
  );
}

export default DataGraphsDay;
