import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      fullWidth
      placeholder="Search for a country..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: <SearchIcon sx={{ mr: 2 }} />,
      }}
      sx={{
        maxWidth: 400,
        backgroundColor: "white",
      }}
    />
  );
};

export default SearchBar;
