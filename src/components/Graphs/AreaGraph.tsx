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
              text: "Fuentes generadoras en %",
              font: {
                size: 16,
              },
              color: "white",
              padding: {
                bottom: 6,
                top: 10,
              },
            },
            legend: {
              display: true,
              align: "center",
              position: "right",
              labels: {
                color: "white",
                font: {
                  size: 9,
                },
                boxWidth: 10,
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
              max: 100,
              ticks: {
                color: "white",
                maxTicksLimit: 6,
              },
            },
            x: {
              beginAtZero: true,
              ticks: {
                color: "white",
                maxTicksLimit: 5,
              },
            },
          },
        }}
      />
    </>
  );
}

export default AreaGraph;
