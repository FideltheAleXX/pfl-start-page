import styles from './News.module.css';
import newsImg1 from '../../assets/news-img1.jpeg';
import newsImg2 from '../../assets/news-img2.jpg';
import newsImg3 from '../../assets/news-img3.jpg';
import newsImg4 from '../../assets/news-img4.jpg';

const News = () => {
  return (
    <section className={styles.news}>
      <p className={styles.title}>Останні новини</p>
      <div className={styles.container}>
        <div className={styles.mainBlock}>
          <img className={styles.mainImg} src={newsImg1} alt="football news" />
        </div>
        <div className={styles.secondaryBlock}>
          <div>
            <img
              className={styles.secondaryImg}
              src={newsImg1}
              alt="football news"
            />
          </div>
          <div>
            <img
              className={styles.secondaryImg}
              src={newsImg2}
              alt="football news"
            />
          </div>
          <div>
            <img
              className={styles.secondaryImg}
              src={newsImg3}
              alt="football news"
            />
          </div>
          <div>
            <img
              className={styles.secondaryImg}
              src={newsImg4}
              alt="football news"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
