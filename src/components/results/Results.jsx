import styles from './Results.module.css';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { matches } from '../../data/matches';

const Results = () => {
  return (
    <section className={styles.results}>
      <div className={styles.tableHeader}>Тур 23</div>
      <div className={styles.table} role="table">
        <div role="row" className={styles.headerRow}>
          <div>Дата</div>
          <div>Господарі</div>
          <div>Результат</div>
          <div>Гості</div>
          <div>
            <AiOutlineVideoCamera color="#0db04b" />
          </div>
        </div>
        {matches.map((match) => {
          return (
            <div key={match.id} className={styles.tableRow} role="row">
              <div>
                <div className={styles.matchDate}>{match.matchDate}</div>
                <div className={styles.matchTime}>{match.matchTime}</div>
              </div>
              <div className={styles.home}>
                <div className={styles.team}>{match.name1}</div>
                <div className={styles.logoContainer}>
                  <img
                    className={styles.logo}
                    src={match.logo1}
                    alt="football club logo"
                  />
                </div>
              </div>
              <div className={styles.result}>1 : 0</div>
              <div className={styles.away}>
                <div className={styles.logoContainer}>
                  <img
                    className={styles.logo}
                    src={match.logo2}
                    alt="football club logo"
                  />
                </div>
                <div>{match.name2}</div>
              </div>
              <div>
                <FaYoutube color="red" size="1.5rem" />
              </div>
            </div>
          );
        })}
        <div role="row" className={styles.lastRow}>
          <div>
            <a href="https://pfl.ua/standing?tournament=1347">
              Турнірна таблиця
            </a>
          </div>
          <div className={styles.stick}></div>
          <div>
            <a href="https://pfl.ua/calendar?tournament=1347"> Календар</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
