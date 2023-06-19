import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import style from "./Services.module.css";
import swal from "sweetalert";

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
          * Solicita una prueba gratis <a href={"/#contact"}>aquí</a> para
          conocer como funciona nuestra tecnología de gestión de la demanda
          eléctrica.
        </p>
      </div>
      <section>
        <Carousel autoplay className={style.carousel}>
          <div className={style.prediction}>
            <h2>Gestion de la Demanda</h2>
            <p>
              Eléctrica, a diferentes horizontes con uso de algoritmos de
              Inteligencia Artificial
            </p>
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
            <p>
              De energia segun los objetivos de cada empresa, permitiendo
              optimizar el ritmo de produccion
            </p>
            <button
              onClick={() => {
                swal({
                  title: "Lo sentimos",
                  text: "En este momento este sector se encuentra en desarrollo",
                  icon: "warning",
                });
              }}
            >
              Descubre mas
            </button>
          </div>
          <div className={style.report}>
            <h2>Elaborar informes</h2>
            <p>Y formatos de la estructura de costos de energia</p>
            <button
              onClick={() => {
                swal({
                  title: "Lo sentimos",
                  text: "En este momento este sector se encuentra en desarrollo",
                  icon: "warning",
                });
              }}
            >
              Descubre mas
            </button>
          </div>
          <div className={style.history}>
            <h2>Resultados historicos</h2>
            <p>
              Obtenidos durante el periodo 2022 y 2023, teniendo un porcentaje
              de acierto del 100%
            </p>
            <button
              onClick={() => {
                swal({
                  title: "Lo sentimos",
                  text: "En este momento este sector se encuentra en desarrollo",
                  icon: "warning",
                });
              }}
            >
              Descubre mas
            </button>
          </div>
        </Carousel>
      </section>
    </section>
  );
}
