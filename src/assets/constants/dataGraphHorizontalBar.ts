import { GenerationTop, MyDateBar } from "./interfaces";

export const dataHorizontalBar = (
  dataHorizontalBar: GenerationTop[]
): MyDateBar => {
  return {
    labels: dataHorizontalBar.map((e) => e.empresa),
    datasets: [
      {
        label: "empresas",
        data: dataHorizontalBar.map((e) => e.valor),
        backgroundColor: "#46CAB5",
      },
    ],
  };
};
