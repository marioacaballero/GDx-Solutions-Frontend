import { useState } from "react";
import swal from "sweetalert";
import { BsSearch } from "react-icons/bs";
import {
  actualDateDay,
  actualDateMonth,
  actualDateYear,
} from "../../../../assets/constants/initialStates";
import style from "./Calendar.module.css";

const CalendarGDx = ({
  setLoading,
  setYear,
  setMonth,
  setDay,
  currentDate,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  currentDate: string;
}) => {
  const [input, setInput] = useState<string>(currentDate);
  const handleDateClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.value) {
      swal({
        title: "Cuidado!",
        text: "Debe seleccionar una fecha",
        icon: "warning",
      });
      setInput(`${actualDateYear}-${actualDateMonth()}-${actualDateDay()}`);
    } else if (currentDate != e.target.value) {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dateArr = input.split("-");
    setLoading(true);
    setYear(dateArr[0]);
    setMonth(dateArr[1]);
    setDay(dateArr[2]);
  };

  return (
    <div className={style.calendar}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="date"
          id="fecha"
          name="calendar"
          value={input}
          min="2021-01-01"
          max={`${actualDateYear}-${actualDateMonth()}-${actualDateDay()}`}
          onChange={(e) => handleDateClick(e)}
          lang="es"
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default CalendarGDx;
