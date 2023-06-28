import { Line } from "react-chartjs-2";
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
import { MyDate } from "../../assets/constants/interfaces";

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

function AreaGraph({ myData }: { myData: MyDate }) {
  return (
    <>
      <Line
        data={myData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Tipos de generación",
              font: {
                size: 18,
              },
              color: "white",
            },
            legend: {
              display: true,
              align: "start",
              labels: {
                color: "white",
                font: {
                  size: 10,
                },
              },
            },
            filler: {
              propagate: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              // max: maxValue + 100,
              // ticks: {
              //   color: "white",
              // },
              // grid: {
              //   color: "rgba(255, 255, 255, 0.1)",
              // },
              beginAtZero: true,
              stacked: true,
              display: false,
            },
            x: {
              // ticks: {
              //   autoSkip: true,
              //   maxTicksLimit: 10,
              //   color: "white",
              // },
              // grid: {
              //   color: "rgba(255, 255, 255, 0.1)",
              // },
              beginAtZero: true,
              display: false,
            },
          },
        }}
      />
    </>
  );
}

export default AreaGraph;
