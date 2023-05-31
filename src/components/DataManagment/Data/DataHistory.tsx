import { databar } from "../../../assets/constants/dataGraphBar";
import { myData } from "../../../assets/constants/dataGraphLine";
import { data1, data2 } from "../../../assets/constants/interfaces";
import { months, years } from "../../../assets/constants/schedule";
import { monthData } from "../../../assets/helpers/auxiliar";
import { BarGraph } from "../../Graphs/BarGraph";
import { LineGraph } from "../../Graphs/LineGraph";
import style from "./Data.module.css";

function DataHistory({
  alldata,
  setYear,
  year,
  setMonth,
  month,
  setDay,
  day,
  displayEj,
  setDisplayEj,
  displayGDx,
  setDisplayGDx,
  displayDi,
  setDisplayDi,
  displayInterval,
  setDisplayInterval,
}: {
  alldata: string[];
  setYear: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  month: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  day: string;
  displayEj: boolean;
  setDisplayEj: React.Dispatch<React.SetStateAction<boolean>>;
  displayGDx: boolean;
  setDisplayGDx: React.Dispatch<React.SetStateAction<boolean>>;
  displayDi: boolean;
  setDisplayDi: React.Dispatch<React.SetStateAction<boolean>>;
  displayInterval: boolean;
  setDisplayInterval: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const date = day + "/" + month + "/" + year;

  const data = alldata.filter((f) => f[0].includes(date));

  const ejecutado = data.map((f) => parseInt(f[1]));

  const gdx = data.map((f) => parseInt(f[3])); //corregir este valor por el verdadero

  const diario = data.map((f) => parseInt(f[2]));

  const maxValuePerDay = ejecutado.reduce(
    (max: number, valor: number) => (valor > max ? valor : max),
    0
  );

  const timePerMaxValueDay = () => {
    const time = data.find((e) => parseInt(e[1]) === maxValuePerDay);
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

  const minIntervalValue = () => {
    const min = intervalTimePerMaxValue()[0];
    return min ? min.slice(11) : "sin datos";
  };

  const maxIntervalValue = () => {
    const max = intervalTimePerMaxValue()[4];
    return max ? max.slice(11) : "sin datos";
  };

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

  const maxValuePerMonth = dataMonth
    .map((e: data1[]) => e[1])
    .reduce((max: number, valor: number) => (valor > max ? valor : max), 0);

  const days = dataMonth.map((e: data1[]) => {
    return {
      name: e[0],
      value: e[0],
    };
  });

  const onChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    cb: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    cb(e.target.value);
  };

  return (
    <main>
      <div>
        <section>
          <section className={style.dateFilter}>
            <select onChange={(e) => onChangeSelect(e, setYear)}>
              <option value={"2023"}>Año</option>
              {years.map((elem) => (
                <option value={elem.value}>{elem.name}</option>
              ))}
            </select>
            <select onChange={(e) => onChangeSelect(e, setMonth)}>
              <option value={"01"}>Mes</option>
              {months.map((elem) => (
                <option value={elem.value}>{elem.name}</option>
              ))}
            </select>
            <select onChange={(e) => onChangeSelect(e, setDay)}>
              <option value={"01"}>Día</option>
              {days.map((elem: data1) => (
                <option value={elem.value}>{elem.name}</option>
              ))}
            </select>
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
            {day}/{month}/{year} - Interlvalo Horario {minIntervalValue()} -{" "}
            {maxIntervalValue()} (2h)
            <input
              type="checkbox"
              defaultChecked={displayInterval}
              onClick={() => setDisplayInterval(!displayInterval)}
            />
          </label>
          <section className={style.lineGraph}>
            <LineGraph
              myData={myData(
                alldata,
                date,
                displayEj,
                ejecutado,
                displayInterval,
                intervalForGraph(),
                displayGDx,
                gdx,
                displayDi,
                diario
              )}
            />
          </section>
        </section>
      </div>
      <section>
        <h3>
          Resultado Mensual {months.find((e) => e.value === month)?.name} {year}
        </h3>
        <section className={style.barGraph}>
          <BarGraph myData={databar(dataMonth, maxValuePerMonth)} />
        </section>
      </section>
    </main>
  );
}

export default DataHistory;
