import LoginDisplay from "./LoginDisplay";
import style from "./Login.module.css";

export const Login = () => {
  return (
    <div className={style.login}>
      <h1>GDx Solutions</h1>
      <h2>Bienvenidos</h2>
      <p>Debe iniciar sesión para continuar</p>
      <LoginDisplay />
      <p>
        * Solicita una prueba gratis <a href={"/#contact"}>aquí</a> para conocer
        como funciona nuestra tecnología de gestión de la demanda eléctrica.
      </p>
    </div>
  );
};
