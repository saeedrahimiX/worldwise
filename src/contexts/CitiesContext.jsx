import { createContext } from "react";

const CitiesContext = createContext();

function CitiesContext() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data.cities || data || []);
      } catch (error) {
        console.error("Failed to load cities:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return <div></div>;
}

export default CitiesContext;
