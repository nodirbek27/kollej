import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactPaginate from "react-paginate";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import APIYangilik from "../../services/yangilik";
import { useSelector } from "react-redux";

const NewsPage = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [title, setTitle] = useState("");

  const [news, setNews] = useState(null);
  const [newsOne, setNewsOne] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 12;
  const pagesVisited = pageNumber * itemsPerPage;

  const getData = useCallback(async () => {
    try {
      await APIYangilik.get().then((res) => {
        const sortedData = res.data.sort((a, b) => {
          return new Date(b.sana) - new Date(a.sana);
        });
        setNews(sortedData);
        setNewsOne(res.data.slice(pagesVisited, pagesVisited + itemsPerPage));
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }, [pagesVisited, setNews, setNewsOne]);

  // replace
  useEffect(() => {
    Aos.init();
    getData();
  }, [pagesVisited, getData]);

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

  const pageCount = Math.ceil((news && news.length) / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="px-5 py-3 md:px-10 lg:px-20 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="news" /> },
          ]}
        />
      </div>

      <div className="my-3 md:my-6">
        <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
          <TextTranslate id="newsHeading" />
        </h2>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto mb-5"
        data-aos="zoom-in-down"
      >
        {newsOne &&
          newsOne.map((item, idx) => (
            <Link to={`/yangiliklar/${item.id}`} key={idx}>
              {item && (
                <div className="card bg-base-100 max-w-96 shadow-lg hover:shadow-xl group/item min-h-full flex flex-col mx-auto">
                  <figure className="h-48 md:h-52 xl:h-48 w-full overflow-hidden">
                    <img
                      className="overflow-hidden group-hover/item:scale-105 ease-in duration-300 ..."
                      src={item.rasm_1?.replace(/^http:\/\//i, "https://")}
                      alt="News"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title line-clamp-2">{item[title]}</h2>
                    <p className="text-slate-400 text-end">{item.sana}</p>
                  </div>
                </div>
              )}
            </Link>
          ))}
      </div>

      <ReactPaginate
        className="flex justify-center items-center gap-2"
        previousLabel={"«"}
        nextLabel={"»"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination flex justify-center p-0 my-5 mx-0"}
        previousLinkClassName={"pagination__link hover:bg-[#eee] font-bold"}
        nextLinkClassName={"pagination__link hover:bg-[#eee] font-bold"}
        disabledClassName={"pagination__link--disabled color-[#888]"}
        activeClassName={
          "pagination__link--active bg-[#004269] border rounded text-white py-1 px-2"
        }
      />
    </div>
  );
};

export default NewsPage;
