import { FiArrowRightCircle } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Images
import Img1 from "../assets/food1.png";
import Img2 from "../assets/food2.png";
import Img3 from "../assets/food3.png";
import Img4 from "../assets/food4.png";
import Img5 from "../assets/food5.png";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-green-500">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-y-12 md:gap-x-16 px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="space-y-6 sm:max-w-lg md:max-w-xl text-center md:text-left">
          <h1 className="text-xs md:text-sm text-green-500 font-semibold uppercase tracking-wider">
            Over 200 Recipes to Explore!
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-600 font-extrabold leading-tight">
            Discover the Best of Global Flavors
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed opacity-90">
            Explore trending recipes, quick bites, and delicious flavors from
            around the world. Find your next favorite dish today!
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="#get-started"
              className="flex items-center gap-x-3 py-3 px-6 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-100"
            >
              Get Started
              <FiArrowRightCircle className="text-white w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Image - Swiper Slider */}
        <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full rounded-2xl custom-pagination"
          >
            <SwiperSlide>
              <img
                src={Img1}
                alt="Delicious Dish 1"
                className="w-full h-[400px] object-cover "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img2}
                alt="Delicious Dish 2"
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img3}
                alt="Delicious Dish 3"
                className="w-full h-[400px] object-cover "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img4}
                alt="Delicious Dish 4"
                className="w-full h-[400px] object-cover "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img5}
                alt="Delicious Dish 5"
                className="w-full h-[400px] object-cover "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
