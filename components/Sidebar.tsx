import Image from "next/image";
import React from "react";

const links = [
  {
    icon: "/globe.svg",
    name: "Get Started",
  },
  {
    icon: "/element-1.svg",
    name: "Dashboard",
  },
  {
    icon: "/empty-wallet.svg",
    name: "Accounts",
  },
  {
    icon: "/coins-swap.svg",
    name: "Transfers",
  },
  {
    icon: "/document.svg",
    name: "Transactions",
  },
  {
    icon: "/setting-2.svg",
    name: "Settings",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[263px] border-gray-300 border border-r-[1px] flex flex-col pl-10">
      {links.map((link, i) => (
        <div className="flex items-center justify-center h-[52px]">
          <Image
            src={link.icon}
            height={24}
            width={24}
            alt="bell"
            className="text-white"
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
