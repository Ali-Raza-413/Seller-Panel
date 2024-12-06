"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";

const Layout = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <1020); // Check if screen size is below 1024px
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  if (isSmallScreen) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <p className="text-xl font-semibold text-gray-700">
          Please increase your screen size to use the Seller panel.
        </p>
      </div>
    );
  }

  return (
    <div className="admin-panel h-screen p-2 bg-gray-200 ">
      {/* Admin Panel Wrapper */}
      <div className="flex h-full gap-3">
        {/* Sidebar */}
        <div className="bg-black w-[300px] rounded-tl-lg rounded-xl overflow-y-auto h-full scrollbar-hide">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg p-5 shadow-md">
          <div className="flex flex-col h-full gap-5">
            {/* Navbar */}
            <div className="">
              <NavBar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
