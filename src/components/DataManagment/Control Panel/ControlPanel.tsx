import style from "./ControlPanel.module.css";
import logo from "../../../assets/images/GDxLogo.png";

export default function ControlPanel() {
  return (
    <div className={style.controlPanel}>
      <h2>Panel de Control</h2>
      <h2>1. Gestión de Demanda</h2>
      <h2>2. Rampas de Energía</h2>
      <img src={logo} alt="GDx Solutions" />
    </div>
  );
}
