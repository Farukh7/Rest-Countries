import { useNavigate } from "react-router-dom";
const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`country/${country.name.common}`);
  };
  return (
    <div
      onClick={handleClick}
      className="
                    bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)] text-[hsl(200_15%_8%)] dark:text-[hsl(0_0%_100%)]
                    rounded-lg overflow-hidden 
                    shadow-lg cursor-pointer  w-full max-w-100"
    >
      <div className="mb-8 ">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-50 object-cover shadow"
        />
        <div className="p-6 space-y-1">
          <h2 className="font-bold text-xl mb-4 ">{country.name.common}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CountryCard;
