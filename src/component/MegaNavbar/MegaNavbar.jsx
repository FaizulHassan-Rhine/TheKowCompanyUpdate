
import logo from "../../images/logo2.png"
// import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { HashLink } from "react-router-hash-link";

const MegaNavbar = () => {
//   const [getMenuBool, setMenuBool] = useState(false); 
  return (
    <>
      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
      <div className="bg-[black]   w-full top-0 z-[999]  shadow-xl md:shadow-none">
        <div className="container mx-auto py-1">
          <div className="flex items-center py-1 gap-16 ml-2">
            {/* <Link to={"/"}>
              <img src={logo}
                width={60}
                height={30}
                alt="logo" />
            </Link> */}
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
            <Link to="/2d" className="text-white text-xs    font-semibold">IMAGES</Link>
            <Link to="/3d" className="text-white text-xs   font-semibold ">3D</Link>
            <a href="http://retouched.ai/" target="_blank" className="text-white text-xs cursor-pointer   font-semibold " rel="noreferrer">AI</a>
           
          </div>
          {/* <div className="flex items-center justify-between md:hidden">
            <Link to={"/"}>
              <img src={logo}
                width={80}
                height={40}
                alt="logo" />
            </Link>
            <CgMenuGridO onClick={() => setMenuBool(!getMenuBool)} className="text-[32px] text-white cursor-pointer" />
          </div> */}
        </div>
        {/* -----------------------------------For Mobile--------------------------------------- */}
        {/* {
          getMenuBool &&         <div className="block md:hidden bg-[#DEE2E2] pt-2 ">
          <div className="container mx-auto">
            <div className="flex flex-col text-center gap-4">
              <HashLink onClick={() => setMenuBool(false)} to="/2d" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">IMAGES</HashLink>
              <HashLink onClick={() => setMenuBool(false)} to="/3d" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">3D</HashLink>
              <HashLink onClick={() => setMenuBool(false)} to="/#ai" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">AI</HashLink>
              
            </div>
          </div>
        </div>
        } */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default MegaNavbar;