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
      <Bar data={myData} />
    </>
  );
};
