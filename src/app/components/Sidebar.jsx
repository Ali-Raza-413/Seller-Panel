"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // Import Image from Next.js

const sidebarItems = [
  { to: "/pages/dashboard", icon: "/a1.png", label: "Dashboard" },
  {
    to: "/pages/products",
     icon: "/a4.png",
    label: "Product Management",
  },
  {
    to: "/pages/storeprofile",
    icon: "/a6.png",
    label: "Store Profile Management",
  },
  {
    to: "/pages/subscription",
    icon: "/a9.png",
    label: "Subscription Management",
  },
  {
    to: "/pages/support",
    icon: "/a10.png",
    label: "Help and Support",
  },
];

const Sidebar = () => {
  const pathname = usePathname(); // Get current path

  // Function to dynamically set the active class based on the path
  const getTabClass = (path) => {
    const isActive = pathname.startsWith(path); // Check if pathname starts with the item path
    return `flex items-center  mt-3 px-3 py-3 cursor-pointer text-white hover:bg-gray-700 ${
      isActive ? "bg-gray-400 rounded-lg text-white  " : ""
    }`;
  };

  return (
    <div className="flex flex-col   bg-black h-screen font-sans">
      <div className="p-5">
        <h1 className="text-white  font-bold text-2xl start pt-3 ">Near by Store</h1>
        <div className="pt-5">
        {sidebarItems.map((item) => (
          <Link key={item.label} href={item.to} passHref>
            <div className={getTabClass(item.to)}>
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className="mr-4"
              />
              <span className="ml-2">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
