import { useState } from 'react';
import './country.css'

function Country({country}) {

  console.log(country);
  const{name,flags,population,area ,cca3 }= country;

  const [visited , setVisited] = useState(false);

  const handleVisited = () =>{
    setVisited( !visited);
    // setVisited( true);
  }

  return (
    <div className='country'>
      <h2>{name.common} </h2>
      <img src={flags.png} alt=""/>
      <p>Population : {population}</p>
      <p> Area : {area}</p>
      <p> Code : {cca3}</p>

      <button onClick={handleVisited}>{ visited ? 'visited' : 'going'}</button>
      {
        visited ? "I was visited this country" : "I want to visit this country"
      }
      {/* {
        visited && "I was visited this country"
      } */}
      
    </div>
  );
}

export default Country;