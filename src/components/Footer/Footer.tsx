import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <p>
        Copyright 2023 <a href="/">GDx Solutions</a> . All Right Reserved /
        Políticas de privacidad
      </p>
    </div>
  );
}

export default Footer;
