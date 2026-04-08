import { useMemo } from 'react';
import styles from './Standings.module.css';
import { teams } from '../../data/teams';

const Standings = () => {
  const sortedTeams = useMemo(() => {
    return [...teams].sort((a, b) => b.points - a.points);
  }, [teams]);

  return (
    <section className={styles.standings}>
      <p className={styles.title}>VBET Перша ліга</p>
      <div className={styles.tableHeader}>Турнірна таблиця</div>
      <div className={styles.table} role="table">
        <div role="row" className={styles.headerRow}>
          <div>#</div>
          <div></div>
          <div>Команда</div>
          <div>І</div>
          <div>В</div>
          <div>Н</div>
          <div>П</div>
          <div>О</div>
        </div>
        {sortedTeams.map((team, index) => {
          let rowClassName = styles.tableRow;
          if (index < 2) {
            rowClassName += ` ${styles.topZone}`;
          } else if (index >= teams.length - 2) {
            rowClassName += ` ${styles.bottomZone}`;
          }
          return (
            <div key={team.name} className={rowClassName} role="row">
              <div>{index + 1}</div>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src={team.logo}
                  alt="football logo"
                />
              </div>
              <div>{team.name}</div>
              <div>{team.matches}</div>
              <div>{team.win}</div>
              <div>{team.draw}</div>
              <div>{team.lose}</div>
              <div>{team.points}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Standings;
