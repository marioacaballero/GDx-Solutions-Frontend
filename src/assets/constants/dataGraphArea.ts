import { GenerationType, MyDate } from "./interfaces";

export const dataAreaDaily = (dataArea: GenerationType[]): MyDate => {
  const colors: string[] = [
    "#8FD7E8",
    "#FFFF94",
    "#7495BD",
    "#F9B074",
    "#A64040",
    "#6C7F97",
    "#2CDD17",
    "#477519",
    "#C3C3C3",
  ];
  return {
    labels: dataArea.map((e) => e.date.slice(11)),
    datasets: dataArea[0].fuente.map((energy, i) => {
      return {
        label: energy.tipo,
        data: dataArea
          .map((e) =>
            e.fuente.filter((e) => e.tipo === energy.tipo).map((e) => e.porc)
          )
          .map((e) => e[0]),
        backgroundColor: colors[i],
        borderColor: colors[i],
        borderWidth: 1,
        pointRadius: 0,
        fill: true,
      };
    }),
  };
};
