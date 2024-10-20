import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import "./countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries=(country)=>{
    console.log('add this to visited country');

  }


  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      <div>
        <h5>Visited Countries</h5>
        <ul>

        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>
        ))}
      </div>
    </div>
  );
}
