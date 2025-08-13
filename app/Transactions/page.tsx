"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setInvoiceData } from "@/Redux/slices/endpointSlice";
import { CalendarDays, CloudUpload } from "lucide-react";

const invoices = [
  {
    Amount: "₦43,644",
    TransactionId: "TR_8401857902",
    TransactionType: "Transfer",
    Date: "Feb 12, 2022",
    Time: "10:30am",
    Status: "Processed",
  },
  {
    Amount: "₦43,644",
    TransactionId: "TR_8401857902",
    TransactionType: "Withdrawal",
    Date: "Feb 12, 2022",
    Time: "10:30am",
    Status: "Processed",
  },
  {
    Amount: "₦43,644",
    TransactionId: "TR_8401857902",
    TransactionType: "Deposit",
    Date: "Feb 12, 2022",
    Time: "10:30am",
    Status: "Processed",
  },
  {
    Amount: "₦43,644",
    TransactionId: "TR_8401857902",
    TransactionType: "Request",
    Date: "Feb 12, 2022",
    Time: "10:30am",
    Status: "Failed",
  },
  {
    Amount: "₦43,644",
    TransactionId: "TR_8401857902",
    TransactionType: "Withdrawal",
    Date: "Feb 12, 2022",
    Time: "10:30am",
    Status: "Failed",
  },
  {
    Amount: "₦43,644",
    TransactionId: "TR_8401857902",
    TransactionType: "Request",
    Date: "Feb 12, 2022",
    Time: "10:30am",
    Status: "Processed",
  },
  {
    Amount: "₦43,644",
    TransactionId: "TR_8401857902",
    TransactionType: "Deposit",
    Date: "Feb 12, 2022",
    Time: "10:30am",
    Status: "Failed",
  },
];

const page = () => {
  const [selectedRange, setSelectedRange] = useState("Allacount");
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // how many rows per page
  const invoiceData = useSelector(
    (state: RootState) => state.income.invoiceData
  );

  const totalPages = Math.ceil(invoiceData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = invoiceData.slice(indexOfFirstRow, indexOfLastRow);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const getVisiblePages = () => {
    if (totalPages <= 3)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const visiblePages = getVisiblePages();

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await axios.get(`/api/invoices`);
        dispatch(setInvoiceData(res.data));
      } catch (error) {
        console.error("Error fetching income:", error);
      }
    };

    fetchInvoice();
  }, []);

  return (
    <div className="bg-[#E6EAEE] w-[82vw] pb-20">
      <div className="border-gray-300 flex justify-between items-center border-b-[2px] pl-[50px] pr-10 pt-10 pb-5  w-[100%] ">
        {" "}
        <Select
          defaultValue="today"
          onValueChange={(value) => setSelectedRange(value)}
        >
          <SelectTrigger className="w-[164px] text-[16px]   font-medium text-black  h-[42px] border-0 focus:border-0 focus:ring-0 focus:outline-none  focus:ring-transparent ">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent className="border bg-white text-[14px] font-semibold text-[#71717A] border-gray-300">
            <SelectGroup>
              <SelectItem value="today">All Accounts</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-4 ">
          {/* Label */}
          <p className="font-medium text-[#71717A] text-[16px]">
            Select Date Range:
          </p>

          {/* Date Range Box */}
          <div className="flex items-center text-[#71717A] text-[16px] bg-white border-gray-300 gap-2 border rounded-[8px] px-3 py-2 cursor-pointer ">
            <CalendarDays className="w-4 h-4 text-gray-500" />
            <span className="text-[#71717A]">Jan 1, 2025 - Aug 13, 2025</span>
          </div>

          {/* Export Box */}
          <div className="border flex items-center gap-2 rounded-[8px] px-4 py-2 text-[#344054] border-gray-300 text-[14px] cursor-pointer bg-white">
            <CloudUpload className="w-5 h-5 text-[#344054]" />
            Export
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto mt-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-5 "></div>
        </div>
        <div className="space-y-2 w-[96%]">
          {/* Table Header */}
          <div className="grid grid-cols-7  uppercase text-[#84919A] font-semibold text-[12px] py-2  font-semibold">
            <div className="pl-12">
              <input type="checkbox" name="" id="" className="size-[16px] " />
            </div>
            <div>Amount</div>
            <div>Transaction ID</div>
            <div>Transaction type</div>
            <div>Date</div>
            <div>Time</div>
            <div>Status</div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-lg text-[14px] text-[#535379] ">
            {currentRows.map((invoice, i) => (
              <div className="grid grid-cols-7  py-5 border-b border-gray-200">
                <div className="pl-12">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="size-[16px] border-[1px] border-gray-300"
                  />
                </div>
                <div className="text-black">{invoice.Amount}</div>
                <div>{invoice.TransactionId}</div>
                <div>{invoice.TransactionType}</div>
                <div className="">{invoice.Date}</div>
                <div className="">{invoice.Time}</div>
                <div>
                  {invoice.Status === "Processed" && (
                    <div
                      className={`flex items-center gap-2 rounded-full border px-3 w-fit py-1 
                  border-[#5DC090] bg-green-100 text-[#144909]`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#92EF80]" />
                      {invoice.Status}
                    </div>
                  )}

                  {invoice.Status === "Failed" && (
                    <div
                      className={`flex items-center gap-2 rounded-full w-fit min-w-[106px] justify-center border px-3 py-1 
                  border-[#F14156] bg-red-100 text-[#740613]`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#F14156]" />
                      {invoice.Status}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            {/* Left side */}
            <div className="text-gray-600 text-sm">
              Showing {Math.min(currentPage * rowsPerPage, invoiceData.length)}{" "}
              of {invoiceData.length} results
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Previous */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                &larr;
              </button>

              {/* Page boxes */}
              {visiblePages.map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 border rounded flex items-center justify-center text-sm
          ${
            pageNum === currentPage
              ? "border-blue-500 font-semibold"
              : "border-gray-300 hover:bg-gray-100"
          }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                &rarr;
              </button>

              {/* Last */}
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
