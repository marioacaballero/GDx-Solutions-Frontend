import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { ChaoticOrbit } from "@uiball/loaders";
import { dataAreaDaily } from "../../../../assets/constants/dataGraphArea";
import { GenerationType } from "../../../../assets/constants/interfaces";
import AreaGraph from "../../../Graphs/AreaGraph";
import style from "./GenerationResource.module.css";
import { FetchData } from "../../../../assets/constants/fetchData";

function GenerationResource({ date }: { date: string }) {
  const { token } = useParams();

  useEffect(() => {
    axios
      .get(FetchData(`generacion_tipo?date=${date}`), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setGenerationData(res.data));
  }, [date, token]);

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
