import React from "react";
import RegisterDisplay from "./RegisterDisplay";

export default function Register() {
  return (
    <div>
      <h1>GDx Solutions</h1>
      <h2>Bienvenidos</h2>
      <p>
        Coloque una dirección de email válida seguido de su contraseña y luego
        presione el botón crear cuenta para continuar
      </p>
      <RegisterDisplay />
    </div>
  );
}
