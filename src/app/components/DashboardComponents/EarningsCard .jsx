"use-client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EarningsCard = () => {
  // Data for the bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels (months)
    datasets: [
      {
        label: 'Monthly Earnings', // Label for the dataset
        data: [2500, 3000, 3500, 4000, 4500, 5000, 5500], // Y-axis data points (earnings for each month)
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light teal background color for the bars
        borderColor: 'rgba(75, 192, 192, 1)', // Darker teal for the bar border
        borderWidth: 1, // Border width for the bars
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw}`; // Format tooltip to show earnings value
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light grid lines on the x-axis
        },
        ticks: {
          color: 'black', // X-axis labels color (black)
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light grid lines on the y-axis
        },
        ticks: {
          color: 'black', // Y-axis labels color (black)
          callback: function(value) {
            return `$${value}`; // Format y-axis ticks as currency
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="font-semibold text-black mb-4 text-center font-sans text-2xl">Earnings</h2>
      <div className="text-green-700 mb-4 text-center font-sans for7-bold  p-2">
        <p>Total Earnings: $4,500</p>
        <p>Pending Payments: $1,200</p>
        <p>Monthly Earnings: $3,000</p>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default EarningsCard;
