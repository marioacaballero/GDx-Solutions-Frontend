import { databarDaily } from "../../../assets/constants/dataGraphBar";
import { myDataDaily } from "../../../assets/constants/dataGraphLine";
import {
  actualDateDay,
  actualDateMonth,
  actualDateYear,
} from "../../../assets/constants/initialStates";
import { data1, data2 } from "../../../assets/constants/interfaces";
import { months } from "../../../assets/constants/schedule";
import { monthData } from "../../../assets/helpers/auxiliar";
import { BarGraph } from "../../Graphs/BarGraph";
import { LineGraph } from "../../Graphs/LineGraph";
import style from "./Data.module.css";

function DataNow({
  alldata,
  displayEjNow,
  setDisplayEjNow,
  displayGDxNow,
  setDisplayGDxNow,
  displayDiNow,
  setDisplayDiNow,
  displayIntervalNow,
  setDisplayIntervalNow,
}: {
  alldata: string[];
  displayEjNow: boolean;
  setDisplayEjNow: React.Dispatch<React.SetStateAction<boolean>>;
  displayGDxNow: boolean;
  setDisplayGDxNow: React.Dispatch<React.SetStateAction<boolean>>;
  displayDiNow: boolean;
  setDisplayDiNow: React.Dispatch<React.SetStateAction<boolean>>;
  displayIntervalNow: boolean;
  setDisplayIntervalNow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dateNow =
    actualDateDay() + "/" + actualDateMonth() + "/" + actualDateYear;

  const dataNow = alldata.filter((f) => f[0].includes(dateNow));

  const ejecutadoNow = dataNow.map((f) => parseInt(f[1]));

  const gdxNow = dataNow.map((f) => parseInt(f[3])); //corregir este valor por el verdadero

  const diarioNow = dataNow.map((f) => parseInt(f[2]));

  const maxValuePerDayNow = ejecutadoNow.reduce(
    (max: number, valor: number) => (valor > max ? valor : max),
    0
  );

  const timePerMaxValueDayNow = () => {
    const time = dataNow.find((e) => parseInt(e[1]) === maxValuePerDayNow);
    return time?.length ? time[0] : "sin datos";
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

  const intervalForGraphNow = () => {
    const indexes: number[] = [];
    const dataArray = dataNow.map((e) => e[0]);
    const i = dataArray.indexOf(timePerMaxValueDayNow());
    indexes.push(i - 2);
    indexes.push(i - 1);
    indexes.push(i);
    indexes.push(i + 1);
    indexes.push(i + 2);

    return ejecutadoNow.map((value, index: number) => {
      if (indexes.includes(index)) {
        return value;
      } else {
        return 0;
      }
    });
  };

  const minIntervalValueNow = () => {
    const min = intervalTimePerMaxValueNow()[0];
    return min ? min.slice(11) : "sin datos";
  };

  const maxIntervalValueNow = () => {
    const max = intervalTimePerMaxValueNow()[4];
    return max ? max.slice(11) : "sin datos";
  };

  const alldataMonthNow = alldata.filter((f) =>
    f[0].slice(3, 10).includes(actualDateMonth() + "/" + actualDateYear)
  );

  const dataMonthNow = monthData(alldataMonthNow).map((elem: data2) => {
    return [
      elem.start,
      elem.result.reduce(
        (max: number, valor: number) => (valor > max ? valor : max),
        0
      ),
    ];
  });

  const maxValuePerMonthNow = dataMonthNow
    .map((e: data1[]) => e[1])
    .reduce((max: number, valor: number) => (valor > max ? valor : max), 0);

  return (
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
                {maxValuePerDayNow ? `${maxValuePerDayNow} MW` : "sin datos"}
              </p>
              <p>{timePerMaxValueDayNow()}</p>
            </div>
          </section>
        </section>
        <section>
          <label>
            Interlvalo Horario {minIntervalValueNow()} - {maxIntervalValueNow()}{" "}
            (2h)
            <input
              type="checkbox"
              defaultChecked={displayIntervalNow}
              onClick={() => setDisplayIntervalNow(!displayIntervalNow)}
            />
          </label>
          <section className={style.lineGraph}>
            <LineGraph
              myData={myDataDaily(
                alldata,
                dateNow,
                displayEjNow,
                ejecutadoNow,
                displayIntervalNow,
                displayGDxNow,
                gdxNow,
                displayDiNow,
                diarioNow,
                intervalForGraphNow()
              )}
            />
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
          <BarGraph myData={databarDaily(dataMonthNow, maxValuePerMonthNow)} />
        </section>
      </section>
    </main>
  );
}

export default DataNow;
