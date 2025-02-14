import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIElon from "../../services/elon";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Announcements() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await APIElon.get();
        const sortedData = res.data.sort((a, b) => {
          return new Date(b.sana) - new Date(a.sana);
        });
        setData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const formatDate = (dateString, Lang) => {
    const months = {
      uz: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr",
      ],
      ru: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      en: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };

    const date = new Date(dateString);
    const month = months[Lang][date.getMonth()];

    return `${month}`;
  };

  return (
    <div className="px-5 pb-12 md:px-10 lg:px-20 lg:pb-16 xl:px-0 max-w-7xl mx-auto">
      <div className="md:flex md:items-center justify-between">
        {/* News heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#004269]">
            <TextTranslate id="elonTitle" />
          </h2>
        </div>
      </div>
      <div className="grid grid-col-1 xl:grid-cols-2 mb-5 gap-6">
        {data &&
          data.slice(0, 4).map((item) => {
            return (
              <div
                key={item.id}
                className="flex p-4 md:p-5 shadow-md bg-white hover:-translate-y-2 duration-150 hover:shadow-2xl"
              >
                <div className="md:w-1/5 h-52 hidden md:block">
                  <img
                    src={item.rasm.replace(/^http:\/\//i, "https://")}
                    className="w-full h-52 object-cover object-center"
                    alt=""
                  />
                </div>
                <div className="md:pl-5 md:w-4/5">
                  <h3 className="text-base uppercase font-semibold text-red-800">
                    {item && item[`field_${Lang}`]}
                  </h3>
                  <Link
                    to={`/elonBatafsil/${item.id}`}
                    className="text-lg md:text-2xl font-bold text-slate-600 line-clamp-2 md:my-2 hover:text-red-700 hover:underline"
                  >
                    {item && item[`title_${Lang}`]}
                  </Link>
                  <p className="flex  text-base md:text-lg md:items-center mt-2">
                    <FaRegCalendarAlt />
                    <span className="pl-2">
                      {formatDate(item.boshlanish_vaqti, Lang)}
                    </span>
                  </p>
                  <p className="flex text-base md:text-lg md:items-center mt-2">
                    <IoLocationSharp />
                    <span className="pl-2 text-blue-500">
                      {item && item[`adress_${Lang}`]}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="my-2">
        <Link
          to="/barchaElonlar"
          className="text-lg md:text-2xl text-slate-400 font-semibold border-slate-100 px-5 flex items-center justify-end relative right-3 hover:right-0 transition-all duration-300"
        >
          <TextTranslate id="barchaElonlarBtn" />
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Announcements;
