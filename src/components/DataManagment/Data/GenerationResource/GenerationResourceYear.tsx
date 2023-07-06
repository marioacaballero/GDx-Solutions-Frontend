import { useEffect, useState } from "react";
import { ChaoticOrbit } from "@uiball/loaders";
import { FetchData } from "../../../../assets/constants/fetchData";
import style from "./GenerationResource.module.css";
import { BarStackedGraph } from "../../../Graphs/BarStackedGraph";
import { GenerationTypeYear } from "../../../../assets/constants/interfaces";
import { dataBarStacked } from "../../../../assets/constants/dataBarStacked";

function GenerationResourceYear({ date }: { date: string }) {
  useEffect(() => {
    fetch(FetchData(`generacion_tipo_year?year=${date.slice(0, 4)}`))
      .then((res) => res.json())
      .then((data) => setGenerationData(data));
  }, [date]);

  const [generationData, setGenerationData] = useState<GenerationTypeYear[]>(
    []
  );
  return (
    <div className={style.generationResource}>
      {generationData.length ? (
        <BarStackedGraph
          key={"BarGraphEnergyResourceYear"}
          myData={dataBarStacked(generationData)}
        />
      ) : (
        <ChaoticOrbit size={25} speed={1.5} color="white" />
      )}
    </div>
  );
}

export default GenerationResourceYear;
