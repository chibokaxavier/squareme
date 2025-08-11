"use client";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div className="bg-[#E6EAEE] w-[82vw]  h-[100vh]">
      <div className="border-gray-300  border-b-[2px]  w-[100%] ">
        {" "}
        <p className="border-b-[#3976E8] font-semibold text-[16px] w-fit pt-[50px] ml-24 pb-5  border-b-[2px]">
          Online Payments
        </p>
      </div>

      <div className="bg-white w-[325px] h-[115px] ml-24 rounded-md mt-10 border-gray-300 border-[1px] pt-4 px-5">
        <p className="font-medium text-[11px] text-[#8F8E8E]">
          ACCOUNT DETAILS
        </p>
        <p className="font-medium text-[11px] pt-2">STERLING BANK</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-[21px] pt-2">8000000000</p>
          <div
            onClick={() => copyToClipboard("8000000000")}
            className="w-[70px] gap-2 flex items-center justify-center cursor-pointer text-[#9F56D4] h-[28px] rounded-[8px] bg-[#9F56D433]"
          >
            {" "}
            <Image
              src="/copy.svg"
              height={16}
              width={16}
              alt="coopy"
              className=""
            />{" "}
            <span className="text-[12px]">Copy</span>
          </div>
          {copied && <p className="text-black text-[11px] ">Copied!</p>}
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto mt-10">
        <div className="w-[85%] border-gray-300  border-[2px]  "></div>
      </div>
    </div>
  );
};

export default page;
