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

export const LineGraph = ({
  myData,
  maxValue,
}: {
  myData: MyDate;
  maxValue: number;
}) => {
  return (
    <>
      <Line
        data={myData}
        options={{
          plugins: {
            legend: {
              display: false,
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
              max: maxValue + 100,
              ticks: {
                color: "white",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            x: {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                color: "white",
              },
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
