
const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  return (
    <div>
      <p>{country.name.common}</p>
    </div>
  )
};

export default CountryData;