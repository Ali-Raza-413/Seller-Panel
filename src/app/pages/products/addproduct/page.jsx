"use client";
import React, { useState, useRef } from "react";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    gender: "",
    colors: [], // Array to store selected colors
    size: "", // Store selected size
    description: "",
    summary: "",
    priceRange: "",
    image: null,
    brand: "",
    gender: "",
    link: "",
  });

  const [price, setPrice] = useState("$5000");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

  const handleSizeChange = (size) => {
    setSelectedSize((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };
  const colors = [
    "#313B5E",
    "#F9B931",
    "#FFFFFF",
    "#FF6C2F",
    "#22C55E",
    "#EF5F5F",
    "#4ECAC2",
    "#5D7186",
  ];
  // Handle the change in the range slider
  const handleRangeChange = (event) => {
    setPrice(event.target.value);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle icon click to open file input
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-6 ">
          <BackButton />
          <h1 className="text-2xl font-bold ">Add New Product</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Form Section */}
        <div className="md:col-span-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-9 gap-6"
          >
            {/* Name and Category */}
            <div className="md:col-span-3">
              <label htmlFor="name" className="block font-semibold mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg bg-[#F4F4F5]"
                placeholder="Enter product name"
              />
            </div>
            <div className="md:col-span-3">
              <label htmlFor="category" className="block font-semibold mb-1">
                Product Category <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg bg-[#F4F4F5]"
                placeholder="Enter product category"
              />
            </div>
            <div className="md:col-span-3">
              <label htmlFor="category" className="block font-semibold mb-1">
                Product Subcategory <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg bg-[#F4F4F5]"
                placeholder="Enter product subcategory"
              />
            </div>
            <div className="md:col-span-4">
              <label htmlFor="name" className="block font-semibold mb-1">
                Brand <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg bg-[#F4F4F5]"
                placeholder="Enter product name"
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="name" className="block font-semibold mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg bg-[#F4F4F5]"
                placeholder="Enter product name"
              />
            </div>
            <div className="md:col-span-8">
              <label htmlFor="name" className="block font-semibold mb-1">
                Website Link <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                className="w-[48%] px-4 py-2 border rounded-lg bg-[#F4F4F5]"
                placeholder="Enter product name"
              />
            </div>
            <div className="md:col-span-5">
              <h1 className="text-md font-bold">
                Colors <span className="text-red-500">*</span>
              </h1>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="flex flex-col items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      id={color}
                      value={color}
                      checked={selectedColors.includes(color)}
                      onChange={handleColorChange}
                      className="hidden"
                    />
                    <label htmlFor={color} className="cursor-pointer">
                      <div
                        className={`flex justify-center items-center h-10 w-10 rounded-lg ${
                          selectedColors.includes(color)
                            ? "bg-blue-300"
                            : "bg-blue-100"
                        }`}
                      >
                        <div
                          className="h-6 w-6 rounded-full"
                          style={{
                            backgroundColor: color,
                            backdropFilter: "blur(4px)",
                          }}
                        ></div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="md:col-span-4">
              <label htmlFor="size" className="block font-semibold mb-1">
                Size <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className={`cursor-pointer flex justify-center items-center h-10 w-10 border rounded-lg ${
                      selectedSize.includes(size)
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleSizeChange(size)}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        selectedSize.includes(size)
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Description */}
            <div className="md:col-span-8">
              <label htmlFor="description" className="block font-semibold mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg bg-[#F4F4F5]"
                rows="4"
                placeholder="Enter product description"
              ></textarea>
            </div>
            <div className="md:col-span-8">
              <h1 className="text-md font-semibold text-black">
                Pricing Details
              </h1>
            </div>
            <div className="md:col-span-3">
              <label
                htmlFor="default-range"
                className="block mb-2 text-md font-semibold text-black "
              >
                Price
              </label>
              <div className="flex justify-between text-md font-medium  text-black ">
                <span>$1000</span>
                <span>{price}</span>
              </div>
              <input
                id="default-range"
                type="range"
                value={price}
                min="$800"
                max="$5000"
                step="$50"
                onChange={handleRangeChange}
                className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer "
              />
            </div>
            <div className="md:col-span-5">
              <label
                htmlFor="discount-input"
                className="block mb-2 text-sm font-bold text-black"
              >
                Discount
              </label>
              <input
                id="discount-input"
                type="number"
                className="w-full h-10 mt-3 px-4 border border-gray-300 rounded-lg appearance-none bg-[#F4F4F5]"
              />
            </div>
            {/* Image Upload */}
            <div className="md:col-span-8">
              <h1 className="text-lg font-bold">Add Product Photo</h1>
            </div>
            <div className="md:col-span-8 border-2 border-dotted border-gray-300 rounded-lg h-[200px]">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelected}
                  ref={fileInputRef}
                  className="hidden"
                />
              </div>
              <div
                className="flex flex-col justify-center items-center py-10 "
                onClick={handleIconClick}
              >
                <Image
                  src="/b6.png"
                  alt="filesicon"
                  width={40}
                  height={40}
                  className="cursor-pointer"
                />
                <p className="text-[16px] text-[#AB9E7D] text-center mt-8">
                  <span className="font-bold text-black">
                    Drop your images here{" "}
                  </span>
                  , or click to browse
                </p>
                <p className="text-[16px] text-[#AB9E7D] text-center">
                  1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are
                  allowed
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-8 flex  gap-4 justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-white border border-black text-black shadow-md rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2  bg-black text-white rounded-lg shadow-md"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>

        {/* Preview Section */}
        <div className="md:col-span-3 md:col-start-9 flex flex-col space-y-4 ">
          <h2 className="text-lg font-bold mb-4">Preview</h2>
          {imagePreview && (
            <Image
              src={imagePreview}
              alt={"quotpreview"}
              width={500}
              height={288}
              className="w-full h-72 object-cover rounded-lg"
            />
          )}
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Category:</strong> {formData.category}
          </p>
          <p>
            <strong>Size:</strong> {formData.size}
          </p>
          <p>
            <strong>Shoe Colors:</strong> {formData.colors.join(", ")}
          </p>
          <p>
            <strong>Description:</strong> {formData.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
