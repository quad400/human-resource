"use client"

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";


const OurService = () => {
  return (
    <motion.section id="services" initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }} className="container my-8">

       
      <h1 className="text-5xl mt-8 max-md:text-4xl font-medium text-primary-dark text-center">
        Our Services
      </h1>

      <div className="grid grid-flow-row-dense grid-cols-3 w-full max-md:grid-cols-1 max-md:gap-y-4 max-md:gap-x-0 mt-6 gap-x-4">
        <div className="flex flex-col w-full col-span-2 bg-[#FEF0D8] space-y-3 rounded-lg p-4">
          <h4 className="text-lg font-medium">
            Pay anyone, anywhere in minutes
          </h4>
          <p className="text-sm font-normal">
            Forget multiple tools, payroll errors and unreliable reporting. Run
            payroll for your
          </p>

          <div className="flex space-x-2 mb-2 justify-start items-start">
            <Button>Global Payroll</Button>
            <Button>US Payroll</Button>
          </div>
          <Image
            src="/assets/payroll.png"
            alt="payroll"
            height={200}
            width={600}
          />
        </div>
        <div className="flex flex-col w-full bg-[#B1D8FC] space-y-3 rounded-lg p-4">
          <Image
            src="/assets/payroll1.png"
            alt="payroll"
            height={100}
            width={200}
          />
          <h4 className="text-lg font-medium">
            Expand your team and hire globally{" "}
          </h4>
          <p className="text-sm font-normal">
            Compliantly onboard contractors and employees worldwide, without
            worrying about local laws, payroll and keeping up with local
            compliance.
          </p>

          <div className="flex space-x-2 mb-2 justify-start items-start">
            <Button>Management</Button>
            <Button>EOR</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3 w-full max-md:grid-cols-1 max-md:gap-y-4 max-md:gap-x-0 mt-6 gap-x-4">
        <div className="flex flex-col w-full bg-[#B1D8FC] space-y-3 rounded-lg p-4">
          <Image
            src="/assets/payroll3.png"
            alt="payroll"
            height={100}
            width={300}
          />

          <div className="flex flex-col justify-center items-center space-y-3">
            <h4 className="text-lg font-medium">
              Provide global teams with compliant equity
            </h4>
            <p className="text-sm font-normal">
              Easily offer equity in +110 countries compliantly. Deel simplifies
              tax reporting and brings your total compensation into one report.
            </p>

            <Button>Equity management</Button>
          </div>
        </div>
        <div className="flex flex-col w-full col-span-2 bg-[#FEF0D8] space-y-3 rounded-lg p-4">
          <h4 className="text-lg font-medium">
            Pay anyone, anywhere in minutes
          </h4>
          <p className="text-sm font-normal">
            Forget multiple tools, payroll errors and unreliable reporting. Run
            payroll for your
          </p>

          <div className="flex space-x-2 mb-2 justify-start items-start">
            <Button>Global Payroll</Button>
            <Button>US Payroll</Button>
          </div>
          <Image
            src="/assets/payroll2.png"
            alt="payroll"
            height={200}
            width={400}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default OurService;
