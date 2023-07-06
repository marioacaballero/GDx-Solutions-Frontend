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
import { months } from "../../../assets/constants/schedule";
import SelectorMonth from "./SelectorMonth/SelectorMonth";

export default function ControlPanel({
  setYear,
  setMonth,
  setDay,
  setLoading,
  date,
  loading,
  setShowHistory,
  showHistory,
}: {
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  loading: boolean;
  showHistory: boolean;
}) {
  const [backDiario, setBackDiario] = useState<boolean>(true);
  const [backHistory, setBackHistory] = useState<boolean>(false);
  const dateArray = date.split("-");
  const monthToDate = Number(dateArray[1]) - 1;

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
                setShowHistory(false);
                setYear(actualDateYear);
                setMonth(actualDateMonth());
                setDay(actualDateDay());
              }
              if (showHistory) {
                setLoading(true);
                setShowHistory(false);
                setBackHistory(false);
                setBackDiario(true);
              }
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
              if (
                date.slice(0, 7) !== `${actualDateYear}-${actualDateMonth()}`
              ) {
                setLoading(true);
                setMonth(actualDateMonth());
                setYear(actualDateYear);
              }
              if (!showHistory) {
                setLoading(true);
                setBackHistory(true);
                setBackDiario(false);
                setShowHistory(true);
              }
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
        {showHistory ? (
          <>
            <h2>Calendario</h2>
            {loading ? (
              <div>
                <DotPulse size={40} speed={1.3} color="white" />
              </div>
            ) : (
              <>
                <p>
                  {months[monthToDate].name} del {dateArray[0]}
                </p>
                <SelectorMonth
                  key={"selectorMonth"}
                  setLoading={setLoading}
                  setMonth={setMonth}
                  setYear={setYear}
                />
              </>
            )}
          </>
        ) : (
          <>
            <h2>Calendario</h2>
            {loading ? (
              <div>
                <DotPulse size={40} speed={1.3} color="white" />
              </div>
            ) : (
              <>
                <p>
                  {dateArray[2]} de {months[monthToDate].name} del{" "}
                  {dateArray[0]}
                </p>
                <CalendarGDx
                  key={"calendarGDX"}
                  setDay={setDay}
                  setLoading={setLoading}
                  setMonth={setMonth}
                  setYear={setYear}
                  currentDate={date}
                />
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
}
