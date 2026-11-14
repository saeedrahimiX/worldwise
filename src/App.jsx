import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotfound from "./pages/PageNotfound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";

const Base= window.location.pathname.startsWith("/worldwise") ? "/worldwise" : "/";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch("/cities.json");
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
    <>
      <BrowserRouter basename={routerBase}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path="countries" element={<p>Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
