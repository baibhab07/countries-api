import React, { useState, useEffect } from "react";
import "./App.css";
import { Countries } from "./components/Countries";
import { Pagination } from "./components/Pagination";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(25);

  const fetchCountries = async () => {
    setLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Countries</h1>
      <Countries countries={currentCountries} loading={loading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
