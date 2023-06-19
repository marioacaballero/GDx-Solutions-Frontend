import { useInView } from "react-intersection-observer";
import style from "./AboutUs.module.css";
import about from "../../assets/images/about2.jpg";
import demand from "../../assets/images/demand.jpg";
import ContactForm from "../ContactForm/ContactForm";
import Chat from "../Chat/Chat";

function AboutUs() {
  const { ref: refAbout, inView: inViewAbout } = useInView();
  const { ref: refDemand, inView: inViewDemand } = useInView();

  return (
    <div className={style.about}>
      <section ref={refAbout}>
        {inViewAbout && (
          <>
            <img src={about} alt="about" />
            <div>
              <h2>
                Quiénes <p>Somos</p>
              </h2>
              <p>
                GDx es un desarrollador de tecnología encargado de optimizar y
                garantizar el mejor de los resultados a través de soluciones
                innovadoras
              </p>
            </div>
          </>
        )}
      </section>
      <section ref={refDemand}>
        {inViewDemand && (
          <>
            <div>
              <h2>
                Gestión de
                <p>Demanda Eléctrica</p>
              </h2>
              <p>
                La gestión de la demanda es una estrategia utilizada por las
                empresas para modular carga en hora punta, buscando que la
                potencia del usuario sea la mínima posible cuando ocurra la
                máxima demanda coincidente.
              </p>
            </div>
            <img src={demand} alt="about" />
          </>
        )}
      </section>
      <ContactForm />
      <Chat />
    </div>
  );
}

export default AboutUs;
