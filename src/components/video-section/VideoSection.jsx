import styles from './VideoSection.module.css';
import { useState } from 'react';
import { videos } from '../../data/videos';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const VideoSection = () => {
  const [curPreview, setCurPreview] = useState(0);
  const maxPreview = videos.length - 3;
  const offset = curPreview * 362;

  const nextSlide = () => {
    if (curPreview < maxPreview) {
      setCurPreview(curPreview + 1);
    }
  };

  const prevSlide = () => {
    if (curPreview > 0) {
      setCurPreview(curPreview - 1);
    }
  };

  return (
    <section className={styles.video}>
      <div className={styles.arrows}>
        {' '}
        <FaArrowAltCircleLeft size={30} color="#454545" onClick={prevSlide} />
        <p className={styles.title}>Останні відео</p>
        <FaArrowAltCircleRight size={30} color="#454545" onClick={nextSlide} />
      </div>

      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${offset}px)`,
        }}
      >
        {videos.map((video, index) => {
          return (
            <div className={styles.preview}>
              <a key={index} href={video.match}>
                <img
                  className={styles.img}
                  src={video.img}
                  alt="video preview"
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoSection;
