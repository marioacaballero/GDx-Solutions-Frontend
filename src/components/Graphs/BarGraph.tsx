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
import { MyDateBar } from "../../assets/constants/interfaces";

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

export const BarGraph = ({ myData }: { myData: MyDateBar }) => {
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
              ticks: { stepSize: 1000, color: "white" },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            x: {
              ticks: { color: "white" },
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
