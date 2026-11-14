import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <p>Loading cities...</p>;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  ) ;
}

export default CityList;
