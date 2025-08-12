"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "@/utils/constants";

const page = () => {
  const [copied, setCopied] = useState(false);
  const [selectedRange, setSelectedRange] = useState("today");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div className="bg-[#E6EAEE] w-[82vw] pb-20">
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
        <div className="w-[85%] border-gray-300 rounded-[10px]  border-[2px] px-5 py-5  ">
          <div className="flex justify-between">
            <div className="flex items-center gap-5 ">
              <p className="font-semibold text-[14px] text-[#71717A]">
                Showing data for{" "}
              </p>{" "}
              <Select
                defaultValue="today"
                onValueChange={(value) => setSelectedRange(value)}
              >
                <SelectTrigger className="w-[134px] text-[14px] font-semibold text-[#71717A] bg-white rounded-[8px] h-[42px] border-[2px] focus:border-0 focus:ring-0 focus:outline-none  focus:ring-gray-300 border-gray-300">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className="border bg-white text-[14px] font-semibold text-[#71717A] border-gray-300">
                  <SelectGroup>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="last7days">Last 7 Days</SelectItem>
                    <SelectItem value="last30days">Last 30 Days</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-center text-black gap-2 text-black">
              <p
                className={`px-3 py-1 rounded ${
                  selectedRange === "today" ? "bg-[#00C6FB0F] " : ""
                }`}
              >
                Today
              </p>
              <p
                className={`px-3 py-1 rounded ${
                  selectedRange === "last7days" ? "bg-[#00C6FB0F] " : ""
                }`}
              >
                Last 7 days
              </p>
              <p
                className={`px-3 py-1 rounded ${
                  selectedRange === "last30days" ? "bg-[#00C6FB0F] " : ""
                }`}
              >
                Last 30 days
              </p>
            </div>
          </div>
          <div className="w-[100%] mt-5 bg-white border-gray-300 rounded-[6px]  border-[2px] px-5 py-5 ">
            <p>
              <span className="font-bold text-[14px]">Revenue </span>{" "}
              <span className="font-light text-[14px] text-[#6DC27F]">
                +0.00%
              </span>{" "}
              <span className="font-light text-[14px] ">vs Last 7 days</span>
            </p>
            <p className="mt-3 flex items-center gap-2">
              <span className="font-bold text-[29px]">₦0.00 </span>{" "}
              <span className="font-normal text-[14px]  ">in total value</span>
            </p>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="1 1" vertical={false} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tick={{ fill: "#8686AC" }}
                  tickLine={false}
                  tickMargin={10}
                />
                <YAxis
                  axisLine={false}
                  tick={{ fill: "#8686AC" }}
                  tickLine={false}
                  tickFormatter={(value) => `${value / 1000}K`}
                />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="income"
                  barSize={20}
                  fill="#FFC145"
                  activeBar={<Rectangle fill="white" stroke="white" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
