import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Search = ({
  input,
  setInput,
  regions,
  region,
  setRegion,
  subRegions,
  subRegion,
  setSubRegion,
}) => {
  return (
    <div className="my-10">
      <div className="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row gap-8 md:gap-0">
        <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] ">
          <div className="flex items-center px-6 h-15 bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)] text-[hsl(200_15%_8%)] dark:text-[hsl(0_0%_100%)]">
            <CiSearch className="text-2xl mx-3 font-bold" />
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full focus:outline-none text-base"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>

        <div className="w-auto shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-lg relative">
          <select
            className="px-6 py-4 rounded-lg cursor-pointer focus:outline-none appearance-none text-base pr-10 
                        bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)] text-[hsl(200_15%_8%)] dark:text-[hsl(0_0%_100%)]"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={{ minWidth: "12rem" }}
          >
            <option value="" className="">
              Filter by Region
            </option>
            {regions.map((region) => (
              <option key={region} value={region.toLowerCase()}>
                {region}
              </option>
            ))}
          </select>
          <RiArrowDropDownLine className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />
        </div>

        <div className="w-auto shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-lg relative">
          <select
            className="px-6 py-4 rounded-lg cursor-pointer focus:outline-none appearance-none text-base pr-10 
                        bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)] text-[hsl(200_15%_8%)] dark:text-[hsl(0_0%_100%)]"
            value={subRegion}
            onChange={(e) => setSubRegion(e.target.value)}
            style={{ minWidth: "12rem" }}
          >
            {!region ? (
              <>
                <option value="">Filter by Sub-Region</option>
                <option value="">Select region first</option>
              </>
            ) : subRegions.length === 0 ? (
              <>
                <option value="">Filter by Sub-Region</option>
                <option value="">No sub-regions</option>
              </>
            ) : (
              <>
                <option value="">Filter by Sub-Region</option>
                {subRegions.map((sub) => (
                  <option key={sub} value={sub.toLowerCase()}>
                    {sub}
                  </option>
                ))}
              </>
            )}
          </select>
          <RiArrowDropDownLine className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Search;
