import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { ChaoticOrbit } from "@uiball/loaders";
import { dataHorizontalBar } from "../../../../assets/constants/dataGraphHorizontalBar";
import { GenerationTop } from "../../../../assets/constants/interfaces";
import { HorizontalBarGraph } from "../../../Graphs/HorizontalBarGraph";
import style from "./GenerationTopTen.module.css";
import { FetchData } from "../../../../assets/constants/fetchData";

function GenerationTopTen({ date }: { date: string }) {
  const { token } = useParams();

  useEffect(() => {
    axios
      .get(FetchData(`top_empresas?date=${date}`), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setGenerationTopData(res.data));
  }, [date, token]);

  const [generationTopData, setGenerationTopData] = useState<GenerationTop[]>(
    []
  );
  return (
    <div className={style.generationTopTen}>
      {generationTopData.length ? (
        <HorizontalBarGraph
          key={"HorizontalBarGraphDaily"}
          myData={dataHorizontalBar(generationTopData)}
        />
      ) : (
        <ChaoticOrbit size={25} speed={1.5} color="white" />
      )}
    </div>
  );
}

export default GenerationTopTen;
