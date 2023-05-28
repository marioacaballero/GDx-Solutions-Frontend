import style from "./Navbar.module.css";
import peruFlag from "../../assets/images/peruFlag.png";

export default function Navbar() {
  const home = "/";
  const services = "/services";
  return (
    <nav className={style.navbar}>
      <a href={home}>Quienes Somos</a>
      <a href={services}>Servicios</a>
      {/* <a href={"/singin"}>Ingresar</a> */}
      <div>
        <img src={peruFlag} alt="flag" />
        <p>ES</p>
      </div>
    </nav>
  );
}
