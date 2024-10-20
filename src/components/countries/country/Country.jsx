import { useState } from 'react';
import './country.css'
export default function Country({ country, handleVisitedCountries }) {
  console.log(country);
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false)

  const handleVisited =()=>{
    setVisited(!visited);
  }

  console.log(handleVisitedCountries);

  return (
    <div>
      <div style={{color: visited ? 'purple' : 'white'}} className={`country ${visited && 'visited'}`}>
        <h3>Name : {name?.common}</h3>
        <img className="wd" src={flags.png} alt="" />
        <p>Population : {population}</p>
        <p>Area : {area}</p>
        <p><small>Code : {cca3}</small></p>
        <button>mark visit</button>
        <br />
        <button onClick={handleVisited} >{visited?'Visited':'Going'}</button>
        <br />
        {visited ? 'I Have Visited this country':'i Want to visit this country'}
      </div>
    </div>
  );
}
