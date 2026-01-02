import { IoIosMoon } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav className="w-full shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-[hsl(0_0%_98%)] dark:bg-[hsl(209_23%_22%)] text-[hsl(200_15%_8%)] dark:text-[hsl(0_0%_100%)] md:px-18 px-8 py-6 flex justify-between items-center">
        <h2 className="font-semibold text-l md:text-2xl">
          Where in the World?
        </h2>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 font-semibold focus:outline-none"
        >
          {theme === "dark" ? <IoIosMoon /> : <FaRegMoon />}
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
