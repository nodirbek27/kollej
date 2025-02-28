import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

import TextTranslate from "../TextTranslate";
import APIYangilik from "../../services/yangilik";
import { useSelector } from "react-redux";

const NewsHome = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [title, setTitle] = useState("");
  const [news, setNews] = useState(null);
  useEffect(() => {
    Aos.init();
    const loadPost = async () => {
      try {
        await APIYangilik.get()
          .then((res) => {
            const sortedData = res.data.sort((a, b) => {
              return new Date(b.sana) - new Date(a.sana);
            });
            setNews(sortedData.slice(0, 6));
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (error) {
        console.error(error);
      }
    };
    loadPost();
  }, []);

  useEffect(() => {
    switch (Lang) {
      case "uz":
        setTitle("title_uz");

        break;
      case "ru":
        setTitle("title_ru");
        break;
      case "en":
        setTitle("title_en");
        break;

      default:
        setTitle("title_uz");
        break;
    }
  }, [Lang]);
  return (
    <div className="px-5 py-12 md:px-10 lg:px-20 lg:py-16 xl:px-0 max-w-7xl mx-auto">
      <div className="md:flex md:items-center justify-between">
        {/* News heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#004269]">
            <TextTranslate id="newsHeading" />
          </h2>
        </div>
      </div>
      {/* News items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-3">
        {news &&
          news.map((item, idx) => (
            <Link
              className="inline-block mb-5"
              to={`/yangiliklar/${item.id}`}
              key={idx}
            >
              <div className="card bg-base-100 max-w-96 shadow-lg hover:shadow-xl group/item min-h-full flex flex-col mx-auto">
                <figure className="h-48 md:h-52 xl:h-60 w-full overflow-hidden">
                  <img
                    className="overflow-hidden h-full w-full object-cover group-hover/item:scale-105 ease-in duration-300 ..."
                    src={item.rasm_1?.replace(/^http:\/\//i, "https://")}
                    alt="News"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title line-clamp-2">{item[title]}</h2>
                  <p className="text-slate-400 text-end">{item.sana}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {/* Barcha yangiliklarga o'tish */}
      <div className="my-2">
        <Link
          to="/yangiliklar"
          className="text-lg md:text-2xl text-slate-400 font-semibold border-slate-100 px-5 flex items-center justify-end relative right-3 hover:right-0 transition-all duration-300"
        >
          <TextTranslate id="newsToPage" /><MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default NewsHome;
