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
        <img src="/logo-pfl-white.svg" alt="logo PFL" />
      </div>
      <div className={styles.socials}>
        <div className={styles.social}>
          <a
            className={styles.socialLink}
            href="https://www.facebook.com/pfl.ua"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook color="green" />
          </a>
        </div>
        <div className={styles.social}>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/pfl.ua/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
        <div className={styles.social}>
          <a
            className={styles.socialLink}
            href="https://www.youtube.com/user/PFLUkraine"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </div>
        <div className={styles.social}>
          <a
            className={styles.socialLink}
            href="https://x.com/PFL_Ukraine"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>
        <div className={styles.social}>
          <a
            className={styles.socialLink}
            href="https://t.me/pfl_ukraine"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
      <div className={styles.docs}></div>
      <div className={styles.info}>
        Назва онлайн-медіа: офіційний інтернет сайт «ПРОФЕСІОНАЛЬНА ФУТБОЛЬНА
        ЛІГА» Ідентифікатор онлайн-медіа у Реєстрі: R40-06347 Адреса реєстрації
        та інші засоби зв'язку з онлайн-медіа: ТОВ «ЛІГА ФУТБОЛ», пров.
        Лабораторний, буд. 7-а, м. Київ, 01133; (044) 356 82 05; lf@pfl.ua
        21+{' '}
      </div>
    </footer>
  );
};

export default Footer;
