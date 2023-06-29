import { dataHorizontalBar } from "../../../../assets/constants/dataGraphHorizontalBar";
import { GenerationTop } from "../../../../assets/constants/interfaces";
import { HorizontalBarGraph } from "../../../Graphs/HorizontalBarGraph";
import style from "./GenerationTopTen.module.css";

function GenerationTopTen({
  generationTop,
}: {
  generationTop: GenerationTop[];
}) {
  return (
    <div className={style.generationTopTen}>
      <HorizontalBarGraph
        key={"HorizontalBarGraphDaily"}
        myData={dataHorizontalBar(generationTop)}
      />
    </div>
  );
}

export default GenerationTopTen;
