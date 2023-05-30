// const actualDate = new Date();
const actualDate = new Date("01/01/2023");

export const actualDateString = actualDate.toLocaleDateString("es-ES", {
  weekday: "short",
  day: "numeric",
  month: "numeric",
  year: "numeric",
});

export const actualDateYear = actualDate.getFullYear().toString();

export const actualDateDay = () => {
  const day = actualDate.getDate().toString();
  if (day.length === 1) return "0".concat(day);
  return day;
};

export const actualDateMonth = () => {
  const month = (actualDate.getMonth() + 1).toString();
  if (month.length === 1) return "0".concat(month);
  return month;
};
