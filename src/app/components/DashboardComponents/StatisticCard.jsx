"use-client";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StatisticCard = () => {
  // Data for the line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
    datasets: [
      {
        label: 'Resolved Issues', // Label for the dataset
        data: [50, 100, 120, 150, 200, 250, 300], // Y-axis data points (example data)
        fill: false, // No fill under the line
        borderColor: 'black', // Line color (black)
        tension: 0.1, // Smooth curve
        borderWidth: 2, // Line width
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'black', // Legend text color
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Issues: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light grid lines on the x-axis (black)
        },
        ticks: {
          color: 'black', // X-axis labels color (black)
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light grid lines on the y-axis (black)
        },
        ticks: {
          color: 'black', // Y-axis labels color (black)
        },
      },
    },
    elements: {
      point: {
        radius: 5, // Points on the line
        backgroundColor: 'black', // Point color (black)
      },
    },
    layout: {
      padding: 20, // Padding around the chart
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md  mt-8">
      <h2 className="font-semibold text-black mb-4 text-center font-sans text-2xl">Customer Interactions</h2>
      <div className="text-blue-600 mb-4 text-center font-sans font-bold">
        <p>Messages Received: 250</p>
        <p>Average Response Time: 2 hrs</p>
        <p>Resolved Issues: 120</p>
      </div>

      {/* Line Chart */}
      <div className="bg-white p-4 rounded-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default StatisticCard;
