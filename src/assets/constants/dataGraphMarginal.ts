import { MarginalCostData } from "./interfaces";

export const marginalDataDaily = (
  // displayEjNow: boolean,
  marginal: MarginalCostData[]
) => {
  const displayEjNow = true;
  return {
    labels: marginal.map((f) => f.date.slice(11, 16)),
    datasets: [
      displayEjNow
        ? {
            label: "Costo Marginal Total",
            data: marginal.map((e) => e.total),
            tension: 0.1,
            borderColor: "orange",
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
          }
        : { label: "", data: [] },
    ],
  };
};
