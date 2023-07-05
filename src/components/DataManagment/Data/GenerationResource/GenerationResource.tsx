import { useEffect, useState } from "react";
import { ChaoticOrbit } from "@uiball/loaders";
import { dataAreaDaily } from "../../../../assets/constants/dataGraphArea";
import { GenerationType } from "../../../../assets/constants/interfaces";
import AreaGraph from "../../../Graphs/AreaGraph";
import style from "./GenerationResource.module.css";
import { FetchData } from "../../../../assets/constants/fetchData";

function GenerationResource({ date }: { date: string }) {
  useEffect(() => {
    fetch(FetchData(`generacion_tipo?date=${date}`))
      .then((res) => res.json())
      .then((data) => setGenerationData(data));
  }, [date]);

  const [generationData, setGenerationData] = useState<GenerationType[]>([]);
  return (
    <div className={style.generationResource}>
      {generationData.length ? (
        <AreaGraph
          key={"AreaGraphEnergyResource"}
          myData={dataAreaDaily(generationData)}
        />
      ) : (
        <ChaoticOrbit size={25} speed={1.5} color="white" />
      )}
    </div>
  );
}

export default GenerationResource;
