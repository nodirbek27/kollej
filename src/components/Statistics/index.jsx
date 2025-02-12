import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import APIStatistics from "../../services/statistics";
import { useSelector } from "react-redux";

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
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id} ref={ref} className="g bg-[#F1F5F9] py-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-[#2A485B] sm:text-4xl">
                      {item[`statistika_title_${Lang}`]}
                    </h2>
                    <p className="text-lg md:text-xl leading-8 text-[#2A485B]">
                      {item[`statistika_text_${Lang}`]}
                    </p>
                  </div>
                  <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col bg-[#1b4769] p-8">
                      <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {item[`talaba_title_${Lang}`]}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {inView && <CountUp end={item.talaba_nomer} duration={3} />}+
                      </dd>
                    </div>
                    <div className="flex flex-col bg-[#1b4769] p-8">
                      <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {item[`phd_title_${Lang}`]}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {inView && <CountUp end={item.phd_nomer} duration={3} />}
                      </dd>
                    </div>
                    <div className="flex flex-col bg-[#1b4769] p-8">
                      <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {item[`oqituvchi_title_${Lang}`]}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {inView && <CountUp end={item.oqituvchi_nomer} duration={3} />}
                      </dd>
                    </div>
                    <div className="flex flex-col bg-[#1b4769] p-8">
                      <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {item[`fan_doktiri_title_${Lang}`]}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {inView && <CountUp end={item.fan_doktiri_nomer} duration={3} />}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Statistics;
