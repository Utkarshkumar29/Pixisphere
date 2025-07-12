import { useState } from "react";
import HamIcon from "../../public/HamIcon"
import CloseIcon from "../../public/CloseIcon"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-md w-full px-6 md:px-16 py-6 bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <p className="text-[#030303] text-2xl font-Montserrat font-bold">
          Pixisphere
        </p>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {["Home", "Categories", "Photograph", "Review", "Contact Us"].map(
            (item) => (
              <button
                key={item}
                className="text-white bg-[#1A1A1A] px-4 py-2 rounded-lg font-medium hover:bg-black transition"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HamIcon/>:<CloseIcon/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          {["Home", "Categories", "Photograph", "Review", "Contact Us"].map(
            (item) => (
              <button
                key={item}
                className="text-white bg-[#1A1A1A] px-4 py-2 rounded-lg font-medium w-full text-left"
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
