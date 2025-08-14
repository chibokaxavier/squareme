"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { links } from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center h-[80px] px-5 lg:px-10 bg-[#E6EAEE] border-gray-300 border border-b-[1px]">
      <Menu
        className="lg:hidden size-[24px]"
        onClick={() => setVisible(true)}
      />
      <Image src="/Logo.svg" height={100} width={100} alt="logo" />
      <div className="flex justify-center ">
        <Image
          src="/bell.svg"
          height={24}
          width={24}
          alt="bell"
          className="mr-3"
        />
        <div className="size-[50px] rounded-full bg-[#0CBC8B] flex items-center lg:mr-3 justify-center text-[16px] font-medium text-white">
          GA
        </div>
        <Image
          src="/arrowdown.svg"
          height={8}
          width={8}
          alt="arrow"
          className="hidden lg:block"
        />
      </div>

      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        {links.map((link, i) => {
          const isActive = pathname === link.url;
          return (
            <Link key={i} href={link.url}>
              <div
                className={`flex items-center gap-3 h-[52px] px-3 pl-10 w-full cursor-pointer transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 text-gray-800"
                }`}
              >
                {link.icon}
                <p className="text-[15px]">{link.name}</p>
              </div>
            </Link>
          );
        })}
      </Sidebar>
    </div>
  );
};

export default Header;
