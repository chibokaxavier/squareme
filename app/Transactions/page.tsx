"use client";
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
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
} from "lucide-react";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; 
  const invoiceData = useSelector(
    (state: RootState) => state.income.invoiceData
  );

  const totalPages = Math.ceil(invoiceData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = invoiceData.slice(indexOfFirstRow, indexOfLastRow);

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
    <div className="bg-white lg:bg-[#E6EAEE] w-[100vw] lg:w-[82vw] px-5 lg:px-0 pb-20">
      <div className="border-gray-300 border-b-[2px] pt-10 pb-5 lg:pl-[50px] lg:pr-10 lg:flex lg:justify-between lg:items-center">
        <div className="w-full justify-between   flex lg:w-auto mb-4 lg:mb-0">
          <Select defaultValue="today">
            <SelectTrigger className="w-[164px] text-[16px] font-medium text-black h-[42px] border-0 focus:border-0 focus:ring-0 focus:outline-none focus:ring-transparent">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent className="border bg-white text-[14px] font-semibold text-[#71717A] border-gray-300">
              <SelectGroup>
                <SelectItem value="today">All Accounts</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="border flex lg:hidden items-center gap-2 rounded-[8px] px-4 py-2 text-[#344054] border-gray-300 text-[14px] cursor-pointer bg-white">
            <CloudUpload className="w-5 h-5 text-[#344054]" />
            Export
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 w-full lg:w-auto">
          <div className="flex items-center justify-between gap-4">
            <p className="font-medium text-[#71717A] text-[13px] lg:text-[16px]">
              Select Date Range:
            </p>
            <div className="flex items-center text-[#71717A] text-[12px] lg:text-[16px] bg-white border-gray-300 gap-2 border rounded-[8px] px-3 py-2 cursor-pointer">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              <span className="text-[#71717A]">Jan 1, 2025 - Aug 13, 2025</span>
            </div>
          </div>

          <div className="border hidden lg:flex items-center gap-2 rounded-[8px] px-4 py-2 text-[#344054] border-gray-300 text-[14px] cursor-pointer bg-white">
            <CloudUpload className="w-5 h-5 text-[#344054]" />
            Export
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto mt-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-5 "></div>
        </div>
        <div className="space-y-2 w-[100%] lg:w-[96%]">
          <div className="hidden lg:grid grid-cols-7 uppercase text-[#84919A] font-semibold text-[12px] py-2">
            <div className="pl-12">
              <input
                type="checkbox"
                className="appearance-none size-[16px] border border-gray-300 rounded-sm bg-gray-100 checked:border-blue-500"
              />
            </div>
            <div>Amount</div>
            <div>Transaction ID</div>
            <div>Transaction type</div>
            <div>Date</div>
            <div>Time</div>
            <div>Status</div>
          </div>

          <div className="bg-white rounded-lg text-[14px] text-[#535379]">
            <p className="font-semibold text-[17px] text-black">Transactions</p>
            {currentRows.map((invoice, i) => (
              <div
                key={i}
                className="border-2 lg:border-b px-5 lg:px-0 rounded-md lg:rounded-none lg:my-0 my-10 w-full lg:w-auto border-gray-200 py-5 grid gap-y-4 lg:grid-cols-7 lg:gap-y-0 lg:items-center"
              >
                <div className="pl-4 lg:pl-12">
                  <input
                    type="checkbox"
                    className="appearance-none hidden lg:block size-[16px] border border-gray-300 rounded-sm bg-gray-100 checked:border-blue-500"
                  />
                </div>

                <div className="hidden lg:block">{invoice.Amount}</div>

                <div className="block lg:hidden border-b border-gray-200 pb-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Amount:</span>
                  <span>{invoice.Amount}</span>
                </div>

                <div className="block lg:hidden border-b border-gray-200 pb-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">
                    Transaction Type:
                  </span>
                  <span className="uppercase">{invoice.TransactionType}</span>
                </div>

                <div className="hidden lg:block">{invoice.TransactionId}</div>

                <div className="block lg:hidden border-b border-gray-200 pb-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Date</span>
                  <span>
                    {invoice.Date} {invoice.Time}
                  </span>
                </div>
                <div className="hidden lg:block">{invoice.TransactionType}</div>

                <div className="hidden lg:block">{invoice.Date}</div>

                <div className="hidden lg:block">{invoice.Time}</div>

                <div className="block lg:hidden border-b border-gray-200 pb-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Status</span>
                  <div className="">
                    {invoice.Status === "Processed" && (
                      <div className="flex items-center gap-2 rounded-full border px-3 w-fit py-1 border-[#5DC090] bg-green-100 text-[#144909]">
                        <span className="w-2 h-2 rounded-full bg-[#92EF80]" />
                        {invoice.Status}
                      </div>
                    )}
                    {invoice.Status === "Failed" && (
                      <div className="flex items-center gap-2 rounded-full w-fit min-w-[106px] justify-center border px-3 py-1 border-[#F14156] bg-red-100 text-[#740613]">
                        <span className="w-2 h-2 rounded-full bg-[#F14156]" />
                        {invoice.Status}
                      </div>
                    )}
                  </div>
                </div>

                <div className="hidden lg:block">
                  {invoice.Status === "Processed" && (
                    <div className="flex items-center gap-2 rounded-full border px-3 w-fit py-1 border-[#5DC090] bg-green-100 text-[#144909]">
                      <span className="w-2 h-2 rounded-full bg-[#92EF80]" />
                      {invoice.Status}
                    </div>
                  )}
                  {invoice.Status === "Failed" && (
                    <div className="flex items-center gap-2 rounded-full w-fit min-w-[106px] justify-center border px-3 py-1 border-[#F14156] bg-red-100 text-[#740613]">
                      <span className="w-2 h-2 rounded-full bg-[#F14156]" />
                      {invoice.Status}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="text-[#696D8C] text-[14px]">
              Showing {Math.min(currentPage * rowsPerPage, invoiceData.length)}{" "}
              of {invoiceData.length} results
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center cursor-pointer justify-center w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeft />
              </button>

              {visiblePages.map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 border rounded flex items-center justify-center text-sm
            ${
              pageNum === currentPage
                ? "border-blue-500 text-blue-500 font-semibold"
                : "border-gray-300 hover:bg-gray-100"
            }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                &raquo;
              </button>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="flex items-center cursor-pointer justify-center w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
