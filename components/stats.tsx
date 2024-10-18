"use client";

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const banners = [
  {
    id: 1,
    title: "500K",
    value: 500,
    subtitle: "workers onboarding globally",
    image: "/assets/banner1.png",
  },
  {
    id: 2,
    title: "25K",
    value: 25,
    subtitle: "global business supported",
    image: "/assets/banner2.png",
  },
  {
    id: 3,
    title: "$10B",
    value: 100,
    subtitle: "compliantly processed payroll",
    image: "/assets/banner3.png",
  },
];

const Stats = () => {
  return (
    <div className="w-full mt-5 flex flex-col container">
      <div className="flex flex-col justify-start w-full">
        <h4 className="text-sm font-medium my-4">
          Choose Deel for an industry-leading experience
        </h4>
        <div className="flex justify-between items-center space-y-2 max-md:flex-col max-md:items-center max-md:justify-center w-full ">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="flex justify-center items-center h-full"
            >
              <Image
                src={banner.image}
                alt={banner.title}
                width={80}
                height={80}
              />
              <div className="flex ml-2 flex-col justify-center items-cente w-full h-full">
                <CountUp
                  end={banner.value}
                  duration={5}
                  delay={2}
                  className="text-4xl text-slate-900 font-bold"
                />
                <p className="text-xs text-slate-900 font-normal">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
