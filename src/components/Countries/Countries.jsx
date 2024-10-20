import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);
    const handleVisitedCountry = country => {
  const newVisitedCountries =  [...visitedCountries, country];
  setVisitedCountries(newVisitedCountries)
    }
    
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h2>visited: {visitedCountries.length}</h2>
            <ul>
                {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country} 
                       
                        ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;