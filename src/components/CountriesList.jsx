import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="No cities added yet! Add your first city to get started." />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <li key={country}>{country}</li>
      ))}
    </ul>
  );
}

export default CountryList;
