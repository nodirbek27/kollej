import React from "react";
import TextTranslate from "../TextTranslate";
import { LuDownload } from "react-icons/lu";
import DTSvaMalakaPDF from "../../assets/pdf/katalog.pdf";
import Katalog2021 from "../../assets/pdf/katalog.pdf"
import Katalog2022 from "../../assets/pdf/katalog.pdf"
import Katalog2023 from "../../assets/pdf/katalog.pdf"
import Katalog2024 from "../../assets/pdf/katalog.pdf"

const dataPDF = [
  {
    id: 1,
    sana: "09.14.2024",
    name: "Oliy ta'limning davlat ta'lim standarti 2021",
    pdf: Katalog2021,
  },
  {
    id: 2,
    sana: "09.14.2024",
    name: "Oliy ta'limning davlat ta'lim standarti 2022",
    pdf: Katalog2022,
  },
  {
    id: 3,
    sana: "09.14.2024",
    name: "Oliy ta'limning davlat ta'lim standarti 2023",
    pdf: Katalog2023,
  },
  {
    id: 4,
    sana: "09.14.2024",
    name: "Oliy ta'limning davlat ta'lim standarti 2024",
    pdf: Katalog2024,
  },
];

function FanKatalogiCom() {
  return (
    <div className="max-w-7xl mx-auto py-16 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <h1 className="text-md md: text-4xl font-bold text-[#004269] text-center">
        <TextTranslate id="fanKatalogi" />
      </h1>
      <div className="relative shadow-md overflow-x-auto sm:rounded-lg mx-5 mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="md:text-base text-white uppercase bg-[#377DFF] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-2 md:pl-6 py-4">
                №
              </th>
              <th scope="col" className="px-2 md:px-6 py-4">
                <TextTranslate id="DTSvaMalakaHujjatNomi" />
              </th>
              <th scope="col" className="px-2 md:px-6 py-4 hidden md:block">
                <TextTranslate id="DTSvaMalakaSana" />
              </th>
              <th scope="col" className="px-2 md:px-6 py-4">
                <TextTranslate id="DTSvaMalakaBatafsil" />
              </th>
            </tr>
          </thead>
          <tbody className="text-base">
            {dataPDF &&
              dataPDF.map((item) => {
                const { id, sana, name } = item;
                return (
                  <tr
                    key={id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200"
                  >
                    <th
                      scope="row"
                      className="pl-2 md:pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {id}
                    </th>
                    <td className="px-2 md:px-6 py-4">{name}</td>
                    <td className="px-2 md:px-6 py-4 hidden md:block">
                      {sana}
                    </td>
                    <td className="px-2 md:px-6 py-41">
                      <a
                        href={DTSvaMalakaPDF}
                        className="text-blue-600 dark:text-blue-500"
                        target="blank"
                      >
                        <LuDownload className="text-xl" />
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FanKatalogiCom;
