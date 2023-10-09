import Data from "./Data/Data";
import style from "./DataManagment.module.css";

export default function DataManagment() {
  return (
    <div className={style.dataManagment}>
      <div>
        <Data />
      </div>
    </div>
  );
}
