import { useState } from "react";
import flag_1 from "../../assets/icons/flag-uz.png";
import flag_2 from "../../assets/icons/flag-ru.png";
import flag_3 from "../../assets/icons/flag-en.png";

const LanguageSelector = ({ isLang, handleClickLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { lang: "uz", src: flag_1, label: "Uz" },
    { lang: "ru", src: flag_2, label: "Ру" },
    { lang: "en", src: flag_3, label: "En" },
  ];

  // Hozirgi tanlangan tilni topamiz
  const currentLang = languages.find((item) => item.lang === isLang);

  return (
    <div className="relative">
      {/* Current selected language */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2 rounded cursor-pointer"
      >
        <img
          src={currentLang?.src}
          alt="current flag"
          className="w-[30px] 3xl:w-[35px] mr-2"
        />
        <span>{currentLang?.label}</span>
      </button>

      {/* Dropdown list */}
      {isOpen && (
        <ul className="absolute left-0 top-full mt-2 w-full rounded shadow-md bg-neutral-100">
          {languages
            .filter((item) => item.lang !== isLang) // Hozirgi tilni chiqarib tashlaymiz
            .map(({ lang, src, label }) => (
              <li
                key={lang}
                onClick={() => {
                  handleClickLang(lang);
                  setIsOpen(false);
                }}
                className="flex items-center gap-x-2 px-2 py-1 cursor-pointer text-[#222] hover:bg-neutral-200"
              >
                <img src={src} alt={label} className="w-[30px] 3xl:w-[35px]" />
                <span>{label}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
