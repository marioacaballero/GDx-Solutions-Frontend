import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";
import { useNavigate, useParams } from "react-router";
import {
  FetchEject,
  FetchGDx,
  FetchPrediction,
  FetchRisk,
} from "../../../assets/constants/interfaces";
import DataTable from "../../Table/Table";
import MarginalCost from "./MarginalCost/MarginalCost";
import DataGraphsDay from "./DataGrapsDay/DataGraphsDay";
import DataIntervals from "./DataIntervals/DataIntervals";
import DataMonths from "./DataMonths/DataMonths";
import GenerationResource from "./GenerationResource/GenerationResource";
import GenerationTopTen from "./GenerationTopTen/GenerationTopTen";
import { fetchingAsync } from "../../../assets/helpers/auxiliar";
import style from "./Data.module.css";

function DataNow({
  setLoading,
  loading,
  date,
  setYear,
  setMonth,
  setDay,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  date: string;
}) {
  const { token } = useParams();
  const navigate = useNavigate();

  const [unauthorized, setUnauthorized] = useState<boolean>(false);
  const [ejecutado, setEjecutado] = useState<FetchEject[]>([]);
  const [risk, setRisk] = useState<FetchRisk[]>([]);
  const [gdx, setGdx] = useState<FetchGDx[]>([]);
  const [diario, setDiario] = useState<FetchGDx[]>([]);
  const [reprodiario, setReprodiario] = useState<FetchGDx[]>([]);

  const [prediction, setPrediction] = useState<FetchPrediction>({
    date_pred: "sin datos",
    hora_min: "sin datos",
    hora_max: "sin datos",
    demanda_pred: "sin datos",
  });

  useEffect(() => {
    fetchingAsync(
      date,
      setYear,
      setMonth,
      setDay,
      setEjecutado,
      setRisk,
      setGdx,
      setDiario,
      setReprodiario,
      setPrediction,
      setLoading,
      setUnauthorized,
      token
    );
  }, [date, setLoading, setYear, setMonth, setDay, token]);

  useEffect(() => {
    if (unauthorized) {
      return navigate("/signin");
    }
  }, [unauthorized, navigate]);

  const getRowClassName = (record: {
    key: string;
    hora: string;
    gdx: number;
  }): string => {
    return record.hora === prediction.date_pred.slice(11, 16)
      ? style.colorMax
      : style.colorOthersRows;
  };

  const MDCGDx = () => {
    const indexes: number[] = [];
    const i = gdx
      .map((e) => e.demanda)
      .indexOf(Number(prediction.demanda_pred));
    indexes.push(i - 2);
    indexes.push(i - 1);
    indexes.push(i);
    indexes.push(i + 1);
    indexes.push(i + 2);

    return gdx
      .map((e) => e.demanda)
      .map((value, index) => {
        if (indexes.includes(index)) {
          return value;
        } else {
          return null;
        }
      });
  };

  const intervalGDx = () => {
    const indexes: number[] = [];
    const i = gdx
      .map((e) => e.demanda)
      .indexOf(Number(prediction.demanda_pred));
    indexes.push(i - 2);
    indexes.push(i - 1);
    indexes.push(i);
    indexes.push(i + 1);
    indexes.push(i + 2);

    return gdx
      .map((e) => e.demanda)
      .map((value, index) => {
        if (indexes.includes(index)) {
          return value - value + 8000;
        } else {
          return null;
        }
      });
  };

  const MaxGDx = () => {
    const indexes: number[] = [
      gdx.map((e) => e.demanda).indexOf(Number(prediction.demanda_pred)),
    ];

    return gdx
      .map((e) => e.demanda)
      .map((value, index) => {
        if (indexes.includes(index)) {
          return value;
        } else {
          return null;
        }
      });
  };

  return (
    <>
      {loading ? (
        <div className={style.loader}>
          <DotSpinner size={70} speed={0.9} color="white" />
        </div>
      ) : (
        <main>
          <div>
            <article>
              <DataIntervals
                key={"dataIntervals"}
                prediccionNow={prediction}
                risk={risk}
              />
            </article>
            <div>
              <div className={style.tableData}>
                <DataTable
                  key={"dataGDXTable"}
                  data={gdx.map((e) => {
                    return {
                      key: e.date.slice(11, 16),
                      hora: e.date.slice(11, 16),
                      gdx: e.demanda,
                    };
                  })}
                  getRowClassName={getRowClassName}
                />
              </div>
              <DataGraphsDay
                key={"dataGraphsDay"}
                ejecutadoNow={ejecutado}
                diarioNow={diario}
                reprodiario={reprodiario}
                gdxNow={gdx}
                mdcgdx={MDCGDx()}
                maxgdx={MaxGDx()}
                intervalForGraphNow={intervalGDx()}
                prediccionNow={prediction}
              />
            </div>
            <section>
              <DataMonths key={"dataMonths"} date={date} />
            </section>
          </div>
          <div>
            <h2>Generación</h2>
            <MarginalCost key={"marginalCost"} date={date} />
            <GenerationResource key={"GenerationResourceDay"} date={date} />
            <GenerationTopTen key={"GenerationTopDay"} date={date} />
          </div>
        </main>
      )}
    </>
  );
}

export default DataNow;
