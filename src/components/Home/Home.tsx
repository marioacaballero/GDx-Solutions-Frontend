import { useEffect, useState } from "react";
import { days, months } from "../constants/schedule";
import { LineGraph } from "../LineGraph/LineGraph";
import { Diario, Ejecutado, Semanal } from "../constants/initialStates";
import { DataCoes } from "../constants/dataCoes";
// import DataTable from "../Table/Table";

export default function Home() {
  useEffect(() => {
    fetch(DataCoes("data"))
      .then((res) => res.json())
      .then((data) => setJson(data));
  }, []);
  const [json, setJson] = useState<string[]>([]);
  const [json2, setJson2] = useState<number[]>(Ejecutado);
  const [json3, setJson3] = useState<number[]>(Diario);
  const [json4, setJson4] = useState<number[]>(Semanal);
  const [day, setDay] = useState<string>("01");
  const [month, setMonth] = useState<string>("01");
  const [year, setYear] = useState<string>("2022");
  const [date2, setDate2] = useState<string>("01/01/2022");

  const date = day + "/" + month + "/" + year;

  const handleSelectChangeDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDay(e.target.value);
  };
  const handleSelectChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setYear(e.target.value);
  };
  const handleSelectChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setMonth(e.target.value);
  };

  const handleSubmit = () => {
    const data = json.filter((f) => f[0].includes(date));
    setJson2(data.map((f) => parseInt(f[1])));
    setJson3(data.map((f) => parseInt(f[2])));
    setJson4(data.map((f) => parseInt(f[3])));
    setDate2(date);
  };

  const myData = {
    labels: json
      .map((f) => f[0])
      .filter((f) => f.includes(date))
      .map((f) => f.slice(11)),
    datasets: [
      {
        label: "Ejecutado",
        data: json2,
        tension: 0.5,
        fill: true,
        borderColor: "orange",
        // backgroundColor: "none",
      },
      {
        label: "Prog. Diaria",
        data: json3,
        tension: 0.5,
        fill: true,
        borderColor: "yellow",
        // backgroundColor: "none",
      },
      {
        label: "Prog. Semanal",
        data: json4,
        tension: 0.5,
        fill: true,
        borderColor: "green",
        // backgroundColor: "none",
      },
    ],
  };

  const data = json
    .filter((f) => f[0].includes(date))
    .map((f, i) => {
      return {
        key: i,
        fecha: f[0],
        ejecutado: f[1],
        diario: f[2],
        semanal: f[3],
      };
    });

  console.log(data);

  return (
    <div>
      <h2>Demanda ejecutada por COES cada media hora</h2>
      {json.length ? (
        <>
          <p>Elija una fecha para mostrar</p>
          <select
            onChange={(e) => handleSelectChangeYear(e)}
            style={{ marginLeft: 15 }}
          >
            <option value={""}>year</option>
            <option value={"2022"}>2022</option>
            <option value={"2023"}>2023</option>
          </select>
          <select onChange={(e) => handleSelectChangeMonth(e)}>
            <option value={""}>month</option>
            {months.map((f, i) => (
              <option key={i} value={f}>
                {f}
              </option>
            ))}
          </select>
          <select onChange={(e) => handleSelectChangeDay(e)}>
            <option value={""}>day</option>
            {days.map((f, i) => (
              <option key={i} value={f}>
                {f}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleSubmit}>
            Buscar
          </button>
          <h3>Mostrando resultado del dia {date2}</h3>
          {/* <DataTable data={data} /> */}
          <section style={{ width: 1000, height: 800 }}>
            <LineGraph myData={myData} />
          </section>
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}
