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
  maxStickLimit,
  graphTitle,
}: {
  myData: MyDate;
  maxValue?: number;
  maxStickLimit?: number;
  graphTitle?: string;
}) => {
  return (
    <>
      <Line
        data={myData}
        options={{
          plugins: {
            title: {
              display: graphTitle ? true : false,
              text: graphTitle ? graphTitle : undefined,
              font: {
                size: 18,
              },
              color: "white",
            },
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
              max: maxValue ? maxValue + 100 : undefined,
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
                maxTicksLimit: maxStickLimit ? maxStickLimit : 10,
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
