import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";
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
import { fetchingAsync } from "../../../assets/helpers/auxiliar";

export default function Data() {
  const [day, setDay] = useState<string>(actualDateDay());
  const [month, setMonth] = useState<string>(actualDateMonth());
  const [year, setYear] = useState<string>(actualDateYear);

  const date = `${year}-${month}-${day}`;
  useEffect(() => {
    fetchingAsync(
      date,
      setEjecutado,
      setGdx,
      setDiario,
      setReprodiario,
      setDataMonth,
      setPrediction,
      setLoading
    );
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
        />
      </header>
      {loading ? (
        <div className={style.loader}>
          <DotSpinner size={70} speed={0.9} color="white" />
        </div>
      ) : (
        <DataNow
          key={"dataNow"}
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
