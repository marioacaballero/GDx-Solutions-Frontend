import { Link, useNavigate } from "react-router-dom";
import style from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const goTo = (path: string) => {
    alert("Debes iniciar sesion para acceder a las predicciones");
    navigate(path);
  };
  return (
    <div className={style.home}>
      <header>
        <p>GDx Solutions</p>
        <Link to={"/contact"} className={style.linkContact}>
          Contáctanos
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
      <main>
        <h2>Nuestros Servicios</h2>
        <div>
          <div className={style.prediction}>
            <h2>Realizar predicciones</h2>
            <span>
              De la demanda eléctrica a diferentes horizontes con uso de
              algoritmos de Inteligencia Artificial
            </span>
            <button
              onClick={() => {
                goTo("/singin");
              }}
            >
              Descubre mas
            </button>
          </div>
          <div className={style.design}>
            <h2>Diseñar perfiles</h2>
            <span>
              De energia segun los objetivos de cada empresa, permitiendo
              optimizar el ritmo de produccion
            </span>
            <button
              onClick={() => {
                alert("En proceso de desarrollo");
              }}
            >
              Descubre mas
            </button>
          </div>
          <div className={style.report}>
            <h2>Elaborar informes</h2>
            <span>Y formatos de la estructura de costos de energia</span>
            <button
              onClick={() => {
                alert("En proceso de desarrollo");
              }}
            >
              Descubre mas
            </button>
          </div>
          <div className={style.history}>
            <h2>Resultados historicos</h2>
            <span>
              Obtenidos durante el periodo 2022 y 2023, teniendo un porcentaje
              de acierto del 100%
            </span>
            <button
              onClick={() => {
                alert("En proceso de desarrollo");
              }}
            >
              Descubre mas
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
