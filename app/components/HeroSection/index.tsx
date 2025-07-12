import Image from "next/image";
import hero from "../../public/hero.png"

const HeroSection = () => {
  return (
    <div className="w-full px-4 pt-[80px] pb-[40px] flex flex-col-reverse lg:flex-row justify-between items-center text-black gap-10">
  <div className="w-full lg:w-1/2">
    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4">
      Discover Talented<br />
      Photographers for<br />
      Every Occasion
    </p>
    <p className="text-base sm:text-lg md:text-xl font-poppins font-medium">
      Welcome to PhotoConnect, your go-to platform for finding and connecting with photographers tailored to your needs.
      Explore our extensive list of professionals specializing in various categories.
    </p>
  </div>


  <div className="w-full lg:w-1/2 flex justify-center">
    <Image
      src={hero}
      alt="Hero section image"
      width={500}
      height={500}
      className="w-full max-w-[500px] h-auto object-contain"
    />
  </div>
</div>

  );
};

export default HeroSection;
