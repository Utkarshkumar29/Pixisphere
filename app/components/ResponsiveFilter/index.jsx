"use client";
import { useState } from "react";
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterPanel from "../FilterPanel";


const ResponsiveFilter=({ filters, setFilters }) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width:768px)")

  return (
    <>
      {isMobile && (
        <div className="mb-4 absolute right-7  ">
          <IconButton onClick={() => setOpen(true)}>
            <FilterListIcon />
          </IconButton>
        </div>
      )}

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="w-[330px] p-4">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
      </Drawer>

      {/* Sidebar for desktop */}
      {!isMobile && (
        <div className="hidden md:block">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
      )}
    </>
  );
}


export default ResponsiveFilter