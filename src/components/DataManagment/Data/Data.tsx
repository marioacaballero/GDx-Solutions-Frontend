import { useState } from "react";
import style from "./Data.module.css";
import {
  actualDateDay,
  actualDateMonth,
  actualDateYear,
} from "../../../assets/constants/initialStates";
import DataNow from "./DataNow";
import ControlPanel from "../Control Panel/ControlPanel";
import DataHistory from "./DataHistory";

export default function Data() {
  const [day, setDay] = useState<string>(actualDateDay());
  const [month, setMonth] = useState<string>(actualDateMonth());
  const [year, setYear] = useState<string>(actualDateYear);

  const date = `${year}-${month}-${day}`;
  const [loading, setLoading] = useState<boolean>(true);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  return (
    <div className={style.data}>
      <a href="/">x</a>
      <header>
        <ControlPanel
          key={"controlPanel"}
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          setLoading={setLoading}
          date={date}
          loading={loading}
          setShowHistory={setShowHistory}
          showHistory={showHistory}
        />
      </header>
      {showHistory ? (
        <DataHistory
          key={"dataHistory"}
          date={date}
          setLoading={setLoading}
          loading={loading}
        />
      ) : (
        <DataNow
          key={"dataNow"}
          loading={loading}
          date={date}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}
