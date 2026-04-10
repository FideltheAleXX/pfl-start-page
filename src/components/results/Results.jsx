import styles from './Results.module.css';
import { AiOutlineVideoCamera } from 'react-icons/ai';

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
      </div>
    </section>
  );
};

export default Results;
