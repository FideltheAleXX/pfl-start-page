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
        {sortedTeams.map((team) => {
          return (
            <div key={team.name} className={styles.tableRow} role="row">
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
