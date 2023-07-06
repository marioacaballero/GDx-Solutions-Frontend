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

export const BarStackedGraph = ({ myData }: { myData: MyDateBar }) => {
  return (
    <>
      <Bar
        data={myData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Fuentes generadoras mensual",
              align: "start",
              font: {
                size: 18,
              },
              color: "white",
            },
            datalabels: {
              clamp: true,
              color: "white",
              rotation: -90,
              formatter: () => "",
              font: {
                weight: "bold",
              },
            },
            legend: {
              display: true,
              align: "center",
              position: "top",
              labels: {
                color: "white",
                font: {
                  size: 9,
                },
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              display: false,
              stacked: true,
              ticks: {
                color: "white",
              },
            },
            x: {
              stacked: true,
              ticks: { color: "white", font: { size: 10 } },
            },
          },
        }}
      />
    </>
  );
};
