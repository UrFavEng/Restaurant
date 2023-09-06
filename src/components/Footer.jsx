import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import spoon from "../assets/spoon.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div className="py-[20px] aboutus overflow-y-hidden  overflow-x-hidden">
      <div className="container">
        <div className="flex justify-between items-center py-[45px] gap-[40px] sm:gap-[10px] md:gap-[20px] lg:gap-0 flex-col sm:flex-row">
          <div data-aos="fade-right" className="text-center  sm:w-[33%]">
            <h3 className="text-[#F5EFDB] md:text-[20px] lg:text-[32px] leading-[41px]  mb-[10px]">
              Contact Us
            </h3>
            <p className="text-[#aaaaaa]">
              9 W 53rd St, New York, NY 10019, USA
            </p>
            <p className="leading-[28px] text-[#aaaaaa]">
              +1 212-344-1230
              <br />
              +1 212-555-1230
            </p>
          </div>
          <div data-aos="fade-up" className="text-center sm:w-[33%]">
            <h1 className="text-[64px] leading-[83px] font-bold text-[#DCCA87] text-center mb-[20px]">
              Gerícht
            </h1>
            <p className="leading-[28px] text-white text-center mb-[10px]">
              "The best way to find yourself is to lose yourself in the
              <br /> service of others.”
            </p>
            <img src={spoon} alt="" className="mx-auto mb-[20px]" />
            <div className="w-[100%] flex gap-4 items-center justify-center ">
              <FaFacebookF color="white" fontSize="26px" />
              <FaTwitter color="white" fontSize="26px" />
              <FaInstagram color="white" fontSize="26px" />
            </div>
          </div>
          <div data-aos="fade-left" className="text-center sm:w-[33%]">
            <h3 className="text-[#F5EFDB] md:text-[20px] lg:text-[32px] leading-[41px] mb-[10px]">
              Working Hours
            </h3>
            <p className="text-[#aaaaaa] leading-[20px] mb-[10px]">
              Monday-Friday:
              <br />
              08:00 am -12:00 am
            </p>
            <p className="text-[#aaaaaa] leading-[20px]">
              Saturday-Sunday:
              <br />
              07:00am -11:00 pm
            </p>
          </div>
        </div>
        <p className="text-[#aaaaaa] text-center py-[30px]">
          2021 Gerícht. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
