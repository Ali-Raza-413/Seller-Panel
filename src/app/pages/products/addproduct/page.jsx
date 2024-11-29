"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    date: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.title || !formData.image || !formData.date) {
      setError("All fields are required.");
      return;
    }

    setError("");

    // Simulate API call
    console.log("Product Added:", formData);

    // Redirect to another page after submission
    router.push("/pages/products");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <div className="flex items-center gap-2 mb-6">
        <BackButton/>
        <h1 className="text-2xl font-bold ">Add New Product</h1>
        </div>
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block font-semibold mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter product title"
            />
          </div>

          {/* Image Field */}
          <div>
            <label htmlFor="image" className="block font-semibold mb-1">
              Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter image URL"
            />
          </div>

          {/* Date Field */}
          <div>
            <label htmlFor="date" className="block font-semibold mb-1">
              Date Created <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push("/pages/products")}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
