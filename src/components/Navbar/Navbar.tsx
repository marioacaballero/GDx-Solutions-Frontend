import style from "./Navbar.module.css";
import peruFlag from "../../assets/images/peruFlag.png";
import logo from "../../assets/images/LOGO-PNG.png";

export default function Navbar() {
  const home = "/";
  const about = "/about";
  const services = "/#services";
  const contact = "/#contact";
  const login = "/signin";
  return (
    <nav className={style.navbar}>
      <a href={home}>
        <img src={logo} alt="GDx-logo" />
      </a>
      <a href={home}>Inicio</a>
      <a href={services}>Servicios</a>
      <a href={contact}>Contacto</a>
      <a href={about}>Nosotros</a>
      <a href={login}>Ingresar</a>
      <div>
        <img src={peruFlag} alt="flag" />
        <p>ES</p>
      </div>
    </nav>
  );
}
