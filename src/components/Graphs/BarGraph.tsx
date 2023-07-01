import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Filler,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { MyDateBar } from "../../assets/constants/interfaces";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Filler,
  ChartDataLabels
);

export const BarGraph = ({ myData }: { myData: MyDateBar }) => {
  return (
    <>
      <Bar
        data={myData}
        options={{
          plugins: {
            datalabels: {
              clamp: true,
              color: "white",
              rotation: -90,
              formatter: (value) => Math.ceil(value),
              font: {
                weight: "bold",
              },
            },
            legend: {
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 6000,
              max: 7600,
              ticks: { stepSize: 400, color: "white" },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            x: {
              ticks: { color: "white" },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
        }}
      />
    </>
  );
};
