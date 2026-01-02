import CountryCard from "./CountryCard";

const Countries = ({ countries }) => (
  <div className="py-10">
    <div className="grid gap-15 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  </div>
);

export default Countries;
