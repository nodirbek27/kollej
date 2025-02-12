import React, { useState, useRef, useEffect, useCallback } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import "./style.css";
import rasm1 from "../../assets/images/abiturient.jpg";
import rasm2 from "../../assets/images/oqish.jpg";
import rasm3 from "../../assets/images/qoshma.jpg";
import rasm4 from "../../assets/images/ttjhome.jpg";
import rasm5 from "../../assets/images/ttjtalaba.jpg";

const Carousel = () => {
  const [itemActive, setItemActive] = useState(0);
  const intervalRef = useRef(null);
  const items = [rasm1, rasm2, rasm3, rasm4, rasm5];
  const countItem = items.length;

  const nextSlide = useCallback(() => {
    setItemActive((prev) => (prev + 1) % countItem);
  }, [countItem]);

  const prevSlide = useCallback(() => {
    setItemActive((prev) => (prev - 1 + countItem) % countItem);
  }, [countItem]);

  const showSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 10000);
  }, [nextSlide]);

  useEffect(() => {
    showSlider();
    return () => clearInterval(intervalRef.current);
  }, [showSlider]);

  const handleThumbnailClick = (index) => {
    setItemActive(index);
    clearInterval(intervalRef.current);
    showSlider();
  };

  return (
    <div className="carousel-container">
      <div
        className="slider"
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={showSlider}
      >
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? "active" : ""}`}
            >
              <img src={item} alt={`carousel  ${index + 1}`} />
              <div className="content backdrop-brightness-50 p-4 text-[#ddd] rounded-xl">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl">Slider {index + 1}</h2>
                <p className="text-lg xl:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows w-full p-5 absolute top-[45%] z-10 flex items-center justify-between">
          <button className="flex items-center justify-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" onClick={prevSlide} aria-label="Previous Slide">
            <IoIosArrowDropleft className="w-[25px] lg:w-[30px] h-auto" />
          </button>
          <button className="flex items-center justify-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" onClick={nextSlide} aria-label="Next Slide">
            <IoIosArrowDropright className="w-[25px] lg:w-[30px] h-auto" />
          </button>
        </div>

        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item w-[60px] h-[45px] sm:w-[80px] sm:h-[60px] xl:w-[120px] xl:h-[90px] brightness-50 shrink-0 ${index === itemActive ? "brightness-110" : ""}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img className="w-[100%] h-[100%] object-cover rounded-md" src={item} alt={`thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;