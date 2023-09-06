import spoon from "../assets/spoon.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Subscribe = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div
      className="overflow-y-hidden overflow-x-hidden aboutus py-[80px]"
      id="blog"
    >
      <div
        data-aos="fade-up"
        className="container text-center bordercontainer py-[60px]"
      >
        <p className="text-[23px] leading-[30px] font-bold text-white mb-[8px]">
          Newsletter
        </p>
        <img src={spoon} alt="" className="m-auto" />
        <h1 className="text-[40px] sm:text-[38px] md:text-[40px] lg:text-[50px] xl:text-[64px] leading-[40px] md:leading-[83px] font-semibold text-[#DCCA87] sm:mb-[5px]">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-[#aaaaaa] mt-[10px] mb-[30px]">
          And never miss latest Updates!
        </p>
        <form className="flex gap-6 flex-col sm:flex-row justify-center items-center">
          <input
            type="text"
            className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[40%] h-[40px] sm:h-[40px] md:h-[50px] text-[#777] bg-transparent pl-[15px] bordersub"
            placeholder="Email Address"
          />
          <input
            type="button"
            value="Subscribe"
            className="text-[#0C0C0C] bg-[#DCCA87] font-bold py-[4px] px-[8px]"
          />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
