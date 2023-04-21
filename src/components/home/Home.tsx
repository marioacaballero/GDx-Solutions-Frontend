import { useState } from "react";
import { Line } from "react-chartjs-2";
import { read, utils } from "xlsx";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
);

const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const days = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

export default function Home() {
  const [json, setJson] = useState<any[]>([]);
  const [json2, setJson2] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const date = day + "/" + month + "/" + year;

  const handleSelectChangeDay = (e: any) => {
    e.preventDefault();
    setDay(e.target.value);
    setJson2(
      json.filter((f) => f.FECHA.includes(date)).map((d) => d.EJECUTADO)
    );
  };
  const handleSelectChangeYear = (e: any) => {
    e.preventDefault();
    setYear(e.target.value);
  };
  const handleSelectChangeMonth = (e: any) => {
    e.preventDefault();
    setMonth(e.target.value);
  };
  const handleChange = async (e: any) => {
    setLoading(false);
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(worksheet);

    console.log(jsonData, date);
    console.log(jsonData.filter((f: any) => f.FECHA.includes(date)));
    setJson(jsonData);
  };

  const myData = {
    labels: json
      .filter((f) => f.FECHA.includes(date))
      .map((f: any) => f.FECHA.slice(11))
      .slice(0, 47),
    datasets: [
      {
        label: "Ejecutado",
        data: json2,
        tension: 0.5,
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Demanda ejecutada por COES cada media hora, según dia</h2>
      <input type="file" onChange={(e) => handleChange(e)} />

      {loading ? <></> : json.length ? "listo!" : "cargando excel..."}

      <select
        onChange={(e) => handleSelectChangeYear(e)}
        style={{ marginLeft: 15 }}
      >
        <option value={""}>year</option>
        <option value={"2022"}>2022</option>
        <option value={"2023"}>2023</option>
      </select>
      {year && (
        <select onChange={(e) => handleSelectChangeMonth(e)}>
          <option value={""}>month</option>
          {months.map((f, i) => (
            <option key={i} value={f}>
              {f}
            </option>
          ))}
        </select>
      )}
      {year && month && (
        <select onChange={(e) => handleSelectChangeDay(e)}>
          <option value={""}>day</option>
          {days.map((f, i) => (
            <option key={i} value={f}>
              {f}
            </option>
          ))}
        </select>
      )}
      <section style={{ width: 1000, height: 800 }}>
        <Line data={myData} />
      </section>
    </div>
  );
}
