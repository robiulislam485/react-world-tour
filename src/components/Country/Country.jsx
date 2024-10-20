import { useState } from 'react';
import './Country.css'

const Country = ({ country,  handleVisitedCountry }) => {
    // console.log(country)
    const { name, flags, population, area} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited ? 'purple': "white" }}>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <br />
            <button onClick={()=>{handleVisitedCountry(country)}}>Mark As Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'going'}</button>
            {
                visited ? 'Visited this country' : 'Will visit soon'
            }
        </div>
    );
};

export default Country;