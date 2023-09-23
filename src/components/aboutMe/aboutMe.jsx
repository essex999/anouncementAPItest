import styles from "./aboutMe.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import catImage from "../../assets/Cat03.jpg";
import { Link } from "react-router-dom";
import BackArrow from "../backArrow/backArrow";
function AboutMe() {
  const [showBurger, setBurger] = useState(false);
  function setShowUnShowBurger() {
    setBurger(!showBurger);
  }
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.burgerContent}>
          <MenuIcon onClick={setShowUnShowBurger} className={styles.menuIcon} />
          {showBurger ? (
            <div className={styles.burger}>
              <img
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                src={catImage}
                alt="cat"
              />
              <div>имя</div>
              <div>почтовый адрес</div>
              <Link to={"/"}>Список постов</Link>
              <Link to={"/aboutMe"}>Обо мне</Link>
            </div>
          ) : (
            ""
          )}
          {showBurger ? "" : <BackArrow />}
        </div>

        <div className={styles.content}>
          Привет! Меня зовут [ваше имя], и я [ваш возраст] лет. Я живу в [вашем
          городе] и работаю в области [вашей профессии]. Моя жизненная философия
          - всегда учиться и развиваться. Я увлекаюсь [ваши увлечения или
          хобби], и это придает моей жизни яркие краски. Я также люблю
          путешествовать и открывать для себя новые культуры и традиции. Мои
          последние путешествия включали [места, которые вы посетили]. Когда у
          меня есть свободное время, я предпочитаю [ваше любимое занятие в
          свободное время]. Это помогает мне расслабиться и насладиться
          моментом. Мой любимый цвет - [ваш любимый цвет], и он всегда приносит
          мне радость. Я верю в [вашу жизненную философию или убеждения] и
          стараюсь жить в соответствии с ними. Спасибо, что заглянули на мою
          страницу "Обо мне". Если у вас есть какие-либо вопросы или хотите
          узнать больше, не стесняйтесь связаться со мной!
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
