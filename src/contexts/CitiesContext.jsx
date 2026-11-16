import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";
function CitiesProvider({ children }) {
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

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}


function useCities() {
  const context = useContext(CitiesContext);
  if (context=== undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
}

export { useCities ,CitiesProvider};


