import { useState } from "react";
import headphone from "../../assets/headphone.png";
import video from "../../video/production.mp4";
import BottomPart from "./BottomPart";
import { Link } from "react-router-dom";

const StartPage = () => {
  const [playBool, setPlayBool] = useState(false);

  const playVideo = () => {
    setPlayBool(true);
    const video = document.getElementById("productVideo");
    video.play();
  };
  return (
    <div className="bg-[#DEE2E2] pt-2 pb-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-0 md:gap-20 justify-between justify-items-center items-center  pt-[50px] md:pt-0">
          <div className=" h-80">
            <h5 className="text-[40px] text-center md:text-left">WE DO</h5>
            <h5 className="border-b border-[#B1CC40] text-[40px] text-center md:text-left font-semibold -mt-4">
              IMAGE & VIDEO EDITING
            </h5>
            <h1 className="pt-5 text-[#959595] font-semibold">
              YOUR ONE-STOP CONTENT POST PRODUCTION SOLUTION
            </h1>
            <div className="pt-5 flex justify-center md:justify-start">
              <div className="rounded-3xl bg-white w-[260px] flex justify-between px-1 ">
                <Link to="/contact-us">
                <button className="bg-[#B1CC40] my-1 px-8 py-1 font-semibold rounded-3xl text-[13px]">
                  Free Trial
                </button>
                </Link>
                <Link to="/contact-us">
                <button className=" my-2 px-10 rounded-3xl font-semibold text-[13px]">
                  Free Quote
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="relative h-full md:h-[515px] w-full flex justify-center">
              <div      
                className=""
              >
                <img
                  src={headphone}            
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

       
      </div>
      <BottomPart />
    </div>
  );
};

export default StartPage;
