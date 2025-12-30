import { Button } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between align-center shadow-xl p-8">
        <h1 className="text-black p-1">
          <strong>Where in the world?</strong>
        </h1>
        <Button color="inherit">
          <BedtimeIcon />
          Dark Mode
        </Button>
      </div>
    </>
  );
};

export default Navbar;
