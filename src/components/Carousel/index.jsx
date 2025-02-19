import React, { useState, useRef, useEffect, useCallback } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import "./style.css";
import APICarousel from "../../services/carousel";

const Carousel = () => {
  const [itemActive, setItemActive] = useState(0);
  const [data, setData] = useState([]);
  const intervalRef = useRef(null);
  const countItem = data?.length;

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

  const getData = async () => {
    try {
      const res = await APICarousel.get();
      setData(res.data);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="slider"
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={showSlider}
      >
        <div className="list">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? "active" : ""}`}
            >
              <img src={item?.rasm} alt={`carousel  ${index + 1}`} />
              <div className="content backdrop-brightness-50 p-4 text-[#ddd] rounded-xl">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl">
                  {item?.title_uz}
                </h2>
                <p className="text-lg xl:text-xl">{item?.body_uz}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows w-full p-5 absolute top-[45%] z-10 flex items-center justify-between">
          <button
            className="flex items-center justify-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <IoIosArrowDropleft className="w-[25px] lg:w-[30px] h-auto" />
          </button>
          <button
            className="flex items-center justify-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <IoIosArrowDropright className="w-[25px] lg:w-[30px] h-auto" />
          </button>
        </div>

        <div className="thumbnail">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`item w-[60px] h-[45px] sm:w-[80px] sm:h-[60px] xl:w-[120px] xl:h-[90px] brightness-50 shrink-0 ${
                index === itemActive ? "brightness-110" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                className="w-[100%] h-[100%] object-cover rounded-md"
                src={item?.rasm}
                alt={`thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
