import { useState, Fragment } from 'react';
import styles from './News.module.css';
import newsImg1 from '../../assets/news-img1.jpeg';
import newsImg2 from '../../assets/news-img2.jpg';
import newsImg3 from '../../assets/news-img3.jpg';
import newsImg4 from '../../assets/news-img4.jpg';

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const news = [
    {
      id: 1,
      title: 'MATCHDAY! Друга ліга. 24 тур. Анонс матчу в Ужгороді',
      descr: 'Програму чергового туру закриє один матч',
      link: 'https://pfl.ua/news/1582',
      img: newsImg1,
    },
    {
      id: 2,
      title: 'MATCHDAY! VBET Перша ліга. 21 тур. Анонс матчів суботи',
      descr: 'Сьогодні двома матчами буде закрито черговий тур',
      link: 'https://pfl.ua/news/1577',
      img: newsImg2,
    },
    {
      id: 3,
      title: 'MATCHDAY! Друга ліга. 24 тур. Анонс матчів суботи',
      descr: 'Програма чергового туру Другої ліги передбачає три ігрових дні',
      link: 'https://pfl.ua/news/1581',
      img: newsImg3,
    },
    {
      id: 4,
      title:
        'Романчук: до гри з Куликів-Білкою готуємося з підвищеною відповідальністю',
      descr: 'Іван Романчук - найкращий гравець 23 туру у Другій лізі',
      link: 'https://pfl.ua/news/1579',
      img: newsImg4,
    },
  ];

  const currentNews = news[activeIndex];

  return (
    <section className={styles.news}>
      <p className={styles.title}>Останні новини</p>
      <div className={styles.container}>
        <div className={styles.mainBlock}>
          <img
            className={styles.mainImg}
            src={currentNews.img}
            alt="football news"
          />
          <div className={styles.mainNews}>
            <div className={styles.newsBlock}>
              <a className={styles.newsLink} href={currentNews.link}>
                {currentNews.title}
              </a>
              <p className={styles.newsDescript}>{currentNews.descr}</p>
            </div>
          </div>
        </div>

        <div className={styles.secondaryBlock}>
          {news.map((item, index) => {
            return (
              <div
                id={item.id}
                className={`${styles.secondaryItem} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  className={styles.secondaryImg}
                  src={item.img}
                  alt="football news"
                />
              </div>
            );
          })}
        </div>
        <div className={styles.sliderDots}>
          {[0, 1, 2, 3].map((_, index) => {
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

export default News;
