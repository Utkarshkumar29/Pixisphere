const CategorySection = () => {
  return (
    <div className="w-full mt-20 mb-10 border-t border-b border-gray-400 py-6">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 px-4">
        {["Search", "Bengaluru", "Portfolio", "Pricing", "Contact"].map(
          (item) => (
            <p
              key={item}
              className="text-white bg-black text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-lg border border-white whitespace-nowrap"
            >
              {item}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default CategorySection;
