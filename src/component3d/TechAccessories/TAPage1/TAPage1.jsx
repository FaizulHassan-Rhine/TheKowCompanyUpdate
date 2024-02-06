import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const TAPage1 = () => {
  const [visibleDivs, setVisibleDivs] = useState([
    {
      id: 1,
      text: "YOUR PROJECT TITLE",
      text2: "01 JAN, 2023",
      imageUrl: "/img/Tech Accessories.jpg",
      imageUrl2: "/img/3d/slider/view.png",
    },
    // {
    //   id: 2,
    //   text: "YOUR PROJECT TITLE",
    //   text2: "01 JAN, 2023",
    //   imageUrl: "/public/img/3d/slider/THE MINIMALIST WARM SUNSET LUXRIOUS.jpg",
    //   imageUrl2: "/img/3d/slider/view.png",
    // },
    // {
    //   id: 3,
    //   text: "YOUR PROJECT TITLE",
    //   text2: "01 JAN, 2023",
    //   imageUrl: "/public/img/3d/slider/PERSIAN BLUE COOL SUNRISE COMPACT ECOMMERCE .jpg",
    //   imageUrl2: "/img/3d/slider/view.png",
    // },
 
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

  const isPrevDisabled = currentIndex === 0;

  // Function to determine if next button should be disabled
  const isNextDisabled = currentIndex === visibleDivs.length - 1;

  const getVisibleDivs = () => {
    // const endIndex = currentIndex + 1 >= visibleDivs.length ? 0 : currentIndex + 1;
    // const middleIndex = currentIndex;
    const startIndex =
      currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;

    return window.screen.width <= 641
      ? [visibleDivs[startIndex]]
      : window.screen.width <= 1025
      ? [visibleDivs[startIndex]]
      : [visibleDivs[startIndex]];
  };
  return (
    <div>
      <div className="2xl:container mx-auto my-1">
        {getVisibleDivs() &&
          getVisibleDivs().map((div) => (
            <div className="relative " key={div.id}>
              <div>
                <img
                  className=" w-full  h-full 2xl:h-[800px] "
                  src={div.imageUrl}
                  alt={div.text}
                />
              </div>
              <div className="flex justify-between ">
                {!isPrevDisabled && (
                  <button onClick={handlePrev}>
                    <MdArrowBackIosNew className="text-4xl text-white bg-[#574F45] rounded-full p-1 absolute left-[10%] top-[50%]" />
                  </button>
                )}
                {!isNextDisabled && (
                  <button onClick={handleNext}>
                    <MdArrowForwardIos className="text-4xl text-white bg-[#574F45] rounded-full p-1 absolute right-[10%] top-[50%]" />
                  </button>
                )}
              </div>
              {/* <div className="flex justify-center items-center gap-3 absolute bottom-0 md:bottom-8 left-[15%]">
               
                <div className="w-8 md:w-16">
                  <img src={div.imageUrl2} />
                </div>
                <div>
                  <p className="font-semibold text-base md:text-2xl text-white">
                    {div.text}{" "}
                    <span className="text-green-500 font-light">|</span>
                  </p>
                </div>

                <div>
                  <p className="text-[9px] md:text-base text-white">{div.text2}</p>
                </div>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TAPage1;
