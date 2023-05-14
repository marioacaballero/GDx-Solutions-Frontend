import { Bar } from "react-chartjs-2";
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

export const BarGraph = ({ myData }: { myData: any }) => {
  return (
    <>
      <Bar data={myData} />
    </>
  );
};
