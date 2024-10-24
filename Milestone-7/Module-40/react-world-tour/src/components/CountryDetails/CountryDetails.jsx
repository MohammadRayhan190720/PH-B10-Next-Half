import CountryData from "../CountryData/CountryData";

const CountryDetails = ({
  country,
  handleVisitedCountry,
  handleVisitedFlags,
}) => {
  return (
    <div>
      <p>Country Details</p>
      <CountryData 
      country={country}
      handleVisitedCountry={handleVisitedCountry}
      handleVisitedFlags = {handleVisitedFlags}
      ></CountryData>
    </div>
  );
};

export default CountryDetails;