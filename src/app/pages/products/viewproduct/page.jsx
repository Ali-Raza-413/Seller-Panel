"use client";
import React, { useState } from 'react';
import BackButton from '@/app/components/BackButton';

const ViewProductDetail = () => {
  const [zoom, setZoom] = useState(1);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Function to handle zooming in and out
  const handleZoomIn = () => {
    setZoom(zoom + 0.2);
  };

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 0.2);
    }
  };

  // Function to toggle description expand/collapse
  const toggleDescription = () => {
    setIsDescriptionExpanded(prevState => !prevState);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <BackButton />
        <h1 className="text-2xl font-bold">Product Detail</h1>
      </div>

      <div className='flex space-x-10 mt-5'>
        <div className='flex flex-col space-y-2'>
          <img src="/p1.png" alt='t-shirt' width={100} height={99} />   
          <img src="/p1.png" alt='t-shirt' width={100} height={99} />  
          <img src="/p1.png" alt='t-shirt' width={100} height={99} />  
          <img src="/p1.png" alt='t-shirt' width={100} height={99} />  
        </div>  

        <div className='py-5'>
          {/* Main product image with zoom effect */}
          <div 
            className="relative overflow-hidden"
            style={{ width: '300px', height: '300px' }}
          >
            <img 
              src="/p1.png" 
              alt="Product" 
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease' }}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex gap-2 mt-2 justify-center">
            <button 
              className="bg-gray-900 text-white px-4 py-2 rounded"
              onClick={handleZoomIn}
            >
              +
            </button>
            <button 
              className="bg-gray-900 text-white px-4 py-2 rounded"
              onClick={handleZoomOut}
            >
              -
            </button>
          </div>
        </div>

        <div className='py-5'>
          <p className='text-gray-300'>T-Shirt</p>
          <h1 className='text-2xl font-semibold'>Men Black Slim Fit T-Shirt</h1>
          <p className='text-2xl font-semibold'>$80</p>
        </div>
      </div> 

      <div>
        <h1 className='text-lg font-bold'>Description</h1>
        <p className='max-w-xl'>
          Reflective design details. Fabric: Body: 100% recycled polyester. Lining: 79% polyester. 
          {isDescriptionExpanded ? (
            <>
              This product is designed to provide comfort and durability. The slim fit enhances the stylish design, making it a versatile piece for various occasions. 
              It's easy to care for, and the recycled fabric is environmentally friendly, ensuring a sustainable choice for your wardrobe. 
              <br /> <br />
              This item is part of our latest collection. Don't miss out on this trendy yet comfortable piece.
            </>
          ) : (
            <span> Fabric: Body: 100% recycled polyester. Lining: 79% polyester....</span>
          )}
        </p>
        <button 
          className="text-blue-600 mt-2"
          onClick={toggleDescription}
        >
          {isDescriptionExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>

      <div>
        <h1 className='text-lg font-bold'>Sizes</h1>
        <p>Available sizes: S, M, L, XL</p>
      </div>

      {/* Colors Section */}
      <div>
        <h1 className='text-lg font-bold'>Colors</h1>
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-400 rounded-full"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Edit and Delete Buttons */}
      <div className="mt-5 flex gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Edit
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ViewProductDetail;
