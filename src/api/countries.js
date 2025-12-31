export const fetchCountries = async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,cca3,region,capital,population,subregion"
    );

    const data = await res.json();

    const allRegions = [...new Set(data.map((country) => country.region))];

    const allSubRegions = [
      ...new Set(data.map((country) => country.subregion)),
    ];

    return { data, regions: allRegions };
  } catch (err) {
    console.error("Error fetching countries:", err);
    throw err;
  }
};

export const fetchCountryDetails = async (countryNameOrCode) => {
  try {
    let res = await fetch(
      `https://restcountries.com/v3.1/name/${countryNameOrCode}?fullText=true`
    );
    let data = await res.json();

    if (data.status === 404 || !Array.isArray(data)) {
      res = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryNameOrCode}`
      );
      data = await res.json();
    }

    return data[0];
  } catch (err) {
    throw err;
  }
};
