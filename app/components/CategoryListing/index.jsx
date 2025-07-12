"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderGrid from "../LoaderGrid";
import PhotographerCard from "../PhotographerCard";

export default function CategoryListing({ filters }) {
  const [photographers, setPhotographers] = useState([]);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (pageNumber = 1) => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `http://localhost:3001/photographers?_page=${pageNumber}&_limit=9`,
        {
          headers: { Accept: "application/json" },
        }
      );

      // Optional delay for loader visibility
      setTimeout(() => {
        const newPhotographers = res.data;
        const totalCount = parseInt(res.headers["x-total-count"]);
        const pages = Math.ceil(totalCount / 9);

        setPhotographers((prev) =>
          pageNumber === 1 ? newPhotographers : [...prev, ...newPhotographers]
        );

        setFilteredPhotographers((prev) =>
          pageNumber === 1 ? newPhotographers : [...prev, ...newPhotographers]
        );

        setTotalPages(pages);
        setPage(pageNumber + 1);
      }, 500);
    } catch (err) {
      console.error("Error fetching photographers:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  useEffect(() => {
    let filtered = [...photographers];

    if (filters.city) {
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    filtered = filtered.filter((p) => p.price <= filters.maxPrice);

    if (filters.rating) {
      filtered = filtered.filter((p) => p.rating >= Number(filters.rating));
    }

    if (filters.styles.length > 0) {
      filtered = filtered.filter((p) =>
        filters.styles.every((s) => p.styles.includes(s))
      );
    }

    if (filters.sort === "priceLowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "ratingHighToLow") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      filtered.sort((a, b) => b.id - a.id);
    }

    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    setFilteredPhotographers(filtered);
  }, [filters, photographers]);

  return (
    <div className="w-full mt-2">
      <InfiniteScroll
        dataLength={photographers.length}
        hasMore={page <= totalPages}
        next={() => fetchData(page)}
        loader={<LoaderGrid />}
        endMessage={
          photographers.length === 0 && (
            <p className="text-center py-4 text-gray-400">No more results</p>
          )
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredPhotographers.map((p) => (
            <PhotographerCard key={p.id} photographer={p} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
