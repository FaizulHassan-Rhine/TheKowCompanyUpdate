import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png"
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import MegaNavbar from "../../component/MegaNavbar/MegaNavbar";

const Navbar2D = () => {
  const [getMenuBool, setMenuBool] = useState(false); 
  return (
    <>
      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
      <div className="bg-[#DEE2E2] sticky w-full top-0 z-[999]  shadow-xl md:shadow-none">
        <MegaNavbar/>
        <div className="container mx-auto py-1">
          <div className="hidden md:flex items-center justify-between gap-3">
            <Link to={"/"}>
              <img src={logo}
                width={80}
                height={40}
                alt="logo" />
            </Link>
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
            <HashLink to="/2d#services" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">SERVICES</HashLink>
            <HashLink to="/2d#apps" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">APPS</HashLink>
            <HashLink to="/2d#price" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">PRICE</HashLink>
            <HashLink to="/2d#order-guide" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">ORDER GUIDE</HashLink>
            <HashLink to="/2d#2d-trends" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">2D TRENDS</HashLink>
            <HashLink to="/2d#2d-contact" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">CONTACT US</HashLink>

            <a href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className="text-gray-800 text-xs lg:text-sm border-2 rounded-3xl px-8 py-1 border-[#7C9C30] font-semibold" rel="noreferrer">SIGN UP</a>
            <Link to="/" className="text-gray-800 text-[26px] lg:text-[32px] border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"><GoHomeFill />
            </Link>
          </div>
          <div className="flex items-center justify-between md:hidden">
            <Link to={"/"}>
              <img src={logo}
                width={80}
                height={40}
                alt="logo" />
            </Link>
            <CgMenuGridO onClick={() => setMenuBool(!getMenuBool)} className="text-[32px]  cursor-pointer" />
          </div>
        </div>
        {/* -----------------------------------For Mobile--------------------------------------- */}
        {
          getMenuBool &&         <div className="block md:hidden bg-[#DEE2E2] pt-2 ">
          <div className="container mx-auto">
            <div className="flex flex-col text-center gap-4">
              <HashLink onClick={() => setMenuBool(false)} to="/2d#services" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">SERVICES</HashLink>
              <HashLink onClick={() => setMenuBool(false)} to="/2d#apps" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">APPS</HashLink>
              <HashLink onClick={() => setMenuBool(false)} to="/2d#price" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">PRICE</HashLink>
              <HashLink onClick={() => setMenuBool(false)} to="/2d#order-guide" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">ORDER GUIDE</HashLink>
              <HashLink onClick={() => setMenuBool(false)} to="/2d#2d-trends" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">2D TRENDS</HashLink>
              <HashLink onClick={() => setMenuBool(false)} to="/2d#2d-contact" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">CONTACT US</HashLink>

              <a onClick={() => setMenuBool(false)} href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]" rel="noreferrer">SIGN UP</a>
              <Link onClick={() => setMenuBool(false)} to="/" className="transition-all duration-300 flex flex-col items-center text-gray-800 text-[32px] border-b-2 py-3 hover:bg-[#cfd6d6] border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"><GoHomeFill /></Link>
            </div>
          </div>
        </div>
        }
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Navbar2D;