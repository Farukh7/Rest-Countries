import Search from '../components/Search'
import Countries from '../components/Countries'
import { useState, useEffect } from 'react'

const HomePage = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,flags,cca3,region,capital,population"
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch countries");
                }

                const data = await res.json();
                console.log(data);
                setCountries(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCountries();
    }, []);
    return (
        <>
            <Search />
            <Countries countries={countries} />
        </>
    )
}

export default HomePage