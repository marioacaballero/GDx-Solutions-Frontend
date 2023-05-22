/* eslint-disable @typescript-eslint/no-explicit-any*/

import { useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { validator } from "../../assets/helpers/validators";
import style from "./ContactForm.module.css";

const API_PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;

console.log(TEMPLATE_ID, API_PUBLIC_KEY);

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const errorInitialState = {
    email: "",
    subject: "",
    message: "",
  };

  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState(errorInitialState);

  const formValues = {
    name: input.name,
    email: input.email,
    subject: input.subject,
    message: input.message,
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setErrors(
      validator({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!errors.email && !errors.subject && !errors.message && input.message) {
      emailjs
        .send(EMAIL_SERVICE_ID, TEMPLATE_ID, formValues, API_PUBLIC_KEY)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setInput(initialState);
      swal({
        title: "Muchas gracias",
        text: "Su mensaje fue enviado satisfactoriamente",
        icon: "success",
      });
    } else {
      handleInputChange(e);
      swal({
        title: "Algo falta!",
        text: "Por favor revisa los campos requeridos",
        icon: "warning",
      });
    }
  };

  return (
    <div className={style.contact}>
      <h2>Contactanos</h2>
      <p>
        Para contactarse con nosotros complete los siguientes campos, le
        responderemos a la brevedad.
      </p>
      <form onSubmit={sendEmail}>
        <label>
          <span>Nombre:</span>
          <input
            type="text"
            name="name"
            placeholder="GDx Solutions"
            value={input.name}
            onChange={(e) => handleInputChange(e)}
          />
          <p className={style.hide}></p>
        </label>
        <label>
          <span>Asunto:</span>
          <input
            type="text"
            name="subject"
            value={input.subject}
            placeholder="Consulta"
            onChange={(e) => handleInputChange(e)}
          />
          <p className={errors.subject ? style.error : style.hide}>
            {errors.subject}
          </p>
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={input.email}
            placeholder="google@google.com"
            onChange={(e) => handleInputChange(e)}
          />
          <p className={errors.email ? style.error : style.hide}>
            {errors.email}
          </p>
        </label>
        <label>
          <span>Mensaje:</span>
          <p className={errors.message ? style.error : style.hide}>
            {errors.message}
          </p>
        </label>
        <textarea
          name="message"
          value={input.message}
          placeholder="Hola GDx Solutions, les escribo para..."
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
