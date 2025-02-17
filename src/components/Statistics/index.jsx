import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import APIStatistics from "../../services/statistics";
import { useSelector } from "react-redux";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUniversity,
  FaUserTie,
} from "react-icons/fa";

function Statistics() {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIStatistics.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="mb-12 lg:mb-16 bg-[#F1F5F9]">
      {data &&
        data.map((item) => {
          return (
            <div key={item.id} ref={ref} className="px-6 lg:px-8 py-16">
              <div className="mx-auto max-w-7xl space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-[#2A485B] sm:text-4xl">
                  {item[`statistika_title_${Lang}`]}
                </h2>
                <p className="text-lg md:text-xl leading-8 text-[#2A485B]">
                  {item[`statistika_text_${Lang}`]}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard
                    icon={<FaUserGraduate size={40} className="text-white" />}
                    title={item[`talaba_title_${Lang}`]}
                    number={item.talaba_nomer}
                    inView={inView}
                  />
                  <StatCard
                    icon={<FaUserTie size={40} className="text-white" />}
                    title={item[`phd_title_${Lang}`]}
                    number={item.phd_nomer}
                    inView={inView}
                  />
                  <StatCard
                    icon={
                      <FaChalkboardTeacher size={40} className="text-white" />
                    }
                    title={item[`oqituvchi_title_${Lang}`]}
                    number={item.oqituvchi_nomer}
                    inView={inView}
                  />
                  <StatCard
                    icon={<FaUniversity size={40} className="text-white" />}
                    title={item[`fan_doktiri_title_${Lang}`]}
                    number={item.fan_doktiri_nomer}
                    inView={inView}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

const StatCard = ({ icon, title, number, inView }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="mb-4">{icon}</div>
      <dd className="text-4xl font-bold text-white">
        {inView && <CountUp end={number} duration={3} />}+
      </dd>
      <dt className="text-lg font-semibold text-white mt-2">{title}</dt>
    </div>
  );
};

export default Statistics;
