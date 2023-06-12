import Chat from "../Chat/Chat";
import ContactForm from "../ContactForm/ContactForm";
import Services from "../Services/Services";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Chat />
      <main className={style.mainDiv}>
        <div className={style.home}>
          <h1>Optimizando resultados a través de soluciones innovadoras</h1>
          <p>
            GDx es un desarrollador de tecnología encargado de optimizar y
            garantizar el mejor de los resultados a través de soluciones
            innovadoras
          </p>
        </div>
        <div className={style.snap}>
          <Services />
        </div>
        <div className={style.snap}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
