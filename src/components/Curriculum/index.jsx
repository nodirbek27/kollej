import React from "react";
import TextTranslate from "../TextTranslate";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Curriculum() {
  return (
    <div className="bg-slate-100">
      <div className="max-w-xs md:max-w-7xl mx-auto md:py-16 py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-[#004269]">
          <TextTranslate id="oquvDasturlari" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-10 lg:mx-0 mt-12">
          <div className="flex w-full h-[140px] bg-white p-3 rounded-2xl duration-200 hover:scale-105 shadow-md hover:shadow-lg">
            <div className="w-[200px]">
              <img
                className="rounded-md w-full h-full object-fill"
                src="https://bilimlar.uz/wp-content/uploads/2021/03/books.jpg"
                alt=""
              />
            </div>
            <div className="pl-3 w-full">
              <h2 className="text-md md:text-xl font-medium text-slate-600">
                <TextTranslate id="fanlarKatalog" />
              </h2>
              <p className="text-sm flex items-center">
                <span>
                  <FaRegCalendarAlt className="mr-1" />
                </span>
                12.01.2025
              </p>
              <div className="text-end">
                <Link
                  to="/fanKatalogi"
                  className="inline-block text-sm bg-[#004269] text-white mt-5 md:mt-4 px-2 py-1 rounded-md"
                >
                  <TextTranslate id="oquvDasturlariBatafsil" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-[140px] bg-white p-3 rounded-2xl duration-200 hover:scale-105 shadow-md hover:shadow-lg">
            <div className="w-[200px]">
              <img
                className="rounded-md w-full h-full object-fill"
                src="https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/b6e93da1d1303c27c6f7b5d47d2d03d3.jpg"
                alt=""
              />
            </div>
            <div className="pl-3 w-full">
              <h2 className="text-md md:text-xl font-medium text-slate-600">
                <TextTranslate id="bakalavrMalakaTalablari" />
              </h2>
              <p className="text-sm flex items-center">
                <span>
                  <FaRegCalendarAlt className="mr-1" />
                </span>
                12.02.2025
              </p>
              <div className="text-end">
                <Link
                  to="/abiturient-xorijiy-talabalar"
                  className="inline-block text-sm bg-[#004269] text-white mt-5 md:mt-4 lg:mt-4 px-2 py-1 rounded-md"
                >
                  <TextTranslate id="oquvDasturlariBatafsil" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-[140px] bg-white bg p-3 rounded-2xl duration-200 hover:scale-105 shadow-md hover:shadow-lg">
            <div className="w-[200px]">
              <img
                className="rounded-md w-full h-full object-fill"
                src="https://www.uzreport.news/fotobank/image/46ca5cd9e619e47ed9f44b2df801ad6f.jpeg"
                alt=""
              />
            </div>
            <div className="pl-3 w-full">
              <h2 className="text-md md:text-xl font-medium text-slate-600">
                <TextTranslate id="magistrMalakaTalablari" />
              </h2>
              <p className="text-sm flex items-center">
                <span>
                  <FaRegCalendarAlt className="mr-1" />
                </span>
                12.01.2025
              </p>
              <div className="text-end">
                <Link
                  to="/oquvRejalari"
                  className="inline-block text-sm bg-[#004269] text-white mt-5 md:mt-4 lg:mt-4 px-2 py-1 rounded-md"
                >
                  <TextTranslate id="oquvDasturlariBatafsil" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
