import React from "react";
import BackButton from "@/app/components/BackButton";
const plans = [
  {
    title: "Basic",
    image: "/p3.png",
    users: "05 User", // Replace with your image URL
    price: "$20",
    detail: "/1 Month",
    icon: "/c2.png",
    features: [
      "Daily Content Updates",
      "15 User",
      "Access to all design resources",
      "10 downloads per day",
      "every categories 5 download per day",
      "single assets 20 download per day",
      "User personal and commercial",
      " Unlimited support",
    ],
  },
  {
    title: "Standard",
    image: "/p2.png", // Replace with your image URL
    price: "$27.99",
    users: "15 Users", // Replace with your image URL
    detail: "/3 Month",
    icon: "/c1.png",
    features: [
      "Daily Content Updates",
      "15 User",
      "Access to all design resources",
      "10 downloads per day",
      "every categories 5 download per day",
      "single assets 20 download per day",
      "User personal and commercial",
      " Unlimited support",
    ],
  },
  {
    title: "Enterprise",
    image: "/p3.png", // Replace with your image URL
    price: "$27.99",
    users: "15 Users", // Replace with your image URL
    detail: "/5 Month",
    icon: "/c2.png",
    features: [
      "Daily Content Updates",
      "15 User",
      "Access to all design resources",
      "10 downloads per day",
      "every categories 5 download per day",
      "single assets 20 download per day",
      "User personal and commercial",
      " Unlimited support",
    ],
  },
  {
    title: "Platinum",
    image: "/p3.png", // Replace with your image URL
    price: "$27.99",
    users: "15 Users",
    icon: "/c2.png", // Replace with your image URL
    detail: "/1 Year",
    features: [
      "Daily Content Updates",
      "15 User",
      "Access to all design resources",
      "10 downloads per day",
      "every categories 5 download per day",
      "single assets 20 download per day",
      "User personal and commercial",
      " Unlimited support",
    ],
  },
];

export default function SubscriptionPlans() {
  return (
    <>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6 ">
          <BackButton />
          <h1 className="text-2xl font-bold ">Add New Product</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              index === 1
                ? "bg-black text-white border border-white"
                : "bg-white border border-black"
            }`}
          >
            {/* Image */}
            <img
              src={plan.image}
              alt={`${plan.title} Image`}
              className="w-10 h-10 object-cover rounded-md mb-4"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold">{plan.title}</h3>
            <p className="text-sm">{plan.users}</p>

            {/* Price */}
            <p className="text-xl font-semibold mt-3">{plan.price}</p>
            <p className="text-sm">{plan.detail}</p>
            <button
              className={`px-4 py-2 rounded-lg font-semibold mt-3 w-full text-center ${
                index === 1 ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              UPGRADE NOW{" "}
            </button>
            {/* Features */}
            <ul className="mb-6 space-y-2 mt-6 text-sm text-[#555964] ">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className={`flex items-center gap-2 ${
                    index === 1 ? "text-white" : "text-black"
                  }`}
                >
                  <img src={plan.icon} className="w-6 h-6" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}

            {/* Right-aligned Image for the Second Card */}
            {/* {index === 1 && (
            <div className="mt-6 flex justify-end">
              <img
                src="https://via.placeholder.com/150"
                alt="Extra Image"
                className="w-24 h-24 object-cover rounded-md"
              />
            </div>
          )} */}
          </div>
        ))}
      </div>
    </>
  );
}
