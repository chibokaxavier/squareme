import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[80px] px-10 bg-[#E6EAEE]">
      <Image src="/Logo.svg" height={100} width={100} alt="logo" />
      <div>
        <div className="size-[50px] rounded-full bg-[#0CBC8B] flex items-center justify-center text-[16px] font-medium text-white">GA</div>
      </div>
    </div>
  );
};

export default Header;
