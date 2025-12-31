import Search from "../components/Search";
import Countries from "../components/Countries";
import { useState, useEffect } from "react";
import { fetchCountries } from "../api/countries";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [debouncedInput, setDebouncedInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [input, setInput] = useState("");
  const [regions, setRegions] = useState([]);
  const [filteredSubRegions, setFilteredSubRegions] = useState([]);
  const [subRegion, setSubRegion] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data, regions } = await fetchCountries();

        setCountries(data);
        setFilteredCountries(data);
        setRegions(regions);
      } catch (err) {
        console.log(err);
      }
    };

    getCountries();
  }, []);

  //for debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 400);
    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  useEffect(() => {
    if (region) {
      const subs = [
        ...new Set(
          countries
            .filter((c) => c.region?.toLowerCase() === region.toLowerCase())
            .map((c) => c.subregion)
        ),
      ];
      setFilteredSubRegions(subs);
      setSubRegion("");
    } else {
      setFilteredSubRegions([]);
      setSubRegion("");
    }
  }, [region, countries]);

  useEffect(() => {
    let filtered = countries;

    if (debouncedInput.trim() !== "") {
      filtered = countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(input.toLowerCase())
      );
    }

    if (region !== "") {
      filtered = filtered.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );
    }

    if (subRegion !== "") {
      filtered = filtered.filter(
        (country) => country.subregion.toLowerCase() === subRegion.toLowerCase()
      );
    }

    setFilteredCountries(filtered);
  }, [debouncedInput, region, subRegion]);

  if (filteredCountries.length === 0 && input === "") {
    return (
      <div className="p-10 text-center text-gray-500 dark:text-gray-300">
        Loading country details...
      </div>
    );
  }

  return (
    <div className="max-w-[95%] mx-auto px-6">
      <Search
        input={input}
        setInput={setInput}
        regions={regions}
        region={region}
        setRegion={setRegion}
        subRegions={filteredSubRegions}
        subRegion={subRegion}
        setSubRegion={setSubRegion}
      />

      {filteredCountries.length <= 0 && input !== "" ? (
        <div className="text-center py-10 text-lg font-semibold text-gray-700 dark:text-gray-300">
          No country found "<span className="text-blue-500">{input}</span>"
        </div>
      ) : (
        <Countries countries={filteredCountries} />
      )}
    </div>
  );
};

export default HomePage;
