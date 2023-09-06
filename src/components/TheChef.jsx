import spoon from "../assets/spoon.png";
import qoute from "../assets/quote.png";
import chef from "../assets/chef.png";
import sign from "../assets/sign.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const TheChef = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div className=" overflow-x-hidden flex flex-col sm:flex-row justify-between items-center pb-[20px] sm:pt-[40px] md:pt-[50px] lg:pt-[100px] xl:pt-[120px] sm:pb-[40px] md:pb-[50px] lg:pb-[70px] xl:pb-[80px] aboutus">
      <div
        data-aos="fade-right"
        className="w-[80%] sm:w-[45%] py-[30px] sm:py-[0] md:w-[50%] lg:w-[45%]"
      >
        <img src={chef} alt="" />
      </div>
      <div data-aos="fade-left" className="w-[100%] sm:w-[45%]">
        <p className="md:text-[19px] lg:text-[20px] xltext-[23px] font-bold text-white mb-2">
          Chef’s Word
        </p>
        <img src={spoon} alt="" />
        <h1 className="text-[35px] sm:text-[30px] md:text-[42px] lg:text-[50px] xl:text-[64px] font-semibold text-[#DCCA87]">
          What we believe in
        </h1>
        <div className="relative">
          <img
            src={qoute}
            alt=""
            className="w-[25px] sm:w-[30px] sm:h-[25px] md:w-[40px] md:h-[30px] absolute top-0 left-0"
          />
          <p className="text-[#aaaaaa] italic sm:leading-[22px] md:leading-[28px] fristword  mt-[20px]">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <h2 className="text-[#DCCA87] text-[27px] sm:text-[25px] md:text-[32px] mt-[10px] sm:mt-[5px] lg:mt-[40px]">
          Kevin Luo
        </h2>
        <p className="text-[#aaaaaa] sm:text-[14px] md:text-[16px]">
          Chef & Founder
        </p>
        <img
          src={sign}
          alt=""
          className="w-[150px] sm:w-[110px]   md:w-[140px] lg:w-[180px] xl:w-[200px] mt-[20px] sm:mt-[10px] md:mt-[15px] lg:mt-[40px]"
        />
      </div>
    </div>
  );
};

export default TheChef;
