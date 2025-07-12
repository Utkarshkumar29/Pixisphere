"use client"
import { useEffect, useState } from "react"

const SearchBar = ({ setFilters }) => {
  const [query, setQuery] = useState("")

  useEffect(() => {
    const delay = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        searchQuery: query.toLowerCase().trim(),
      }))
    }, 300)

    return () => clearTimeout(delay)
  }, [query])

  return (
    <div className="w-full">
      <input
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, location, or tag"
        className="border px-4 py-2 rounded-lg w-full"
      />
    </div>
  )
}

export default SearchBar
