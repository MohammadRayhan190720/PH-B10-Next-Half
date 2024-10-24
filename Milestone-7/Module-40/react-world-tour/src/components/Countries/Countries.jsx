import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './counteies.css'

const Countries = () => {
  const [countries , setCountries] = useState([])
  const [visited,setVisited] = useState([])
  const [visitedFlags,setVisitedFlags] = useState([])


  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[]);

  const handleVisitedCountry = country =>{
    console.log('mark as visited',country)
    const newVisited = [...visited , country]
    setVisited(newVisited)

  }

  const handleVisitedFlags = flag =>{
    const newVisitedFlags = [...visitedFlags,flag]
    setVisitedFlags(newVisitedFlags)
  }

  // remove item form an array in s state
  // use filter to select all the elements except the one you want to remove



  return (
    <div>
      <h3>Countries : {countries.length} </h3>

      {/* visited country name */}
      <div>
        <h4>Visited Countries : {visited.length}</h4>
        <ul>
          {visited.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      {/* visited country flags */}

      <div className="flags-container">
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;