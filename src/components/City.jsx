import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import styles from "./City.module.css";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function ButtonBack() {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(-1)}>
      &larr; Back
    </button>
  );
}

function City() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { getCity, currentCity ,isLoading} = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (isLoading) return <Spinner />;
  if (!currentCity) return <p>City not found.</p>;

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { cityName, emoji, date, notes } = currentCity;

  return (
    <>
      <p>
        City {id}
        position: {lat}, {lng}
      </p>
      <div className={styles.city}>
        <div className={styles.row}>
          <h6>City name</h6>
          <h3>
            <span>{emoji}</span> {cityName}
          </h3>
        </div>

        <div className={styles.row}>
          <h6>You went to {cityName} on</h6>
          <p>{formatDate(date || null)}</p>
        </div>

        {notes && (
          <div className={styles.row}>
            <h6>Your notes</h6>
            <p>{notes}</p>
          </div>
        )}

        <div className={styles.row}>
          <h6>Learn more</h6>
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noreferrer"
          >
            Check out {cityName} on Wikipedia &rarr;
          </a>
        </div>

        <div>
          <ButtonBack />
        </div>
      </div>
    </>
  );
}

export default City;
