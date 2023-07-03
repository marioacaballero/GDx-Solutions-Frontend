import { ChartContext, FetchEject, FetchGDx } from "./interfaces";

export const myDataDaily = (
  reprodiario: FetchGDx[],
  displayReproDiNow: boolean,
  displayEjNow: boolean,
  ejecutadoNow: FetchEject[],
  displayIntervalNow: boolean,
  displayGDxNow: boolean,
  gdxNow: FetchGDx[],
  displayDiNow: boolean,
  diarioNow: FetchGDx[],
  mdcgdx: (number | null)[],
  maxgdx: (number | null)[],
  displayMDCgdx: boolean,
  displayMaxgdx: boolean,
  intervalForGraphNow: (number | null)[],
  maxMDCGDX: number
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
            // backgroundColor: "rgba(8, 197, 18, 0.5)",
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayIntervalNow
        ? {
            label: "Intervalo",
            data: intervalForGraphNow,
            tension: 0,
            borderColor: "rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgba(221, 114, 26, 0.3)",
            fill: true,
            borderWidth: 0,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayGDxNow
        ? {
            label: "Estimación GDx",
            data: gdxNow.map((e) => e.demanda),
            tension: 0.1,
            borderColor: "rgb(247, 39, 247)",
            // backgroundColor: "rgba(128, 0, 128,0.5)",
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayDiNow
        ? {
            label: "Programa Diario",
            data: diarioNow.map((e) => e.demanda),
            tension: 0.1,
            borderColor: "rgb(78, 78, 255)",
            // backgroundColor: "rgba(0, 153, 255,0.5)",
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayReproDiNow
        ? {
            label: "Reprograma Diario",
            data: reprodiario.map((e) => e.demanda),
            tension: 0.1,
            borderColor: "rgb(0, 225, 255)",
            // backgroundColor: "rgba(0, 153, 255,0.5)",
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayMDCgdx
        ? {
            label: "MDC GDx",
            data: mdcgdx,
            tension: 0.1,
            borderColor: (context: ChartContext) => {
              const value = context.dataset.data[context.dataIndex];
              if (value === maxMDCGDX) {
                return "red";
              } else {
                return "rgb(255, 255, 0)";
              }
            },
            backgroundColor: (context: ChartContext) => {
              const value = context.dataset.data[context.dataIndex];
              if (value === maxMDCGDX) {
                return "red";
              } else {
                return "rgb(255, 255, 0)";
              }
            },
            fill: false,
            borderWidth: 2,
            pointRadius: 3,
          }
        : { label: "", data: [] },
      displayMaxgdx
        ? {
            label: "Max GDx",
            data: maxgdx,
            tension: 0.1,
            borderColor: "red",
            backgroundColor: "red",
            fill: false,
            borderWidth: 2,
            pointRadius: 5,
          }
        : { label: "", data: [] },
    ],
  };
};
