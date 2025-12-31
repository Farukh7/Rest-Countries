import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <></>;
};

export default Home;
