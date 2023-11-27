import React from "react";
import Table from "./Table";
// import { invoice } from "@/utils/constant";

export const invoice = [
    {
      transactionId: "#12415346512",
      date: "2/5/2022 06:24 AM",
      from: "Chidinma",
      amount: "45,000",
      status: "canceled",
    },
    {
      transactionId: "#12415346512",
      date: "2/5/2022 06:24 AM",
      from: "Abdulmojeed",
      amount: "45,000",
      status: "completed",
    },
    {
      transactionId: "#12415346512",
      date: "2/5/2022 06:24 AM",
      from: "FaithFull",
      amount: "45,000",
      status: "failed",
    },
    {
      transactionId: "#12415346512",
      date: "2/5/2022 06:24 AM",
      from: "Runner",
      amount: "45,000",
      status: "pending",
    },
  ];
  

const Dashboard = () => {
  return (
    <section className="pt-[29px] px-[10px] lg:px-[40px]">
      <h2 className="text-[#171725] font-[600] text-[18px] ml-[5px]">
        Overview
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[42px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h2 className="text-[#2F2F2FCC] font-[700] text-[18px] my-[24px] lg:mt-[52px] lg:mb-[44px]">
        Invoice and Payment Summary
      </h2>
      <div className="overflow-x-auto">
        <Table data={invoice} />
      </div>
    </section>
  );
};

export default Dashboard;

const Card = () => {
  return (
    <article className="px-[17px] py-[20px] lg:py-[40px] lg:px-[15px] bg-white rounded-[20px] lg:rounded-none lg:flex-1">
      <div className="flex gap-[21.1px] justify-between">
        <h1 className="text-[#171725] font-[600] text-[15px] tracking-[0.1px] w-[76.903px] lg:w-auto">
          Invoice Amount
        </h1>
        <div className="flex items-center justify-center h-[50px] w-[50px] bg-[#50fe8d5b] rounded-full">
          <OpenIcon />
        </div>
      </div>
      <h1 className="text-[#171725] font-[600] lg:font-[700] text-[22px] lg:text-[30px] tracking-[0.1px] mt-[14px]">
        #30,000
      </h1>
    </article>
  );
};

const OpenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 17H21M3 12H21M3 7H21"
        stroke="#50FE8B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
