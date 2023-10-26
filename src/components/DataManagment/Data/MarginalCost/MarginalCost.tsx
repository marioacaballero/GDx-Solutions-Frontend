import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RaceBy, ChaoticOrbit, ThreeBody } from "@uiball/loaders";
import axios from "axios";
import { marginalDataDaily } from "../../../../assets/constants/dataGraphMarginal";
import {
  MarginalCostData,
  SubStationsData,
  SubStationsData2,
} from "../../../../assets/constants/interfaces";
import { LineGraph } from "../../../Graphs/LineGraph";
import style from "./MarginalCost.module.css";
import { FetchData } from "../../../../assets/constants/fetchData";

function MarginalCost({ date }: { date: string }) {
  const [nodo, setNodo] = useState<string>("AGUAYTIA138");
  const [marginal, setMarginal] = useState<MarginalCostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { token } = useParams();

  useEffect(() => {
    axios
      .get(FetchData(`costo_marginal?nodo=${nodo}&date=${date}`), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMarginal(res.data);
        setLoading(false);
      });

    axios
      .get(FetchData("nodos"), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setNodos(res.data));

    axios
      .get(FetchData("barras"), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setBarras(res.data));
  }, [nodo, date, token]);

  const [nodos, setNodos] = useState<SubStationsData[]>([]);
  const [barras, setBarras] = useState<SubStationsData2[]>([]);

  const onChangeSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setLoading(true);
    setNodo(e.target.value);
    const { data } = await axios.get(
      FetchData(`costo_marginal?nodo=${nodo}&date=${date}`),
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // const { data } = await resp.json();
    setMarginal(data);
    setTimeout(() => setLoading(false), 4000);
  };

  return (
    <div className={style.marginalCost}>
      {marginal.length ? (
        <>
          <section>
            <h4>Costo Marginal [S/./MWh]</h4>
            {barras.length && nodos.length ? (
              <select onChange={(e) => onChangeSelect(e)}>
                {barras.map((e, i) => (
                  <option key={e.nombre_barra} value={nodos[i].nodo}>
                    {e.nombre_barra}
                  </option>
                ))}
              </select>
            ) : (
              <div style={{ marginLeft: 20 }}>
                <RaceBy size={30} lineWeight={2} speed={1.4} color="white" />
              </div>
            )}
          </section>
          <div>
            {loading ? (
              <ThreeBody size={35} speed={1} color="white" />
            ) : (
              <LineGraph
                key={"marginalCostGraphDaily"}
                myData={marginalDataDaily(marginal)}
                maxStickLimit={7}
              />
            )}
          </div>
        </>
      ) : (
        <article>
          <ChaoticOrbit size={25} speed={1.5} color="white" />
        </article>
      )}
    </div>
  );
}

export default MarginalCost;
