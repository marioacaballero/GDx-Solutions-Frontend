import { FetchData } from "../constants/fetchData";
import {
  FetchEject,
  FetchGDx,
  FetchPrediction,
  FetchRisk,
  MDCHistory,
} from "../constants/interfaces";

export const monthData = (array: string[]) => {
  let result: number[] = [];
  const ejectMonth: any = [];
  let start = "01";

  array.forEach((elem: string) => {
    const fecha = elem[0].slice(0, 2);
    const valor = parseInt(elem[1]);
    if (fecha === start) {
      result.push(valor);
    }
    if (fecha !== start) {
      ejectMonth.push({ start, result });
      result = [];
      start = fecha;
      result.push(valor);
    }
  });
  ejectMonth.push({ start, result });

  return ejectMonth;
};

export const fetchingAsync = async (
  date: string,
  setEjecutado: React.Dispatch<React.SetStateAction<FetchEject[]>>,
  setRisk: React.Dispatch<React.SetStateAction<FetchRisk[]>>,
  setGdx: React.Dispatch<React.SetStateAction<FetchGDx[]>>,
  setDiario: React.Dispatch<React.SetStateAction<FetchGDx[]>>,
  setReprodiario: React.Dispatch<React.SetStateAction<FetchGDx[]>>,
  setPrediction: React.Dispatch<React.SetStateAction<FetchPrediction>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const ejectResp = await fetch(FetchData(`ejecutado/?date=${date}`));
    const ejectData = await ejectResp.json();
    setEjecutado(ejectData);
    const riskResp = await fetch(FetchData(`riesgo_fecha?date=${date}`));
    const riskData = await riskResp.json();
    setRisk(riskData);
    const gdxResp = await fetch(FetchData(`prediccion_detalle/?date=${date}`));
    const gdxData = await gdxResp.json();
    setGdx(gdxData);
    const diarioResp = await fetch(FetchData(`programa_diario/?date=${date}`));
    const diarioData = await diarioResp.json();
    setDiario(diarioData);
    const reprodiarioResp = await fetch(
      FetchData(`reprograma_diario?date=${date}`)
    );
    const reprodiarioData = await reprodiarioResp.json();
    setReprodiario(reprodiarioData);
    const predResp = await fetch(FetchData(`prediccion/?date=${date}`));
    const predData = await predResp.json();
    setPrediction(predData);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const fetchingAsyncHistory = async (
  // date: string,
  setMdcHistory: React.Dispatch<React.SetStateAction<MDCHistory[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const mdcHistResp = await fetch(FetchData(`mdc_historico`));
    const mdcHistData = await mdcHistResp.json();
    setMdcHistory(mdcHistData);

    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
