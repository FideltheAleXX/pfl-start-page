import styles from './SliderTheClubs.module.css';

const teamLogos = [
  {
    club: 'Агробізнес',
    logo: './logos/agrobiznes.png',
    src: 'https://pfl.ua/team/view/1524/35',
  },
  {
    club: 'Буковина',
    logo: './logos/bukovyna.png',
    src: 'https://pfl.ua/team/view/826/35',
  },
  {
    club: 'Вікторія',
    logo: './logos/viktoriya.png',
    src: 'https://pfl.ua/team/view/1524/35',
  },
  {
    club: 'Ворскла',
    logo: './logos/vorskla.png',
    src: 'https://pfl.ua/team/view/848/35',
  },
  {
    club: 'Інгулець',
    logo: './logos/ingulets.png',
    src: 'https://pfl.ua/team/view/1007/35',
  },
  {
    club: 'Лівий Берег',
    logo: './logos/livyy-bereg.png',
    src: 'https://pfl.ua/team/view/1537/35',
  },
  {
    club: 'Металіст',
    logo: './logos/metalist.png',
    src: 'https://pfl.ua/team/view/1493/35',
  },
  {
    club: 'Металург',
    logo: './logos/metalurg.png',
    src: 'https://pfl.ua/team/view/1472/35',
  },
  {
    club: 'Нива',
    logo: './logos/nyva.png',
    src: 'https://pfl.ua/team/view/1170/35',
  },
  {
    club: 'Поділля',
    logo: './logos/podillya.png',
    src: 'https://pfl.ua/team/view/1522/35',
  },
  {
    club: 'Прикарпаття-Благо',
    logo: './logos/prykarpattya.png',
    src: 'https://pfl.ua/team/view/1238/35',
  },
  {
    club: 'Пробій',
    logo: './logos/probiy.png',
    src: 'https://pfl.ua/team/view/1241/35',
  },
  {
    club: 'Фенікс-Маріуполь',
    logo: './logos/mariupol.png',
    src: 'https://pfl.ua/team/view/1531/35',
  },
  {
    club: 'Чернігів',
    logo: './logos/chernigiv.png',
    src: 'https://pfl.ua/team/view/1532/35',
  },
  {
    club: 'Чорноморець',
    logo: './logos/chornomorets.png',
    src: 'https://pfl.ua/team/view/1421/35',
  },
  {
    club: 'ЮКСА',
    logo: './logos/ucsa.png',
    src: 'https://pfl.ua/team/view/1557/35',
  },
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
