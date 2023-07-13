/* eslint-disable @typescript-eslint/no-explicit-any*/

import { useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { validator } from "../../assets/helpers/validators";
import style from "./ContactForm.module.css";
import Footer from "../Footer/Footer";

const API_PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    business: "",
    area: "",
    charge: "",
    phone: "",
    message: "",
  };

  const errorInitialState = {
    name: "",
    email: "",
    business: "",
    area: "",
    charge: "",
    phone: "",
    message: "",
  };

  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState(errorInitialState);

  const formValues = {
    name: input.name,
    email: input.email,
    business: input.business,
    area: input.area,
    charge: input.charge,
    phone: input.phone,
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

    if (
      !errors.email &&
      !errors.name &&
      !errors.business &&
      !errors.charge &&
      !errors.area &&
      !errors.phone &&
      !errors.message &&
      input.message
    ) {
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
        text: "Por favor revisa los campos",
        icon: "warning",
      });
    }
  };

  return (
    <div id="contact">
      <div className={style.contact}>
        <h2>Contáctenos</h2>
        <p>
          Para contactarse con nosotros debe completar los siguientes campos,
          nuestro equipo se pondrá en contacto con usted a la brevedad.
        </p>
        <form onSubmit={sendEmail}>
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
            <span>Nombre:</span>
            <input
              type="text"
              name="name"
              placeholder="GDx Solutions"
              value={input.name}
              onChange={(e) => handleInputChange(e)}
            />
            <p className={errors.name ? style.error : style.hide}>
              {errors.name}
            </p>
          </label>
          <label>
            <span>Empresa:</span>
            <input
              type="text"
              name="business"
              value={input.business}
              placeholder="GDx"
              onChange={(e) => handleInputChange(e)}
            />
            <p className={errors.business ? style.error : style.hide}>
              {errors.business}
            </p>
          </label>
          <label>
            <span>Área:</span>
            <input
              type="text"
              name="area"
              value={input.area}
              placeholder="Metalmecánica"
              onChange={(e) => handleInputChange(e)}
            />
            <p className={errors.area ? style.error : style.hide}>
              {errors.area}
            </p>
          </label>
          <label>
            <span>Cargo:</span>
            <input
              type="text"
              name="charge"
              value={input.charge}
              placeholder="Encargado General"
              onChange={(e) => handleInputChange(e)}
            />
            <p className={errors.charge ? style.error : style.hide}>
              {errors.charge}
            </p>
          </label>
          <label>
            <span>Teléfono:</span>
            <input
              type="text"
              name="phone"
              value={input.phone}
              placeholder="51 123 123 123"
              onChange={(e) => handleInputChange(e)}
            />
            <p className={errors.phone ? style.error : style.hide}>
              {errors.phone}
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
            placeholder="Hola GDx Solutions, quisiera solicitar una prueba gratuita..."
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
