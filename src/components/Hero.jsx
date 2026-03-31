import styles from './Hero.module.css';

const Hero = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo-pfl-white.svg" alt="logo PFL" />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <button className={styles.btn}>ПФЛ</button>
          </li>
          <li>
            <button className={styles.btn}>Перша ліга</button>
          </li>
          <li>
            <button className={styles.btn}>Друга ліга А</button>
          </li>
          <li>
            <button className={styles.btn}>Друга ліга Б</button>
          </li>
          <li>
            <button className={styles.btn}>Новини</button>
          </li>
          <li>
            <button className={styles.btn}>Медіа</button>
          </li>
          <li>
            <button className={styles.btn}>Команди</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Hero;
