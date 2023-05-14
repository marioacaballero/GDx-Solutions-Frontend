export interface Datasets {
  label: string;
  data: number[];
  tension: number;
  fill: boolean;
}

export interface MyDate {
  labels: string[];
  datasets: Datasets[];
}

export interface Schedule {
  name: string;
  value: string;
}
