import style from "./Navbar.module.css";
import peruFlag from "../../assets/images/peruFlag.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const goTo = (path: string) => {
    navigate(path);
  };
  return (
    <nav className={style.navbar}>
      <span
        onClick={() => {
          goTo("/");
        }}
      >
        Quienes Somos
      </span>
      <span
        onClick={() => {
          goTo("/services");
        }}
      >
        Servicios
      </span>
      {/* <a href={"/singin"}>Ingresar</a> */}
      <div>
        <img src={peruFlag} alt="flag" />
        <p>ES</p>
      </div>
    </nav>
  );
}
