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
