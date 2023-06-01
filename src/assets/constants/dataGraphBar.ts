import { ChartContext, data1 } from "./interfaces";

export const databarDaily = (
  dataMonthNow: any,
  maxValuePerMonthNow: number
) => {
  return {
    labels: dataMonthNow.map((e: data1[]) => e[0]),
    datasets: [
      {
        label: "Máximo Ejecutado",
        data: dataMonthNow.map((e: data1[]) => e[1]),
        backgroundColor: (context: ChartContext) => {
          const value = context.dataset.data[context.dataIndex];
          if (value === maxValuePerMonthNow) {
            return "rgba(221, 53, 41, 0.7)";
          } else {
            return "rgba(8, 197, 18, 0.5)";
          }
        },
        borderColor: (context: ChartContext) => {
          const value = context.dataset.data[context.dataIndex];
          if (value === maxValuePerMonthNow) {
            return "rgba(221, 53, 41, 0.7)";
          } else {
            return "rgba(8, 197, 18, 0.5)";
          }
        },
        borderWidth: 1, // Ancho del borde de las barras
        categoryPercentage: 0.3,
        barPercentage: 2,
      },
    ],
  };
};

export const databar = (dataMonth: any, maxValuePerMonth: number) => {
  return {
    labels: dataMonth.map((e: data1[]) => e[0]),
    datasets: [
      {
        label: "Máximo Ejecutado",
        data: dataMonth.map((e: data1[]) => e[1]),
        backgroundColor: (context: ChartContext) => {
          // Obtener el valor del dato actual
          const value = context.dataset.data[context.dataIndex];
          // Comparar con el valor deseado y asignar color
          if (value === maxValuePerMonth) {
            return "rgba(221, 53, 41, 0.7)"; // Color rojo para el valor 15
          } else {
            return "rgba(8, 197, 18, 0.5)"; // Color azul para los demás valores
          }
        },
        borderColor: (context: ChartContext) => {
          const value = context.dataset.data[context.dataIndex];
          if (value === maxValuePerMonth) {
            return "rgba(221, 53, 41, 0.7)";
          } else {
            return "rgba(8, 197, 18, 0.5)";
          }
        }, // Color del borde de las barras
        borderWidth: 1, // Ancho del borde de las barras
        categoryPercentage: 0.3,
        barPercentage: 2,
      },
    ],
  };
};
