/* eslint-disable react/prop-types */
import  { useState } from 'react';
import "./test.css"
const SlideWidth = 30;

const items = [
    {
        player: {
          title: 'Efren Reyes',
          desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all-around player of all time.',
          image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg'
        }
      },
    {
        player: {
          title: 'Efren Reyes',
          desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all-around player of all time.',
          image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg'
        }
      },
    {
        player: {
          title: 'Efren Reyes',
          desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all-around player of all time.',
          image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg'
        }
      },
];


// eslint-disable-next-line react/prop-types
const CarouselSlideItem = ({ item, isHidden }) => {
  const itemStyles = {
    transform: `translateX(${isHidden ? -SlideWidth : 0}rem)`,
    opacity: isHidden ? 0 : 1,
    filter: isHidden ? 'grayscale(1)' : 'none'
  };

  return (
    <li className="carousel__slide-item" style={itemStyles}>
      <div className="carousel__slide-item-img-link">
       
        <img src={item.player.image} alt={item.player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

const Carousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevClick = () => {
    setActiveIdx((activeIdx - 1 + items.length) % items.length);
  };

  const nextClick = () => {
    setActiveIdx((activeIdx + 1) % items.length);
  };

  return (
    <div className="carousel__wrap w-[500px]">
      <div className="carousel__inner">
        <button className="carousel__btn carousel__btn--prev" onClick={prevClick}>
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((item, idx) => (
              <CarouselSlideItem
                key={idx}
                item={item}
                isHidden={idx !== activeIdx && idx !== (activeIdx + 1) % items.length && idx !== (activeIdx - 1 + items.length) % items.length}
              />
            ))}
          </ul>
        </div>
        <button className="carousel__btn carousel__btn--next" onClick={nextClick}>
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={idx === activeIdx ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
