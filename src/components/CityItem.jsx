
import styles from './CityItem.module.css'

function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <div>
        <h3 className={styles.name}>{city.cityName}</h3>
        <p className={styles.date}>{city.country}</p>
      </div>
    </li>
  );
}

export default CityItem;
