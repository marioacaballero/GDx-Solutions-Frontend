import { useEffect, useState } from "react";
import { months, years } from "../../../assets/constants/schedule";
import { LineGraph } from "../../Graphs/LineGraph";
import { DataCoes } from "../../../assets/constants/dataCoes";
import style from "./Data.module.css";
import Checkbox from "../../Checkbox/Checkbox";
import {
  actualDateDay,
  actualDateMonth,
  actualDateString,
  actualDateYear,
} from "../../../assets/constants/initialStates";
import { BarGraph } from "../../Graphs/BarGraph";
import { monthData } from "../../../assets/constants/auxiliar";
import { data1, data2 } from "../../../assets/constants/interfaces";

export default function Data() {
  useEffect(() => {
    fetch(DataCoes("data"))
      .then((res) => res.json())
      .then((data) => setAlldata(data));
  }, []);

  const [alldata, setAlldata] = useState<string[]>([]);
  const [day, setDay] = useState<string>(actualDateDay);
  const [month, setMonth] = useState<string>(actualDateMonth());
  const [year, setYear] = useState<string>(actualDateYear);

  const date = day + "/" + month + "/" + year;
  const data = alldata.filter((f) => f[0].includes(date));
  const ejecutado = data.map((f) => parseInt(f[1]));
  const diario = data.map((f) => parseInt(f[2]));

  const alldataMonth = alldata.filter((f) =>
    f[0].slice(3, 10).includes(month + "/" + year)
  );

  const dataMonth = monthData(alldataMonth).map((elem: data2) => {
    return [
      elem.start,
      elem.result.reduce(
        (max: number, valor: number) => (valor > max ? valor : max),
        0
      ),
    ];
  });

  const days = dataMonth.map((e: data1[]) => {
    return {
      name: e[0],
      value: e[0],
    };
  });

  const myData = {
    labels: alldata
      .map((f) => f[0])
      .filter((f) => f.includes(date))
      .map((f) => f.slice(11)),
    datasets: [
      {
        label: "Demanda Ejectuada",
        data: ejecutado,
        tension: 0.1,
        borderColor: "rgb(8, 197, 18)",
        backgroundColor: "rgba(8, 197, 18, 0.5)",
        fill: true,
        borderWidth: 1,
        pointRadius: 0,
      },
      // {
      //   label: "Estimación GDx",
      //   data: diario, //cambiar esto por la estimacion
      //   tension: 0.1,
      //   borderColor: "rgb(128, 0, 128)",
      //   backgroundColor: "rgba(128, 0, 128,0.5)",
      //   fill: true,
      //   borderWidth: 1,
      //   pointRadius: 0,
      // },
      {
        label: "Programa Diario",
        data: diario, //cambiar esto por la estimacion
        tension: 0.1,
        borderColor: "rgb(0, 153, 255)",
        backgroundColor: "rgba(0, 153, 255,0.5)",
        fill: true,
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  const databar = {
    labels: dataMonth.map((e: data1[]) => e[0]),
    datasets: [
      {
        label: "Máximo Ejecutado",
        data: dataMonth.map((e: data1[]) => e[1]),
        backgroundColor: "rgba(8, 197, 18, 0.5)", // Color de fondo de las barras
        borderColor: "rgb(8, 197, 18)", // Color del borde de las barras
        borderWidth: 1, // Ancho del borde de las barras
      },
    ],
  };

  return (
    <div className={style.data}>
      <header>
        <h2>Gestión de la Demanda Eléctrica</h2>
        <h2>{actualDateString}</h2>
      </header>
      <main>
        <div>
          <section>
            <div>
              <p>Año</p>
              {Checkbox(years, setYear, year)}
            </div>
            <div>
              <p>Mes</p>
              {Checkbox(months, setMonth, month)}
            </div>
            <div>
              <p>Día</p>
              {Checkbox(days, setDay, day)}
            </div>
          </section>
          <section className={style.interval}>
            <p>Predicción</p>
            <section>
              <div>
                <p>Máxima Potencia (MW)</p>
                <p>
                  {diario.reduce(
                    (max: number, valor: number) => (valor > max ? valor : max),
                    0
                  )}
                </p>
              </div>
              <div>
                <p>Máxima Potencia (MW)</p>
                <p>
                  {diario.reduce(
                    (max: number, valor: number) => (valor > max ? valor : max),
                    0
                  )}
                </p>
              </div>
              <div>
                <p>Intervalo Horario (hr)</p>
                <p>18:30 - 22:00</p>
              </div>
            </section>
          </section>
        </div>
        {alldata.length ? (
          <>
            <section>
              <h3>Gestión de Demanda</h3>
              <section
                style={{
                  width: 800,
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LineGraph myData={myData} />
              </section>
            </section>
            <section>
              <h3>Resultado Mensual</h3>
              <section
                style={{
                  width: 800,
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BarGraph myData={databar} />
              </section>
            </section>
          </>
        ) : (
          <h1>Cargando...</h1>
        )}
      </main>
    </div>
  );
}
