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
import { MyDate } from "../../assets/constants/interfaces";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Filler
);

export const BarGraph = ({ myData }: { myData: MyDate }) => {
  return (
    <>
      <Bar
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
              min: 6000,
              max: 8000,
              ticks: { stepSize: 1000 },
              grid: {
                color: "rgba(255, 255, 255, 0.2)",
              },
            },
            x: {
              grid: {
                color: "rgba(255, 255, 255, 0.2)",
              },
            },
          },
        }}
      />
    </>
  );
};
