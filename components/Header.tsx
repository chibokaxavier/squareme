import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[80px] px-10 bg-[#E6EAEE] border-gray-300 border border-b-[1px]">
      <Image src="/Logo.svg" height={100} width={100} alt="logo" />
      <div className="flex justify-center ">
          <Image src="/bell.svg" height={24} width={24} alt="bell" className="mr-5" />
        <div className="size-[50px] rounded-full bg-[#0CBC8B] flex items-center mr-3 justify-center text-[16px] font-medium text-white">GA</div>
          <Image src="/arrowdown.svg" height={8} width={8} alt="arrow" className="" />
      </div>
    </div>
  );
};

export default Header;
