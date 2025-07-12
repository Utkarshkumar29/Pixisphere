"use client";

const SearchBar = ({ setFilters }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.value.trim().toLowerCase();

    setFilters((prev) => ({
      ...prev,
      searchQuery: keyword,
    }));
  };

  return (
    <form onChange={handleSubmit} className="w-full ">
      <input
        name="search"
        placeholder="Search by name, location, or tag"
        className="border px-4 py-2 rounded-lg w-full"
      />
    </form>
  );
};

export default SearchBar;
