import { ChartContext, MyDateBar } from "./interfaces";

export const databarDaily = (
  dataMonthNow: {
    date: string;
    demanda: number;
  }[]
): MyDateBar => {
  const days = dataMonthNow.map((e) => e.date.slice(8));
  const values = dataMonthNow.map((e) => e.demanda);
  const maxValue1 = dataMonthNow
    .map((e) => e.demanda)
    .reduce((max: number, valor: number) => (valor > max ? valor : max), 0);
  const maxValue2 = dataMonthNow
    .map((e) => e.demanda)
    .filter((e) => e != maxValue1)
    .reduce((max: number, valor: number) => (valor > max ? valor : max), 0);
  return {
    labels: days,
    datasets: [
      {
        label: "Máximo Ejecutado",
        data: values,
        backgroundColor: (context: ChartContext) => {
          const value = context.dataset.data[context.dataIndex];
          if (value === maxValue1) {
            return "red";
          } else if (value === maxValue2) {
            return "#E98754";
          } else {
            return "#46CAB5";
          }
        },
        borderColor: (context: ChartContext) => {
          const value = context.dataset.data[context.dataIndex];
          if (value === maxValue1) {
            return "red";
          } else if (value === maxValue2) {
            return "#E98754";
          } else {
            return "#46CAB5";
          }
        },
        borderWidth: 1, // Ancho del borde de las barras
        categoryPercentage: 0.3,
        barPercentage: 2,
      },
    ],
  };
};
