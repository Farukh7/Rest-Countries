import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const RegionFilter = ({ value, onChange }) => {
  return (
    <FormControl sx={{ minWidth: 200, backgroundColor: "white" }}>
      <InputLabel>Filter by Region</InputLabel>
      <Select
        value={value}
        label="Filter by Region"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="Americas">Americas</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RegionFilter;
