import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";
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
import { monthData } from "../../../assets/helpers/auxiliar";
import {
  ChartContext,
  data1,
  data2,
} from "../../../assets/constants/interfaces";

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

  const [displayEj, setDisplayEj] = useState<boolean>(true);
  const [displayEjNow, setDisplayEjNow] = useState<boolean>(true);

  const [displayGDx, setDisplayGDx] = useState<boolean>(true);
  const [displayGDxNow, setDisplayGDxNow] = useState<boolean>(true);

  const [displayDi, setDisplayDi] = useState<boolean>(true);
  const [displayDiNow, setDisplayDiNow] = useState<boolean>(true);

  const [displayInterval, setDisplayInterval] = useState<boolean>(true);
  const [displayIntervalNow, setDisplayIntervalNow] = useState<boolean>(true);

  const [displayDaily, setDisplayDaily] = useState<boolean>(true);

  const date = day + "/" + month + "/" + year;
  const dateNow =
    actualDateDay() + "/" + actualDateMonth() + "/" + actualDateYear;

  const data = alldata.filter((f) => f[0].includes(date));
  const dataNow = alldata.filter((f) => f[0].includes(dateNow));

  const ejecutado = data.map((f) => parseInt(f[1]));
  const ejecutadoNow = dataNow.map((f) => parseInt(f[1]));

  const gdx = data.map((f) => parseInt(f[3])); //corregir este valor por el verdadero
  const gdxNow = dataNow.map((f) => parseInt(f[3])); //corregir este valor por el verdadero

  const diario = data.map((f) => parseInt(f[2]));
  const diarioNow = dataNow.map((f) => parseInt(f[2]));

  const maxValuePerDay = ejecutado.reduce(
    (max: number, valor: number) => (valor > max ? valor : max),
    0
  );
  const maxValuePerDayNow = ejecutadoNow.reduce(
    (max: number, valor: number) => (valor > max ? valor : max),
    0
  );

  const timePerMaxValueDay = () => {
    const time = data.find((e) => parseInt(e[1]) === maxValuePerDay);
    return time?.length ? time[0] : "sin datos";
  };

  const timePerMaxValueDayNow = () => {
    const time = dataNow.find((e) => parseInt(e[1]) === maxValuePerDayNow);
    return time?.length ? time[0] : "sin datos";
  };

  const intervalTimePerMaxValue = () => {
    const interval = [];
    const dataArray = data.map((e) => e[0]);
    const i = dataArray.indexOf(timePerMaxValueDay());
    interval.push(dataArray[i - 2]);
    interval.push(dataArray[i - 1]);
    interval.push(dataArray[i]);
    interval.push(dataArray[i + 1]);
    interval.push(dataArray[i + 2]);
    return interval;
  };

  const intervalTimePerMaxValueNow = () => {
    const interval = [];
    const dataArray = dataNow.map((e) => e[0]);
    const i = dataArray.indexOf(timePerMaxValueDayNow());
    interval.push(dataArray[i - 2]);
    interval.push(dataArray[i - 1]);
    interval.push(dataArray[i]);
    interval.push(dataArray[i + 1]);
    interval.push(dataArray[i + 2]);
    return interval;
  };

  const intervalForGraph = () => {
    const indexes: number[] = [];
    const dataArray = data.map((e) => e[0]);
    const i = dataArray.indexOf(timePerMaxValueDay());
    indexes.push(i - 2);
    indexes.push(i - 1);
    indexes.push(i);
    indexes.push(i + 1);
    indexes.push(i + 2);

    return ejecutado.map((value, index) => {
      if (indexes.includes(index)) {
        return value;
      } else {
        return 0;
      }
    });
  };

  const intervalForGraphNow = () => {
    const indexes: number[] = [];
    const dataArray = dataNow.map((e) => e[0]);
    const i = dataArray.indexOf(timePerMaxValueDayNow());
    indexes.push(i - 2);
    indexes.push(i - 1);
    indexes.push(i);
    indexes.push(i + 1);
    indexes.push(i + 2);

    return ejecutadoNow.map((value, index) => {
      if (indexes.includes(index)) {
        return value;
      } else {
        return 0;
      }
    });
  };

  const minIntervalValue = () => {
    const min = intervalTimePerMaxValue()[0];
    return min ? min.slice(11) : "sin datos";
  };

  const minIntervalValueNow = () => {
    const min = intervalTimePerMaxValueNow()[0];
    return min ? min.slice(11) : "sin datos";
  };

  const maxIntervalValue = () => {
    const max = intervalTimePerMaxValue()[4];
    return max ? max.slice(11) : "sin datos";
  };

  const maxIntervalValueNow = () => {
    const max = intervalTimePerMaxValueNow()[4];
    return max ? max.slice(11) : "sin datos";
  };

  const alldataMonth = alldata.filter((f) =>
    f[0].slice(3, 10).includes(month + "/" + year)
  );

  const alldataMonthNow = alldata.filter((f) =>
    f[0].slice(3, 10).includes(actualDateMonth() + "/" + year)
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

  const dataMonthNow = monthData(alldataMonthNow).map((elem: data2) => {
    return [
      elem.start,
      elem.result.reduce(
        (max: number, valor: number) => (valor > max ? valor : max),
        0
      ),
    ];
  });

  const maxValuePerMonth = dataMonth
    .map((e: data1[]) => e[1])
    .reduce((max: number, valor: number) => (valor > max ? valor : max), 0);

  const maxValuePerMonthNow = dataMonthNow
    .map((e: data1[]) => e[1])
    .reduce((max: number, valor: number) => (valor > max ? valor : max), 0);

  const days = dataMonth.map((e: data1[]) => {
    return {
      name: e[0],
      value: e[0],
    };
  });

  const onChangeDaily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDisplayDaily(!displayDaily);
  };

  const myData = {
    labels: alldata
      .map((f) => f[0])
      .filter((f) => f.includes(date))
      .map((f) => f.slice(11)),
    datasets: [
      displayEj
        ? {
            label: "Demanda Ejectuada",
            data: ejecutado,
            tension: 0.1,
            borderColor: "rgb(8, 197, 18)",
            backgroundColor: "rgba(8, 197, 18, 0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayInterval
        ? {
            label: "Intervalo",
            data: intervalForGraph(),
            tension: 0,
            borderColor: "rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fill: "origin",
            borderWidth: 2,
            pointRadius: 4,
          }
        : { label: "", data: [] },
      displayGDx
        ? {
            label: "Estimación GDx",
            data: gdx, //cambiar esto por la estimacion verdadera
            tension: 0.1,
            borderColor: "rgb(128, 0, 128)",
            backgroundColor: "rgba(128, 0, 128,0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayDi
        ? {
            label: "Programa Diario",
            data: diario,
            tension: 0.1,
            borderColor: "rgb(0, 153, 255)",
            backgroundColor: "rgba(0, 153, 255,0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
    ],
  };

  const myDataDaily = {
    labels: alldata
      .map((f) => f[0])
      .filter((f) => f.includes(dateNow))
      .map((f) => f.slice(11)),
    datasets: [
      displayEjNow
        ? {
            label: "Demanda Ejectuada",
            data: ejecutadoNow,
            tension: 0.1,
            borderColor: "rgb(8, 197, 18)",
            backgroundColor: "rgba(8, 197, 18, 0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayIntervalNow
        ? {
            label: "Intervalo",
            data: intervalForGraphNow(),
            tension: 0,
            borderColor: "rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fill: "origin",
            borderWidth: 2,
            pointRadius: 4,
          }
        : { label: "", data: [] },
      displayGDxNow
        ? {
            label: "Estimación GDx",
            data: gdxNow, //cambiar esto por la estimacion verdadera
            tension: 0.1,
            borderColor: "rgb(128, 0, 128)",
            backgroundColor: "rgba(128, 0, 128,0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayDiNow
        ? {
            label: "Programa Diario",
            data: diarioNow,
            tension: 0.1,
            borderColor: "rgb(0, 153, 255)",
            backgroundColor: "rgba(0, 153, 255,0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
    ],
  };

  const databar = {
    labels: dataMonth.map((e: data1[]) => e[0]),
    datasets: [
      {
        label: "Máximo Ejecutado",
        data: dataMonth.map((e: data1[]) => e[1]),
        backgroundColor: (context: ChartContext) => {
          // Obtener el valor del dato actual
          const value = context.dataset.data[context.dataIndex];
          // Comparar con el valor deseado y asignar color
          if (value === maxValuePerMonth) {
            return "red"; // Color rojo para el valor 15
          } else {
            return "rgba(8, 197, 18, 0.5)"; // Color azul para los demás valores
          }
        },
        borderColor: "rgb(8, 197, 18)", // Color del borde de las barras
        borderWidth: 1, // Ancho del borde de las barras
        categoryPercentage: 0.3,
        barPercentage: 2,
      },
    ],
  };

  const databarDaily = {
    labels: dataMonth.map((e: data1[]) => e[0]),
    datasets: [
      {
        label: "Máximo Ejecutado",
        data: dataMonthNow.map((e: data1[]) => e[1]),
        backgroundColor: (context: ChartContext) => {
          // Obtener el valor del dato actual
          const value = context.dataset.data[context.dataIndex];
          // Comparar con el valor deseado y asignar color
          if (value === maxValuePerMonthNow) {
            return "red"; // Color rojo para el valor 15
          } else {
            return "rgba(8, 197, 18, 0.5)"; // Color azul para los demás valores
          }
        },
        borderColor: "rgb(8, 197, 18)", // Color del borde de las barras
        borderWidth: 1, // Ancho del borde de las barras
        categoryPercentage: 0.3,
        barPercentage: 2,
      },
    ],
  };
  return (
    <div className={style.data}>
      <header>
        <h2>{actualDateString}</h2>
        <select onChange={(e) => onChangeDaily(e)}>
          <option>Diario</option>
          <option>Historico</option>
        </select>
      </header>
      {alldata.length ? (
        displayDaily ? (
          <main>
            <div>
              <section>
                <section className={style.graphFilter}>
                  <label>
                    Demanda Ejecutada
                    <input
                      type="checkbox"
                      defaultChecked={displayEjNow}
                      onClick={() => setDisplayEjNow(!displayEjNow)}
                    />
                  </label>
                  <label>
                    Estimación GDx
                    <input
                      type="checkbox"
                      defaultChecked={displayGDxNow}
                      onClick={() => setDisplayGDxNow(!displayGDxNow)}
                    />
                  </label>
                  <label>
                    Programa Diario
                    <input
                      type="checkbox"
                      defaultChecked={displayDiNow}
                      onClick={() => setDisplayDiNow(!displayDiNow)}
                    />
                  </label>
                </section>
                <section className={style.interval}>
                  <div>
                    <p>Intervalo Horario</p>
                    <p>
                      {minIntervalValueNow()} - {maxIntervalValueNow()} (2h)
                    </p>
                  </div>
                  <div>
                    <p>Máxima Potencia</p>
                    <p>
                      {maxValuePerDayNow
                        ? `${maxValuePerDayNow} MW`
                        : "sin datos"}
                    </p>
                    <p>{timePerMaxValueDayNow()}</p>
                  </div>
                </section>
              </section>
              <section>
                <label>
                  Interlvalo Horario {minIntervalValueNow()} -{" "}
                  {maxIntervalValueNow()} (2h)
                  <input
                    type="checkbox"
                    defaultChecked={displayIntervalNow}
                    onClick={() => setDisplayIntervalNow(!displayIntervalNow)}
                  />
                </label>
                <section className={style.lineGraph}>
                  <LineGraph myData={myDataDaily} />
                </section>
              </section>
            </div>
            <section>
              <h3>
                Resultado Mensual{" "}
                {months.find((e) => e.value === actualDateMonth())?.name}{" "}
                {actualDateYear}
              </h3>
              <section className={style.barGraph}>
                <BarGraph myData={databarDaily} />
              </section>
            </section>
          </main>
        ) : (
          <main>
            <div>
              <section>
                <section className={style.dateFilter}>
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

                <section className={style.graphFilter}>
                  <label>
                    Demanda Ejecutada
                    <input
                      type="checkbox"
                      defaultChecked={displayEj}
                      onClick={() => setDisplayEj(!displayEj)}
                    />
                  </label>
                  <label>
                    Estimación GDx
                    <input
                      type="checkbox"
                      defaultChecked={displayGDx}
                      onClick={() => setDisplayGDx(!displayGDx)}
                    />
                  </label>
                  <label>
                    Programa Diario
                    <input
                      type="checkbox"
                      defaultChecked={displayDi}
                      onClick={() => setDisplayDi(!displayDi)}
                    />
                  </label>
                </section>
                <section className={style.interval}>
                  <div>
                    <p>Intervalo Horario</p>
                    <p>
                      {minIntervalValue()} - {maxIntervalValue()} (2h)
                    </p>
                  </div>
                  <div>
                    <p>Máxima Potencia</p>
                    <p>{maxValuePerDay} MW</p>
                    <p>{timePerMaxValueDay()}</p>
                  </div>
                </section>
              </section>
              <section>
                <label>
                  Interlvalo Horario {minIntervalValue()} - {maxIntervalValue()}{" "}
                  (2h)
                  <input
                    type="checkbox"
                    defaultChecked={displayInterval}
                    onClick={() => setDisplayInterval(!displayInterval)}
                  />
                </label>
                <section className={style.lineGraph}>
                  <LineGraph myData={myData} />
                </section>
              </section>
            </div>
            <section>
              <h3>
                Resultado Mensual {months.find((e) => e.value === month)?.name}{" "}
                {year}
              </h3>
              <section className={style.barGraph}>
                <BarGraph myData={databar} />
              </section>
            </section>
          </main>
        )
      ) : (
        <div className={style.loader}>
          <DotSpinner size={70} speed={0.9} color="white" />
        </div>
      )}
    </div>
  );
}
