import { useState } from "react";
import { LuUsers, LuShoppingBag } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";
import swal from "sweetalert";
import { DotPulse } from "@uiball/loaders";
import style from "./ControlPanel.module.css";
import {
  actualDateDay,
  actualDateMonth,
  actualDateYear,
} from "../../../assets/constants/initialStates";
import CalendarGDx from "./Calendar/Calendar";
import logo from "../../../assets/images/LOGO-PNG.png";

export default function ControlPanel({
  setYear,
  setMonth,
  setDay,
  setLoading,
  date,
  loading,
}: {
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  loading: boolean;
}) {
  const [backDiario, setBackDiario] = useState<boolean>(true);
  const [backHistory, setBackHistory] = useState<boolean>(false);
  const dateArray = date.split("-");

  return (
    <div className={style.controlPanel}>
      <section>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div>
            <LuShoppingBag className={style.icon} />
          </div>
          <button
            style={{
              backgroundColor: backDiario ? "#0c1137" : "",
            }}
            onClick={() => {
              if (
                date !==
                `${actualDateYear}-${actualDateMonth()}-${actualDateDay()}`
              ) {
                setLoading(true);
                setYear(actualDateYear);
                setMonth(actualDateMonth());
                setDay(actualDateDay());
              }
              setBackHistory(false);
              setBackDiario(true);
            }}
          >
            Control Diario
          </button>
        </div>
        <div>
          <div>
            <TbActivityHeartbeat className={style.icon} />
          </div>
          <button
            style={{
              backgroundColor: backHistory ? "#0c1137" : "",
            }}
            onClick={() => {
              setBackHistory(true);
              setBackDiario(false);
            }}
          >
            Record Histórico
          </button>
        </div>
        <div>
          <div>
            <LuUsers className={style.icon} />
          </div>
          <button
            onClick={() =>
              swal({
                title: "Lo sentimos!",
                text: "Todavía estamos desarrollando esta sección",
                icon: "warning",
              })
            }
          >
            Usuario
          </button>
        </div>
      </section>
      <section>
        <h2>Calendario</h2>
        {loading ? (
          <p>
            <DotPulse size={40} speed={1.3} color="white" />
          </p>
        ) : (
          <p>
            Resultados del {dateArray[2]}-{dateArray[1]}-{dateArray[0]}
          </p>
        )}
        <CalendarGDx
          key={"calendarGDX"}
          setDay={setDay}
          setLoading={setLoading}
          setMonth={setMonth}
          setYear={setYear}
        />
      </section>
    </div>
  );
}
