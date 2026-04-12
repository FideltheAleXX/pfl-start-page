import styles from './Disqualified.module.css';
import { disqualified } from '../../data/disqualified';

const Disqualified = () => {
  return (
    <section className={styles.results}>
      <div className={styles.tableHeader}>Дискваліфіковані</div>
      <div className={styles.table} role="table">
        <div role="row" className={styles.headerRow}>
          <div>ПІБ</div>
          <div>Команда</div>
          <div>Матчі</div>
        </div>
        {disqualified.map((player) => {
          return (
            <div key={player.name} className={styles.tableRow} role="row">
              <div className={styles.playerName}>{player.name}</div>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src={player.team}
                  alt="football club logo"
                />
              </div>
              <div className={styles.quantity}>{player.quantity}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Disqualified;
