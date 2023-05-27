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

export const LineGraph = ({ myData }: { myData: MyDate }) => {
  return (
    <>
      <Line
        data={myData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 4500,
            },
            x: {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 20,
              },
            },
          },
        }}
      />
    </>
  );
};
