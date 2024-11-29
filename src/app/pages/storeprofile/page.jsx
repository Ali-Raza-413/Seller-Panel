"use client";
import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";

const StoreProfile = () => {
  const [storeDetails] = useState({
    image: "/b2.png",
    name: "Tech Store",
    description: "Your one-stop shop for all things tech.",
  });

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+123456789",
    bio: "Passionate about technology and innovation.",
  });

  const [addressDetails, setAddressDetails] = useState({
    country: "USA",
    city: "San Francisco",
    state: "California",
    postalCode: "94105",
  });

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressDetailsChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      personalDetails,
      addressDetails,
    };

    console.log("Form Data Submitted:", data);

    // Add API call logic here if needed
    // Example: 
    // fetch('/api/store-profile', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4">
      {/* Store Details Card */}
      <div className="border rounded-lg p-4 flex justify-between items-center bg-white shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={storeDetails.image}
            alt="Store"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-bold">{storeDetails.name}</h2>
            <p className="text-sm text-gray-600">{storeDetails.description}</p>
          </div>
        </div>
      </div>

      {/* Personal Details Card */}
      <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <BackButton/>
        <h3 className="text-lg font-semibold">Personal Details</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">First Name</label>
            <input
              type="text"
              name="firstName"
              value={personalDetails.firstName}
              onChange={handlePersonalDetailsChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={personalDetails.lastName}
              onChange={handlePersonalDetailsChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={personalDetails.email}
              onChange={handlePersonalDetailsChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <input
              type="text"
              name="phone"
              value={personalDetails.phone}
              onChange={handlePersonalDetailsChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm text-gray-500">Bio</label>
          <textarea
            name="bio"
            value={personalDetails.bio}
            onChange={(e) =>
              setPersonalDetails((prev) => ({ ...prev, bio: e.target.value }))
            }
            className="w-full border rounded-md p-2 mt-1"
            rows={3}
          />
        </div>
      </div>

      {/* Address Details Card */}
      <div className="border rounded-lg p-4 bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Address Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">Country</label>
            <input
              type="text"
              name="country"
              value={addressDetails.country}
              onChange={handleAddressDetailsChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">City</label>
            <input
              type="text"
              name="city"
              value={addressDetails.city}
              onChange={handleAddressDetailsChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">State</label>
            <input
              type="text"
              name="state"
              value={addressDetails.state}
              onChange={handleAddressDetailsChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={addressDetails.postalCode}
              onChange={handleAddressDetailsChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default StoreProfile;
