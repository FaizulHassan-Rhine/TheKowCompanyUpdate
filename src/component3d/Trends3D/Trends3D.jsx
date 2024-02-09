import { useState } from "react";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
const Trends3D = () => {
  const [visibleDivs, setVisibleDivs] = useState([
    {
      id: 1,
      text: "Photography Tips for Beginners",
      text2: "01 JAN, 2023",
      button: "Read More",
      imageUrl: "/img/3d/3d-blog-1.png",
    },
    {
      id: 2,
      text: "Top 8 Food Photography Tips For Beginners",
      button: "Read More",
      text2: "01 JAN, 2023",
      imageUrl: "/img/3d/3d-blog-2.png",
    },
    {
      id: 3,
      text: "Easy Product Photography Solutions for Small Business",
      button: "Read More",
      text2: "01 JAN, 2023",
      imageUrl: "/img/3d/3d-blog-3.png",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === visibleDivs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? visibleDivs.length - 1 : prevIndex - 1
    );
  };

  const getVisibleDivs = () => {
    const endIndex =
      currentIndex + 1 >= visibleDivs.length ? 0 : currentIndex + 1;
    const middleIndex = currentIndex;
    const startIndex =
      currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;

    return window.screen.width <= 641
      ? [visibleDivs[startIndex]]
      : window.screen.width <= 1025
      ? [visibleDivs[startIndex], visibleDivs[middleIndex]]
      : [
          visibleDivs[startIndex],
          visibleDivs[middleIndex],
          visibleDivs[endIndex],
        ];
  };

  return (
    <div id="3d-trends" className="pt-4">
     <Heading className="pt-5 pb-12 "  titleClassName="w-[500px]" title="3D TRENDS" />
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-5 ">
          <button onClick={handlePrev}>
            <MdArrowBackIosNew className="text-3xl -mt-16" />
          </button>
          <div className="flex justify-center gap-2 w-[280px] sm:w-full">
            {getVisibleDivs() &&
              getVisibleDivs().map((div) => (
                <Link key={div.id} to="/3d/industry-trends-details">
                  {" "}
                  {/* Wrap the div with Link component */}
                  <div className="flex-col items-center justify-center">
                    <div>
                      <img
                        className=" w-full"
                        src={div.imageUrl}
                        alt={div.text}
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2 pt-5 pb-10">
                      <div className="flex justify-center items-center gap-2 ">
                        <p className="text-[12px] font-semibold">
                          {div.text} |
                        </p>
                        <p className="text-[9px]">{div.text2}</p>
                      </div>
                      <button className="bg-[#B1CC40] px-6 py-1 rounded-3xl font-semibold text-[10px]">
                        {div.button}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <button onClick={handleNext}>
            <MdArrowForwardIos className="text-3xl -mt-16" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trends3D;
