import { Link } from "react-router-dom";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.home}>
      <header>
        <p>GDx Solutions</p>
        <Link to={"/contact"} className={style.linkContact}>
          Contactanos
        </Link>
      </header>
      <section>
        <h1>Optimizando resultados a través de soluciones innovadoras</h1>
        <p>
          GDx es un desarrollador de tecnología encargado de optimizar y
          garantizar el mejor de los resultados a través de soluciones
          innovadoras
        </p>
      </section>
    </div>
  );
}
