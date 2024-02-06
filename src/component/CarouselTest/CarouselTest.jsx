import  { useState } from 'react';
import './style.css';

import { MdArrowBackIosNew , MdArrowForwardIos  } from "react-icons/md";
const Carousel = () => {
  const [visibleDivs, setVisibleDivs] = useState([
    { id: 1, text: 'Text 1', imageUrl : "/src/images/blog5.png"},
    { id: 2, text: 'Text 2', imageUrl : "/src/images/blog4.png" },
    { id: 3, text: 'Text 3',  imageUrl : "/src/images/blog6.png"},
    // { id: 4, text: 'Text 4', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg' },
    // { id: 5, text: 'Text 5', imageUrl: 'https://media.npr.org/assets/img/2015/09/23/ap_836720500193-13f1674f764e5180cf9f3349cfef258d181f2b32-s1100-c50.jpg' },
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
    const endIndex = currentIndex + 1 >= visibleDivs.length ? 0 : currentIndex + 1;
    const middleIndex = currentIndex;
    const startIndex = currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;

    return [visibleDivs[startIndex], visibleDivs[middleIndex], visibleDivs[endIndex]];
  };

  return (
    <div className='flex justify-center items-center gap-5 mt-12'>
      <button onClick={handlePrev}><MdArrowBackIosNew className='text-3xl'/></button>
      <div className='flex justify-center gap-10'>
        {getVisibleDivs().map((div) => (
          <div className='flex-col items-center justify-center ' key={div.id}>
            <img className='w-80 h-60' src={div.imageUrl} alt={div.text} />
            <p>{div.text}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext}><MdArrowForwardIos  className='text-3xl'/></button>
    </div>
  );
};

export default Carousel;
