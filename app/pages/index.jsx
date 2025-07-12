"use client";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ExploreSection from "../components/ExploreSection";
import ProvideSection from "../components/ProvideSection";
import CategorySection from "../components/CategorySection";
import FooterSection from "../components/FooterSection";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import ResponsiveFilter from "../components/ResponsiveFilter";
import CategoryListing from "../components/CategoryListing";
import SmartSuggestionStrip from "../components/SmartSuggestionStrip";

const cities = ["Bengaluru", "Delhi", "Mumbai", "Hyderabad"];
const stylesList = ["Traditional", "Candid", "Studio", "Outdoor"];

const LandingPage = () => {
  const [filters, setFilters] = useState({
    city: "",
    maxPrice: 20000,
    rating: "",
    styles: [],
    sort: "recent",
    searchQuery: "",
  });

  return (
    <div className=" text-black ">
      <Navbar />
      <div className=" px-[16px] md:px-[64px] ">
        <HeroSection />
        <CategorySection />

        <ExploreSection />

        <ProvideSection />

        <div className=" ">
          <p className=" text-[40px] text-black ">Photo Finder</p>
          <div className=" flex gap-[32px] ">
            <ResponsiveFilter filters={filters} setFilters={setFilters} />
            <div className=" flex gap-4 flex-col w-full ">
              <SearchBar filters={filters} setFilters={setFilters} />
              <SmartSuggestionStrip filters={filters} />
              <CategoryListing filters={filters} />
            </div>
          </div>
        </div>

        <FooterSection/>
      </div>
    </div>
  );
};

export default LandingPage;
