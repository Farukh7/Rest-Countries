import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Search = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="w-auto m-10 md:my-15 md:mx-25">
      <div className="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row gap-8 md:gap-0">
        <div className="w-full md:w-1/3 shadow-xl rounded-lg overflow-hidden">
          <div className={`flex items-center px-6 h-15 bg-[hsl(0_0%_100%)]`}>
            <input
              type="text"
              placeholder="Search for a country..."
              className={`w-full focus:outline-none text-base`}
            />
          </div>
        </div>

        <div className="w-auto shadow-xl rounded-lg relative">
          <select
            className={`px-6 py-4 rounded-lg cursor-pointer focus:outline-none appearance-none text-base font-semibold pr-10`}
            style={{ minWidth: "12rem" }}
          >
            <option value="" className="">
              Filter by Region <FaChevronDown />
            </option>
            {regions.map((region) => (
              <option key={region} value={region.toLowerCase()}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
