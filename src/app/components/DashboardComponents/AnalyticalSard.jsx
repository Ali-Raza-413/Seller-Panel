import React from "react";
import { FaUsers, FaRegUser, FaEye } from "react-icons/fa"; // Importing icons from react-icons

const AnalyticsCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="p-4 bg-black rounded-lg shadow-lg text-white transition-all duration-300 ">
      <div className="flex items-center">
        <Icon className="text-3xl mr-3" /> {/* Icon for the card */}
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm">{value}</p>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  const analyticsData = [
    {
      icon: FaUsers,
      title: "Total Visitors",
      value: "1,200",
    },
    {
      icon: FaRegUser,
      title: "Total Sign-ups",
      value: "300",
    },
    {
      icon: FaEye,
      title: "Page Views",
      value: "5,500",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {analyticsData.map((data, index) => (
        <AnalyticsCard
          key={index}
          icon={data.icon}
          title={data.title}
          value={data.value}
        />
      ))}
    </div>
  );
};

export default Analytics;
