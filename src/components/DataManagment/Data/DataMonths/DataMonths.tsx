import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { ChaoticOrbit } from "@uiball/loaders";
import { databarDaily } from "../../../../assets/constants/dataGraphBar";
import { FetchEject } from "../../../../assets/constants/interfaces";
import { months } from "../../../../assets/constants/schedule";
import { BarGraph } from "../../../Graphs/BarGraph";
import style from "./DataMonths.module.css";
import { FetchData } from "../../../../assets/constants/fetchData";

function DataMonths({ date }: { date: string }) {
  const { token } = useParams();

  useEffect(() => {
    axios
      .get(FetchData(`ejecutado_picos_diarios?date=${date}`), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDataMonth(res.data));
  }, [date, token]);

  const [dataMonth, setDataMonth] = useState<FetchEject[]>([]);

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const monthByName = months.find((e) => e.value === month);
  return (
    <>
      {dataMonth.length ? (
        <>
          <h3>
            Resultado Mensual {monthByName?.name} {year}
          </h3>
          <section className={style.barGraph}>
            <BarGraph myData={databarDaily(dataMonth)} />
          </section>
        </>
      ) : (
        <ChaoticOrbit size={25} speed={1.5} color="white" />
      )}
    </>
  );
}

export default DataMonths;
