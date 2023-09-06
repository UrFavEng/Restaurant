import logo from "../assets/logo.png";
import spoon from "../assets/spoon.png";
import award01 from "../assets/award01.png";
import award02 from "../assets/award02.png";
import award03 from "../assets/award03.png";
import award05 from "../assets/award05.png";
import laurels from "../assets/laurels.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const OurLaurels = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div className=" overflow-x-hidden relative aboutus pt-[100px] sm:pt-[100px] md:pt-[120px] lg:pt-[120px] xl:pt-[90px] pb-[60px]">
      <img
        src={logo}
        alt=""
        className="absolute top-0 left-10 w-[70px] sm:w-[80px] md:w-[100px] lg:w-[110px] xl:w-[150px]"
      />
      <div className="container flex flex-col sm:flex-row justify-between items-center">
        <div
          data-aos="fade-right"
          className="w-[100%] sm:w-[64%] md:w-[65%] lg:w-[58%] xl:w-[50%]"
        >
          <p className="sm:text-[15px] md:text-[19px] lg:text-[20px] xltext-[23px] font-bold text-white mb-2">
            Awards & recognition
          </p>
          <img src={spoon} alt="" />
          <h1 className="text-[35px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[64px] font-semibold text-[#DCCA87] sm:mb-[10px] md:mb-[5px] lg:mb-[30px]">
            Our Laurels
          </h1>
          <div className="grid sm:grid-cols-2 justify-start gap-8 py-[40px] sm:py-[0px] sm:gap-2 md:gap-y-6 md:gap-x-2 lg:gap-8">
            <div className="flex justify-center items-center  gap-6  sm:gap-1 md:gap-2 lg:gap-4">
              <img
                src={award01}
                alt=""
                className="w-[80px] sm:w-[60px] md:w-[80px]"
              />
              <div>
                <h2 className="text-[#DCCA87] md:text-[20px] lg:text-[23px] md:mb-[10px] font-bold">
                  Rising Star
                </h2>
                <p className="text-[#aaaaaa]  sm:text-[14px] md:leading-[18px] lg:leading-[23px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center  gap-6  sm:gap-1   md:gap-2 lg:gap-4">
              <img
                src={award02}
                alt=""
                className="w-[80px]  sm:w-[60px] md:w-[80px]"
              />
              <div>
                <h2 className="text-[#DCCA87] md:text-[20px] lg:text-[23px]  md:mb-[10px] font-bold">
                  Bib Gourmond
                </h2>
                <p className="text-[#aaaaaa]  sm:text-[14px] md:text-[16px]  md:leading-[18px] lg:leading-[23px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center  gap-6  sm:gap-1  md:gap-2 lg:gap-4">
              <img
                src={award03}
                alt=""
                className="w-[80px]  sm:w-[60px] md:w-[80px]"
              />
              <div>
                <h2 className="text-[#DCCA87]  md:text-[20px] lg:text-[23px]  md:mb-[10px] font-bold">
                  Outstanding Chef
                </h2>
                <p className="text-[#aaaaaa]  sm:text-[14px] md:text-[16px]  md:leading-[18px] lg:leading-[23px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6 sm:gap-1   md:gap-2 lg:gap-4">
              <img
                src={award05}
                alt=""
                className="w-[80px]  sm:w-[60px] md:w-[80px]"
              />
              <div>
                <h2 className="text-[#DCCA87]  md:text-[20px] lg:text-[23px]  md:mb-[10px] font-bold">
                  AA Hospitality{" "}
                </h2>
                <p className="text-[#aaaaaa] sm:text-[14px] md:text-[16px] md:leading-[18px] lg:leading-[23px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-[85%]  sm:w-[35%] md:w-[34%] lg:w-[40%] xl:w-[45%]"
        >
          <img src={laurels} alt="" className="xl:w-[555px] xl:h-[690px]" />
        </div>
      </div>
    </div>
  );
};

export default OurLaurels;
