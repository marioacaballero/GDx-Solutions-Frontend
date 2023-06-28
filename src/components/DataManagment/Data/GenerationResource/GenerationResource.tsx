import { dataAreaDaily } from "../../../../assets/constants/dataGraphArea";
import { GenerationType } from "../../../../assets/constants/interfaces";
import AreaGraph from "../../../Graphs/AreaGraph";
import style from "./GenerationResource.module.css";

function GenerationResource({
  date,
  dataArea,
}: {
  date: string;
  dataArea: GenerationType[];
}) {
  return (
    <div className={style.generationResource}>
      <AreaGraph
        key={"AreaGraphEnergyResource"}
        myData={dataAreaDaily(date, dataArea)}
      />
    </div>
  );
}

export default GenerationResource;
