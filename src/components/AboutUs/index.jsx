import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TextTranslate from "../TextTranslate";

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 my-24">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold font-source text-[#004269]">
          <TextTranslate id="bizningMaqsadimiz" />
        </h1>
      </div>
      <div className="px-2 md:px-10 xl:px-0">
        <p className="text-xl md:text-[2rem] font-light font_source md:leading-[3.5rem] my-10">
          <TextTranslate id="bizHaqimizda" />
        </p>
      </div>
      <div className="my-2">
        <Link
          to="/institut-haqida"
          className="text-lg md:text-2xl text-slate-400 font-semibold border-slate-100 px-5 flex items-center justify-end relative right-3 hover:right-0 transition-all duration-300"
        >
          <TextTranslate id="bizHaqimizdaKoproq" />
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
