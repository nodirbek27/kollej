import React, { useEffect, useState } from "react";
import { FaMapLocationDot, FaSquarePhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import TextTranslate from "../TextTranslate";
import APIContact from "../../services/contact";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const Lang = useSelector((state) => state.reducerLang.isLang) || "uz";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await APIContact.get();
        setData(res?.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="p-6 lg:p-12 flex justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 lg:p-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mb-8">
          <TextTranslate id="contactUs" />
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Yuklanmoqda...</p>
        ) : (
          data && data.map((item) => (
            <div key={item.id} className="space-y-6">
              {/* Manzil */}
              <div className="flex items-center p-4 bg-gray-100 rounded-xl shadow-sm">
                <FaMapLocationDot className="text-[#004269] w-10 h-10 mr-4" />
                <p className="text-[#004269] text-lg font-medium">{item[`manzil_${Lang}`]}</p>
              </div>
              
              {/* Telefon */}
              <div className="flex items-center p-4 bg-gray-100 rounded-xl shadow-sm">
                <FaSquarePhone className="text-green-600 w-10 h-10 mr-4" />
                <p className="text-gray-800 text-lg font-medium">
                  <a href={`tel:${item.telefon}`} className="hover:text-green-700">
                    <TextTranslate id="ishonchTelefon" />: {item.telefon}
                  </a>
                </p>
              </div>
              
              {/* Email */}
              <div className="flex items-center p-4 bg-gray-100 rounded-xl shadow-sm">
                <MdMarkEmailUnread className="text-blue-600 w-10 h-10 mr-4" />
                <p className="text-gray-800 text-lg font-medium">
                  <a href={`mailto:${item.email_1}`} className="hover:text-blue-700">{item.email_1}</a>
                  <br />
                  <a href={`mailto:${item.email_2}`} className="hover:text-blue-700">{item.email_2}</a>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactUs;
