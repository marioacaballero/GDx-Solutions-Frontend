import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <p>
        Copyright 2023 <a href="/">GDx Solutions</a> . Todos los derechos
        reservados
      </p>
    </div>
  );
}

export default Footer;
