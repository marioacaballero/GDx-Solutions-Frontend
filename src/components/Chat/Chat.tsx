import { Popover } from "antd";
import { AiOutlineWhatsApp } from "react-icons/ai";
import style from "./Chat.module.css";

function Chat() {
  const phone = "51958885644";
  const textWsp = "Hola, quisiera conocer más acerca de";
  const api = `https://api.whatsapp.com/send/?phone=${phone}&text=${textWsp}&type=phone_number&app_absent=0`;

  const content = (
    <div>
      <p>¿Te ayudamos?</p>
    </div>
  );

  return (
    <div>
      <Popover placement="right" content={content}>
        <a href={api} target="_blank" className={style.chat}>
          <AiOutlineWhatsApp />
        </a>
      </Popover>
    </div>
  );
}

export default Chat;
