import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="No cities added yet! Add your first city to get started." />
    );

  const countries = cities.reduce((acc, city) => {
    const exists = acc.some((item) => item.country === city.country);

    if (!exists) {
      acc.push({
        country: city.country,
        emoji: city.emoji,
      });
    }

    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
