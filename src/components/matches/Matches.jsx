import { useState, useEffect } from 'react';
import styles from './Matches.module.css';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const offset = activeIndex * 276;

  useEffect(() => {
    const loadData = async () => {
      try {
        const [resMatches, resTeams] = await Promise.all([
          fetch('/data/tour-29.json'),
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
    <section className={styles.matches}>
      <div
        className={styles.track}
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {matches.map((match) => {
          const homeTeam = teams.find((t) => t.id === match.homeTeamId);
          const awayTeam = teams.find((t) => t.id === match.awayTeamId);
          const homeTeamLogo = homeTeam.logo;
          const awayTeamLogo = awayTeam.logo;
          return (
            <div key={match.id} className={styles.card}>
              <p className={styles.cardTitle}>Перша Ліга</p>
              <div className={styles.topRow}>
                <div>Тур {match.tour}</div>
                <div>{match.time}</div>
                <div>{match.date}</div>
              </div>
              <div className={styles.bottomRow}>
                <div>
                  <img
                    className={styles.img}
                    src={homeTeamLogo}
                    alt="logo of club"
                  />
                </div>
                <div>-- : --</div>
                <div>
                  <img
                    className={styles.img}
                    src={awayTeamLogo}
                    alt="logo of club"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.sliderDotsContainer}>
        <div className={styles.sliderDots}>
          {[0, 1, 2, 3, 4].map((_, index) => {
            return (
              <button
                key={index}
                className={`${styles.sliderDot} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Matches;
