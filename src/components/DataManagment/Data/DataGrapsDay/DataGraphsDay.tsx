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
  mdcgdx,
  displayMDCgdx,
  setDisplayMDCgdx,
  maxgdx,
  displayMaxgdx,
  setDisplayMaxgdx,
  intervalForGraphNow,
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
  setDisplayMDCgdx: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayMaxgdx: React.Dispatch<React.SetStateAction<boolean>>;
  mdcgdx: (number | null)[];
  maxgdx: (number | null)[];
  intervalForGraphNow: (number | null)[];
  displayMDCgdx: boolean;
  displayMaxgdx: boolean;
}) {
  return (
    <div className={style.graphLineData}>
      <section>
        <h2>
          Intervalo de Modulación{" "}
          <input
            type="checkbox"
            defaultChecked={displayIntervalNow}
            onClick={() => setDisplayIntervalNow(!displayIntervalNow)}
          />
        </h2>
        <section className={style.lineGraph}>
          <LineGraph
            myData={myDataDaily(
              reprodiario,
              displayReproDiNow,
              displayEjNow,
              ejecutadoNow,
              displayIntervalNow,
              displayGDxNow,
              gdxNow,
              displayDiNow,
              diarioNow,
              mdcgdx,
              maxgdx,
              displayMDCgdx,
              displayMaxgdx,
              intervalForGraphNow
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
              defaultChecked={displayMDCgdx}
              onClick={() => setDisplayMDCgdx(!displayMDCgdx)}
            />
          </label>
          <label>
            Máximo GDx
            <input
              type="checkbox"
              defaultChecked={displayMaxgdx}
              onClick={() => setDisplayMaxgdx(!displayMaxgdx)}
            />
          </label>
        </section>
      </section>
    </div>
  );
}

export default DataGraphsDay;
