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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { MyDate } from "../../assets/constants/interfaces";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  ChartDataLabels
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
              align: "start",
              font: {
                size: 18,
              },
              color: "white",
            },
            legend: {
              display: true,
              align: "end",
              position: "right",
              labels: {
                color: "white",
                font: {
                  size: 9,
                },
              },
            },
            filler: {
              propagate: true,
            },
            datalabels: {
              formatter: function () {
                return "";
              },
            },
          },
          interaction: {
            mode: "nearest",
            axis: "x",
            intersect: false,
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              stacked: true,
              display: false,
            },
            x: {
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
