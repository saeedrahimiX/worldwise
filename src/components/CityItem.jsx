
import styles from './CityItem.module.css'

function CityItem({ city }) {
  return <li className={styles.cityItem}>
    <span className={styles.emoji}>{city.emoji}</span>
    
  </li>;
}

export default CityItem;
