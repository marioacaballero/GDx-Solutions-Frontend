import { FetchData } from "../constants/fetchData";
import {
  FetchEject,
  FetchGDx,
  FetchPrediction,
  FetchRisk,
  GenerationTop,
  GenerationType,
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
  setDataMonth: React.Dispatch<React.SetStateAction<FetchGDx[]>>,
  setPrediction: React.Dispatch<React.SetStateAction<FetchPrediction>>,
  setGenerationData: React.Dispatch<React.SetStateAction<GenerationType[]>>,
  setGenerationTopData: React.Dispatch<React.SetStateAction<GenerationTop[]>>,
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
    const monthResp = await fetch(
      FetchData(`prediccion_maximos_diarios?date=${date}`)
    );
    const monthData = await monthResp.json();
    setDataMonth(monthData);
    const predResp = await fetch(FetchData(`prediccion/?date=${date}`));
    const predData = await predResp.json();
    setPrediction(predData);
    const genrationResp = await fetch(
      FetchData(`generacion_tipo?date=${date}`)
    );
    const genrationData = await genrationResp.json();
    setGenerationData(genrationData);
    const genrationTopResp = await fetch(
      FetchData(`top_empresas?date=${date}`)
    );
    const genrationTopData = await genrationTopResp.json();
    setGenerationTopData(genrationTopData);

    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
