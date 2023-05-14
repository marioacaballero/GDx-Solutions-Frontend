import style from "./DataManagment.module.css";
import ControlPanel from "./Control Panel/ControlPanel";
import Data from "./Data/Data";

export default function DataManagment() {
  return (
    <div className={style.dataManagment}>
      <div>
        <ControlPanel />
      </div>
      <div>
        <Data />
      </div>
    </div>
  );
}
