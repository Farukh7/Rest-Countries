import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[hsl(0_0%_98%)] dark:bg-[hsl(207_26%_17%)]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
