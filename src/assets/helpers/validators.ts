/* eslint-disable @typescript-eslint/no-explicit-any*/

export const validator = (target: any) => {
  const notNull = /\S+/;
  const notEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const error = {
    name: "",
    email: "",
    business: "",
    area: "",
    charge: "",
    phone: "",
    message: "",
  };

  if (!notNull.test(target.email)) {
    error.email = "Campo obligatorio";
  } else if (!notEmail.test(target.email)) {
    error.email = "Email Invalido";
  }
  if (!notNull.test(target.name)) {
    error.name = "Campo obligatorio";
  }
  if (!notNull.test(target.business)) {
    error.business = "Campo obligatorio";
  }
  if (!notNull.test(target.area)) {
    error.area = "Campo obligatorio";
  }
  if (!notNull.test(target.charge)) {
    error.charge = "Campo obligatorio";
  }
  if (!notNull.test(target.phone)) {
    error.phone = "Campo obligatorio";
  }
  if (!notNull.test(target.message)) {
    error.message = "Campo obligatorio";
  }

  return error;
};
