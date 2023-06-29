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
import { useEffect } from "react";
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
  useEffect(() => {
    ChartJS.register(ChartDataLabels);
  }, []);
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
            datalabels: {
              formatter: function () {
                return "";
              },
            },
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
