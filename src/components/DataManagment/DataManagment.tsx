import style from "./DataManagment.module.css";
import Data from "./Data/Data";

export default function DataManagment() {
  return (
    <div className={style.dataManagment}>
      <div>
        <Data />
      </div>
    </div>
  );
}
