import { MDCHistory, MyDateBar } from "./interfaces";

export const dataBarMDC = (
  mdcHistory: MDCHistory[],
  numberBars: number
): MyDateBar => {
  return {
    labels: mdcHistory
      .map((e) => e.date.slice(0, 7))
      .slice(numberBars, numberBars + 5),
    datasets: [
      {
        label: "Máxima Demanda Coincidente",
        data: mdcHistory.map((e) => e.valor).slice(numberBars, numberBars + 5),
        backgroundColor: "#46CAB5",
        borderColor: "#46CAB5",
        borderWidth: 0,
      },
    ],
  };
};
