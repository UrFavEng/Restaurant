import welcome from "../assets/welcome.png";
import spoon from "../assets/spoon.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div
      id="home"
      data-aos="fade-right"
      className="flex flex-col sm:flex-row items-center py-[25px] sm:py-[0px] sm:pt-[30px] md:py-[40px] lg:py-[80px] justify-between  md:gap-4 overflow-x-hidden"
    >
      <div className="">
        <p className="font-bold text-[21px] sm:text-[16px]  md:text-[18px] lg:text-[21px] xl:text-[23px] leading-[30px] text-white">
          Chase the new Flavour
        </p>
        <img src={spoon} alt="" className="pt-[5px]" />
        <h1 className="text-[33px] sm:text-[30px] md:text-[65px] lg:text-[80px] xl:text-[90px] sm:leading-[35px] md:leading-[70px] lg:leading-[95px] xl:leading-[117px] text-[#DCCA87] font-bold sm:my-[10px] md:my-[0px]">
          The key to
          <br className="hidden md:block" /> Fine dining
        </h1>
        <p className="sm:leading-[20px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]  sm:text-[14.5px] lg:text-[16px] text-[#aaaaaa] sm:w-[80%] md:w-[100%]">
          Sit tellus lobortis sed senectus vivamus molestie.
          <br className="hidden sm:block" /> Condimentum volutpat morbi
          facilisis quam scelerisque
          <br className="hidden md:block" /> sapien. Et, penatibus aliquam amet
          tellus
        </p>
        <button className="bg-[#DCCA87] text-[14.5px] py-[5px] px-[15px] mt-[20px] font-bold">
          Explore Menu
        </button>
      </div>
      <div
        data-aos="fade-left"
        className="w-[88%] mt-[40px] sm:mt-[0px]  sm:w-[320px] md:w-[380px] lg:w-[480px] xl:w-[550px] mx-[0px] "
      >
        <img src={welcome} alt="" />
      </div>
    </div>
  );
};

export default Header;
