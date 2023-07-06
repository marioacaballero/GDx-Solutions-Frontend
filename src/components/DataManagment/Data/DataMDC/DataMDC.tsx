import { useState } from "react";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import { BarGraph } from "../../../Graphs/BarGraph";
import { dataBarMDC } from "../../../../assets/constants/dataGraphMDC";
import { MDCHistory } from "../../../../assets/constants/interfaces";
import style from "./DataMDC.module.css";

function DataMDC({ mdcHistory }: { mdcHistory: MDCHistory[] }) {
  const [numberBars, setNumberBars] = useState<number>(0);
  const endValue = mdcHistory.length - (numberBars + 5);

  const goRight = () => {
    if (endValue > 0) {
      setNumberBars(numberBars + 5);
    }
  };
  const goLeft = () => {
    if (numberBars != 0) {
      setNumberBars(numberBars - 5);
    }
  };

  return (
    <div className={style.mdcGraph}>
      <div>
        <BarGraph
          key={"MDCHistory"}
          myData={dataBarMDC(mdcHistory, numberBars)}
        />
      </div>
      <div>
        {numberBars ? (
          <AiFillLeftSquare onClick={goLeft} className={style.iconArrow} />
        ) : (
          <></>
        )}
        {endValue > 0 ? (
          <AiFillRightSquare onClick={goRight} className={style.iconArrow} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default DataMDC;
