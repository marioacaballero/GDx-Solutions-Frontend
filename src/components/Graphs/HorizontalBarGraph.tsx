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
// import { useEffect } from "react";
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

export const HorizontalBarGraph = ({ myData }: { myData: MyDateBar }) => {
  // useEffect(() => {
  //   ChartJS.register(ChartDataLabels);
  // }, []);
  return (
    <>
      <Bar
        data={myData}
        options={{
          indexAxis: "y",

          plugins: {
            title: {
              display: true,
              text: "Principales Empresas Generadoras",
              font: {
                size: 18,
              },
              color: "white",
            },
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
            datalabels: {
              anchor: "start",
              clamp: true,
              align: "end",

              font: {
                size: 10,
              },
              color: "white",
              formatter: function (value, context) {
                value;
                return myData.labels[context.dataIndex];
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,

          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "white",
                font: {
                  size: 10,
                },
              },
              display: false,
            },
            x: {
              display: false,
              beginAtZero: true,
            },
          },
        }}
      />
    </>
  );
};
