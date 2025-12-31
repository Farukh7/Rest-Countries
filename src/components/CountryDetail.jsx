import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { fetchCountryDetails } from "../api/countries";

const CountryDetail = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountryDetails(countryName);
        setCountry(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCountry();
  }, [countryName]);

  if (!country) {
    return (
      <div className="p-10 text-center text-gray-500 dark:text-gray-300">
        Loading country details...
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="px-10 w-max-7xl flex flex-col justify-start items-start">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-2 mt-10 mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer rounded flex  items-center justify-center gap-2 
                        bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)] text-[hsl(200_15%_8%)] dark:text-[hsl(0_0%_100%)]"
          >
            <FaArrowLeft /> Back
          </button>

          <div className=" flex flex-col md:flex-row gap-30 items-center justify-start w-full">
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="h-100 w-130"
            />
            <div className="space-y-20">
              <h2 className="text-3xl font-bold mb-6">{country.name.common}</h2>
              <div className="flex flex-col md:flex-row gap-20 md:gap-30">
                <div className="space-y-2">
                  <p>
                    <strong>Native Name:</strong>{" "}
                    {Object.values(country?.name?.nativeName || {})[0]
                      ?.common || "NA"}
                  </p>
                  <p>
                    <strong>Population:</strong>{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {country.subregion || "NA"}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital?.[0] || "NA"}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <strong>Top Level Domain:</strong>{" "}
                    {country.tld?.[0] || "N/A"}
                  </p>
                  <p>
                    <strong>currencies:</strong>{" "}
                    {country?.currencies
                      ? Object.values(country.currencies)
                          .map((c) => c.name)
                          .join(", ")
                      : "NA"}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {country?.languages
                      ? Object.values(country.languages).join(", ")
                      : "NA"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:items-center">
                <p className="flex">
                  <strong>Border Countries:</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  {country.borders?.length > 0 ? (
                    country.borders.map((borderCode) => (
                      <button
                        key={borderCode}
                        onClick={() => navigate(`/country/${borderCode}`)}
                        className="px-8 py-1 cursor-pointer rounded shadow bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)] 
                                                         text-[hsl(200_15%_8%)] dark:text-[hsl(0_0%_100%)]"
                      >
                        {borderCode}
                      </button>
                    ))
                  ) : (
                    <span>None</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
