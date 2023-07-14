import { Carousel } from "antd";
import style from "./Services.module.css";
import estimacion from "../../assets/images/estimacion.png";
import ahorro from "../../assets/images/ahorro.png";
import demanda from "../../assets/images/demanda.png";
import costo from "../../assets/images/costomarginal.png";

export default function Services() {
  return (
    <section className={style.services} id="services">
      <div>
        <h2>Nuestros Servicios</h2>
        <p>
          Gracias a nuestros servicios las empresas pueden optimizar recursos y
          maximizar ahorros, además de contribuir a la lucha contra el cambio
          climático
        </p>
        <p>
          Puedes conocer todos nuestros servicios disponibles a través de una
          prueba gratuita haciendo click <a href="/#contact">aquí.</a>
        </p>
      </div>
      <section>
        <Carousel autoplay className={style.carousel}>
          <div className={style.design}>
            <h2>Realizar predicciones</h2>
            <p>
              De la demanda eléctrica con uso de algoritmos de Inteligencia
              Artificial
            </p>
            <img src={estimacion} alt="estimacion" />
          </div>
          <div className={style.prediction}>
            <h2>Gestion de la Demanda</h2>
            <p>Optimiza y ahorra recursos modulando la carga en hora punta</p>
            <img src={demanda} alt="demanda" />
          </div>
          <div className={style.report}>
            <h2>Estructura de costos</h2>
            <p>De la energía de cada zona en tiempo real</p>
            <img src={costo} alt="costo" />
          </div>
          <div className={style.history}>
            <h2>Modelo de Ahorro</h2>
            <p>Gracias a las soluciones integrales que ofrece GDx</p>
            <img src={ahorro} alt="ahorro" />
          </div>
        </Carousel>
      </section>
    </section>
  );
}
