import spoon from "../assets/spoon.png";
import findus from "../assets/findus.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const FindUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div className=" overflow-x-hidden aboutus py-[30px]" id="contact">
      <div className="container flex flex-col sm:flex-row justify-between sm:items-center gap-[80px] sm:gap-0">
        <div data-aos="fade-right" className="sm:w-[45%]">
          <p className="sm:text-[15px] md:text-[19px] lg:text-[20px] xltext-[23px]  leading-[30px] font-bold text-white">
            Contact
          </p>
          <img src={spoon} alt="" />
          <h1 className="text-[35px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[64px] leading-[83px] font-semibold text-[#DCCA87] sm:mb-[20px]">
            Find Us
          </h1>
          <p className="leading-[28px] text-[#aaaaaa] mb-[10px]">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <h3 className="text-[17px] sm:text-[18px] lg:text-[23px] leading-[30px] text-[#DCCA87] font-bold mb-[10px]">
            Opening Hours
          </h3>
          <p className="text-white leading-[28px] text-[14px] sm:text-[16px]">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="text-white leading-[28px] text-[14px] sm:text-[16px]">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
          <button className="bg-[#DCCA87] text-[14.5px] py-[5px] px-[15px] mt-[20px] font-bold">
            View More
          </button>
        </div>
        <div data-aos="fade-left" className="w-[85%] mx-auto sm:w-[45%]">
          <img src={findus} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FindUs;
