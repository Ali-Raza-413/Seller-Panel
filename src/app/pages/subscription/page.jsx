"use client";
import React from "react";
import BackButton from "@/app/components/BackButton";

const SubscriptionPlans = () => {
  const plans = [
    {
      title: "1 Month Plan",
      price: "$9.99",
      features: ["1 User Account", "Basic Support", "Access for 1 Month"],
    },
    {
      title: "3 Month Plan",
      price: "$27.99",
      features: ["5 User Accounts", "Priority Support", "Access for 3 Months"],
    },
    {
      title: "6 Month Plan",
      price: "$49.99",
      features: [
        "10 User Accounts",
        "Priority Support",
        "Access for 6 Months",
      ],
    },
    {
      title: "1 Year Plan",
      price: "$89.99",
      features: [
        "Unlimited User Accounts",
        "24/7 Support",
        "Access for 1 Year",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Title */}
      <div className="flex items-center gap-2 mb-6">
        <BackButton />
        <h2 className="text-3xl font-bold text-left">Subscription Plans</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Plan Title */}
            <h3 className="text-xl font-bold mb-4">{plan.title}</h3>

            {/* Price */}
            <p className="text-2xl font-semibold mb-4">{plan.price}</p>

            {/* Features List */}
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Subscribe Button */}
            <button className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
