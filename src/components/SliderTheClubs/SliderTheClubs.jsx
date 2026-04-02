import styles from './SliderTheClubs.module.css';
import {
  agrobiznes,
  bukovyna,
  chernigiv,
  chornomorets,
  ingulets,
  livyyBereg,
  mariupol,
  metalist,
  metalurg,
  nyva,
  podillya,
  probiy,
  prykarpattya,
  ucsa,
  viktoriya,
  vorskla,
} from '../../assets';

const teamLogos = [
  {
    club: 'Агробізнес',
    logo: agrobiznes,
    src: 'https://pfl.ua/team/view/1524/35',
  },
  {
    club: 'Буковина',
    logo: bukovyna,
    src: 'https://pfl.ua/team/view/826/35',
  },
  {
    club: 'Вікторія',
    logo: viktoriya,
    src: 'https://pfl.ua/team/view/1524/35',
  },
  {
    club: 'Ворскла',
    logo: vorskla,
    src: 'https://pfl.ua/team/view/848/35',
  },
  {
    club: 'Інгулець',
    logo: ingulets,
    src: 'https://pfl.ua/team/view/1007/35',
  },
  {
    club: 'Лівий Берег',
    logo: livyyBereg,
    src: 'https://pfl.ua/team/view/1537/35',
  },
  {
    club: 'Металіст',
    logo: metalist,
    src: 'https://pfl.ua/team/view/1493/35',
  },
  {
    club: 'Металург',
    logo: metalurg,
    src: 'https://pfl.ua/team/view/1472/35',
  },
  { club: 'Нива', logo: nyva, src: 'https://pfl.ua/team/view/1170/35' },
  {
    club: 'Поділля',
    logo: podillya,
    src: 'https://pfl.ua/team/view/1522/35',
  },
  {
    club: 'Прикарпаття-Благо',
    logo: prykarpattya,
    src: 'https://pfl.ua/team/view/1238/35',
  },
  {
    club: 'Пробій',
    logo: probiy,
    src: 'https://pfl.ua/team/view/1241/35',
  },
  {
    club: 'Фенікс-Маріуполь',
    logo: mariupol,
    src: 'https://pfl.ua/team/view/1531/35',
  },
  {
    club: 'Чернігів',
    logo: chernigiv,
    src: 'https://pfl.ua/team/view/1532/35',
  },
  {
    club: 'Чорноморець',
    logo: chornomorets,
    src: 'https://pfl.ua/team/view/1421/35',
  },
  { club: 'ЮКСА', logo: ucsa, src: 'https://pfl.ua/team/view/1557/35' },
];

const SliderTheClubs = () => {
  const doubledLogos = [...teamLogos, ...teamLogos];

  return (
    <section className={styles.section}>
      <div className={styles.sliderTrack}>
        {doubledLogos.map((team, index) => (
          <div key={`${team.club}-${index}`} className={styles.slide}>
            <a className={styles.clubLink} href={team.src}>
              <img
                className={styles.clubLogo}
                src={team.logo}
                alt={team.club}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderTheClubs;
