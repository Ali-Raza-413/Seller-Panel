"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    sellerName: "",
    password: "",
    whatsappNumber: "",
    category: "",
    address: "",
    storeName: "",
    city: "",
    country: "",
    zipCode: "",
    about: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Food & Beverages",
    "Beauty & Health",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/auth/otp");
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Left Section (Form) */}
      <div className="flex-1 scrollbar-hide overflow-y-auto ">
        <div className="flex items-center justify-center px-4 py-8">
          <div className="space-y-8 bg-white p-8 rounded-xl shadow-lg w-[60%] my-8">
            <h1 className="text-lg text-center font-bold">Seller Registration</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields remain the same */}
              {/* Seller Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Seller Name</label>
                <input
                  type="text"
                  name="sellerName"
                  value={formData.sellerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium">WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              {/* Category Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Store Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Store Name</label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  rows="3"
                  required
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              {/* Country */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              {/* Zip Code */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              {/* Store Image */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Store Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-2 h-32 w-32 object-cover rounded-lg"
                  />
                )}
              </div>

              {/* About/Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium">About</label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  rows="4"
                  placeholder="Describe your store..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white text-[17px] font-normal px-6 py-3 rounded-md font-inter"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 relative flex justify-end h-screen">
        <div className="absolute left-20 maxw-[100%] h-full lg:max-h-full mx-auto inset-0 overflow-hidden">
          <img
            src="/img1.png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;