const SmartSuggestionStrip = ({ filters }) => {
  const {
    city,
    maxPrice,
    rating,
    styles,
    sort,
    searchQuery,
  } = filters;

  const parts = [];

  // Rating part
  if (rating) {
    parts.push(`Top-rated${rating >= 4 ? ` (${rating}+)` : ""}`);
  } else {
    parts.push("Top-rated");
  }

  // Styles part
  if (styles && styles.length > 0) {
    parts.push(styles.join(", "));
  }

  // Search Query part
  if (searchQuery && searchQuery.trim() !== "") {
    parts.push(`matching "${searchQuery.trim()}"`);
  }

  // City part
  if (city) {
    parts.push(`photographers in ${city}`);
  } else {
    parts.push("photographers");
  }

  // Max price part
  if (maxPrice) {
    parts.push(`up to ₹${maxPrice.toLocaleString()}`);
  }

  // Sort part (optional - depends on what you want to show)
  if (sort && sort !== "recent") {
    // Just an example if you want to show sorting
    parts.push(`sorted by ${sort}`);
  }

  const suggestion = parts.join(" ");

  return (
    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded mb-6 font-semibold text-center">
      {suggestion}
    </div>
  );
};

export default SmartSuggestionStrip;
