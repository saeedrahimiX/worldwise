import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import CountryItem from "./CountryItem";
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="No cities added yet! Add your first city to get started." />
    );
const countries = cities.reduce((acc, city) => {
    if (!acc.includes(city.country)) {
      acc.push(city.country);
    }
    return acc;
  }, []);
  return (
    <ul className={styles.CountryList}>
      {countries.map((country) => (
        <CountryItem key={country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
