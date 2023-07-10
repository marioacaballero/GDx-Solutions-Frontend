import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import style from "./Services.module.css";
import swal from "sweetalert";
import estimacion from "../../assets/images/estimacion.png";
import ahorro from "../../assets/images/ahorro.png";
import demanda from "../../assets/images/demanda.png";
import costo from "../../assets/images/costomarginal.png";

export default function Services() {
  const navigate = useNavigate();
  const goTo = (path: string) => {
    swal({
      title: "Cuidado",
      text: "Debes iniciar sesion para acceder a la gestión de la demanda",
      icon: "warning",
      buttons: ["Cancelar", "Iniciar Sesion"],
    }).then((isConfirm) => {
      if (isConfirm) {
        navigate(path);
      }
    });
  };
  return (
    <section className={style.services} id="services">
      <div>
        <h2>Nuestros Servicios</h2>
        <p>
          Gracias a nuestros servicios las empresas pueden optimizar y ahorrar
          recursos, además de contribuir a la lucha contra el cambio climático
        </p>

        <p>
          Puedes conocer todos nuestros servicios disponibles haciendo click{" "}
          <button
            onClick={() => {
              goTo("/singin");
            }}
          >
            aquí.
          </button>
        </p>
        <p>
          * Solicita una prueba gratis <a href={"/#contact"}>aquí</a> para
          conocer como funciona nuestra tecnología de gestión de la demanda
          eléctrica.
        </p>
      </div>
      <section>
        <Carousel autoplay className={style.carousel}>
          <div className={style.prediction}>
            <h2>Gestion de la Demanda</h2>
            <p>Optimiza y ahorra recursos modulando la carga en hora punta</p>
            <img src={demanda} alt="demanda" />
            {/* <button
              onClick={() => {
                goTo("/singin");
              }}
            >
              Descubre mas
            </button> */}
          </div>
          <div className={style.design}>
            <h2>Realizar predicciones</h2>
            <p>
              De la demanda eléctrica con uso de algoritmos de Inteligencia
              Artificial
            </p>
            <img src={estimacion} alt="estimacion" />
            {/* <button
              onClick={() => {
                swal({
                  title: "Lo sentimos",
                  text: "En este momento este sector se encuentra en desarrollo",
                  icon: "warning",
                });
              }}
            >
              Descubre mas
            </button> */}
          </div>
          <div className={style.report}>
            <h2>Estructura de costos</h2>
            <p>De la energía en tiempo real</p>
            <img src={costo} alt="costo" />
            {/* <button
              onClick={() => {
                swal({
                  title: "Lo sentimos",
                  text: "En este momento este sector se encuentra en desarrollo",
                  icon: "warning",
                });
              }}
            >
              Descubre mas
            </button> */}
          </div>
          <div className={style.history}>
            <h2>Modelo de Ahorro</h2>
            <p>
              Las soluciones integrales que ofrece GDx logran un ahorro de
              aproximadamente 16.000 US$ por megavatio al mes
            </p>
            <img src={ahorro} alt="ahorro" />
            {/* <button
              onClick={() => {
                swal({
                  title: "Lo sentimos",
                  text: "En este momento este sector se encuentra en desarrollo",
                  icon: "warning",
                });
              }}
            >
              Descubre mas
            </button> */}
          </div>
        </Carousel>
      </section>
    </section>
  );
}
