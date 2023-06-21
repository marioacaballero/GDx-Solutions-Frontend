import { LuUsers, LuShoppingBag } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";
import style from "./ControlPanel.module.css";
import { days, months, years } from "../../../assets/constants/schedule";
import { data1 } from "../../../assets/constants/interfaces";
import {
  actualDateDay,
  actualDateMonth,
  actualDateYear,
} from "../../../assets/constants/initialStates";
import { useState } from "react";
import swal from "sweetalert";

export default function ControlPanel({
  setYear,
  setMonth,
  setDay,
  setLoading,
  date,
  loading,
  displayDaily,
  setDisplayDaily,
}: {
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  loading: boolean;
  displayDaily: boolean;
  setDisplayDaily: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [backDiario, setBackDiario] = useState<boolean>(true);
  const [backHistory, setBackHistory] = useState<boolean>(false);

  const onChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    cb: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    setLoading(true);
    cb(e.target.value);
  };

  return (
    <div className={style.controlPanel}>
      <section>
        <div>
          <button>GDx Solutions</button>
        </div>
        <div>
          <LuShoppingBag className={style.icon} />
          <button
            style={{
              backgroundColor: backDiario ? "#323548" : "",
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
              setDisplayDaily(false);
              setBackHistory(false);
              setBackDiario(true);
            }}
          >
            Control Diario
          </button>
        </div>
        <div>
          <TbActivityHeartbeat className={style.icon} />
          <button
            style={{
              backgroundColor: backHistory ? "#323548" : "",
            }}
            onClick={() => {
              setDisplayDaily(true);
              setBackHistory(true);
              setBackDiario(false);
            }}
          >
            Record Histórico
          </button>
        </div>
        <div>
          <LuUsers className={style.icon} />
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
        <h2>Mostrando fecha</h2>
        {loading ? <p>cargando...</p> : <p>{date}</p>}
        {displayDaily ? (
          <>
            <select onChange={(e) => onChangeSelect(e, setYear)}>
              <option value={"2023"}>Año</option>
              {years.map((elem) => (
                <option value={elem.value}>{elem.name}</option>
              ))}
            </select>
            <select onChange={(e) => onChangeSelect(e, setMonth)}>
              <option value={"01"}>Mes</option>
              {months.map((elem) => (
                <option value={elem.value}>{elem.name}</option>
              ))}
            </select>
            <select onChange={(e) => onChangeSelect(e, setDay)}>
              <option value={"01"}>Día</option>
              {days.map((elem: data1) => (
                <option value={elem.value}>{elem.name}</option>
              ))}
            </select>
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
