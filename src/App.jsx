import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotfound from "./pages/PageNotfound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { Navigate } from "react-router-dom";
const routerBase = window.location.pathname.startsWith("/worldwise") ? "/worldwise" : "/";
const BASE_URL = "http://localhost:8000";

function App() {
  

  return (
    <>
      <BrowserRouter basename={routerBase}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
            <Route path="form" element={<Form/>} />
          </Route>
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
