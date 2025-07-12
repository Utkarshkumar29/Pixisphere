// components/FilterPanel.jsx
"use client";
import {
  Autocomplete,
  TextField,
  Slider,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const cities = ["Bengaluru", "Delhi", "Mumbai", "Hyderabad"];
const stylesList = ["Traditional", "Candid", "Studio", "Outdoor"];

const FilterPanel = ({ filters, setFilters }) => {
  const handleStyleChange = (style) => {
    setFilters((prev) => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter((s) => s !== style)
        : [...prev.styles, style],
    }));
  };

  return (
    <div className="w-[300px] bg-[#E5E7EB] rounded-2xl px-4 py-6 flex flex-col gap-4">
      <p className="text-xl font-semibold">Filters</p>

      {/* Location */}
      <div>
        <p className="text-sm font-medium mb-1">Location</p>
        <Autocomplete
          options={cities}
          value={filters.city}
          onChange={(e, newValue) =>
            setFilters((prev) => ({ ...prev, city: newValue || "" }))
          }
          renderInput={(params) => (
            <TextField {...params} placeholder="Select City" size="small" />
          )}
          fullWidth
        />
      </div>

      {/* Price */}
      <div>
        <p className="text-sm font-medium mb-1">
          Max Price: ₹{filters.maxPrice}
        </p>
        <Slider
          value={filters.maxPrice}
          onChange={(e, newValue) =>
            setFilters((prev) => ({ ...prev, maxPrice: newValue }))
          }
          min={500}
          max={25000}
          step={1000}
          valueLabelDisplay="auto"
        />
      </div>

      {/* Rating */}
      <FormControl component="fieldset">
        <FormLabel component="legend">Minimum Rating</FormLabel>
        <RadioGroup
          value={filters.rating}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, rating: e.target.value }))
          }
        >
          <FormControlLabel value="4" control={<Radio />} label="4+" />
          <FormControlLabel value="3" control={<Radio />} label="3+" />
        </RadioGroup>
      </FormControl>

      {/* Styles */}
      <div>
        <p className="text-sm font-medium mb-1">Styles</p>
        {stylesList.map((style) => (
          <FormControlLabel
            key={style}
            control={
              <Checkbox
                checked={filters.styles.includes(style)}
                onChange={() => handleStyleChange(style)}
              />
            }
            label={style}
          />
        ))}
      </div>

      {/* Sort */}
      <FormControl fullWidth>
        <FormLabel>Sort By</FormLabel>
        <Select
          value={filters.sort}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, sort: e.target.value }))
          }
          size="small"
        >
          <MenuItem value="recent">Recently Added</MenuItem>
          <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="ratingHighToLow">Rating: High to Low</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        color="secondary"
        onClick={() =>
          setFilters({
            city: "",
            maxPrice: 20000,
            rating: "",
            styles: [],
            sort: "recent",
          })
        }
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default FilterPanel;
