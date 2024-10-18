"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    id: 1,
    title: "Global Payroll",
    path: "",
  },
  {
    id: 2,
    title: "Global Hiring",
    path: "hiring",
  },
  {
    id: 3,
    title: "Compliance",
    path: "compliance",
  },
  {
    id: 4,
    title: "Employee Relocation",
    path: "relocation",
  },
];

const OurMission = () => {
  const [selectedTab, setselectedTab] = useState("");

  return (
    <motion.section
      id="mission"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="bg-[#FEF0D8] w-full"
    >
      <div className="container mt-20">
        <h1 className="text-5xl mt-8 max-md:text-4xl font-medium text-primary-dark text-center">
          Our Mission
        </h1>

        <h4 className="text-xl font-normal text-center">
          We’ve helped 25,000+ companies grow and manage global teams
        </h4>

        <div className="mt-8  justify-center items-center w-full mb-6">
          <div className="ring-1 ring-slate-100 grid grid-cols-4 max-md:grid-cols-2 justify-center items-center w-full">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setselectedTab(tab.path)}
                className={cn(
                  "text-gray-500 text-center cursor-pointer p-2",
                  tab.path === selectedTab &&
                    "text-white bg-neutral-900 rounded-xl"
                )}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-md:hidden">
          <Image
            src="/assets/mission.png"
            alt="mission"
            width={500}
            height={600}
          />

          <div className="shadow p-4 bg-white rounded-2xl absolute max-lg:right-0 right-52 top-40 w-[500px]">
            <h2 className="font-semibold text-6xl ">5,000+</h2>
            <p className="font-medium text-sm">contracts created</p>
            <p className="text-xs font-light">
              Turing has around 400 developers working forcustomers and 150
              developers working to build Turing. They were able to migrate
              everyone to Deel in days. Now they use Deel to manage, pay, and
              onboard every developer, in over 60 different countries.{" "}
            </p>
          </div>
        </div>
        <div className="max-md:flex flex-col md:hidden">
          <Image
            src="/assets/mission.png"
            alt="mission"
            width={600}
            height={500}
          />
          <div className="shadow p-4 bg-white rounded-2xl w-w-full">
            <h2 className="font-semibold text-4xl ">5,000+</h2>
            <p className="font-medium text-sm">contracts created</p>
            <p className="text-xs font-light">
              Turing has around 400 developers working forcustomers and 150
              developers working to build Turing. They were able to migrate
              everyone to Deel in days. Now they use Deel to manage, pay, and
              onboard every developer, in over 60 different countries.{" "}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMission;
