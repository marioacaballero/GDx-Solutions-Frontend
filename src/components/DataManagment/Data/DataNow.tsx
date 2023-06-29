import {
  FetchEject,
  FetchGDx,
  FetchPrediction,
  FetchRisk,
  GenerationTop,
  GenerationType,
} from "../../../assets/constants/interfaces";
import DataTable from "../../Table/Table";
import MarginalCost from "./MarginalCost/MarginalCost";
import style from "./Data.module.css";
import DataGraphsDay from "./DataGrapsDay/DataGraphsDay";
import DataIntervals from "./DataIntervals/DataIntervals";
import DataMonths from "./DataMonths/DataMonths";
import GenerationResource from "./GenerationResource/GenerationResource";
import GenerationTopTen from "./GenerationTopTen/GenerationTopTen";

function DataNow({
  ejecutadoNow,
  gdxNow,
  diarioNow,
  prediccionNow,
  displayEjNow,
  setDisplayEjNow,
  displayGDxNow,
  setDisplayGDxNow,
  displayDiNow,
  setDisplayDiNow,
  dataMonthNow,
  displayIntervalNow,
  setDisplayIntervalNow,
  reprodiario,
  displayReproDiNow,
  setDisplayReproDiNow,
  mdcgdx,
  maxgdx,
  displayMDCgdx,
  setDisplayMDCgdx,
  displayMaxgdx,
  setDisplayMaxgdx,
  intervalForGraphNow,
  risk,
  generationData,
  generationTop,
}: {
  ejecutadoNow: FetchEject[];
  gdxNow: FetchGDx[];
  diarioNow: FetchGDx[];
  displayEjNow: boolean;
  setDisplayEjNow: React.Dispatch<React.SetStateAction<boolean>>;
  displayGDxNow: boolean;
  setDisplayGDxNow: React.Dispatch<React.SetStateAction<boolean>>;
  displayDiNow: boolean;
  setDisplayDiNow: React.Dispatch<React.SetStateAction<boolean>>;
  dataMonthNow: FetchGDx[];
  prediccionNow: FetchPrediction;
  displayIntervalNow: boolean;
  setDisplayIntervalNow: React.Dispatch<React.SetStateAction<boolean>>;
  reprodiario: FetchGDx[];
  displayReproDiNow: boolean;
  setDisplayReproDiNow: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayMDCgdx: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayMaxgdx: React.Dispatch<React.SetStateAction<boolean>>;
  mdcgdx: (number | null)[];
  maxgdx: (number | null)[];
  intervalForGraphNow: (number | null)[];
  displayMDCgdx: boolean;
  displayMaxgdx: boolean;
  risk: FetchRisk[];
  generationData: GenerationType[];
  generationTop: GenerationTop[];
}) {
  const getRowClassName = (record: {
    key: string;
    hora: string;
    gdx: number;
  }): string => {
    return record.hora === prediccionNow.date_pred.slice(11, 16)
      ? style.colorMax
      : style.colorOthersRows;
  };

  return (
    <main>
      <div>
        <article>
          <DataIntervals
            key={"dataIntervals"}
            prediccionNow={prediccionNow}
            risk={risk}
          />
        </article>
        <div>
          <div className={style.tableData}>
            <DataTable
              key={"dataGDXTable"}
              data={gdxNow.map((e) => {
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
            ejecutadoNow={ejecutadoNow}
            diarioNow={diarioNow}
            reprodiario={reprodiario}
            gdxNow={gdxNow}
            displayDiNow={displayDiNow}
            displayEjNow={displayEjNow}
            displayGDxNow={displayGDxNow}
            displayIntervalNow={displayIntervalNow}
            displayReproDiNow={displayReproDiNow}
            setDisplayDiNow={setDisplayDiNow}
            setDisplayEjNow={setDisplayEjNow}
            setDisplayGDxNow={setDisplayGDxNow}
            setDisplayIntervalNow={setDisplayIntervalNow}
            setDisplayReproDiNow={setDisplayReproDiNow}
            displayMDCgdx={displayMDCgdx}
            mdcgdx={mdcgdx}
            setDisplayMDCgdx={setDisplayMDCgdx}
            displayMaxgdx={displayMaxgdx}
            maxgdx={maxgdx}
            setDisplayMaxgdx={setDisplayMaxgdx}
            intervalForGraphNow={intervalForGraphNow}
            prediccionNow={prediccionNow}
          />
        </div>
        <section>
          <DataMonths key={"dataMonths"} dataMonthNow={dataMonthNow} />
        </section>
      </div>
      <div>
        <h2>Generación</h2>
        <MarginalCost />
        <GenerationResource
          key={"GenerationResourceDay"}
          date={prediccionNow.date_pred.slice(0, 10)}
          dataArea={generationData}
        />
        <GenerationTopTen
          key={"GenerationTopDay"}
          generationTop={generationTop}
        />
      </div>
    </main>
  );
}

export default DataNow;
