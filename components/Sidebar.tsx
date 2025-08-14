"use client";
import {
  BookText,
  Coins,
  Globe,
  LayoutDashboard,
  Settings,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const links = [
  {
    icon: <Globe />,
    name: "Get Started",
    url: "/Get-started",
  },
  {
    icon: <LayoutDashboard />,
    name: "Dashboard",
    url: "/Dashboard",
  },
  {
    icon: <Wallet />,
    name: "Accounts",
    url: "/Accounts",
  },
  {
    icon: <Coins />,
    name: "Transfers",
    url: "/Transfers",
  },
  {
    icon: <BookText />,
    name: "Transactions",
    url: "/Transactions",
  },
  {
    icon: <Settings />,
    name: "Settings",
    url: "/Settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[18%] border-gray-300  h-[100vh] border-r-[1px] lg:flex flex-col  pt-10  hidden">
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
    </div>
  );
};

export default Sidebar;
