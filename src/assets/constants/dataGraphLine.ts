export const myDataDaily = (
  alldata: string[],
  dateNow: string,
  displayEjNow: boolean,
  ejecutadoNow: number[],
  displayIntervalNow: boolean,
  displayGDxNow: boolean,
  gdxNow: number[],
  displayDiNow: boolean,
  diarioNow: number[],
  intervalForGraphNow: number[]
) => {
  return {
    labels: alldata
      .map((f) => f[0])
      .filter((f) => f.includes(dateNow))
      .map((f) => f.slice(11)),
    datasets: [
      displayEjNow
        ? {
            label: "Demanda Ejectuada",
            data: ejecutadoNow,
            tension: 0.1,
            borderColor: "rgb(8, 197, 18)",
            backgroundColor: "rgba(8, 197, 18, 0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayIntervalNow
        ? {
            label: "Intervalo",
            data: intervalForGraphNow,
            tension: 0,
            borderColor: "rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fill: "origin",
            borderWidth: 2,
            pointRadius: 4,
          }
        : { label: "", data: [] },
      displayGDxNow
        ? {
            label: "Estimación GDx",
            data: gdxNow, //cambiar esto por la estimacion verdadera
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
            data: diarioNow,
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

export const myData = (
  alldata: string[],
  date: string,
  displayEj: boolean,
  ejecutado: number[],
  displayInterval: boolean,
  intervalForGraph: number[],
  displayGDx: boolean,
  gdx: number[],
  displayDi: boolean,
  diario: number[]
) => {
  return {
    labels: alldata
      .map((f) => f[0])
      .filter((f) => f.includes(date))
      .map((f) => f.slice(11)),
    datasets: [
      displayEj
        ? {
            label: "Demanda Ejectuada",
            data: ejecutado,
            tension: 0.1,
            borderColor: "rgb(8, 197, 18)",
            backgroundColor: "rgba(8, 197, 18, 0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayInterval
        ? {
            label: "Intervalo",
            data: intervalForGraph,
            tension: 0,
            borderColor: "rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fill: "origin",
            borderWidth: 2,
            pointRadius: 4,
          }
        : { label: "", data: [] },
      displayGDx
        ? {
            label: "Estimación GDx",
            data: gdx, //cambiar esto por la estimacion verdadera
            tension: 0.1,
            borderColor: "rgb(128, 0, 128)",
            backgroundColor: "rgba(128, 0, 128,0.5)",
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
          }
        : { label: "", data: [] },
      displayDi
        ? {
            label: "Programa Diario",
            data: diario,
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
