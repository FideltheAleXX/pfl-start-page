import styles from './Goals.module.css';
import { goals } from '../../data/goals';

const Goals = () => {
  return (
    <section className={styles.goals}>
      <div className={styles.tableHeader}>Бомбардири</div>
      <div className={styles.table} role="table">
        <div role="row" className={styles.headerRow}>
          <div>#</div>
          <div>ПІБ</div>
          <div>Команда</div>
          <div>л1</div>
          <div>л2</div>
          <div>Матчі</div>
        </div>
        {goals.map((player, index) => {
          return (
            <div key={player.name} className={styles.tableRow} role="row">
              <div>{index + 1}</div>
              <div>{player.name}</div>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src={player.team}
                  alt="football club logo"
                />
              </div>
              <div>{player.quantity}</div>
              <div>{player.penalty}</div>
              <div>{player.matches}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Goals;
