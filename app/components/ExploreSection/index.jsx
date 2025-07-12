import explore from "../../public/explore.png"
import dots from "../../public/dots.png"
import Image from "next/image";

const ExploreSection = () => {
  return (
    <div className="relative w-full px-4 py-12 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <Image
        src={dots}
        alt="Decorative Dots"
        width={200}
        height={200}
        className="absolute top-10 left-6 sm:left-16 opacity-30 object-contain"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Explore Our Diverse Categories
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-medium">
            Discover talented photographers across maternity, weddings, fashion,
            and more. Find the perfect match for your occasion with ease.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white text-base font-medium rounded-lg hover:bg-gray-800 transition">
            Browse Categories
          </button>
        </div>
        <div className="relative flex-1 w-full max-w-[500px]">
          <Image
            src={explore}
            alt="Explore"
            width={500}
            height={300}
            className="rounded-[2rem] w-full h-auto object-cover shadow-xl"
          />
          <p className="absolute bottom-4 right-4 bg-black bg-opacity-90 text-white text-lg sm:text-xl md:text-2xl font-semibold px-4 py-2 rounded-lg backdrop-blur-sm shadow-md">
            User-Friendly
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
