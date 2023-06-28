import { GenerationType, MyDate } from "./interfaces";

export const dataAreaDaily = (
  date: string,
  dataArea: GenerationType[]
): MyDate => {
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
    labels: ["0", date],
    datasets: dataArea.map((e: GenerationType, i: number) => {
      return {
        label: e.tipo,
        data: [0, e.valor],
        backgroundColor: colors[i],
        borderColor: colors[i],
        borderWidth: 1,
        pointRadius: 0,
        fill: true,
      };
    }),
  };
};
