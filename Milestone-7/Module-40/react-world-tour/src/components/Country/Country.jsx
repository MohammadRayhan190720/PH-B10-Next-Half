import './country.css'

function Country({country}) {

  console.log(country);
  const{name,flags}= country;

  return (
    <div className='country'>
      <h2>Country Name :{name.common} </h2>
      <img src={flags.png} alt=""/>
      
    </div>
  );
}

export default Country;