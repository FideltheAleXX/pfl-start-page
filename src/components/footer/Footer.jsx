import styles from './Footer.module.css';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTelegram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <img src="./logo-pfl-white.svg" alt="logo PFL" />
      </div>
      <div className={styles.socials}>
        <div className={styles.social}>
          <a
            href="https://www.facebook.com/pfl.ua"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook color="#0db04b" />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/pfl.ua/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram color="#0db04b" />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href="https://www.youtube.com/user/PFLUkraine"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaYoutube color="#0db04b" />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href="https://x.com/PFL_Ukraine"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter color="#0db04b" />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href="https://t.me/pfl_ukraine"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTelegram color="#0db04b" />
          </a>
        </div>
      </div>
      <div className={styles.docs}>
        <a className={styles.docLink} href="https://pfl.ua/document">
          Документи
        </a>
        <a className={styles.docLink} href="https://pfl.ua/partners">
          Партнери
        </a>
        <a className={styles.docLink} href="https://pfl.ua/custom/5">
          Контакти
        </a>
      </div>
      <div className={styles.info}>
        <p>
          Назва онлайн-медіа: офіційний інтернет сайт «ПРОФЕСІОНАЛЬНА ФУТБОЛЬНА
          ЛІГА»
        </p>
        <p> Ідентифікатор онлайн-медіа у Реєстрі: R40-06347</p>
        <p>
          Адреса реєстрації та інші засоби зв'язку з онлайн-медіа: ТОВ «ЛІГА
          ФУТБОЛ»,
        </p>
        <p>
          пров. Лабораторний, буд. 7-а, м. Київ, 01133; (044) 356 82 05;
          lf@pfl.ua
        </p>
        <p>21+</p>
      </div>
    </footer>
  );
};

export default Footer;
