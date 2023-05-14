import { ChangeEvent } from "react";
import { Schedule } from "../../assets/constants/interfaces";
import style from "./Checkbox.module.css";

function Checkbox(
  values: Schedule[],
  setState: React.Dispatch<React.SetStateAction<string>>,
  state: string
) {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <div className={style.checkbox}>
      {values.map((val, i) => (
        <label key={i}>
          <input
            type="checkbox"
            value={val.value}
            checked={state === val.value}
            onChange={handleCheckboxChange}
          />
          {val.name}
        </label>
      ))}
    </div>
  );
}

export default Checkbox;
