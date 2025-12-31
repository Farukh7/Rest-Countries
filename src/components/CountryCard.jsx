import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div
      className="bg-[hsl(0_0%_100%)]
                    rounded-lg overflow-hidden 
                    shadow-lg cursor-pointer w-88"
    >
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h2
          className="font-bold mb-2 
                       text-[hsl(200,15%,8%)] dark:text-[hsl(0,0%,100%)]"
        >
          {country.name.common}
        </h2>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong>{" "}
          {country.capital && country.capital.length > 0
            ? country.capital[0]
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
