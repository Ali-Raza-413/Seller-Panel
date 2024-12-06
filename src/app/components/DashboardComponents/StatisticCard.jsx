"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StatisticCard = () => {
  // Dummy data for the area chart
  const chartData = [
    { month: "Jan", interactions: 50 },
    { month: "Feb", interactions: 100 },
    { month: "Mar", interactions: 120 },
    { month: "Apr", interactions: 150 },
    { month: "May", interactions: 200 },
    { month: "Jun", interactions: 250 },
    { month: "Jul", interactions: 300 },
  ];

  const [filter, setFilter] = useState("Monthly"); // Filter state

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="bg-white  rounded-lg shadow-md mt-8 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-black text-2xl">Total Interactions</h2>

        {/* Filter Dropdown */}
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md p-2 bg-white shadow-sm text-gray-700"
        >
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
        </select>
      </div>

      {/* Area Chart */}
      <div className="bg-white  rounded-lg">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fill: "black" }} />
            <YAxis tick={{ fill: "black" }} />
            <Tooltip />
            {/* Gradient background and line */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f0f4f8" stopOpacity={1} />
                <stop offset="100%" stopColor="transparent" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="interactions"
              stroke="black"
              fill="url(#gradient)"
              strokeWidth={2}
              dot={{ fill: "white", r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticCard;
