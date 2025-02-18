import { FiArrowRightCircle } from "react-icons/fi";  
import HeroImage from "../assets/Background.png";

const HeroSection = () => {
  return (
    <section className="py-32 bg-white text-red-600">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-y-12 gap-x-12 overflow-hidden px-6 md:px-8">

        <div className="space-y-6 sm:max-w-lg md:px-0 lg:max-w-xl text-center md:text-left">
          <h1 className="text-sm text-red-600 font-medium uppercase tracking-wider">
            Over 200 Recipes to Explore!
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-extrabold leading-tight">
            Discover the Best of Global Flavors
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 mb-6 opacity-90">
            Explore trending recipes, quick bites, and delicious flavors from
            around the world. Find your next favorite dish today!
          </p>

          <div className="flex sm:w-max gap-x-3 justify-center md:justify-start">
            <a
              href="#get-started"
              className="flex items-center justify-center gap-x-3 py-3 px-6 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
              <FiArrowRightCircle className="text-white w-6 h-6" />
            </a>
          </div>
        </div>

       
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img
            src={HeroImage}
            className="rounded-full drop-shadow-2xl transition-transform duration-300 ease-in-out w-full max-w-[500px] mx-auto md:mx-0"
            alt="Delicious Recipe"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
