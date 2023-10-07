const actualDate = new Date();

export const actualDateString = actualDate.toLocaleDateString("es-ES", {
  weekday: "short",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export const actualDateYear = actualDate
  .toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  .slice(6, 10);

export const actualDateDay = () => {
  return actualDate
    .toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .slice(0, 2);
};

export const actualDateMonth = () => {
  return actualDate
    .toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .slice(3, 5);
};
