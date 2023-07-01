import { GenerationTop, MyDateBar } from "./interfaces";

export const dataHorizontalBar = (
  dataHorizontalBar: GenerationTop[]
): MyDateBar => {
  return {
    labels: dataHorizontalBar
      .map((e) => e.empresa + "       " + e.porc + "%")
      .slice(0, 9),
    datasets: [
      {
        label: "empresas",
        data: dataHorizontalBar.map((e) => e.valor).slice(0, 9),
        backgroundColor: "#46CAB5",
      },
    ],
  };
};
