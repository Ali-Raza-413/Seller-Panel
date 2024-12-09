"use client";
import React, { useState } from "react";

// Modal Component to display only images with zoom functionality
const ViewAttachment = ({ isOpen, onClose, zoom, setZoom }) => {
  if (!isOpen) return null; // If the modal is closed, don't render anything

  // Static array of image URLs
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg", // Add your image URLs here
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-1/2">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Product Images</h2>
          <button
            onClick={onClose}
            className="text-black text-xl font-bold"
          >
            X
          </button>
        </div>
        <div className="flex gap-4 overflow-x-scroll">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`product-image-${index}`}
                className="w-32 h-32 object-cover rounded-md cursor-pointer"
                onClick={() => setZoom(zoom + 0.2)} // zoom in when clicked
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAttachment;
