import styles from './Results.module.css';
import { useState, useEffect } from 'react';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';

const Results = () => {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [resMatches, resTeams] = await Promise.all([
          fetch('/data/tour-30.json'),
          fetch('/data/teams.json'),
        ]);

        const matchesData = await resMatches.json();
        const teamsData = await resTeams.json();

        setMatches(matchesData);
        setTeams(teamsData);
      } catch (error) {
        console.error('Ой, щось пішло не так:', error);
      }
    };

    loadData();
  }, []);

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
          const homeTeam = teams.find((t) => t.id === match.homeTeamId);
          const awayTeam = teams.find((t) => t.id === match.awayTeamId);
          const homeTeamLogo = homeTeam.logo;
          const awayTeamLogo = awayTeam.logo;
          return (
            <div key={match.id} className={styles.tableRow} role="row">
              <div>
                <div className={styles.matchDate}>{match.date}</div>
                <div className={styles.matchTime}>{match.time}</div>
              </div>
              <div className={styles.home}>
                <div className={styles.team}>{homeTeam?.name}</div>
                <div className={styles.logoContainer}>
                  <img
                    className={styles.logo}
                    src={homeTeamLogo}
                    alt="football club logo"
                  />
                </div>
              </div>
              <div className={styles.result}>0 : 0</div>
              <div className={styles.away}>
                <div className={styles.logoContainer}>
                  <img
                    className={styles.logo}
                    src={awayTeamLogo}
                    alt="football club logo"
                  />
                </div>
                <div>{awayTeam?.name}</div>
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
