import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";
import {
  DataCoes /*, DataPrediction*/,
} from "../../../assets/constants/dataCoes";
import style from "./Data.module.css";
import {
  actualDateDay,
  actualDateMonth,
  actualDateString,
  actualDateYear,
} from "../../../assets/constants/initialStates";
import DataNow from "./DataNow";
import DataHistory from "./DataHistory";

export default function Data() {
  useEffect(() => {
    fetch(DataCoes("data"))
      .then((res) => res.json())
      .then((data) => setAlldata(data));

    // fetch(
    //   DataPrediction(
    //     "prediccion_detalle",
    //     actualDateYear + "-" + actualDateMonth() + "-" + actualDateDay()
    //   )
    // )
    //   .then((res) => res.json())
    //   .then((data) => setGDxNow(data));
  }, []);

  const [alldata, setAlldata] = useState<string[]>([]);
  const [day, setDay] = useState<string>(actualDateDay);
  const [month, setMonth] = useState<string>(actualDateMonth());
  const [year, setYear] = useState<string>(actualDateYear);

  const [displayEj, setDisplayEj] = useState<boolean>(true);
  const [displayEjNow, setDisplayEjNow] = useState<boolean>(true);

  const [displayGDx, setDisplayGDx] = useState<boolean>(true);
  const [displayGDxNow, setDisplayGDxNow] = useState<boolean>(true);
  // const [GDxNow, setGDxNow] = useState<any>([]);
  // console.log(GDxNow);

  const [displayDi, setDisplayDi] = useState<boolean>(true);
  const [displayDiNow, setDisplayDiNow] = useState<boolean>(true);

  const [displayInterval, setDisplayInterval] = useState<boolean>(true);
  const [displayIntervalNow, setDisplayIntervalNow] = useState<boolean>(true);

  const [displayDaily, setDisplayDaily] = useState<boolean>(true);

  const onChangeDaily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDisplayDaily(!displayDaily);
  };

  return (
    <div className={style.data}>
      <a href="/">x</a>
      <header>
        <select onChange={(e) => onChangeDaily(e)}>
          <option>Monitor Diario</option>
          <option>Historico</option>
        </select>
        <h2>{actualDateString}</h2>
      </header>
      {alldata.length ? (
        displayDaily ? (
          <DataNow
            alldata={alldata}
            displayDiNow={displayDiNow}
            displayEjNow={displayEjNow}
            displayGDxNow={displayGDxNow}
            displayIntervalNow={displayIntervalNow}
            setDisplayDiNow={setDisplayDiNow}
            setDisplayEjNow={setDisplayEjNow}
            setDisplayGDxNow={setDisplayGDxNow}
            setDisplayIntervalNow={setDisplayIntervalNow}
          />
        ) : (
          <DataHistory
            alldata={alldata}
            day={day}
            month={month}
            year={year}
            displayDi={displayDi}
            displayEj={displayEj}
            displayGDx={displayGDx}
            displayInterval={displayInterval}
            setDay={setDay}
            setMonth={setMonth}
            setYear={setYear}
            setDisplayDi={setDisplayDi}
            setDisplayEj={setDisplayEj}
            setDisplayGDx={setDisplayGDx}
            setDisplayInterval={setDisplayInterval}
          />
        )
      ) : (
        <div className={style.loader}>
          <DotSpinner size={70} speed={0.9} color="white" />
        </div>
      )}
    </div>
  );
}
