import spoon from "../assets/spoon.png";
import menu from "../assets/menu.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-y-hidden overflow-x-hidden pb-[50px] sm:pt-[0px] sm:pb-[40px] md:py-[50px]">
      <div className="text-center">
        <p className="font-bold text-[21px] sm:text-[16px]  md:text-[18px] lg:text-[21px] xl:text-[23px] leading-[30px] text-white">
          Menu that fits you palatte
        </p>
        <img src={spoon} alt="" className="mx-auto mt-[15px]" />
        <h1 className="text-[#DCCA87]  text-[35px]  sm:text-[40px] md:text-[50px] lg:text-[64px] font-semibold">
          Today’s Special
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:pt-[20px] md:pt-[90px] justify-between">
        <div data-aos="fade-right" className="sm:w-[33%] md:w-[30%] lg:w-[30%]">
          <h1 className="mt-[30px] sm:mt-0 text-[22px] sm:text-[22px] md:text-[30px] lg:text-[45px] text-white text-center  sm:mb-[15px] lg:mb-[30px]">
            Wine & Beer
          </h1>
          <div className="flex flex-col sm:gap-3  lg:gap-5 xl:gap-4">
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87] md:text-[15px] lg:text-[16px]">
                  Chapel Hill Shiraz
                </p>
                <div className="flex items-center md:gap-2 lg:gap-5">
                  <div className="h-[1px]  sm:hidden md:block md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-[20px] sm:text-[16px]  md:text-[20px] lg:text-[23px] text-white">
                    $56
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  AU | Bottle
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87] md:text-[15px] lg:text-[16px]">
                  Catena Malbec
                </p>
                <div className="flex items-center md:gap-2 lg:gap-5">
                  <div className="h-[1px]  sm:hidden md:block  md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-[20px] sm:text-[16px]  md:text-[20px] lg:text-[23px] text-white">
                    $59
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  AR | Bottle
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87]  md:text-[15px] lg:text-[16px]">
                  La Vieille Rosé
                </p>
                <div className="flex items-center  md:gap-2 lg:gap-5">
                  <div className="h-[1px]  sm:hidden md:block   md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-[20px] sm:text-[16px]  md:text-[20px] lg:text-[23px] text-white">
                    $44
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  FR | 750 ml
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87]   md:text-[15px] lg:text-[16px]">
                  Irish Guinness
                </p>
                <div className="flex items-center md:gap-2 lg:gap-5">
                  <div className="h-[1px]  sm:hidden md:block md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-[20px] sm:text-[16px]  md:text-[20px] lg:text-[23px] text-white">
                    $26
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  IE | 750 ml
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87]  md:text-[15px] lg:text-[16px]">
                  Rhino Pale Ale
                </p>
                <div className="flex items-center  md:gap-2 lg:gap-5">
                  <div className="h-[1px]  sm:hidden md:block md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-[20px] sm:text-[16px]  md:text-[20px] lg:text-[23px] text-white">
                    $31
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  CA | 750 ml
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-up"
          src={menu}
          className=" w-[75%] mx-auto my-[40px] sm:my-0 sm:w-[33%] md:w-[38%] lg:w-[40%] sm:h-[300px] md:h-[400px] lg:h-[600px]"
          alt=""
        />
        <div data-aos="fade-left" className="sm:w-[33%] md:w-[30%] lg:w-[30%]">
          <h1 className="text-[22px] sm:text-[22px] md:text-[30px] lg:text-[45px] text-white text-center  sm:mb-[15px] lg:mb-[30px]">
            Cocktails
          </h1>
          <div className="flex flex-col sm:gap-2 lg:gap-4">
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87]   md:text-[15px] lg:text-[16px]">
                  Aperol Spritz
                </p>
                <div className="flex items-center md:gap-2 lg:gap-5">
                  <div className="h-[1px]   sm:hidden md:block  md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-[20px] sm:text-[16px]  text-white md:text-[20px] lg:text-[23px]">
                    $20
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  Aperol | Villa Marchesi prosecco | soda | 30ml
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87]   md:text-[15px] lg:text-[16px]">
                  Dark 'N' Stormy
                </p>
                <div className="flex items-center md:gap-2 lg:gap-5">
                  <div className="h-[1px]   sm:hidden md:block  md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-[20px] sm:text-[16px]  text-white md:text-[20px] lg:text-[23px]">
                    $16
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  Dark rum | Ginger beer | Slice of lime.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87]   md:text-[15px] lg:text-[16px]">
                  Daiquiri
                </p>
                <div className="flex items-center md:gap-2 lg:gap-5">
                  <div className="h-[1px]    sm:hidden md:block  md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-[20px] sm:text-[16px]  text-white md:text-[20px] lg:text-[23px]">
                    $10
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  Rum | Citrus juice | Sugar
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87]   md:text-[15px] lg:text-[16px]">
                  Old Fashioned
                </p>
                <div className="flex items-center md:gap-2 lg:gap-5">
                  <div className="h-[1px]  sm:hidden md:block  md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-white  text-[20px] sm:text-[16px]  md:text-[20px] lg:text-[23px]">
                    $31
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa]  text-[14px]  sm:text-[11px]  md:text-[13px] lg:text-[16px]">
                  Bourbon | Brown sugar | Angostura Bitters
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#DCCA87]   md:text-[15px] lg:text-[16px]">
                  Negroni
                </p>
                <div className="flex items-center md:gap-2 lg:gap-5">
                  <div className="h-[1px] sm:hidden md:block md:w-[50px] lg:w-[100px] xl:w-[120px] bg-white"></div>
                  <div className="font-bold  text-white text-[20px] sm:text-[16px] md:text-[20px] lg:text-[23px]">
                    $26
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#aaaaaa] text-[14px] sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  Gin | Sweet Vermouth | Campari | Orange garnish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
