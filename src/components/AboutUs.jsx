import { useEffect } from "react";
import G from "../assets/G.png";
import knife from "../assets/knife.png";
import spoon from "../assets/spoon.png";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div
      className=" overflow-x-hidden aboutus py-[60px] sm:py-[0px] md:py-[80px] h-[210vh] sm:h-[100vh] relative flex flex-col sm:flex-row justify-between items-center"
      id="pages"
    >
      <div data-aos="fade-right" className="text-right z-10 sm:w-[40%]">
        <h1 className="text-[#DCCA87] text-[35px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-semibold">
          About Us
        </h1>
        <img src={spoon} alt="" className="rotate-[180deg] mx-auto mr-0 mb-5" />
        <p className="font-normal text-[#aaaaaa]  text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="bg-[#DCCA87] text-[14.5px] py-[5px] px-[15px] mt-[20px] font-bold">
          Know More
        </button>
      </div>
      <img
        src={G}
        alt=""
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-[300px] h-[300px] sm:w-[220px]  md:w-[280px] lg:w-[390px] sm:h-[235px]  md:h-[310px] lg:h-[400px] "
      />
      <img
        src={knife}
        alt=""
        className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100px] sm:w-[45px] md:w-[60px] lg:w-[80px]"
      />
      <div data-aos="fade-left" className="z-10 sm:w-[40%]">
        <h1 className="text-[#DCCA87]  text-[35px]  sm:text-[40px] md:text-[50px] lg:text-[64px] font-semibold">
          Our History
        </h1>
        <img src={spoon} alt="" className=" mb-5" />
        <p className="font-normal text-[#aaaaaa]  text-[15px]">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed .
        </p>
        <button className="bg-[#DCCA87] text-[14.5px] py-[5px] px-[15px] mt-[20px] font-bold">
          Know More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
