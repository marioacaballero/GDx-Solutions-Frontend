import axios from "axios";
import swal from "sweetalert";
import { FetchData } from "../constants/fetchData";
import {
  actualDateDay,
  actualDateMonth,
  actualDateYear,
} from "../constants/initialStates";
import {
  FetchEject,
  FetchGDx,
  FetchPrediction,
  FetchRisk,
  LoginValues,
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
  setYear: React.Dispatch<React.SetStateAction<string>>,
  setMonth: React.Dispatch<React.SetStateAction<string>>,
  setDay: React.Dispatch<React.SetStateAction<string>>,
  setEjecutado: React.Dispatch<React.SetStateAction<FetchEject[]>>,
  setRisk: React.Dispatch<React.SetStateAction<FetchRisk[]>>,
  setGdx: React.Dispatch<React.SetStateAction<FetchGDx[]>>,
  setDiario: React.Dispatch<React.SetStateAction<FetchGDx[]>>,
  setReprodiario: React.Dispatch<React.SetStateAction<FetchGDx[]>>,
  setPrediction: React.Dispatch<React.SetStateAction<FetchPrediction>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setUnauthorized: React.Dispatch<React.SetStateAction<boolean>>,
  token: string | undefined
) => {
  try {
    const ejectResp = await axios.get(FetchData(`ejecutado?date=${date}`), {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (ejectResp.data) {
      setEjecutado(ejectResp.data);
      const predResp = await axios.get(FetchData(`prediccion/?date=${date}`), {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPrediction(predResp.data);
      const riskResp = await axios.get(FetchData(`riesgo_fecha?date=${date}`), {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRisk(riskResp.data);
      const gdxResp = await axios.get(
        FetchData(`prediccion_detalle?date=${date}`),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setGdx(gdxResp.data);
      const diarioResp = await axios.get(
        FetchData(`programa_diario?date=${date}`),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDiario(diarioResp.data);
      const reprodiarioResp = await axios.get(
        FetchData(`reprograma_diario?date=${date}`),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setReprodiario(reprodiarioResp.data);
      setLoading(false);
    } else {
      swal({
        title: "Lo sentimos!",
        text: "No podemos acceder a esa fecha",
        icon: "error",
      });
      setYear(actualDateYear);
      setMonth(actualDateMonth());
      setDay(actualDateDay());
    }
  } catch (error: any) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      setUnauthorized(true);
    }
  }
};

export const fetchingAsyncHistory = async (
  // date: string,
  setMdcHistory: React.Dispatch<React.SetStateAction<MDCHistory[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  token: string | undefined
) => {
  try {
    const mdcHistResp = await axios.get(FetchData(`mdc_historico`), {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMdcHistory(mdcHistResp.data);

    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (values: LoginValues) => {
  try {
    const data = await axios.post(FetchData("token"), values, {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    return data;
  } catch (error: any) {
    return error.response;
  }
};
