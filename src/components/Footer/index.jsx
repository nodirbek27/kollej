import React from "react";
import { Link } from "react-router-dom";
import {
  FaTelegram,
  FaSquareInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import TextTranslate from "../TextTranslate/index";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 to-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h1 className="text-lg font-bold mb-4">
              <TextTranslate id="navLogo" />
            </h1>
            <p className="text-sm opacity-80">
              <TextTranslate id="footerTexts" />
            </p>
          </div>

          {/* Location */}
          <div>
            <h1 className="text-lg font-bold mb-4">
              <TextTranslate id="location" />
            </h1>
            <p className="text-sm opacity-80">
              <TextTranslate id="address" />
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="mailto:kspi_info@edu.uz"
                  className="hover:text-blue-400"
                >
                  politexnikum_info@edu.uz
                </Link>
              </li>
              <li>
                <Link to="tel:+998735152950" className="hover:text-blue-400">
                  <TextTranslate id="ishonchTelefon" />: +998 73 515 29 50
                </Link>
              </li>
              <li>
                <Link to="tel: +998903620027" className="hover:text-blue-400">
                  <TextTranslate id="ishonchTelefon" />:  +998 90 362 00 27
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h1 className="text-lg font-bold mb-4">
              <TextTranslate id="foydaliLinklar" />
            </h1>
            <ul className="space-y-1">
              <li>
                <Link to="/yangiliklar" className="hover:text-blue-400">
                  <TextTranslate id="yangiliklar" />
                </Link>
              </li>
              <li>
                <Link to="/qabulxona" className="hover:text-blue-400">
                  <TextTranslate id="virtualQabulxona" />
                </Link>
              </li>
              <li>
                <Link to="/vakansiyalar" className="hover:text-blue-400">
                  <TextTranslate id="vakansiyalar" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold mb-4"><TextTranslate id="socialLinks" /></h1>
            <div className="flex space-x-4">
              <Link
                to="https://t.me/kspi_rector"
                target="_blank"
                className="group transition duration-300"
              >
                <FaTelegram className="text-3xl bg-blue-500 text-white p-2 rounded-full transition duration-300 group-hover:bg-blue-700 group-hover:scale-110" />
              </Link>
              <Link
                to="https://www.instagram.com/kspi_uz/"
                target="_blank"
                className="group transition duration-300"
              >
                <FaSquareInstagram className="text-3xl bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-2 rounded-full transition duration-300 group-hover:scale-110" />
              </Link>
              <Link
                to="https://www.youtube.com/channel/UC6ThR8cLnJmdWDGDz9PR85Q/featured"
                target="_blank"
                className="group transition duration-300"
              >
                <PiYoutubeLogoFill className="text-3xl bg-red-500 text-white p-2 rounded-full transition duration-300 group-hover:bg-red-700 group-hover:scale-110" />
              </Link>
              <Link
                to="https://www.facebook.com/kspi.uz.56"
                target="_blank"
                className="group transition duration-300"
              >
                <FaSquareFacebook className="text-3xl bg-blue-600 text-white p-2 rounded-full transition duration-300 group-hover:bg-blue-800 group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm opacity-80">
          <Link to="/authors" className="hover:text-blue-400">
            <TextTranslate id="footerContetn_1" />{" "}
            <span className="font-semibold">IT PARK</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
