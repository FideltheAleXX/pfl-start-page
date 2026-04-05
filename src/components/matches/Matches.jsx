import { useState, useEffect } from 'react';
import styles from './Matches.module.css';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const offset = activeIndex * 282;

  useEffect(() => {
    fetch('/matches.json')
      .then((response) => response.json())
      .then((data) => setMatches(data))
      .catch((error) => console.error('Помилка завантаження:', error));
  }, []);

  return (
    <section className={styles.matches}>
      <div
        className={styles.track}
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {matches.map((match) => (
          <div key={match.id} className={styles.card}>
            <p className={styles.cardTitle}>Перша Ліга</p>
            <div className={styles.topRow}>
              <div>Тур 22</div>
              <div>{match.matchTime}</div>
              <div>{match.matchDate}</div>
            </div>
            <div className={styles.bottomRow}>
              <div>
                <img
                  className={styles.img}
                  src={match.logo1}
                  alt="logo of club"
                />
              </div>
              <div>-- : --</div>
              <div>
                <img
                  className={styles.img}
                  src={match.logo2}
                  alt="logo of club"
                />
              </div>
            </div>
          </div>
        ))}
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
