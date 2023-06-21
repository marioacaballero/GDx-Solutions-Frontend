import { FetchEject, FetchGDx } from "./interfaces";

export const myDataDaily = (
  reprodiario: FetchGDx[],
  displayReproDiNow: boolean,
  displayEjNow: boolean,
  ejecutadoNow: FetchEject[],
  // displayIntervalNow: boolean,
  displayGDxNow: boolean,
  gdxNow: FetchGDx[],
  displayDiNow: boolean,
  diarioNow: FetchGDx[]
  // intervalForGraphNow: number[]
) => {
  return {
    labels: ejecutadoNow.map((f) => f.date.slice(11, 16)),
    datasets: [
      displayEjNow
        ? {
            label: "Demanda Ejectuada",
            data: ejecutadoNow.map((e) => e.ejecutado),
            tension: 0.1,
            borderColor: "rgb(8, 197, 18)",
            backgroundColor: "rgba(8, 197, 18, 0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      // displayIntervalNow
      //   ? {
      //       label: "Intervalo",
      //       data: intervalForGraphNow,
      //       tension: 0,
      //       borderColor: "rgba(255, 255, 255, 0.5)",
      //       backgroundColor: "rgba(221, 114, 26, 0.3)",
      //       fill: "origin",
      //       borderWidth: 2,
      //       pointRadius: 4,
      //     }
      //   : { label: "", data: [] },
      displayGDxNow
        ? {
            label: "Estimación de la demanda",
            data: gdxNow.map((e) => e.demanda), //cambiar esto por la estimacion verdadera
            tension: 0.1,
            borderColor: "rgb(128, 0, 128)",
            backgroundColor: "rgba(128, 0, 128,0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayDiNow
        ? {
            label: "Programa Diario",
            data: diarioNow.map((e) => e.demanda),
            tension: 0.1,
            borderColor: "rgb(0, 153, 255)",
            backgroundColor: "rgba(0, 153, 255,0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayReproDiNow
        ? {
            label: "Reprograma Diario",
            data: reprodiario.map((e) => e.demanda),
            tension: 0.1,
            borderColor: "rgb(0, 153, 255)",
            backgroundColor: "rgba(0, 153, 255,0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
    ],
  };
};

// export const myData = (
//   date: string,
//   displayEj: boolean,
//   ejecutado: { date: string; ejecutado: number }[],
//   // displayInterval: boolean,
//   // intervalForGraph: number[],
//   displayGDx: boolean,
//   gdx: { date: string; demanda: number }[],
//   displayDi: boolean,
//   diario: { date: string; demanda: number }[]
// ) => {
//   return {
//     labels: ejecutado.map((f) => f.date.slice(11, 16)),
//     datasets: [
//       displayEj
//         ? {
//             label: "Demanda Ejectuada",
//             data: ejecutado,
//             tension: 0.1,
//             borderColor: "rgb(8, 197, 18)",
//             backgroundColor: "rgba(8, 197, 18, 0.5)",
//             fill: false,
//             borderWidth: 1,
//             pointRadius: 0,
//           }
//         : { label: "", data: [] },
//       displayInterval
//         ? {
//             label: "Intervalo",
//             data: intervalForGraph,
//             tension: 0,
//             borderColor: "rgba(255, 255, 255, 0.5)",
//             backgroundColor: "rgba(221, 114, 26, 0.3)",
//             fill: "origin",
//             borderWidth: 2,
//             pointRadius: 4,
//           }
//         : { label: "", data: [] },
//       displayGDx
//         ? {
//             label: "Estimación GDx",
//             data: gdx, //cambiar esto por la estimacion verdadera
//             tension: 0.1,
//             borderColor: "rgb(128, 0, 128)",
//             backgroundColor: "rgba(128, 0, 128,0.5)",
//             fill: false,
//             borderWidth: 1,
//             pointRadius: 0,
//           }
//         : { label: "", data: [] },
//       displayDi
//         ? {
//             label: "Programa Diario",
//             data: diario,
//             tension: 0.1,
//             borderColor: "rgb(0, 153, 255)",
//             backgroundColor: "rgba(0, 153, 255,0.5)",
//             fill: false,
//             borderWidth: 1,
//             pointRadius: 0,
//           }
//         : { label: "", data: [] },
//     ],
//   };
// };
