/* eslint-disable @typescript-eslint/no-explicit-any*/

export const validator = (target: any) => {
  const notNull = /\S+/;
  const notEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const error = {
    email: "",
    subject: "",
    message: "",
  };

  if (!notNull.test(target.email)) {
    error.email = "Campo obligatorio";
  } else if (!notEmail.test(target.email)) {
    error.email = "Email Invalido";
  }

  if (!notNull.test(target.subject)) {
    error.subject = "Campo obligatorio";
  }

  if (!notNull.test(target.message)) {
    error.message = "Campo obligatorio";
  }

  return error;
};
