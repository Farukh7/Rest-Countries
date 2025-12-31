import React from "react";
import CountryCard from "./CountryCard";
import Search from "./Search";

const Countries = ({ countries }) => (
  <div className="p-6">
    <div className="flex flex-wrap justify-center gap-22">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  </div>
);

export default Countries;
