import styles from './Hero.module.css';

const Hero = () => {
  const navList = [
    'ПФЛ',
    'Перша ліга',
    'Друга ліга А',
    'Друга ліга Б',
    'Новини',
    'Медіа',
    'Команди',
  ];
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./logo-pfl-white.svg" alt="logo PFL" />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {navList.map((item, index) => {
            return (
              <li key={index}>
                <button className={styles.btn}>{item}</button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Hero;
