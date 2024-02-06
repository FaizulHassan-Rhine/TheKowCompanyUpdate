import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png"
import logoWhite from "../../images/logo2.png"
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import MegaNavbar from "../MegaNavbar/MegaNavbar";

const NavbarHome = () => {
  const [getMenuBool, setMenuBool] = useState(false);
  const [screenLeft, setScreenLeft] = useState(false);

  useEffect(() => {
    // Function to check if an element is out of the viewport
    function isElementOutOfViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.bottom < 0 ||
        rect.right < 0 ||
        rect.left > window.innerWidth ||
        rect.top > window.innerHeight
      );
    }

    // Function to handle the scroll event
    function handleScroll() {
      var myElement = document.getElementById('videoElement');

      if (isElementOutOfViewport(myElement)) {
        console.log('Element has left the screen.');
        setScreenLeft(true);
      } else {
        console.log('Element is still visible on the screen.');
        setScreenLeft(false);
      }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Optionally, you might want to also check the initial state
    window.addEventListener('load', handleScroll);

  }, [])

  return (
    <>
      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
      <div className={`menuActive  ${ screenLeft && 'bg-[#DEE2E2]'  }  fixed w-full top-0 z-[999]  shadow-xl md:shadow-none`}>
      {
      screenLeft &&  <MegaNavbar />
      } 
        <div className="container mx-auto bg-[#DEE2E2] md:bg-transparent py-1">
          <div className="hidden md:flex items-center justify-between gap-3">
            <Link to={"/"}>
              <img src={screenLeft ? logo: logoWhite}
                width={80}
                height={40}
                alt="logo" />
            </Link>
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
            <HashLink to="/2d" className={` text-xs lg:text-sm font-semibold ${ screenLeft ? 'text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] ' : 'text-white hover:text-[#7C9C30]'} `}>IMAGES</HashLink>
            <HashLink to="/3d" className={` text-xs lg:text-sm font-semibold ${ screenLeft ? 'text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] ' : 'text-white hover:text-[#7C9C30]'} `}>3D</HashLink>
            <HashLink to="/#ai" className={` text-xs lg:text-sm font-semibold ${ screenLeft ? 'text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] ' : 'text-white hover:text-[#7C9C30]'} `}>AI</HashLink>
            <HashLink to="/#integration" className={` text-xs lg:text-sm font-semibold ${ screenLeft ? 'text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] ' : 'text-white hover:text-[#7C9C30]'} `}>INTEGRATIONS</HashLink>
            {/* <HashLink to="/#squad" className={` text-xs lg:text-sm font-semibold ${ screenLeft ? 'text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] ' : 'text-white hover:text-[#7C9C30]'} `}>THE SQUAD</HashLink> */}
            <HashLink to="/#trends" className={` text-xs lg:text-sm font-semibold ${ screenLeft ? 'text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] ' : 'text-white hover:text-[#7C9C30]'} `}>INDUSTRY TRENDS</HashLink>
            {/* <HashLink to="/#virtual" className={` text-xs lg:text-sm font-semibold ${ screenLeft ? 'text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] ' : 'text-white hover:text-[#7C9C30]'} `}>VIRTUAL TOUR</HashLink> */}
            <a href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className={`text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold ${screenLeft ? 'text-gray-800 ':' text-white'}`} rel="noreferrer">SIGN UP</a>
            <Link to="/" className={`text-[26px] lg:text-[32px]  font-semibold ${ screenLeft ? 'text-gray-800 border-b-2 border-[#DEE2E2] hover:border-[#7C9C30] hover:border-b-2 ' : 'text-white'}`}><GoHomeFill color={`${screenLeft ? 'black' : 'white'}`}/>
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
          getMenuBool && <div className="block md:hidden bg-[#DEE2E2] pt-2 ">
            <div className="container mx-auto ">
              <div className="flex flex-col text-center gap-4">
                <HashLink onClick={() => setMenuBool(false)} to="/2d" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">IMAGES</HashLink>
                <HashLink onClick={() => setMenuBool(false)} to="/3d" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">3D</HashLink>
                <HashLink onClick={() => setMenuBool(false)} to="/#ai" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">AI</HashLink>
                <HashLink onClick={() => setMenuBool(false)} to="/#integration" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">INTEGRATIONS</HashLink>
                {/* <HashLink onClick={() => setMenuBool(false)} to="/#squad" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">THE SQUAD</HashLink> */}
                <HashLink onClick={() => setMenuBool(false)} to="/#trends" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">INDUSTRY TRENDS</HashLink>
                {/* <HashLink onClick={() => setMenuBool(false)} to="/#virtual" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">VIRTUAL TOUR</HashLink> */}
                <a onClick={() => setMenuBool(false)} href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]" rel="noreferrer">SUBSCRIBE</a>
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

export default NavbarHome;