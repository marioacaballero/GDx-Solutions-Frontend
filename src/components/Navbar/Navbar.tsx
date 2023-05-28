import style from "./Navbar.module.css";
import peruFlag from "../../assets/images/peruFlag.png";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <a href={`${import.meta.env.BASE_URL}`}>Quienes Somos</a>
      <a href={`${import.meta.env.BASE_URL}services`}>Servicios</a>
      {/* <a href={"/singin"}>Ingresar</a> */}
      <div>
        <img src={peruFlag} alt="flag" />
        <p>ES</p>
      </div>
    </nav>
  );
}
