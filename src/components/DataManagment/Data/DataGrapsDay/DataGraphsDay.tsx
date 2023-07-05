import { useState } from "react";
import { myDataDaily } from "../../../../assets/constants/dataGraphLine";
import {
  FetchEject,
  FetchGDx,
  FetchPrediction,
} from "../../../../assets/constants/interfaces";
import { LineGraph } from "../../../Graphs/LineGraph";
import style from "./DataGraphsDay.module.css";

function DataGraphsDay({
  ejecutadoNow,
  gdxNow,
  diarioNow,
  reprodiario,
  mdcgdx,
  maxgdx,
  intervalForGraphNow,
  prediccionNow,
}: {
  ejecutadoNow: FetchEject[];
  gdxNow: FetchGDx[];
  diarioNow: FetchGDx[];
  reprodiario: FetchGDx[];
  mdcgdx: (number | null)[];
  maxgdx: (number | null)[];
  intervalForGraphNow: (number | null)[];
  prediccionNow: FetchPrediction;
}) {
  const [displayEjNow, setDisplayEjNow] = useState<boolean>(true);
  const [displayGDxNow, setDisplayGDxNow] = useState<boolean>(true);
  const [displayDiNow, setDisplayDiNow] = useState<boolean>(true);
  const [displayReproDiNow, setDisplayReproDiNow] = useState<boolean>(true);
  const [displayIntervalNow, setDisplayIntervalNow] = useState<boolean>(true);
  const [displayMDCgdx, setDisplayMDCgdx] = useState<boolean>(true);
  const [displayMaxgdx, setDisplayMaxgdx] = useState<boolean>(true);

  const { hora_max, hora_min, demanda_pred } = prediccionNow;
  const maxMDCGDX = Number(demanda_pred);

  const maxValue1 = gdxNow
    .map((e) => e.demanda)
    .reduce((max: number, valor: number) => (valor > max ? valor : max), 0);

  const maxValue2 = diarioNow
    .map((e) => e.demanda)
    .reduce((max: number, valor: number) => (valor > max ? valor : max), 0);

  const maxValue = Math.max(maxValue1, maxValue2);

  const roundToNearestMultiple = (numb: number) => {
    const roundedNumber = Math.round(numb);
    const remainder = roundedNumber % 100;

    if (remainder >= 50) {
      return roundedNumber + (100 - remainder);
    } else {
      return roundedNumber + (50 - remainder) + 100;
    }
  };
  return (
    <div className={style.graphLineData}>
      <section>
        <label>
          Intervalo de Modulación {hora_min.slice(11, 16)} hs -{" "}
          {hora_max.slice(11, 16)} hs
          <input
            type="checkbox"
            defaultChecked={displayIntervalNow}
            onClick={() => setDisplayIntervalNow(!displayIntervalNow)}
          />
        </label>
        <section className={style.lineGraph}>
          <LineGraph
            key={"lineGraphDay"}
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
              intervalForGraphNow,
              maxMDCGDX
            )}
            maxValue={roundToNearestMultiple(maxValue)}
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
