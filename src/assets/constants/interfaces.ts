import { Chart, ChartDataset } from "chart.js";

export interface Datasets {
  label?: string;
  data: (number | null)[] | [];
  tension?: number;
  fill?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  pointRadius?: number;
  categoryPercentage?: number;
  barPercentage?: number;
}

export interface MyDate {
  labels: string[];
  datasets: Datasets[];
}

export interface DatasetsBar {
  label?: string;
  data: number[];
  backgroundColor?: string | any;
  borderColor?: string | any;
  borderWidth?: number;
  categoryPercentage?: number;
  barPercentage?: number;
}

export interface MyDateBar {
  labels: string[];
  datasets: DatasetsBar[];
}

export interface Schedule {
  name: string;
  value: string;
}

export interface data1 {
  name: string;
  value: string;
}

export interface data2 {
  start: string;
  result: number[];
}

export interface ChartContext {
  chart: Chart;
  dataIndex: number;
  dataset: ChartDataset;
  datasetIndex: number;
}

export interface FetchGDx {
  date: string;
  demanda: number;
}
export interface FetchEject {
  date: string;
  ejecutado: number;
}

export interface FetchPrediction {
  date_pred: string;
  hora_min: string;
  hora_max: string;
  demanda_pred: string;
}

export interface FetchRisk {
  date: string;
  risk: string;
}
