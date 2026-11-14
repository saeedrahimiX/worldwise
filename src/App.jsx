import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotfound from "./pages/PageNotfound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";



const BASE_URL = "http://localhost:8000/cities";

function App() {
  const [cities, setCities] = useState({ });
  const [isLoading, setIsLoading] = useState(false);


useEffect(function () {

  async function fetchCities() {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/cities.json`);
      log(res);
      const data = await res.json();
      log(data);
      setCities(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  fetchCities();
}, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="cities" element={<CityList />} />
            <Route index element={<CityList />} />
            <Route path="countries" element={<p>Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
            <Route index element={<p>App Home</p>} />
          </Route>
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
