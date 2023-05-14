const actualDate = new Date();

export const actualDateString = actualDate.toLocaleDateString("es-ES", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const actualDateDay = actualDate.getDate().toString();
export const actualDateYear = actualDate.getFullYear().toString();

export const actualDateMonth = () => {
  const month = (actualDate.getMonth() + 1).toString();
  if (month.length === 1) return "0".concat(month);
  return month;
};
