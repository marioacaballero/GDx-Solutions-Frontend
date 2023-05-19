// import { Link } from "react-router-dom";
import LoginDisplay from "./LoginDisplay";

export const Login = () => {
  return (
    <div>
      <h1>GDx Solutions</h1>
      <h2>Bienvenidos</h2>
      <p>Debe iniciar sesión para continuar</p>
      <LoginDisplay />
      {/* <p>
        ¿Eres nuevo en GDx Solutions? Puede obtener tu cuenta gratis{" "}
        <Link to={"/singUp"}>aquí</Link>
      </p> */}
    </div>
  );
};
