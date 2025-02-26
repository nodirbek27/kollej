import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIElon from "../../services/elon";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";

const XalqaroElonlar = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await APIElon.get();
        const filteredData = res.data.filter((item) => item.xalqaro === true);
        const sortedData = filteredData.sort((a, b) => {
          return new Date(b.sana) - new Date(a.sana);
        });
        setData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  

  const formatDate = (dateString, Lang) => {
    const yearLang = { year_uz: "yil", year_ru: "год", year_en: "year" };

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

    const weekDays = {
      uz: [
        "Dushanba",
        "Sheshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba",
        "Yakshanba",
      ],
      ru: [
        "Понедельник",
        "вторник",
        "среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "воскресенье",
      ],
      en: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    };

    const date = new Date(dateString);
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const day = date.getDate();
    const weekDay = weekDays[Lang][date.getDay()];
    const month = months[Lang][date.getMonth()];
    const year = date.getFullYear();

    return `${weekDay}, ${year}-${
      yearLang[`year_${Lang}`]
    } ${day}-${month}, ${time}`;
  };
  return (
    <section className="bg-[#f4f4f4] px-5 py-3 md:px-10 lg:px-20 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full mb-5 ">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="faoliyat" /> },
            { text: <TextTranslate id="xalqaroElonlar" /> },
          ]}
        />
      </div>
      <div className="text-center my-1 md:my-3">
        <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
          <TextTranslate id="xalqaroElonlar" />
        </h2>
      </div>
      <div className="grid gap-5 my-10 max-w-5xl mx-auto px-5">
        {data &&
          data.map((item) => {
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
    </section>
  );
};

export default XalqaroElonlar;
