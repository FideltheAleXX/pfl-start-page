import styles from './Sponsors.module.css';
const Sponsors = () => {
  return (
    <section className={styles.sponsors}>
      <div className={styles.baner}>
        <img src="/sponsors/baner_vbet.png" alt="sponsor`s banner" />
      </div>
      <div className={styles.sponsorsBlock}>
        <div className={styles.sponsor}>
          <p>Титульний спонсор VBET Першої ліги сезону 2025/26</p>
          <img src="/sponsors/vbet.png" alt="vbet" />
        </div>
        <div className={styles.sponsor}>
          <p>Офіційний м’яч ПФЛ</p>
          <img src="/sponsors/select.png" alt="select" />
        </div>
        <div className={styles.sponsor}>
          <p>Партнер</p>
          <img src="/sponsors/sport-arena.png" alt="sport arena" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
