import React, { useState, useEffect } from "react";
import APIGallery from "../../services/gallery";
import APIGalleryTur from "../../services/galleryTur";
import TextTranslate from "../TextTranslate/index";
import { useSelector } from "react-redux";
import "./style.css"

const Gallery = () => {
  const [data, setData] = useState([]);
  const [dataTur, setDataTur] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const Lang = useSelector((state) => state.reducerLang.isLang);

  const getTurData = async () => {
    try {
      const res = await APIGalleryTur.get();
      setDataTur(res.data);
    } catch (error) {
      console.error("Error fetching gallery types:", error);
    }
  };

  const getData = async () => {
    try {
      const res = await APIGallery.get();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  useEffect(() => {
    getTurData();
    getData();
  }, []);

  useEffect(() => {
    if (dataTur?.length && data?.length) {
      const combinedData = dataTur.map((tur) => {
        const label = tur[`tur_${Lang}`];
        return {
          label: label || 'Default Label', 
          value: tur.id,
          content: data
            .filter((item) => item.tur_id === tur.id)
            .map((item) => item.rasm),
        };
      });
      setPictures(combinedData);
      if (combinedData.length > 0) {
        setActiveTab(combinedData[0].value);
      }
    }
  }, [dataTur, data, Lang]);

  return (
    <div className="max-w-7xl mx-auto my-5 md:my-8 xl:my-16">
      <div className="p-4 md:flex md:justify-between">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#004269]">
          <TextTranslate id="gallerynomi" />
        </h2>
      </div>
      {activeTab && (
        <div className="tabs-container px-3">
          <div className="tabs flex justify-start gap-4 mb-6">
            {pictures.map(({ label, value }) => (
              <button
                key={value}
                className={`tab-btn md:text-xl font-semibold whitespace-nowrap px-2 md:px-4 py-2 rounded-lg ${
                  activeTab === value ? "bg-[#004269] text-white" : "bg-[#eaf3ffa2] text-[#004269]"
                }`}
                onClick={() => setActiveTab(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="tab-content grid grid-cols-1 gap-4">
            {pictures
              .filter(({ value }) => value === activeTab)
              .map(({ content }) => (
                <div key={activeTab} className="images-container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {content.slice(0, 4).map((imageUrl, index) => (
                    <img
                      key={index}
                      className="block h-full w-full object-cover object-center p-2 rounded-2xl hover:scale-105 transition-transform duration-300"
                      src={imageUrl}
                      alt={`gallery-image-${index}`}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
