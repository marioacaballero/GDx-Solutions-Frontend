export const DataCoes = (routes: string) => {
  return `https://gdxbackend.onrender.com/${routes}`;
};

export const DataPrediction = (routes: string, query: string) => {
  return `http://34.69.54.218:8000/${routes}/?date=${query}`;
};
