import { GenerationTypeYear, MyDateBar } from "./interfaces";

export const dataBarStacked = (dataArea: GenerationTypeYear[]): MyDateBar => {
  const colors: string[] = [
    "#8FD7E8",
    "#2CDD17",
    "#FFFF94",
    "#A64040",
    "#7495BD",
    "#F9B074",
    "#6C7F97",
    "#477519",
    "#C3C3C3",
  ];
  return {
    labels: dataArea.map((e) => e.mes.slice(0, 3)),
    datasets: dataArea[0].data.map((energy, i) => {
      return {
        label: energy.tipo,
        data: dataArea
          .map((e) =>
            e.data.filter((e) => e.tipo === energy.tipo).map((e) => e.valor)
          )
          .map((e) => e[0]),
        backgroundColor: colors[i],
        borderColor: colors[i],
      };
    }),
  };
};
