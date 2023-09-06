import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import logo from "../assets/gericht.png";
import { FaBars } from "react-icons/fa";
import { HiXCircle } from "react-icons/hi";
import "aos/dist/aos.css";
const Navbar = () => {
  const [toggel, setToggel] = useState(true);

  useEffect(() => {}, []);

  return (
    <div className="flex justify-between py-4 items-center text-white">
      <div className="h-[50px] w-[150px] sm:w-[160px] md:w-[170px] lg:h-[57px] lg:w-[199px]">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className=" gap-3 font-normal hidden lg:flex text-[17px]">
        <li>
          <a className="hover:text-[#dcca87b6]" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-[#dcca87b6]" href="#pages">
            Pages
          </a>
        </li>
        <li>
          <a className="hover:text-[#dcca87b6]" href="#contact">
            Contact Us
          </a>
        </li>
        <li>
          <a className="hover:text-[#dcca87b6]" href="#gallery">
            Gallery
          </a>
        </li>
        <li>
          <a className="hover:text-[#dcca87b6]" href="#blog">
            Blog
          </a>
        </li>
      </ul>
      <div className=" hidden lg:flex gap-5 items-center justify-center">
        <button className="cursor-pointer hover:text-[#dcca87b6] text-[17px]">
          Log In / Registration
        </button>
        <div className="w-[1px] h-[15px] bg-white"></div>
        <button className="cursor-pointer hover:text-[#dcca87b6] text-[17px]">
          Book Table
        </button>
      </div>
      <div className=" block lg:hidden">
        <div
          className="text-[25px] cursor-pointer text-white "
          onClick={() => {
            setToggel(!toggel);
          }}
        >
          <FaBars />
        </div>
        {!toggel ? (
          <div
            className={`mobileNav z-10 absolute left-0 top-0 w-[100%] flex-col justify-center items-center h-[100vh] text-[28px] bg-[#000000e0] flex  `}
          >
            <div
              className="absolute top-[30px] right-[30px] text-white cursor-pointer"
              onClick={() => {
                setToggel(!toggel);
              }}
            >
              <HiXCircle />
            </div>
            <ul className="flex flex-col gap-2 items-center text-[20px] font-extrabold z-10">
              <li>
                <a
                  className="hover:text-[#dcca87]"
                  href="#home"
                  onClick={() => {
                    setToggel(!toggel);
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#dcca87]"
                  href="#pages"
                  onClick={() => {
                    setToggel(!toggel);
                  }}
                >
                  Pages
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#dcca87]"
                  href="#contact"
                  onClick={() => {
                    setToggel(!toggel);
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#dcca87]"
                  href="#gallery"
                  onClick={() => {
                    setToggel(!toggel);
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setToggel(!toggel);
                  }}
                  className="hover:text-[#dcca87]"
                  href="#blog"
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-0 z-10">
              <button
                className="hover:text-[#dcca87] text-[20px]"
                onClick={() => {
                  setToggel(!toggel);
                }}
              >
                Log In / Registration
              </button>
              <button
                className="hover:text-[#dcca87] text-[20px]"
                onClick={() => {
                  setToggel(!toggel);
                }}
              >
                Book Table
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
