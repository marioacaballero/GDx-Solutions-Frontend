const actualDate = new Date();

export const actualDateString = actualDate.toLocaleDateString("es-ES", {
  weekday: "short",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "America/Lima",
});

export const actualDateYear = actualDate
  .toLocaleString("es-PE", {
    timeZone: "America/Lima",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  .slice(6, 10);

export const actualDateDay = () => {
  return actualDate
    .toLocaleString("es-PE", {
      timeZone: "America/Lima",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .slice(0, 2);
};

export const actualDateMonth = () => {
  return actualDate
    .toLocaleString("es-PE", {
      timeZone: "America/Lima",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .slice(3, 5);
};
