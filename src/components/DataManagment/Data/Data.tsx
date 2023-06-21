import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";
import { FetchData } from "../../../assets/constants/fetchData";
import style from "./Data.module.css";
import {
  actualDateDay,
  actualDateMonth,
  actualDateYear,
} from "../../../assets/constants/initialStates";
import DataNow from "./DataNow";
import ControlPanel from "../Control Panel/ControlPanel";
import {
  FetchEject,
  FetchGDx,
  FetchPrediction,
} from "../../../assets/constants/interfaces";

export default function Data() {
  const [day, setDay] = useState<string>(actualDateDay());
  const [month, setMonth] = useState<string>(actualDateMonth());
  const [year, setYear] = useState<string>(actualDateYear);

  const date = `${year}-${month}-${day}`;

  useEffect(() => {
    const fetchingAsync = async () => {
      try {
        const ejecResp = await fetch(FetchData(`ejecutado?date=${date}`));
        const ejectData = await ejecResp.json();
        setEjecutado(ejectData);

        const gdxResp = await fetch(
          FetchData(`prediccion_detalle?date=${date}`)
        );
        const gdxData = await gdxResp.json();
        setGdx(gdxData);

        const diarioResp = await fetch(
          FetchData(`programa_diario?date=${date}`)
        );
        const diarioData = await diarioResp.json();
        setDiario(diarioData);

        const reprodiarioResp = await fetch(
          FetchData(`reprograma_diario?date=${date}`)
        );
        const reprodiarioData = await reprodiarioResp.json();
        setReprodiario(reprodiarioData);

        const monthResp = await fetch(
          FetchData(`prediccion_maximos_diarios?date=${date}`)
        );
        const monthData = await monthResp.json();
        setDataMonth(monthData);

        const predResp = await fetch(FetchData(`prediccion/?date=${date}`));
        const predData = await predResp.json();
        setPrediction(predData);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchingAsync();
  }, [date]);

  const [loading, setLoading] = useState<boolean>(true);
  const [ejecutado, setEjecutado] = useState<FetchEject[]>([]);
  const [gdx, setGdx] = useState<FetchGDx[]>([]);
  const [diario, setDiario] = useState<FetchGDx[]>([]);
  const [reprodiario, setReprodiario] = useState<FetchGDx[]>([]);
  const [dataMonth, setDataMonth] = useState<FetchGDx[]>([]);
  const [prediction, setPrediction] = useState<FetchPrediction>({
    date_pred: "sin datos",
    hora_min: "sin datos",
    hora_max: "sin datos",
    demanda_pred: "sin datos",
  });

  const [displayEjNow, setDisplayEjNow] = useState<boolean>(true);
  const [displayGDxNow, setDisplayGDxNow] = useState<boolean>(true);
  const [displayDiNow, setDisplayDiNow] = useState<boolean>(true);
  const [displayReproDiNow, setDisplayReproDiNow] = useState<boolean>(true);
  const [displayIntervalNow, setDisplayIntervalNow] = useState<boolean>(true);

  const [displayDaily, setDisplayDaily] = useState<boolean>(false);

  return (
    <div className={style.data}>
      <a href="/">x</a>
      <header>
        <ControlPanel
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          setLoading={setLoading}
          date={date}
          loading={loading}
          displayDaily={displayDaily}
          setDisplayDaily={setDisplayDaily}
        />
      </header>
      {loading ? (
        <div className={style.loader}>
          <DotSpinner size={70} speed={0.9} color="white" />
        </div>
      ) : (
        <DataNow
          ejecutadoNow={ejecutado}
          gdxNow={gdx}
          diarioNow={diario}
          prediccionNow={prediction}
          dataMonthNow={dataMonth}
          displayDiNow={displayDiNow}
          displayEjNow={displayEjNow}
          displayGDxNow={displayGDxNow}
          displayIntervalNow={displayIntervalNow}
          setDisplayDiNow={setDisplayDiNow}
          setDisplayEjNow={setDisplayEjNow}
          setDisplayGDxNow={setDisplayGDxNow}
          setDisplayIntervalNow={setDisplayIntervalNow}
          reprodiario={reprodiario}
          displayReproDiNow={displayReproDiNow}
          setDisplayReproDiNow={setDisplayReproDiNow}
        />
      )}
    </div>
  );
}
