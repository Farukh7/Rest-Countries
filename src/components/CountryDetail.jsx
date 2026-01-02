import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { fetchCountryDetails } from "../api/countries";

const CountryDetail = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      try {
        setLoading(true);
        const data = await fetchCountryDetails(countryName);
        setCountry(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, [countryName]);

  const handleBorderClick = async (borderCode) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${borderCode}`
      );
      const data = await res.json();

      const borderCountryName = data[0].name.common;
      navigate(`/country/${borderCountryName}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading || !country) {
    return (
      <div className="p-10 text-center text-gray-500 dark:text-gray-300">
        Loading country details...
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="px-10 w-full max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="px-8 py-2 mt-10 mb-16
                     shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                     rounded flex items-center gap-2
                     bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)]
                     text-[hsl(200_15%_8%)] dark:text-white"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Content */}
        <div
          className="flex flex-col md:flex-row gap-24 items-start
                     text-[hsl(200_15%_8%)] dark:text-white"
        >
          {/* Flag */}
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full md:w-140 h-auto object-cover"
          />

          {/* Details */}
          <div className="space-y-10">
            <h2 className="text-3xl font-extrabold">{country.name.common}</h2>

            <div className="flex flex-col md:flex-row gap-20">
              {/* Left column */}
              <div className="space-y-2 text-gray-800 dark:text-gray-300">
                <p>
                  <strong className="dark:text-white">Native Name:</strong>{" "}
                  {Object.values(country?.name?.nativeName || {})[0]?.common ||
                    "NA"}
                </p>
                <p>
                  <strong className="dark:text-white">Population:</strong>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong className="dark:text-white">Region:</strong>{" "}
                  {country.region}
                </p>
                <p>
                  <strong className="dark:text-white">Sub Region:</strong>{" "}
                  {country.subregion}
                </p>
                <p>
                  <strong className="dark:text-white">Capital:</strong>{" "}
                  {country.capital?.[0]}
                </p>
              </div>

              {/* Right column */}
              <div className="space-y-2 text-gray-800 dark:text-gray-300">
                <p>
                  <strong className="dark:text-white">Top Level Domain:</strong>{" "}
                  {country.tld?.[0] || "N/A"}
                </p>
                <p>
                  <strong className="dark:text-white">Currencies:</strong>{" "}
                  {country?.currencies
                    ? Object.values(country.currencies)
                        .map((c) => c.name)
                        .join(", ")
                    : "NA"}
                </p>
                <p>
                  <strong className="dark:text-white">Languages:</strong>{" "}
                  {country?.languages
                    ? Object.values(country.languages).join(", ")
                    : "NA"}
                </p>
              </div>
            </div>

            {/* Border Countries */}
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
              <strong className="dark:text-white">Border Countries:</strong>

              <div className="flex flex-wrap gap-2">
                {country.borders?.length > 0 ? (
                  country.borders.map((border) => (
                    <button
                      key={border}
                      onClick={() => handleBorderClick(border)}
                      className="px-6 py-1 rounded shadow
                                 cursor-pointer transition
                                 hover:scale-105
                                 bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)]
                                 text-[hsl(200_15%_8%)] dark:text-white"
                    >
                      {border}
                    </button>
                  ))
                ) : (
                  <span className="text-gray-700 dark:text-gray-300">None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
