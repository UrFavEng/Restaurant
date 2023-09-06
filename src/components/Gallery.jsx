import { Splide, SplideSlide } from "@splidejs/react-splide";
import spoon from "../assets/spoon.png";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import gallery01 from "../assets/gallery01.png";
import gallery02 from "../assets/gallery02.png";
import gallery03 from "../assets/gallery03.png";
import gallery04 from "../assets/gallery04.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div
      id="gallery"
      className=" overflow-x-hidden lg:pl-[30px] flex flex-col lg:flex-row justify-center md:items-start lg:items-center py-[80px] gap-12 lg:gap-0"
    >
      <div data-aos="fade-right" className="pl-[30px] lg:pl-[0px] lg:flex-1">
        <p className="sm:text-[15px] md:text-[19px] lg:text-[20px] xltext-[23px] font-bold text-white mb-2">
          Instagram
        </p>
        <img src={spoon} alt="" />
        <h1 className="text-[35px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[64px] font-semibold text-[#DCCA87] sm:mb-[10px] md:mb-[5px] lg:mb-[30px]">
          Photo Gallery
        </h1>
        <p className="text-[#aaaaaa] w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="bg-[#DCCA87] text-[14.5px] py-[5px] px-[15px] mt-[20px] font-bold">
          View More
        </button>
      </div>
      <div data-aos="fade-left" className="lg:flex-[1.5]">
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            rewind: true,
            rewindByDrag: true,
            gap: "10px",
            autoWidth: true,
            padding: "20%",

            mediaQuery: "max",
            breakpoints: {
              340: {
                perPage: 1,
                autoWidth: true,
                padding: "13%",
              },
              640: {
                perPage: 2,
                autoWidth: true,
                padding: "20%",
              },
            },
          }}
        >
          <SplideSlide>
            <img
              src={gallery01}
              alt="Image 1"
              className="w-[240px] md:w-[280px] h-[400px]"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={gallery02}
              alt="Image 2"
              className="w-[240px] md:w-[280px] h-[400px]"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={gallery03}
              alt="Image 3"
              className="w-[240px] md:w-[280px] h-[400px]"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={gallery04}
              alt="Image 4"
              className="w-[240px] md:w-[280px] h-[400px]"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Gallery;
