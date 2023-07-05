import { MDCHistory, MyDateBar } from "./interfaces";

export const dataBarMDC = (mdcHistory: MDCHistory[]): MyDateBar => {
  return {
    labels: mdcHistory.map((e) => e.date.slice(0, 7)),
    datasets: [
      {
        label: "Máxima Demanda Coincidente",
        data: mdcHistory.map((e) => e.valor),
        backgroundColor: "#46CAB5",
        borderColor: "#46CAB5",
        borderWidth: 0,
      },
    ],
  };
};
