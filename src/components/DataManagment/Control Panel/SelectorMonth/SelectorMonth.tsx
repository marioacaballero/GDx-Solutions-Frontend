import { useState } from "react";
import { months, years } from "../../../../assets/constants/schedule";
import {
  actualDateMonth,
  actualDateYear,
} from "../../../../assets/constants/initialStates";
import style from "./SelectorMonth.module.css";

function SelectorMonth({
  setYear,
  setMonth,
  setLoading,
}: {
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [monthSelect, setMonthSelect] = useState<string>(actualDateMonth());
  const [yearSelect, setYearSelect] = useState<string>(actualDateYear);

  const onChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMonth(monthSelect);
    setYear(yearSelect);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className={style.selectorMonth}>
      <select onChange={(e) => onChangeSelect(e, setMonthSelect)}>
        <option value={actualDateMonth()}>Mes</option>
        {months.map((e) => (
          <option key={e.value} value={e.value}>
            {e.name}
          </option>
        ))}
      </select>
      <select onChange={(e) => onChangeSelect(e, setYearSelect)}>
        <option value={actualDateYear}>Año</option>
        {years.map((e) => (
          <option key={e.value} value={e.value}>
            {e.name}
          </option>
        ))}
      </select>
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SelectorMonth;
